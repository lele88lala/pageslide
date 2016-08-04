/**
 * Created by fenghuan on 8/4/16.
 */
/**
 * Created by fenghuan on 7/25/16.
 */
document.body.addEventListener("touchstart", touchHandler, false)
document.body.addEventListener("touchmove", touchHandler, false)
document.body.addEventListener("touchend", touchHandler, false)

var xDown = 0;
var xUp = 0;
var pageCount = 0;
var js=0;
var page = document.querySelector('.wrapper')
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
            //alert(pageCount+'向上');
            if ( pageCount < 5) {
                flag = false
                //window.inter = setInterval(function() {
                //    if (parseInt(page.style.marginTop) > -pageCount * tmpPageHeight) {
                //        page.style.marginTop = parseInt(page.style.marginTop) - 5 + 'vh'
                //    }
                //    else {
                //        window.clearInterval(window.inter)
                //        pageCount++
                //        window.inter = null
                //    }
                //}, 15)
                pageCount++
                page.style.cssText = "-webkit-transform:translate3d(0,-" + 100*pageCount + "vh,0)";



            }
        }
        else if (xDiff < -150) {
            //alert(pageCount+"向下");
            alert(2);
            if (pageCount >0) {
                flag = false
                //window.inter = setInterval(function() {
                //    if (parseInt(page.style.marginTop) < - (pageCount - 2) * tmpPageHeight) {
                //        page.style.marginTop = parseInt(page.style.marginTop) + 5 + 'vh'
                //    }
                //    else {
                //        window.clearInterval(window.inter)
                //        pageCount--
                //        window.inter = null
                //    }
                //
                //}, 15)
                page.style.cssText = "-webkit-transform:translate3d(0,-" + (pageCount-1)*100+ "vh,0)";
                pageCount--;
            }

        }
    } else if (e.type == "touchend" || e.type == "touchcancel") {
        flag = true
    }
}