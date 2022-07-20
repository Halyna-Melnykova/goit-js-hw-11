import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { PixabayAPI } from './pixabay-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtnEl = document.querySelector('.load-more');
// кнопка прихована в html клас is-hidden
// екземпляр
const pixabayAPI = new PixabayAPI();

// simplelightbox
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

searchFormEl.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();
// console.log(event)
  pixabayAPI.q = event.currentTarget.elements['searchQuery'].value;
  pixabayAPI.page = 1;

  pixabayAPI
    .getPhotosByQuery()
    .then(responce => {
      console.log(responce);

      if (responce.data.hits.length === 0) {
        // очищаєм розмітку, зникає кнопка, форма ресет
        galleryEl.innerHTML = '';
        loadMoreBtnEl.classList.add('is-hidden');
        event.target.reset();
        return;
      }
    // розмітка + кнопка + lightbox
      galleryEl.innerHTML = createGalleryCards(responce.data.hits);
      loadMoreBtnEl.classList.remove('is-hidden');
      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    });
};
