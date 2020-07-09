import {
    getSVGs,
    Loading
} from './util/utilities';
import Cookie from './lib/Cookie';
import Tab from './lib/Tab';
import Swiper from 'swiper';

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

const sliderMembers = () => {
    let membersSlider = new Swiper('.ListMembers__Slider .swiper-container', {
        slidesPerView: 2,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 5,
            }
        },
        navigation: {
            nextEl: '.ListMembers__Slider .swiper-button-next',
            prevEl: '.ListMembers__Slider .swiper-button-prev',
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

const initializeWow = () => {
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
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
            preload: false
        }
    })
}

// check banner => add class
const checkBanner = () => {
	let banner = document.querySelector("section.TitlePage__Banners");
	let header = document.querySelectorAll('header');
	let heightHeader = header.offsetHeight;
	let main = document.querySelector('main');
	let mainBanner = document.querySelector(".MainSlider__Banners");
	if ((!banner)) {
		if (!mainBanner) {
			if (main) {
				main.style.paddingTop = heightHeader + 'px';
			}
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
    $('nav.navBar__itemWrapper .navBar--item a').each(function () {
        var getHref = $(this).attr('href');
        var href = getHref.split('/').pop();
        if (href === link) {
            $(this).addClass('active');
            $(this).parent().addClass('active');
        }
    });
    $('a.footer__site-maps--link').each(function () {
        var getHref = $(this).attr('href');
        var href = getHref.split('/').pop();
        if (href === link) {
            $(this).addClass('active');
            $(this).parent().addClass('active');
        }
    });
}

// CHANGE CONTENT TABLE MOBILE
const changeContentMobile = () => {
    const contentsMobile = document.querySelectorAll('[data-content--mobile]');
    const contentsPc = document.querySelectorAll('[data-content--pc]');
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
const showMoreContentPrograms = () => {
    const rowContent = document.querySelectorAll(".programsTableContent--item");
    const noBorder = document.querySelectorAll(".no-border");
    $(".programsTableContent--item").click(function (e) {
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

const activeHomeFormRegister = () => {
    const btn = document.querySelector('.homeFormRegister__btnAddMore');
    const cols = document.querySelectorAll('.homeFormRegister__wrapper .col-lg-12');
    const wrapper = document.querySelector('.homeFormRegister__wrapper');
    if (btn) {
        btn.addEventListener('click', () => {
            cols.forEach((item) => {
                item.classList.remove('col-lg-12');
                item.classList.add('col-lg-6');
                wrapper.classList.add('active');
            })
        })
    }
}

const addMember = () => {
	var btnAddMember = false;
	// Complete AddMember
	$('.btn--submitForm').click(() => {
		const inputs = document.querySelectorAll('.homeFormRegister__subForm input');
			if (inputs[0].value != '' && inputs[1].value != '' && inputs[0].value != 'null' && inputs[1].value != 'null') {
				btnAddMember = true;
				document.querySelectorAll(".memberRegister--name").forEach(item => {
					if(item.innerHTML == document.querySelector(".subForm--memberRegisterName").innerHTML) {
						item.setAttribute("data-name" , `${$('.homeFormRegister__subForm .input-for-name').val()}`)
						item.setAttribute("data-birthday" , `${$('.homeFormRegister__subForm .date-picker').val()}`)
					} else return;
				})
				$('.homeFormRegister__subForm').css('display', 'none');
				inputs.forEach(item => {
					item.value = ''
				})
			} else return;
		document.querySelectorAll('.memberRegister--name').forEach((item) => {
			item.parentNode.classList.remove('active');
		});
	});
	// Add Member
	const memberItem = document.querySelector('.memberRegister--item');
	const contentMember = document.querySelector('.memberRegister--name');
	const btnRegisterMember = document.querySelector('.homeFormRegister__btnAddMore .btn-icon');
	if (btnRegisterMember) {
		btnRegisterMember.addEventListener('click', () => {
			if (btnAddMember == true) {
				const HowmanyMember = document.querySelectorAll(
					'.memberRegister--item'
				).length;
				const tempItem = memberItem.outerHTML.replace(
					`${contentMember.innerHTML}`,
					`THÀNH VIÊN ${HowmanyMember + 1}`
				);
				const anothertemp = tempItem.replace("data-name" , "")
				const aanothertemp = anothertemp.replace("data-birthday" , "")
				$('.memberRegister--list').append(`${aanothertemp}`);
			}
			btnAddMember = false;
			deleteMember();
			EditMember();
			const contenMemberShow = document.querySelectorAll('.memberRegister--name')
			const tempnamelength = contenMemberShow.length
			const tempname = contenMemberShow[tempnamelength - 1].innerHTML
			contenMemberShow[tempnamelength - 1].parentNode.classList.add('active');
			document.querySelector(".subForm--memberRegisterName").innerHTML = tempname;
			document.querySelector('.homeFormRegister__subForm').style.display = 'block'
		});
	}
};

//EditMember
const EditMember = () => {
	document
		.querySelectorAll('.memberRegister--name')
		.forEach((item, index) => {
			item.parentNode.classList.remove('active');
			item.addEventListener('click', () => {
				document.querySelectorAll('.memberRegister--name')
					.forEach((item) => {
						item.parentNode.classList.remove('active');
					});
				item.parentNode.classList.add('active');
				document.querySelector('.homeFormRegister__subForm')
				let tempname= item.getAttribute("data-name")
				let tempbirthDay = item.getAttribute("data-birthday")
				$('.input-for-name').val(`${tempname}`);
				$('.homeFormRegister__subForm .date-picker').val(`${tempbirthDay}`);
				document.querySelector('.subForm--memberRegisterName').innerHTML = item.innerHTML;
				document.querySelector('.homeFormRegister__subForm').style.display = 'block';
			});
		});
};

const deleteMember = () => {


	$(".subForm--listBtn .btn-icon").
	click(() => {
		document.querySelectorAll(".memberRegister--item").forEach(item => {
			if (item.children[0].innerHTML == document.querySelector(".subForm--memberRegisterName").innerHTML) {
				document.querySelector(".subForm--memberRegisterName").innerHTML = ""
				item.remove();
				document.querySelector('.homeFormRegister__subForm').style.display = 'none';
			}
		})
		document.querySelectorAll(".memberRegister--name").forEach((item , index) => {
			item.innerHTML = `THÀNH VIÊN ${index + 1}`
		})

	})
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
	// MEMBERS SLIDER
	sliderMembers();
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
	changeContentMobile();
	// SHOW MORE CONTENT PROGRAMS
	showMoreContentPrograms();
	// ACTIVE HOME REGISTER
	activeHomeFormRegister();
	//Add Member
	addMember();
	
	// TAB
	const About = new Tab(".About .tab-container");
	const Define = new Tab('.Define .tab-container');
	const StepBuyOnline__1 = new Tab('.StepBuyOnline__1 .tab-container');
	const PopUp__UpdateForms = new Tab('.PopUp__UpdateForms .tab-container');
});

document.addEventListener('scroll', () => {});

window.addEventListener('resize', () => {
    // CHANGE CONTENT TABLE MOBILE
    changeContentMobile();
})

// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());