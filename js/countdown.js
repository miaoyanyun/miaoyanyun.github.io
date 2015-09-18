/**
 * Created by LinJe on 2015/9/11.
 */
var countdown = (function( $ ) {

    //倒计时功能
    var oBox = $('.countdown .barbox'),
        oNum = oBox.find('img.num'),
        timer = null, timerStop = null,
        iNow = 10;

    function start( callBack ) {
        stop();
        timer = setInterval(function() {
            if ( iNow > 0 ) {
                iNow --;
                oNum.attr('src', '../img/common/'+ iNow +'.png');
                !oBox.hasClass('active') && oBox.addClass('active');
            } else {
                iNow = 10;
                clearInterval(timer);
                callBack && callBack();
            }
        }, 1000);
    }

    function stop() {
        clearInterval(timer);
        iNow = 10;
        oBox.removeClass('active');
        oNum.attr('src', '../img/common/10.png');
    }

//点击到下一页时，清除计数器
        var oPage2 = $('.page2'),
            oBtn1 = oPage2.find('img.btn1'),
            oBtn2 = oPage2.find('img.btn2');
        oBtn1.on('tap', function(){
            clearInterval(timer);
        });
        oBtn2.on('tap', function(){
            clearInterval(timer);
        });
//清除结束
    return {
        'start': start,
        'stop': function() {
            clearTimeout(timerStop);
            timerStop =  setTimeout(stop, 500);
        }
    };




})( Zepto );