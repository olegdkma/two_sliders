import $ from 'jquery'
import 'slick-carousel';

$('.main-slider').slick({
    nextArrow: $('.main-slider__next'),
    prevArrow: $('.main-slider__prev'),
    infinite: true,
    draggable:false,
    fade: true,
    touchMove: false


})

$('.slider-slick').slick({
    infinite: true,
    draggable:false,
    fade: true,
    arrows: false,
    touchMove: false,
    respondTo: 'slider'

})

$('.navs-slider').slick({
    asNavFor: $('.slider-slick'),
    slidesToShow: 3,
    infinite: true,
    arrows: false,
    respondTo: 'slider',
    responsive: [
        {
            breakpoint: 2000,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,

            }
        },

    ]
})

