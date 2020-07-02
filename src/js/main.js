import {
	getSVGs,
	Loading
} from './util/utilities';
import Cookie from './lib/Cookie';
import Tab from './lib/Tab';

// MAIN BANNER WEBSITE
const mainBanner = () => {
	let mainBanner = new Swiper('.MainSlider__Banners .swiper-container', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		centeredSlides: true,
		speed: 1000,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.MainSlider__Banners .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})
}

// ACTIVE HEADER WHEN SCROLL
const activeHeader = () => {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('header').addClass('scrolled');
		} else {
			$('header').removeClass('scrolled');
		}
	});
}

// INITALIZE SUBMENU
const initializeSubMenu = () => {
	const itemsBottomHeader = document.querySelectorAll(
		'.navBar__itemWrapper .navBar--item'
	);
	itemsBottomHeader.forEach((item) => {
		const sub = item.querySelector('.navBar--subMenu');
		if (sub) {
			item.classList.add('hasSub');
		}
	});
};

// SHOW MENU MOBILE
const showMenuMobile = () => {
	const btnMenuMobile = document.querySelector('.navBarHamburger__mainWrapper');
	const navBarMenuMobile = document.querySelector('.navBar__itemWrapper');
	// CHECK BUTTON
	if (btnMenuMobile) {
		btnMenuMobile.addEventListener('click', () => {
			btnMenuMobile.classList.toggle('active');
			navBarMenuMobile.classList.toggle('active');
		})
	}
}

// SHOW SEARCH
const searchOnMenu = () => {
	const blockSearch = document.querySelector('.search--form');
	const btnSearch = document.querySelector('.search--btn');
	const icon = document.querySelector('.search--btn img');
	// CHECK BUTTON
	if (blockSearch) {
		btnSearch.addEventListener('click', () => {
			btnSearch.classList.toggle('isClose');
			blockSearch.classList.toggle('active');
			if (btnSearch.classList.contains('isClose')) {
				icon.src = icon.getAttribute('data-src');
			} else {
				icon.src = icon.getAttribute('data-src-close');
			}
		})
	}
}

// INIT DATE PICKER
const initDatePicker = () => {
	$(".date-picker").each(function () {
		$(this).flatpickr({
			dateFormat: "Y-m-d H:i",
			time_24hr: true,
			disableMobile: "true"
		})
		// IF...ELSE
		// if ($(this).val().length > 0) {
		// 	$(this).flatpickr({
		// 		dateFormat: "Y-m-d H:i",
		// 		time_24hr: true,
		// 	})
		// } else {
		// 	$(this).flatpickr({
		// 		dateFormat: "Y-m-d H:i",
		// 		time_24hr: true,
		// 		defaultDate: new Date()
		// 	})
		// }
	})
}

const getMapContact = () => {
	$('.fancybox__mapIframe').fancybox({
		toolbar: false,
		smallBtn: true,
		iframe: {
			preload: false
		}
	})
}

// check banner => add class
const checkBanner = () => {
	let banner = document.querySelector("section.TitlePage__Banners");
	let slider_banner = document.querySelector("section.MainSlider__Banners");
	if ((!banner)) {
		// console.log("null");
	} else {
		document.querySelector("div.header__top").classList.add("template--2");
	}
}

document.addEventListener('DOMContentLoaded', () => {
	Cookie();
	getSVGs();
	Loading();
	// INIT DATE PICKER
	initDatePicker();
	// MAIN BANNER WEBSITE
	mainBanner();
	// INITALIZE SUBMENU
	initializeSubMenu();
	// SHOW MENU MOBILE
	showMenuMobile();
	// ACTIVE HEADER WHEN SCROLL
	activeHeader();
	// SHOW SEARCH
	searchOnMenu();
	//POPUP map contact
	getMapContact();
	// check banner
	checkBanner();
	// TAB
	const tabAbout = new Tab(".About .tab-container");
	const pageDefine = new Tab('.Define .tab-container');
});

document.addEventListener('scroll', () => {});



// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());