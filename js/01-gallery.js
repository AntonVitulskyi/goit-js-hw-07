import { galleryItems } from './gallery-items.js';

// ----------------------------------

const galleryBoxEl = document.querySelector('.gallery');


const makeGalleryCard = ({ preview, original, description } = {}) => {
   
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
}

const galleryStringArrayEl = galleryItems.map((el) => {
  return makeGalleryCard(el);
});

galleryBoxEl.insertAdjacentHTML('beforeend', galleryStringArrayEl.join(""));


const onImageClickOpenEl = event => {
    event.preventDefault() 
const {target} = event;
    if (target.nodeName !== 'IMG') {
        return;
} 
const urlPathToBanner = target.dataset.source;
 
const instance = basicLightbox.create(`
    <img src="${urlPathToBanner}" width="800" height="600">
`)
instance.show()

// ==========

const onEscKeyDown = event => {
    if (event.code === 'Escape') {
        instance.close();
    }
  };

document.addEventListener('keydown', onEscKeyDown);

}

galleryBoxEl.addEventListener ("click", onImageClickOpenEl)


// ==========================
