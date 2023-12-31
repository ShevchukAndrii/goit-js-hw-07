import { galleryItems } from './gallery-items.js';
// Change code below this line
const createItem = ({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
};

const createItemForUl = galleryItems.map(createItem).join('');
const ulEl = document.querySelector(".gallery");
ulEl.insertAdjacentHTML('beforeend', createItemForUl);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250', 
})

