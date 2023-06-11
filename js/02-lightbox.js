import { galleryItems } from './gallery-items.js';
// Change code below this line
const array = [];
for (let i = 0; i < galleryItems.length; i += 1) {
    const item = galleryItems[i];
    const liEl = document.createElement('li');
    liEl.classList.add('gallery__item');
    const aEl = document.createElement('a');
    aEl.classList.add('gallery__link');
    aEl.href = item.original;
    liEl.prepend(aEl);
    const imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = item.preview;
    imgEl.alt = item.description;
    aEl.prepend(imgEl);
    array.push(liEl);
}
const ulEl = document.querySelector(".gallery");
ulEl.append(...array);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250', 
})

console.log(galleryItems);
