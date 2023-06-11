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
    imgEl.setAttribute("data-source", item.original);
    aEl.prepend(imgEl);
    array.push(liEl);
}
const ulEl = document.querySelector(".gallery");
ulEl.append(...array);
ulEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    const originalSize = e.target.dataset.source;
    console.log(originalSize);
    const instance = basicLightbox.create(`
    <img width= "700" src=${originalSize}>
`)
    instance.show();
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
        instance.close();
    }
})
})

