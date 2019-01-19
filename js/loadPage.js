function loadPage() {
    let headerPromise = new Promise(function(resolve, reject) {
        $(".header").load("/header.html", null, resolve);
    });

    let contentRightPromise = new Promise(function(resolve, reject) {
        $(".content.right").load("/content_right.html", null, resolve);
    });

    // Make sure everything has loaded
    return Promise.all([headerPromise, contentRightPromise]);
}