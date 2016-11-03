/**
 * Created by maksy on 10/31/2016.
 */
$(function() {
    //Simple filter controls
    $('.simplefilter li span').click(function() {
        $('.simplefilter li span').removeClass('active');
        $(this).addClass('active');
    });
});
$(function() {
    //Initialize filterizr with default options
    $('.filtr-container').filterizr();
});