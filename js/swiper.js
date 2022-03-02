var Slider = document.querySelector(".idc-swiper"),
    mySwiper;

let InitSwiper = function (slider) {
    mySwiper = new Swiper(slider, {
        // Default parameters
        loop: false,
        direction: "horizontal",
        // slidesPerView: "auto",
        slidesPerView: "auto",
        spaceBetween: 20,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        touchReleaseOnEdges: true,
        allowTouchMove: true,
        grabCursor:true,
        /*    grabCursor: true, */
        watchOverflow: true,
        navigation: {
            nextEl: ".idc-swiper-button-next",
            prevEl: ".idc-swiper-button-prev",
        },
        pagination: {
            el: ".idc-swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                if (index + 1 < 10) {
                    return (
                        '<span class="' +
                        className +
                        '"> <span>' +
                        0 +
                        (index + 1) +
                        "</span> </span>"
                    );
                } else{
                    return (
                        '<span class="' +
                        className +
                        '"> <span>' +
                        (index + 1) +
                        "</span> </span>"
                    );
                }
            },
        },
    });
};

var mySwiper;
if (Slider) InitSwiper(Slider);
