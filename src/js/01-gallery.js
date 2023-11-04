
import { galleryItems } from "./gallery-items.js";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItemsElement = document.querySelector(".gallery");
const photoMarkup = createGalleryItems(galleryItems);

function createGalleryItems(element) {
    return element.map((preview, original, description) => {
        return `
            <a href="${original}" class="gallery__item">
                <img src="${preview}" alt="${description}" class="gallery__image">
            </a>`
    }).join('');
}

galleryItemsElement.insertAdjacentElement("beforeend", photoMarkup);

const galleryHandler = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay : 250
});

galleryHandler.on("show.simplelightbox");