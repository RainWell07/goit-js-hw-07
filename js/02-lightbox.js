import { galleryItems } from './gallery-items.js';
// Change code below this line
const simpleContainer = document.querySelector(".gallery");
const simpleMarkup = galleryItems.map(
  ({ preview, description, original }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
);
simpleContainer.insertAdjacentHTML("beforeend", simpleMarkup.join(""));


const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});