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
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
}

const initializeWow = () => {
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
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
                icon.src = icon.getAttribute('data-src-close');
            } else {
                icon.src = icon.getAttribute('data-src');
            }
        })
    }
}

// INIT DATE PICKER
const initDatePicker = () => {
    $(".date-picker").each(function() {
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
    });
}

const readPdfFancyBox = () => {
    $('a.fancybox__getPDF').fancybox({
        buttons: [
            'download',
            'close'
        ],
        thumbs: {
            autoStart: true,
            axis: 'x'
        },
        iframe: {
            width: 100,
            height: 100
        }
    })
}

// check banner => add class
const checkBanner = () => {
    let banner = document.querySelector("section.TitlePage__Banners");
    let heightHeader = document.querySelector('header').offsetHeight;
    let mainBanner = document.querySelector(".MainSlider__Banners");
    if ((!banner)) {
        if (!mainBanner) {
            document.querySelector('main').style.paddingTop = heightHeader + 'px';
        }
    } else {
        document.querySelector("div.header__top").classList.add("template--2");
    }
}

// ACTIVE LINK MENU
const activeLinkMenu = () => {
    var link = "";
    var url = window.location.pathname.split('/');
    if (url[(url.length - 1)] == "") {
        link = url[(url.length - 2)];
    } else {
        link = url[(url.length - 1)];
    }
    $('nav.navBar__itemWrapper .navBar--item a').each(function() {
        var getHref = $(this).attr('href');
        var href = getHref.split('/').pop();
        if (href === link) {
            $(this).addClass('active');
            $(this).parent().addClass('active');
        }
    });
    $('a.footer__site-maps--link').each(function() {
        var getHref = $(this).attr('href');
        var href = getHref.split('/').pop();
        if (href === link) {
            $(this).addClass('active');
            $(this).parent().addClass('active');
        }
    });
}

// CHANGE CONTENT TABLE MOBILE
const changeContentTableMobile = () => {
        const contentsMobile = document.querySelectorAll('.Programs [data-content--mobile]');
        const contentsPc = document.querySelectorAll('.Programs [data-content--pc]');
        const isChange = window.innerWidth < 1025;
        if (isChange == true) {
            contentsMobile.forEach((item) => {
                const valueContent = item.getAttribute('data-content--mobile');
                item.innerHTML = valueContent;
            })
        } else {
            contentsPc.forEach((item) => {
                const valueContent = item.getAttribute('data-content--pc');
                item.innerHTML = valueContent;
            })
        }
    }
    //slide toggle category
const slideCategoryPrograms = () => {
    const rowContent = document.querySelectorAll(".programsTableContent--item");
    const noBorder = document.querySelectorAll(".no-border");
    $(".programsTableContent--item").click(function(e) {
        e.preventDefault();
        if ($(this).hasClass("active")) {
            rowContent.forEach((item) => {
                // hd-20 => opacity 20%
                item.classList.remove("opacity--2");
            })
            $(this).removeClass("active");
            $(this).find(".show--more").css("display", "none");
            $(this).children(".row").eq(0).children(".col-9").show();
        } else {
            rowContent.forEach((item) => {
                // hd-20 => opacity 20%
                item.classList.remove("active");
                item.classList.add("opacity--2");
            })
            noBorder.forEach((item) => {
                    item.classList.remove("opacity--2");
                })
                //hidden all item list
            $(this).removeClass("opacity--2");
            // add class active => item => click 
            $(this).addClass("active");
            // show content category
            $(this).find(".show--more").css("display", "flex");
            // find chil col-9 add hidden
            $(this).children(".row").eq(0).children(".col-9").hide();
            // add border category
            // $(this).children(".row").eq(1).
        }
    });

}

document.addEventListener('DOMContentLoaded', () => {
    Cookie();
    getSVGs();
    Loading();
    // INITALIZE WOW
    initializeWow();
    // INIT DATE PICKER
    initDatePicker();
    // MAIN BANNER WEBSITE
    mainBanner();
    // INITALIZE SUBMENU
    initializeSubMenu();
    // SHOW MENU MOBILE
    showMenuMobile();
    //ACTIVE LINK MENU
    activeLinkMenu();
    // ACTIVE HEADER WHEN SCROLL
    activeHeader();
    // SHOW SEARCH
    searchOnMenu();
    //POPUP map contact
    getMapContact();
    // popup read pdf 
    readPdfFancyBox();
    // check banner
    checkBanner();
    // CHANGE CONTENT TABLE MOBILE
    changeContentTableMobile();
    slideCategoryPrograms();
    // TAB
    const tabAbout = new Tab(".About .tab-container");
    const pageDefine = new Tab('.Define .tab-container');
});

document.addEventListener('scroll', () => {});

window.addEventListener('resize', () => {
    // CHANGE CONTENT TABLE MOBILE
    changeContentTableMobile();
})

// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());