/**
 * Created by maksy on 10/30/2016.
 */
$(document).ready(function() {
    $("#lightSlider").lightSlider({
        item: 3,
        slideMove: 1,
        slideMargin: 10,
        mode: "slide",
        useCSS: true,
        speed: 400,
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 2000,
        keyPress: true,
        controls: true,
        adaptiveHeight:false,
        gallery: false,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch:true,
        enableDrag:false,
        freeMove:true,
        swipeThreshold: 40,
        pager: false,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                }
            }
        ]
    });
});