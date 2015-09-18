/**
 * Created by LinJe on 2015/8/25.
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

    //page1
    (function(){

        var oPage1 = $('.page1'),
            oBtn = oPage1.find('img.btn');

        var nextPage = function() {
            window.location.href = 'list.html';
        };

        pageControl.swipeTo(0); //init start index 0

        //btn click
        oBtn.on('click', nextPage);
        //swipe up
        oPage1.on('swipeUp', nextPage);

    })();



})( Zepto );
