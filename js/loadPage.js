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

function loadImages() {
    $(".image-res-change").each((i, el) => {
        $(el).attr("src", (i, prev) => {
            return prev.replace("LowRes", "HighRes");
        });

        $(el).addClass("image-res-changed");
        $(el).removeClass("image-res-change");
    })

    $(".background-image-res-change").each((i, el) => {
        $(el).css("background-image", (i, prev) => {
            console.log(prev);
            
            return prev.replace("LowRes", "HighRes") + ", " + prev;
        });
        $(el).addClass("background-image-res-changed");
        $(el).removeClass("background-image-res-change");
    })
}