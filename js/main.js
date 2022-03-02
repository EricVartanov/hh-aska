"use strict";

function banner_resize() {
    var banners = [].slice.call(document.querySelectorAll(".idc-bg-wrapper"));
    banners.forEach(function (elem) {
        return (elem.style.width = document.documentElement.clientWidth + "px");
    });
}
function slider_resize() {
    let container = document.querySelector(".idc-container");
    let swiper = document.querySelector(".idc-swiper");
    let swiperBlock = document.querySelector(".idc-swiper-block");
    let swiperWidth = container.clientWidth;
    var padding = (document.documentElement.clientWidth - swiperWidth) / 2;
    console.log(padding);
    swiper.style.marginLeft = -padding + "px";
    swiper.style.marginRight = -padding + "px";
    swiper.style.paddingLeft = padding + "px";
    swiper.style.paddingRight = padding + "px";
    mySwiper.update();
}

document.onreadystatechange = function () {
    var DocWidth = document.documentElement.clientWidth;
    window.addEventListener("resize", function () {
        banner_resize();
        slider_resize();
    });

    banner_resize();
    slider_resize();
};
