function init(documentPath)
{
  // Init images
  console.log(documentPath);
  console.log(documentPath.lastIndexOf("gh102003.github.io"));
  var pathFromDomain = documentPath.substring(documentPath.lastIndexOf("gh102003.github.io") + 18 + 1);
  console.log(pathFromDomain);
  var prefixLength = pathFromDomain.split("/").length - 1;
  console.log(prefixLength);
  var prefix = "../".repeat(prefixLength);
  console.log(prefix);

  $(".btn-toggle-menu").attr("src", prefix.concat("res/img/icon/open_menu.png"));

  console.log($(".stylesheet-link").attr("href"));
  console.log(prefix.concat($(".stylesheet-link").attr("href")));

  for (link of $(".stylesheet-link")) {
    console.log(link);
    $(link).attr("href", prefix.concat($(link).attr("href")));
  }
  // $(".stylesheet-link").attr("href", prefix.concat($(this).attr("href")));



  $(".btn-toggle-menu").click(function() {

    $(".directory").toggleClass("open");

    if(!$(".directory").is(".open")) {
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
  })
}
