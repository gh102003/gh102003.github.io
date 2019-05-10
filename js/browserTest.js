function browserTest() {
    var ua = window.navigator.userAgent;
    
    if (ua.indexOf("MSIE") > 0 || ua.indexOf("Trident") > 0) {
        console.log("Bad browser");
        
        alert("Internet Explorer is not supported. If you are using Windows 10, you can use Microsoft Edge, but otherwise you must use Google Chrome or Mozilla Firefox");
    }
}