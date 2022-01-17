$(function(){

    //slider
    $('.slider__box').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: '<button type="button" class="slider-prev"><img src="images/arrow-left-slider.png" alt=""></button>',
        nextArrow: '<button type="button" class="slider-next"><img src="images/arrow-right-slider.png" alt=""></button>',
        fade: true
    });

    //burger
    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active'); //btn click list appearance
        $('.menu-btn').toggleClass('menu-btn--active'); //btn click animation
    });


});