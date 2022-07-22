import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { PixabayAPI } from './pixabay-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');

const pixabayAPI = new PixabayAPI();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

async function loadMoreData(event) {
    pixabayAPI.page += 1;

  try {
    const response = await pixabayAPI.getPhotosByQuery();

    if (pixabayAPI.page * pixabayAPI.per_page > response.data.totalHits) {
      observer.unobserve(document.querySelector('.target-element'));
    }

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createGalleryCards(response.data.hits)
    );
  } catch (err) {
    console.log(err);
  }
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      loadMoreData();
    }
  },
  {
    root: null,
    rootMargin: '600px',
    threshold: 1,
  }
);

searchFormEl.addEventListener('submit', onSearchFormSubmit);

async function onSearchFormSubmit(event) {
    event.preventDefault();
    pixabayAPI.q = event.currentTarget.elements['searchQuery'].value;
    pixabayAPI.page = 1;
  
    try {
      const response = await pixabayAPI.getPhotosByQuery();

      if (response.data.hits.length === 0) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        galleryEl.innerHTML = '';
        event.target.reset();
        return;
      }
  
      Notiflix.Notify.success(
        `'Hooray! We found ${response.data.totalHits} images.'`
      );
  
      if (response.data.totalHits <= pixabayAPI.per_page) {
        galleryEl.innerHTML = createGalleryCards(response.data.hits);
        lightbox.refresh();
        return;
      }
    
      galleryEl.innerHTML = createGalleryCards(response.data.hits);
      lightbox.refresh();

      observer.observe(document.querySelector('.target-element'));

    } catch (err) {
      console.log(err);
    }
  }
  