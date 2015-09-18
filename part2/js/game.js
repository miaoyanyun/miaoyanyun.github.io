/**
 * Created by LinJe on 2015/8/25.
 */
//设定倒数秒数
    /*
var
    oendtime = document.getElementById('endtime'),
    t = 14;
//显示倒数秒数
function showTime(){
    t -= 1;
    var imgArr=["../img/common/0.png",
        "../img/common/1.png",
        "../img/common/2.png",
        "../img/common/3.png",
        "../img/common/4.png",
        "../img/common/5.png",
        "../img/common/6.png",
        "../img/common/7.png",
        "../img/common/8.png",
        "../img/common/9.png",
        "../img/common/10.png",
        "../img/common/11.png",
        "../img/common/12.png",
        "../img/common/13.png"];
    var oV1 = $('.page3 .v1'),
        currentImage=imgArr[t-1];
    oendtime.style.backgroundImage="url("+currentImage+")";
   // document.getElementById('endtime').innerHTML= t;
    if(t==0){
        oV1.versionPage();
    }
    else{
        //每秒执行一次,showTime()
        setTimeout("showTime()",1000);
    }

}
//执行showTime()
//showTime();
*/
(function( $ ){


    //loading控制
    ($.loadImg = function(aSrc, loadFn, callBack) {
        var index = 0,
            iLen = aSrc.length;

        function load() {
            index ++;
            loadFn && loadFn( Math.floor(index/iLen*100) );
            index == iLen && callBack && callBack();
        }

        for ( var i = 0; i < iLen; i ++ ) {
            var img = new Image();

            img.onload = load;
            img.onerror = load;
            img.src = aSrc[i];
        }
    });
    (function(){

        var oMark = document.getElementById('loading');
        var oB = oMark.getElementsByTagName('p')[0];
        var loadBar = oMark.getElementsByTagName('span')[0];


        //加载第一页
        var page1ImgSrc = (function(){
            var arr = [];

            $('img').each(function(){
                arr.push( $(this).attr('src') );
            });
            return arr;
        })();

       /* page1ImgSrc = page1ImgSrc.concat([
            "../img/common/0.png",
            "../img/common/1.png",
            "../img/common/2.png",
            "../img/common/3.png",
            "../img/common/4.png",
            "../img/common/5.png",
            "../img/common/6.png",
            "../img/common/7.png",
            "../img/common/8.png",
            "../img/common/9.png",
            "../img/common/10.png"
        ]);
        */

        $.loadImg(page1ImgSrc, function(percent){
            oB.innerHTML = percent+'%';
            loadBar.style.height =  percent+'%';
            //  console.log('当前百分比：' + percent);
        }, function(){
            // oMark.st(oMark,{opacity:0},400,'def',function(){
            oMark.style.display = 'none';
            $('.page1').addClass('active');
            //scrollToTar.toBtm();
            // console.log('加载完毕！');
        });

    })();
    pageControl.swipeTo(0); //init start index 0

    //box handle
    (function(){

        var oPageWrap = $('.pagewrap'),
            oGameBox = $('.gamebox');

        //oGameBox.eq(0).addClass('active');
        oPageWrap.on('webkitTransitionEnd transitionend', function(){
            var iNow = pageControl.getInow();

            oGameBox.removeClass('active')
            if ( iNow != 2 ) {
                var index = iNow;
                if ( iNow > 2 ) {
                    index --;
                }
                oGameBox.eq(index).addClass('active');
            }
        });

    })();

    //page1
    (function(){
        var opage1 = $('.page1');
        var ogamewrap = opage1.find('.gamewrap');
        var oArrow = $('.page1 .gamewrap span');

        //click arrow to next page
        oArrow.on('tap', function(){
            pageControl.swipeTo(1); //init start index 0
        });
        opage1.on('swipeUp',function(){
            ogamewrap.removeClass('active');
           // countdown.start(page2Box.autoNext);//倒计时的包js
        })
    })();

    //page2
    var page2Box = (function(){

        var oPage2 = $('.page2'),
            oBtn1 = oPage2.find('img.btn1'),
            oBtn2 = oPage2.find('img.btn2'),
            oV1 = $('.page3 .v1'),
            oV2 = $('.page3 .v2');

        $.fn.versionPage = function() {
            $(this).addClass('active');
            pageControl.getDisable() && pageControl.disable(false);
            pageControl.swipeTo(2);
        };

        //disable page2 swipeUp
        oPage2.on('swipeUp', function(){
            !pageControl.getDisable() && pageControl.disable(true);
        });

        //able page2 swipeDown
        oPage2.on('swipeDown', function(){
            pageControl.getDisable() && !pageControl.disable(false) && pageControl.swipeTo(0);
            //countdown.stop();
        });

        //select version to next page
        oBtn1.on('tap', function(){
            oV1.versionPage();
        });
        oBtn2.on('tap', function(){
            oV2.versionPage();
        });

        return {
            'autoNext': function() {
                oV1.versionPage();
            }
        }

    })();

    //page3
    (function(){

        var oPage3 = $('.page3'),
            aV = oPage3.find('.v'),
            aBtnToVideo = oPage3.find('img.btn'),
            timer = null;

        function clearVersion() {
            clearTimeout(timer);
            timer = setTimeout(function(){
                aV.removeClass('active');
            }, 500);
        }

        oPage3.on('swipeDown', function(){
            clearVersion();
            //countdown.start(page2Box.autoNext);
        });

        aBtnToVideo.on('tap', function(){
            pageControl.swipeTo(3);
        });

    })();

    //page4
    (function(){

        var oVideoWrap = $('.videowrap'),
            oVlayer = $('.share_layer'),
            oPage4 = $('.page4'),
            oVideosSreen = $('#videosSreen').get(0),
            tanck = oPage4.find('div.share_layer'),
            obtn1 = tanck.find('.btn1'),
            obtn2 = tanck.find('.btn2'),
            oPage5 = $('.page5');
        var ovideo = document.getElementById('videosSreen'),
            isIos = /iPhone|iPad|iPod/.test(navigator.userAgent);

        oPage4.on('swipeDown', function(){
            !oVideosSreen.paused && oVideosSreen.pause();


    });
      /*  if(oVideosSreen.played){
            if(oVideosSreen.paused) {
                tanck.addClass("active");
            }else{
               // oVideosSreen.play();
            }
        }*/
        //获取视频暂停
        $.fn.versionPage5 = function() {
            $(this).addClass('active');
            pageControl.getDisable() && pageControl.disable(false);
            pageControl.swipeTo(4);
        };


        //music
        var oanniu = $('.anniu');
        var audio = document.createElement('audio');
        audio.src = '../video/music.mp3';//这里放音乐的地址
        document.body.appendChild(audio);
        audio.autoplay='autoplay';
        oanniu.on('click',function(){
            var i=0;
            if(!oanniu.is(".open")){
                oanniu.removeClass('close');
                oanniu.addClass('open');
                audio.play();
            }
            else{
                oanniu.removeClass('open');
                oanniu.addClass('close');
                audio.pause();
            }
        });
        ovideo.addEventListener('play',function(){
            oanniu.removeClass('open');
            oanniu.addClass('close');
            audio.pause();
        });
        ovideo.addEventListener('pause',function(){
            !isIos && oVideoWrap.addClass('hide');
            tanck.addClass("active");
            oanniu.removeClass('close');
            oanniu.addClass('open');
            audio.play();
            obtn1.on('tap', function(){
                !isIos && oVideoWrap.removeClass('hide');
                    tanck.removeClass("active");
                    oPage5.versionPage5();
                oanniu.removeClass('close');
                oanniu.addClass('open');
                audio.play();
            });
            obtn2.on('tap', function(){
                !isIos && oVideoWrap.removeClass('hide');
                tanck.removeClass("active");
                oVideosSreen.play();
                oanniu.removeClass('open');
                oanniu.addClass('close');
                audio.pause();
            });
            //禁止滑动弹层上下翻页
            function forbidSwipe() {
                return false;
            }
            oVlayer.on('swipeUp', forbidSwipe);
            oVlayer.on('swipeDown', forbidSwipe);

            return {
                'hideLayer': function() {
                    oVlayer.removeClass('active');
                    !isIos && oVideoWrap.removeClass('hide');
                }
            }
        })
    })();
    //page5弹出盒
    (function(){
        var opage5 = $('.page5'),
            ofenx = opage5.find('img.btn'),
            hezi = $('.pagewrap').find('div.fenxiang_layer');
        ofenx.click(function(){
            hezi.addClass("active");
        });

        hezi.click(function(){
            hezi.removeClass("active");
        });
    })();

})( Zepto );