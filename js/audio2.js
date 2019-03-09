
// 类初始化

$(function(){

	var song = [
		{
			'cover' : 'img/audio/cover2.jpg',
			'src' : 'https://api.bzqll.com/music/netease/url?id=290397&key=579621905',
			'title' : 'Memories'
		},
		{
			'cover' : 'img/audio/cover.png',
			'src' : 'https://api.bzqll.com/music/netease/url?id=163726&key=579621905',
			'title' : 'number one'
		},
		{
			'cover' : 'img/audio/cover1.jpg',
			'src' : 'https://api.bzqll.com/music/netease/url?id=814018&key=579621905',
			'title' : '大橋のぞみ - 黒ネコのタンゴ'
		},
		{
			'cover' : 'img/audio/cover3.jpg',
			'src' : 'https://api.bzqll.com/music/netease/url?id=805235&key=579621905',
			'title' : '黒うさP,初音ミク - 千本桜'
		},
		{
			'cover' : 'img/audio/cover4.jpg',
			'src' : 'https://api.bzqll.com/music/netease/url?id=710970&key=579621905',
			'title' : '极乐净土'
		}
	];

	var audioFn = audioPlay({
		song : song,
		autoPlay : false  //是否立即播放第一首，autoPlay为true且song为空，会alert文本提示并退出
	});

	/* 向歌单中添加新曲目，第二个参数true为新增后立即播放该曲目，false则不播放 */
	audioFn.newSong({
		'cover' : 'img/audio/cover5.jpg',
		'src' : 'https://m10.music.126.net/20190228112021/28560cade3f9c549c5d7537f26ee4f17/ymusic/9e82/20e4/8580/bd7c90147cf782ea897fc9652c76b458.mp3',
		'title' : 'B.A.A.B'
	},false);

	/* 暂停播放 */
	//audioFn.stopAudio();

	/* 开启播放 */
	//audioFn.playAudio();

	/* 选择歌单中索引为3的曲目(索引是从0开始的)，第二个参数true立即播放该曲目，false则不播放 */
	//audioFn.selectMenu(3,true);

	/* 查看歌单中的曲目 */
	//console.log(audioFn.song);

	/* 当前播放曲目的对象 */
	//console.log(audioFn.audio);


	// 随机推歌一首加入到播放列表
	var oAudio_collecting = document.querySelector(".audio-collecting");

	oAudio_collecting.onclick = function()
	{
		$.ajax({
			url: "http://47.106.224.177:8080/contenttest_war/randomSearch",//请求的url地址
			type: 'post',//设置请求的http方式，method也可以
			dataType: 'json',//将服务器端返回的数据直接认定为是这个格式，然后会做一些自动的处理(如果是json字符串，会自动转化为js对象),服务器返回的默认格式是text/html格式
			data: {//向服务器端发送的数据无
				
			}, 

			//歌名  name
			//歌曲资源  url
			//歌曲图片  pic
			
			success: function (response, xml) {

				var pic = response[0].pic;
				var src = response[0].url;
				var name = response[0].name

				audioFn.newSong({
					'cover' : pic,
					'src' : src,
					'title' : name
				},true);

			},
			fail: function (status) {
				// 此处放失败后执行的代码
			}
		});
	}

	//推歌五首
	var oAudio_sharing = document.querySelector(".audio-sharing");
	oAudio_sharing.onclick = function()
	{
		$.ajax({
			url: "http://47.106.224.177:8080/contenttest_war/pushSongs",//请求的url地址
			type: 'post',//设置请求的http方式，method也可以
			dataType: 'json',//将服务器端返回的数据直接认定为是这个格式，然后会做一些自动的处理(如果是json字符串，会自动转化为js对象),服务器返回的默认格式是text/html格式
			credentials: "include",
			xhrFields: {
                withCredentials: true
            },
			data: {//向服务器端发送的数据无
				credentials: "include"
			}, 

			//歌名  name
			//歌曲资源  url
			//歌曲图片  pic
			
			success: function (response, xml) {
				for(var i = 0; i < response.length; i++)
				{
					var pic = response[i].pic;
					var src = response[i].url;
					var name = response[i].name
	
					audioFn.newSong({
						'cover' : pic,
						'src' : src,
						'title' : name
					},true);
				}

			},
			fail: function (status) {
				// 此处放失败后执行的代码
			}
		});
	}

});

