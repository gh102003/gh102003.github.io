var analyticsEnabled = false;

function init()
{
  if (checkCookiesDismissed()) {
    setupAnalytics();
  } else {
    cookiesNotifcationSetup();
  }

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

function cookiesNotifcationSetup() {
  $(".btn-close-cookies-notification").click(function () {
    // Close the popup
    $(".cookies-notification").slideToggle({"duration": 400, "easing": "easeInOutCubic"});
    
    // Store a value to say that the user knows about cookies
    localStorage.setItem("dismissedCookies", "true");

    setupAnalytics();
  })

  // After 8 seconds, enable analytics
  setTimeout(setupAnalytics, 8000);
}

function checkCookiesDismissed() {
  if (localStorage.getItem("dismissedCookies") == "true") {
    $(".cookies-notification").hide();
    return true;
  }
  return false;
}

function setupAnalytics() {
if (!analyticsEnabled) {
    analyticsEnabled = true;
    console.log("enabling analytics");

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-117158349-1');
  }
}