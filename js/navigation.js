$(document).ready(function () {

  alert("a");

  $(".btn-toggle-menu").click(function() {

    if($(".directory").is(".open")) {
      $(".directory-wrapper").slideUp({"duration": 600, "easing": "easeInOutCubic", "queue": false});
      $(".directory").animate({"top": "-10.9vw"}, {"duration": 600, "easing": "easeInOutCubic", "queue": false});
      // $(".directory").css("top", "-11vw");
      $(".btn-toggle-menu").css("transform", "scale(1, 1)");
    } else {
      $(".directory-wrapper").slideDown({"duration": 600, "easing": "easeInOutCubic", "queue": false});
      $(".directory").animate({"top": "0"}, {"duration": 600, "easing": "easeInOutCubic", "queue": false});
      // $(".directory").css("top", "0");
      $(".btn-toggle-menu").css("transform", "scale(1, -1)");
    }

    $(".directory").toggleClass("open");
  })
})
