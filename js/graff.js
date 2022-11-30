$(function () {

    // topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    });

    //mainSlide
    $('.mainSlide').slick({
        //slidesToShow: 2,
        // arrows : 2
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.main_dots li').eq(c).addClass('on').siblings().removeClass('on');
        $('.mainVisual .main_num').text(c + 1)
    });


    $('.main_dots li').on('click', function () {
        var idx = $(this).index();
        $('.mainSlide').slick('slickGoTo', idx)
    })

    $('.main_pro_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
    });

    $('.mainProduct .arrows .prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    })
    $('.mainProduct .arrows .next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    })






});