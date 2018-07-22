function init()
{
  checkCookiesDismissed();

  $(".btn-close-cookies-notification").click(function () {
    // Close the popup
    $(".cookies-notification").slideToggle({"duration": 400, "easing": "easeInOutCubic"});
    
    // Store a value to say that the user knows about cookies
    localStorage.setItem("dismissedCookies", "true");
  })

  $(".btn-toggle-menu").click(function() {

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

function checkCookiesDismissed() {
  if (localStorage.getItem("dismissedCookies") == "true") {
    $(".cookies-notification").hide();
  }
}