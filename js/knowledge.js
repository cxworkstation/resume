/**
 * Created by perfect on 2015/6/23.
 */
$(function() {
    $('.menu-opertor').click(function() {
        $('.menu-opertor').html('+');
        $(this).html('-');
        $('.menu-opertor').parent().siblings('.menu').removeClass('on').addClass('out');
        $(this).parent().next('.menu').removeClass('out').addClass('on');
    });

    $('.menu li').click(function() {
          $('.menu li').removeClass('click-menu');
          $(this).addClass('click-menu');
          $($(this).children()[0]).addClass('f-color');
    });
});
