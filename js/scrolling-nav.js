$(document).ready(function() {

    var navOffSet=$("nav").offset().top;
    $(window).scroll(function(){
        var scrollPos=$(window).scrollTop();

        if(scrollPos >= navOffSet){
            $("nav").addClass("fixed");
        }else{
            $("nav").removeClass("fixed");
        }
    });

    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
});
