import $ from "jquery";

var stickersSlider = new Swiper('.stickers-slider', {
    slidesPerView: 1,
    spaceBetween: 55,
    preventClicks: false,
    preventClicksPropagation: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    scrollbar: {
        el: '.slider-scrollbar',
        draggable: true,
        hide: false,
        snapOnRelease: false,
        dragSize: 30
    },
    breakpoints: {
        1260: {
            slidesPerView: 5
        },
        1050: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 3
        },
        320: {
            slidesPerView: 1
        }
    },
    on: {
        init: function() {
            $('.js-current-slide').text(this.realIndex + 1);
            $('.js-all-slide').text(this.slides.length);
        },
        slideChange: function() {
            $('.js-current-slide').text(this.realIndex + 1);
        },
        setTranslate: function() {
            var progress = translateVal(this.scrollbar.dragEl);
            $('.slider-progress2').css('width', progress + 'px');
        },
        slideChangeTransitionEnd: function() {
            var progress = translateVal(this.scrollbar.dragEl);
            $('.slider-progress2').css('width', progress + 'px');
        }
    }
});

function translateVal(el) {
    var progress = el.style.transform.match(/translate3d\((.+)px,(.+)px,(.+)px\)/);
    return progress[1];
}
