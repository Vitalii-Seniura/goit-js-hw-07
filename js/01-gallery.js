import { galleryItems } from './gallery-items.js';
// Change code below this line

// import * as basicLightbox from 'basiclightbox'


const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems.map((
    { preview, description, original }) =>
    `<div class='gallery__item'>
    <a class="gallery__link" href="${original}">
    <img class='gallery__image' src='${preview}' 
    data-source = '${original} alt='${description}'/>
    </a></div>`).join("");

gallery.insertAdjacentHTML("beforeend", galleryItem);

gallery.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" 
        width="800" height="600">`);
    instance.show();
}



console.log(galleryItems);


