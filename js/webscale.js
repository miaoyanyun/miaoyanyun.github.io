/////////////////宽度全屏自适应设置////////////////////
/*
(function( viewWidth, resize ){

    var oWrap = document.getElementById('wrap');

    function showScale(time) {
        setTimeout(function(){
            var deviceWidth = document.documentElement.clientWidth,
                deviceHeight = document.documentElement.clientHeight,
                viewHeight = viewWidth*deviceHeight/deviceWidth,
                iScale = deviceWidth / viewWidth;

            oWrap.style.cssText = 'width: '+ viewWidth +'px;' +
            'height: '+ viewHeight +'px;' +
            'position: relative;' +
            'top: 50%;' +
            'left: 50%;' +
            'margin: -'+ (viewHeight/2) +'px 0 0 -'+ (viewWidth/2) +'px;' +
            '-webkit-transform: scale('+ iScale +');' +
            'transform: scale('+ iScale +');';
        }, typeof time == 'number' ? time : 100);
    }

    showScale(100);
    resize && window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", showScale, false);

})( 750, true );
*/


/**
 *视觉窗口设置
 */
;(function(){
    //判断设备，返回设备名称
    var equip = function(){
        var userAgentInfo = navigator.userAgent,
            Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");

        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) { return Agents[v]; };
        };
        return "pc";
    };

    //视觉宽度设置
    ;(function( viewWidth ){
        var viewport = document.querySelector("meta[name=viewport]"),
            winWidths = document.documentElement.clientWidth,
            densityDpi = viewWidth/winWidths,
            densityDpi = densityDpi > 1 ? 300*viewWidth*densityDpi/viewWidth : densityDpi,
            sEquip = equip();

        if ( sEquip === "iPhone" || sEquip === "iPad" || sEquip === "iPod" ) {
            viewport.setAttribute('content', 'width='+ viewWidth +', target-densityDpi='+densityDpi +', user-scalable=no');
        } else {
            viewport.setAttribute('content', 'width='+ viewWidth +', target-densityDpi='+densityDpi);
        };
    })( 750 );
})();