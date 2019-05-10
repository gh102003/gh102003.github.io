function initNavigation() {
    $(".btn-toggle-menu").click(function () {
        $(".directory").toggleClass("open");

        if (!$(".directory").is(".open")) {
            $(".directory-wrapper").slideUp({
                "duration": 500,
                "easing": "easeInOutCubic",
                "queue": false
            });
            $(".directory").animate({
                "top": "-9vw"
            }, {
                "duration": 500,
                "easing": "easeInOutCubic",
                "queue": false
            });
            $(".btn-toggle-menu").css("transform", "rotateX(0deg)");
        } else {
            $(".directory-wrapper").slideDown({
                "duration": 500,
                "easing": "easeInOutCubic",
                "queue": false
            });
            $(".directory").animate({
                "top": "0"
            }, {
                "duration": 500,
                "easing": "easeInOutCubic",
                "queue": false
            });
            $(".btn-toggle-menu").css("transform", "rotateX(-180deg)");
        }
    })
}