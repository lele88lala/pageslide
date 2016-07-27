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
var tmpPageHeight = 100
var flag = true
function touchHandler(e) {
    e.preventDefault();
    if (e.type == "touchstart") {
        xDown = e.touches[0].clientY;
    } else if (e.type == "touchmove" && flag) {
        var xUp = e.touches[0].clientY;
        xDiff = xDown - xUp;
        if (xDiff > 150) {
            if (window.inter == null && pageCount < 6) {
                flag = false
                window.inter = setInterval(function() {
                    if (parseInt(page.style.marginTop) > -pageCount * tmpPageHeight) {
                        page.style.marginTop = parseInt(page.style.marginTop) - 5 + 'vh'
                    }
                    else {
                        window.clearInterval(window.inter)
                        pageCount++
                        window.inter = null
                    }
                }, 15)
            }
        }
        else if (xDiff < -150) {
            if (window.inter == null && pageCount > 1) {
                flag = false
                window.inter = setInterval(function() {
                    if (parseInt(page.style.marginTop) < - (pageCount - 2) * tmpPageHeight) {
                        page.style.marginTop = parseInt(page.style.marginTop) + 5 + 'vh'
                    }
                    else {
                        window.clearInterval(window.inter)
                        pageCount--
                        window.inter = null
                    }

                }, 15)
            }
        }
    } else if (e.type == "touchend" || e.type == "touchcancel") {
        flag = true
    }
}