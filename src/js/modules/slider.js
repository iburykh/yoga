import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);
// import Swiper from 'swiper/bundle';


const slider = () => {
	const mainSlider = new Swiper('.swiper-container', {
		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},

		grabCursor: true,
		// autoHeight: true,
		slidesPerGroup: 1,
		initialSlide: 0,
		slidesPerView: 1,
		loop: true,
		speed: 800,
	});
};
export default slider;