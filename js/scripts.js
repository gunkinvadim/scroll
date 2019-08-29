$(function () {

    $('.menu a').on('click', function (e) {
        e.preventDefault();
        
        $('.menu a').removeClass('active').filter(this).addClass('active');
        
        var selector = $(this).attr('href'); /* #about - строка */
        var h = $(selector); /* jquery-элемент заголовка */
        
        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 400);
        
        
    });


    $(document).on('scroll', function() {
        var fromTop = $(this).scrollTop();
        var menuLink = $('.menu a');
        var h = $('h2');


        menuLink.each(function(i) {
            if (fromTop > h.eq(i).offset().top - 200) {
                menuLink.removeClass('active');
                $(this).addClass('active');
            }      
        });

        if (fromTop > 300) {
            $('.button-up').fadeIn(300);
        } else {
            $('.button-up').fadeOut(300);
        }
    });


    $('.button-up').on('click', function (e) {
        e.preventDefault();

        menuLink.removeClass('active');

        $('html, body').animate({
            scrollTop: 0
        }, 400);

    });
});
