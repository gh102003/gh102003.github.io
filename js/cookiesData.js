var cookiesAccepted = false;
var timeBeforeCookiesAutoAccepted = 10000;

function initCookies() {
    if (checkCookiesDismissed()) {
        acceptCookies();
    } else {
        cookiesNotifcationSetup();
    }
}

function cookiesNotifcationSetup() {
    $(".btn-close-cookies-notification").click(function () {
        // Close the popup
        $(".cookies-notification").slideToggle({"duration": 400, "easing": "easeInOutCubic"});
        
        // Store a value to say that the user knows about cookies
        localStorage.setItem("dismissedCookies", "true");

        acceptCookies();
    })

    // After 10 seconds, automatically accept cookies
    setTimeout(acceptCookies, timeBeforeCookiesAutoAccepted);
}

function checkCookiesDismissed() {
    if (localStorage.getItem("dismissedCookies") == "true") {
        $(".cookies-notification").hide();
        return true;
    }
    return false;
}
  
function acceptCookies() {
    if (!cookiesAccepted) {
        cookiesAccepted = true;
        console.log("Cookies accepted");

        setupAnalytics();
        setupAdvertisments();
    }
}

function setupAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-117158349-1');
}

function setupAdvertisments() {
    (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-4432679655476297",
        enable_page_level_ads: true
      });
}