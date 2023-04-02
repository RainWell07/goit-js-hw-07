import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery")
const markup = galleryItems.map(
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
container.insertAdjacentHTML("beforeend", markup.join(""));

container.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();
    const { target } = evt;
    if (target.nodeName !== "IMG") {
      return;
    }
    const originalImage = target.dataset.source;
   
    const instance = basicLightbox.create(`
    <img src="${originalImage}" alt="${target.alt}">
`);
    instance.show();
    console.log(target);
}



