/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/

// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

// Подключение базового набора функционала
import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.min.js';
import lgMediumZoom from 'lightgallery/plugins/mediumZoom/lg-medium-zoom.min.js';

// Базовые стили
import '@scss/libs/gallery/lightgallery.scss';
// Стили дополнений
import '@scss/libs/gallery/lg-thumbnail.scss';
// import '@scss/libs/gallery/lg-video.scss';
// import '@scss/libs/gallery/lg-autoplay.scss';
// import '@scss/libs/gallery/lg-zoom.scss';
// import '@scss/libs/gallery/lg-pager.scss';
// import '@scss/libs/gallery/lg-fullscreen.scss';
// import '@scss/libs/gallery/lg-share.scss';
// import '@scss/libs/gallery/lg-comments.scss';s
// import '@scss/libs/gallery/lg-rotate.scss';
import '@scss/libs/gallery/lg-medium-zoom.scss';
// import '@scss/libs/gallery/lg-relative-caption.scss';

// Все стили
// import '@scss/libs/gallery/lightgallery-bundle.scss';

// Запуск
const galleriesDoc = document.querySelectorAll('[data-gallery-doc]');
if (galleriesDoc.length) {
   let galleyItems = [];
   galleriesDoc.forEach((gallery) => {
      galleyItems.push({
         gallery,
         galleryClass: lightGallery(gallery, {
            plugins: [lgMediumZoom],
            licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
            speed: 500,
         }),
      });
   });
   // Добавляем в объект модулей
   flsModules.gallery = galleyItems;
}
const galleriesGal = document.querySelectorAll('[data-gallery-photo]');
if (galleriesGal.length) {
   let galleyItems = [];
   galleriesGal.forEach((gallery) => {
      galleyItems.push({
         gallery,
         galleryClass: lightGallery(gallery, {
            plugins: [lgThumbnail],
            licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
            speed: 500,
         }),
      });
   });
   // Добавляем в объект модулей
   flsModules.gallery = galleyItems;
}
