$(function () {


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


