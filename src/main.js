import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImage } from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';

let searchValue = '';
let page = 1;
let totalHits = 0;
let loadedImages = 0;


const formEl = document.querySelector('.form');
const listEL = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const divEl = document.querySelector('.loader');

formEl.addEventListener('submit', async event => {
  event.preventDefault();
  listEL.innerHTML = '';
  searchValue = event.target.elements.value.value;
  page = 1;

  if (searchValue) {
    loadMoreBtn.classList.add('is-hidden');
    divEl.classList.remove('is-hidden');
    try {
      const data = await getImage(searchValue, page);
      totalHits = data.totalHits;
      loadedImages = 0;
      afterFetch(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    iziToast.error({
      title: 'Error',
      message: 'The search field is empty. Please try again!',
    });
  }
  formEl.reset();
});

loadMoreBtn.addEventListener('click', async () => {
  loadMoreBtn.disabled = true;
  divEl.classList.remove('is-hidden');
  try {
    const data = await getImage(searchValue, ++page);
    afterFetch(data);
  } catch (error) {
    console.log(error);
  }
  loadMoreBtn.disabled = false;
});

let isFirstRequest = true;

function afterFetch(data) {
  loadedImages += data.hits.length;
  if (!data.hits.length) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  } else if (loadedImages >= totalHits) {
    loadMoreBtn.classList.add('is-hidden');
    iziToast.info({
      title: 'Info',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    loadMoreBtn.classList.remove('is-hidden');
  }

  const markup = imagesTemplate(data.hits);
  listEL.insertAdjacentHTML('beforeend', markup);
  divEl.classList.add('is-hidden');

 
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const cardHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}