function initNavigation()
{
  console.log($(".btn-toggle-menu"));
  $(".btn-toggle-menu").click(function() {
    console.log("clcik");
    

    $(".directory").toggleClass("open");

    if(!$(".directory").is(".open")) {
      $(".directory-wrapper").slideUp({"duration": 600, "easing": "easeInOutCubic", "queue": false});
      $(".directory").animate({"top": "-10.9vw"}, {"duration": 600, "easing": "easeInOutCubic", "queue": false});
      $(".btn-toggle-menu").css("transform", "scale(1, 1)");
    } else {
      $(".directory-wrapper").slideDown({"duration": 600, "easing": "easeInOutCubic", "queue": false});
      $(".directory").animate({"top": "0"}, {"duration": 600, "easing": "easeInOutCubic", "queue": false});
      $(".btn-toggle-menu").css("transform", "scale(1, -1)");
    }
  })
}