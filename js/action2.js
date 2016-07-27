/**
 * Created by fenghuan on 7/25/16.
 */
document.body.addEventListener("touchstart", touchHandler, false)
document.body.addEventListener("touchmove", touchHandler, false)
document.body.addEventListener("touchend", touchHandler, false)

var xDown = 0;
var xUp = 0;
var pageCount = 1;
var js=0;
var page = document.querySelector('.page-wrapper')
if (page.style.marginTop == "") {
    page.style.marginTop = '0px';
}
var tmpPageHeight = document.querySelector('.page').offsetHeight
// var tmpPageHeight = 100
// alert(document.querySelector('.page').offsetHeight);
function touchHandler(e) {
    if (e.type == "touchstart") {
        xDown = e.touches[0].clientY;
    } else if (e.type == "touchmove") {
        var xUp = e.touches[0].clientY;
        xDiff = xDown - xUp;
        if (xDiff < 5) {
            document.querySelector(".page-wrapper").style.cssText = "transform:translate3d(0," + 1330 + "px,0)";

        }


    } else if (e.type == "touchend" || e.type == "touchcancel") {

    }
}