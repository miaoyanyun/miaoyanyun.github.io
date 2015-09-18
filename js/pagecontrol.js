/**
 * Created by LinJe on 2015/8/27.
 *
 */

var pageControl = (function( $ ){
    var oPageWrap = $('.pagewrap'),
        aPage = oPageWrap.find('.page'),
        iLen = aPage.length,
        iNow = 0,
        disAbleSwipe = false;

    var slideFn = function( num ) {
        if ( !disAbleSwipe ) {
            var dis = '-'+ num*$(window).height() +'px';

            aPage.removeClass('active').eq(num).addClass('active');
            oPageWrap.css('top', dis);
            iNow = num;
        }
    };
    //传参
    var olist_page2 = $('.page2'),
        oVlayer = $('.fenxiang_layer');
        orotateP1 = olist_page2.find('.rotateP1'),
        orotateP2 = olist_page2.find('.rotateP2'),
        orotateP3 = olist_page2.find('.rotateP3'),
        orotateP4 = olist_page2.find('.rotateP4');
	//var canstr='';
    orotateP1.on('click',function(){
	//wxshare('霸气');
    });
    orotateP2.on('click',function(){
	//wxshare('毒舌');
    });
    orotateP3.on('click',function(){
	//wxshare('高冷');
    });
    orotateP4.on('click',function(){
	//wxshare('暖男');
    });

    //禁止滑动弹层上下翻页
    function forbidSwipe() {
        return false;
    }
    oVlayer.on('swipeUp', forbidSwipe);
    oVlayer.on('swipeDown', forbidSwipe);


    oPageWrap.on('touchmove', function(ev){
        ev.preventDefault();
    });

    //swipe up
    oPageWrap.on('swipeUp', function(){
        if ( iNow < iLen-1 ) {
            iNow ++;
            slideFn(iNow);
        }
    });

    //swipe down
    oPageWrap.on('swipeDown', function(){
        if ( iNow > 0 ) {
            iNow --;
            slideFn(iNow);
        }
    });

    return {
        'swipeTo': function(index) {
            slideFn(index);
        },
        'disable': function(bVal) {
            disAbleSwipe = bVal;
        },
        'getDisable': function() {
            return disAbleSwipe;
        },
        'getInow': function() {
            return iNow;
        }
    };



})( Zepto );