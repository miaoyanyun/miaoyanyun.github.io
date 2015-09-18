var appid = "wx9cdb5a3b9fbfb37e";
var url = document.location.href;
function wxshare(title)
{
$.ajax({
    type: 'GET',
    url: 'http://test.agenda-bj.com.cn:8082/api/GetJsShareScript?appid=' + appid + '&url=' + encodeURIComponent(url) + '&callback=wxCallback',
    dataType: 'jsonp',
    jsonpCallback: 'wxCallback',
    success: function (data) {
        console.log(data);
        wx.config({
            debug: false,
            appId: appid,
            timestamp: data.timestamp,
            nonceStr: data.noncestr,
            signature: data.signature,
            jsApiList: [
				'checkJsApi',
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo',
				'hideMenuItems',
				'showMenuItems'
            ]
        });
    },
    error: function() {
        console.log('微信授权接口调用出错');
    }
});
var wx_title = "原来我是"+title+"款诸葛亮！你呢，会是哪一款？";
    var r=Math.random();
    if(r>=0.33 && r<0.66)
    {
	var wx_title = "据说，这是业界公认的四大营销难题，你能破解几个？";
    }
    else if(r>=0.66)
    {
	var wx_title = "10个营销人，只有1个有机会成为诸葛亮！你是其中之一吗？";
    }
    var wx_desc = "";
    var wx_link = "http://zglyg.agenda-bj.com.cn/game";
    var wx_imgUrl = "http://zglyg.agenda-bj.com.cn/game/img/share.jpg";

    var gr_title="诸葛亮来啦！";
    var gr_desc =wx_title ; 

wx.ready(function () {
   
    //wx.showOptionMenu();
    // 2.1 监听"分享给朋友"，按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareAppMessage({
        title: gr_title,
        desc: gr_desc,
        link: wx_link,
        imgUrl: wx_imgUrl,
        trigger: function (res) {
        },
        success: function (res) {
window.location.href='http://zglyg.agenda-bj.com.cn/game/list4.html';
        },
        cancel: function (res) {
        },
        fail: function (res) {
        }
    });

    // 2.2 监听"分享到朋友圈"按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareTimeline({
        title: wx_title,
        link: wx_link,
        imgUrl: wx_imgUrl,
        trigger: function (res) {
        },
        success: function (res) {
            window.location.href='http://zglyg.agenda-bj.com.cn/game/list4.html';
        },
        cancel: function (res) {

        },
        fail: function (res) {
        }
    });

    // 2.3 监听"分享到QQ"按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareQQ({
        title: wx_title,
        desc: wx_desc,
        link: wx_link,
        imgUrl: wx_imgUrl,
        trigger: function (res) {
        },
        complete: function (res) {
        },
        success: function (res) {
        },
        cancel: function (res) {
        },
        fail: function (res) {
        }
    });

    // 2.4 监听"分享到微博"按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareWeibo({
        title: wx_title,
        desc: wx_desc,
        link: wx_link,
        imgUrl: wx_imgUrl,
        trigger: function (res) {
        },
        complete: function (res) {
        },
        success: function (res) {
        },
        cancel: function (res) {
        },
        fail: function (res) {
        }
    });
});
}
wxshare('霸气');