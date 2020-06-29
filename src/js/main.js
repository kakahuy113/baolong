import {
    getSVGs,
    Loading
} from './util/utilities';
import Cookie from './lib/Cookie';

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

const showMenuMobile = () => {
    const btn = document.querySelector('.navBarHamburger__mainWrapper');
    const menu = document.querySelector('.navBar__itemWrapper');
    if (btn) {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
        })
    }
}

const searchOnMenu = () => {
    // $(".search--input").hide();
    $(".search .btn").click(function(e) {
        e.preventDefault();
        $(".search--input").toggleClass('active--search');
        if ($(".search--input").hasClass("active--search")) {
            $(".search .btn img").attr("src", "./assets/icons/close.svg");
            $(".search .btn img").attr("data-src", "./assets/icons/close.svg");
        } else {
            $(".search .btn img").attr("src", "./assets/icons/search.svg");
            $(".search .btn img").attr("data-src", "./assets/icons/search.svg");
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    Cookie();
    getSVGs();
    Loading();
    // MAIN BANNER WEBSITE
    mainBanner();
    // INITALIZE SUBMENU
    initializeSubMenu();
    // SHOW MENU MOBILE
    showMenuMobile();
    searchOnMenu();
});

document.addEventListener('DOMContentLoaded', () => {});



// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());