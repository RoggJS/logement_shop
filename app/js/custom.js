$(function () {


//1 фото slider
    $('.header-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });



    $('.menu__icon').on('click', function () {
        $(this).closest('.menu__icon').toggleClass('active');
        $('.header-menu').toggleClass('active');
        $('.header-menu').slideToggle('slow', function () {
            if ($('.header-menu').css('display') === 'none') {
                $('.header-menu').removeAttr('style');
            }
        });
    });



    $('#popup-contact-from').on('submit', function () {

        $('.popup-form-container').hide(200);
        $('.popup-form-success').show(200);

    })

});


