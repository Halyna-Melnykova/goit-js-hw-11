'use strict';

import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '28726852-6b30a90b988376f127c6dadc1';

  constructor() {
    this.page = 1;
    this.q = null;
    this.per_page = 40;
  }

  getPhotosByQuery() {
    return axios.get(`${this.#BASE_URL}`, {
      params: {
        key: this.#API_KEY,
        q: this.q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: this.per_page,
      },
    });
  }
}