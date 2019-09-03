$(function () { 

    var menuLink = $('.menu a');
    var btnUp = $('.button-up');


    menuLink.on('click', function (e) {
        e.preventDefault();
        
        menuLink.removeClass('active').filter(this).addClass('active');
        
        var selector = $(this).attr('href'); /* #about - строка */
        var h = $(selector); /* jquery-элемент заголовка */
        
        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 400); 
    });


    function scroll() {
        var fromTop = $(this).scrollTop();
        var h = $('h2');

        menuLink.each(function(i) {
            if (fromTop > h.eq(i).offset().top - 200) {
                menuLink.removeClass('active');
                $(this).addClass('active');
            }      
        });

        if (fromTop > 300) {
            btnUp.fadeIn(300);
        } else {
            btnUp.fadeOut(300);
        }
    }
    scroll();


    $(document).on('scroll', function() {
        scroll();
    });


    btnUp.on('click', function (e) {
        e.preventDefault();

        menuLink.removeClass('active');

        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });
});