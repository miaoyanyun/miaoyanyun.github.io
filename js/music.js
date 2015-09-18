/**
 * Created by aixin on 2015/9/9.
 */
(function( $ ){
    //music
    var oanniu = $('.anniu');
    var audio = document.createElement('audio');
    audio.src = 'video/music.mp3';//这里放音乐的地址
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

})( Zepto );