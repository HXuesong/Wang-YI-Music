
    var oSec_nav = document.querySelector(".Sec_nav");
    var oSec_nav_1 = oSec_nav.querySelectorAll("a")[0];
    var oSec_nav_2 = oSec_nav.querySelectorAll("a")[1];
    var oSec_nav_3 = oSec_nav.querySelectorAll("a")[2];
    var oSec_nav_4 = oSec_nav.querySelectorAll("a")[5];
    var oBox_return = document.querySelector(".box_return");
    var oSong_container = document.querySelector(".song_container");
    var oReturn_song = document.querySelector(".return_song");
    var Sec_num = 1;  //变量

    // 初始化
    // oSec_nav_1.style.fontWeight = "bold";
    // oSec_nav_1.style.backgroundImage = "url('img/Sec/main_bac2.png')";

    // 单曲
    oSec_nav_1.onclick = function()
    {
        Sec_num = 1;
        oSec_nav_1.style.fontWeight = "bold";
        oSec_nav_1.style.backgroundImage = "url('img/Sec/main_bac2.png')";
        oSec_nav_2.style.fontWeight = "normal";
        oSec_nav_2.style.backgroundImage = "none";
        oSec_nav_3.style.fontWeight = "normal";
        oSec_nav_3.style.backgroundImage = "none";
        oSec_nav_4.style.fontWeight = "normal";
        oSec_nav_4.style.backgroundImage = "none";
    }

    // 专辑
    oSec_nav_2.onclick = function()
    {
        Sec_num = 2;
        oSec_nav_2.style.fontWeight = "bold";
        oSec_nav_2.style.backgroundImage = "url('img/Sec/main_bac2.png')";
        oSec_nav_1.style.fontWeight = "normal";
        oSec_nav_1.style.backgroundImage = "none";
        oSec_nav_3.style.fontWeight = "normal";
        oSec_nav_3.style.backgroundImage = "none";
        oSec_nav_4.style.fontWeight = "normal";
        oSec_nav_4.style.backgroundImage = "none";
    }

    // 歌手
    oSec_nav_3.onclick = function()
    {
        Sec_num = 3;
        oSec_nav_3.style.fontWeight = "bold";
        oSec_nav_3.style.backgroundImage = "url('img/Sec/main_bac2.png')";
        oSec_nav_1.style.fontWeight = "normal";
        oSec_nav_1.style.backgroundImage = "none";
        oSec_nav_2.style.fontWeight = "normal";
        oSec_nav_2.style.backgroundImage = "none";
        oSec_nav_4.style.fontWeight = "normal";
        oSec_nav_4.style.backgroundImage = "none";
    }

    // 歌单
    oSec_nav_4.onclick = function()
    {
        Sec_num = 4;
        oSec_nav_4.style.fontWeight = "bold";
        oSec_nav_4.style.backgroundImage = "url('img/Sec/main_bac2.png')";
        oSec_nav_1.style.fontWeight = "normal";
        oSec_nav_1.style.backgroundImage = "none";
        oSec_nav_2.style.fontWeight = "normal";
        oSec_nav_2.style.backgroundImage = "none";
        oSec_nav_3.style.fontWeight = "normal";
        oSec_nav_3.style.backgroundImage = "none";
    }
    
    // 请求路径
    var Sec_httpurl1 = "http://47.106.224.177:8080/contenttest_war/searchRecord";       //单曲
    var Sec_httpurl2 = "http://47.106.224.177:8080/contenttest_war/searchSinger";       //歌手
    var Sec_httpurl3 = "http://47.106.224.177:8080/contenttest_war/searchAlbum";        //专辑
    var Sec_httpurl4 = "http://47.106.224.177:8080/contenttest_war/searchList";         //歌单
    
    // 数据请求
    function myClick3() {

        var Sec_input = document.getElementById("input_song").value;

        if(Sec_input==""||Sec_input==null){
            alert("搜索内容为空");
            return;
        }
        // 单曲
        if(Sec_num == 1)
        {
            $.ajax({
                url: Sec_httpurl1,//请求的url地址
                type: 'post',//设置请求的http方式，method也可以
                dataType: 'json',//将服务器端返回的数据直接认定为是这个格式，然后会做一些自动的处理(如果是json字符串，会自动转化为js对象),服务器返回的默认格式是text/html格式
                data: {//向服务器端发送的数据
                    name: Sec_input,
                }, 

                //歌名  name
                //歌手  singer
                //歌曲图片  pic
                
                success: function (response, xml) {
                    for(var i = 0; i < response.length; i++)
                    {
                        var song_name = response[i].name;
                        var song_singer = response[i].singer;
                        var song_url = response[i].pic;
                        oBox_return.insertAdjacentHTML("afterend",`                            
                        <div class="return_song" >
                            <span class="return_song_start"></span>
                            <a href="#">${song_name}</a>
                            <div class="return_song_icon">
                                <span class="icon_plus"></span>
                                <span class="icon_col"></span>
                                <span class="icon_share"></span>
                                <span class="icon_down"></span>
                            </div>
                            <span class="song_singer">${song_singer}</span>
                            <span class="song_pic" style="background: url('${song_url}');"></span>
                        </div>`
                    );

                    }

                },
                fail: function (status) {
                    // 此处放失败后执行的代码
                }
            });
        }

        // 歌手
        if(Sec_num == 2)
        {
            $.ajax({
                url: Sec_httpurl2,//请求的url地址
                type: 'post',//设置请求的http方式，method也可以
                dataType: 'json',//将服务器端返回的数据直接认定为是这个格式，然后会做一些自动的处理(如果是json字符串，会自动转化为js对象),服务器返回的默认格式是text/html格式
                data: {//向服务器端发送的数据
                    singer: Sec_input,
                }, async:true,
                //歌手  singer
                //歌手照片 ImgUrl
                success: function (response, xml) {

                    var song_singer = response[0].singer;
                    var singer_url = response[0].ImgUrl;
                    oBox_return.insertAdjacentHTML("afterend",`                            
                    <div class="return_singer">
                        <img src="${response[0].ImgUrl}" class="singer_pic">
                        <a href="#">${response[0].singer}</a>
                    </div>`
                    
                );
                },
                error: function (status) {
                    // 此处放失败后执行的代码
                    console.log("err");
                }
            });
            console.log(111)
        }

        // 专辑
        if(Sec_num == 3)
        {
            $.ajax({
                url: Sec_httpurl3,//请求的url地址
                type: 'post',//设置请求的http方式，method也可以
                dataType: 'json',//将服务器端返回的数据直接认定为是这个格式，然后会做一些自动的处理(如果是json字符串，会自动转化为js对象),服务器返回的默认格式是text/html格式
                data: {//向服务器端发送的数据
                    albumSinger: Sec_input,
                    singer: 0,
                    id: 0,
                    name: 0,
                }, 
                //专辑名  AlbumName
                //专辑图片 pic
                //专辑人 AlbumSinger
                success: function (response, xml) {
                    
                    for(var i = 0; i < response.length && i < 30; i++)
                    {
                        var AlbumName = response[i].AlbumName;
                        var AlbumSinger = response[i].AlbumSinger;
                        var AlbumUrl = response[i].pic;

                        oBox_return.insertAdjacentHTML("afterend",`                            
                        <div class="Album_littleBox" id="Album_littleBox1">
                                <img src="${AlbumUrl}" alt="">
                                <span class="Album_play"></span>
                                <p class="Album_SongName">${AlbumName}</p>
                                <div class="Album_SingerName">
                                    <a href="#" id="Album_p">${AlbumSinger}</a>
                                </div>
                        </div>`
                    );

                    }

                },
                fail: function (status) {
                    // 此处放失败后执行的代码
                }
            });
        }

        // 歌单
        if(Sec_num == 4)
        {
            $.ajax({
                url: Sec_httpurl4,//请求的url地址
                type: 'post',//设置请求的http方式，method也可以
                dataType: 'json',//将服务器端返回的数据直接认定为是这个格式，然后会做一些自动的处理(如果是json字符串，会自动转化为js对象),服务器返回的默认格式是text/html格式
                data: {//向服务器端发送的数据
                    songListId: Sec_input,
                }, 
                //歌单名  songlistname
                //歌单图片  songlistpic
                success: function (response, xml) {

                        var Songlistname = response[0].songlistname;
                        var Songlistpic = response[0].songlistpic;

                        oBox_return.insertAdjacentHTML("afterend",`                            
                        <div class="Album_littleBox" id="Album_littleBox1">
                                <img src="${Songlistpic}" alt="">
                                <span class="Album_play"></span>
                                <p class="Album_SongName">${Songlistname}</p>
                        </div>`
                    );

                    var oAlbum_littleBox = document.querySelector(".Album_littleBox");

                    oAlbum_littleBox.onclick = function()
                    {

                        for(var i = 0; i < response[0].songs.length && i < 20; i++)
                        {
                            var song_name = response[0].songs[i].name;
                            var song_singer = response[0].songs[i].singer;
                            var song_url = response[0].songs[i].pic;
                            oBox_return.insertAdjacentHTML("afterend",`                            
                            <div class="return_song" >
                                <span class="return_song_start"></span>
                                <a href="#">${song_name}</a>
                                <div class="return_song_icon">
                                    <span class="icon_plus"></span>
                                    <span class="icon_col"></span>
                                    <span class="icon_share"></span>
                                    <span class="icon_down"></span>
                                </div>
                                <span class="song_singer">${song_singer}</span>
                                <span class="song_pic" style="background: url('${song_url}');"></span>
                            </div>`
                        );
    
                        }

                    }

                },
                fail: function (status) {
                    // 此处放失败后执行的代码
                }
            });
        }

    }

