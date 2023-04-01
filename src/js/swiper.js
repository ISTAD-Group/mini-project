// import Swiper JS
import {Swiper, Autoplay, Pagination} from 'swiper';
// import Swiper styles
import 'swiper/swiper.css';

Swiper.use([Autoplay, Pagination]);
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 5,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
    }
});