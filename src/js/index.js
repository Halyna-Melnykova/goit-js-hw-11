import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { PixabayAPI } from './pixabay-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtnEl = document.querySelector('.load-more');
// кнопка прихована в html клас is-hidden
// екземпляр
const pixabayAPI = new PixabayAPI();

// simplelightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

async function onSearchFormSubmit(event) {
  event.preventDefault();
  // console.log(event)
  pixabayAPI.q = event.currentTarget.elements['searchQuery'].value;
  pixabayAPI.page = 1;

  try {
    const response = await pixabayAPI.getPhotosByQuery();
    // console.log(response)
    // Якщо бекенд повертає порожній масив
    if (response.data.hits.length === 0) {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      // очищаєм розмітку, зникає кнопка, форма ресет
      galleryEl.innerHTML = '';
      loadMoreBtnEl.classList.add('is-hidden');
      event.target.reset();
      return;
    }

    Notiflix.Notify.success(
      `'Hooray! We found ${response.data.totalHits} images.'`
    );

    // якщо одна сторінка, порівнюєм к-ть елементів з 40
    if (response.data.totalHits <= pixabayAPI.per_page) {
      galleryEl.innerHTML = createGalleryCards(response.data.hits);
      loadMoreBtnEl.classList.add('is-hidden');
      lightbox.refresh();
      scrollPage();
      return;
    }
    // розмітка + кнопка + lightbox
    galleryEl.innerHTML = createGalleryCards(response.data.hits);
    loadMoreBtnEl.classList.remove('is-hidden');
    lightbox.refresh();
    scrollPage();
  } catch (err) {
    console.log(err);
  }
}

async function onLoadMoreBtnClick(event) {
  pixabayAPI.page += 1;

  try {
    const response = await pixabayAPI.getPhotosByQuery();
    //  сховати кнопку коли дійшли до кінця колекції
    if (pixabayAPI.page * pixabayAPI.per_page > response.data.totalHits) {
      loadMoreBtnEl.classList.add('is-hidden');
      Notiflix.Notify.info(
        'We are sorry, but you have reached the end of search results.'
      );
    } else {
      loadMoreBtnEl.classList.remove('is-hidden');
    }

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createGalleryCards(response.data.hits)
    );
    lightbox.refresh();
    scrollPage();

  } catch (err) {
    console.log(err);
  }
}
// Прокручування сторінки
function scrollPage() {
const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: "smooth",
});
}