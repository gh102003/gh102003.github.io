function loadPage() {
    let headerPromise = new Promise(function(resolve, reject) {
        $("header").load("/header.html", null, resolve);
    });

    let contentRightPromise = new Promise(function(resolve, reject) {
        let contentRight = $(".content.right")
        if (contentRight.length > 0) {
            contentRight.load("/content_right.html", null, resolve);
        } else {
            resolve();
        }
    });

    // Make sure everything has loaded
    return Promise.all([headerPromise, contentRightPromise]);
}

function loadImages() {
    $(".image-res-change").each((i, el) => {
        let lowResPath = $(el).css("background-image").slice(5, -2); // Remove 'url("")'
        let highResPath = lowResPath.replace("LowRes", "HighRes");

        $(el).attr("src", highResPath);

        $(el).addClass("image-res-changed");
        $(el).removeClass("image-res-change");
    })

    $(".background-image-res-change").each((i, el) => {
        $(el).css("background-image", (i, prev) => {
            return prev.replace("LowRes", "HighRes") + ", " + prev;
        });
        $(el).addClass("background-image-res-changed");
        $(el).removeClass("background-image-res-change");
    })
}