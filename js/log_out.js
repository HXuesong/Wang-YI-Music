
    oLogIn_p.onclick = function()
    {
        if(oLogIn_p.innerHTML == "注销")
        {
            $.ajax({
                url: "http://47.106.224.177:8080/contenttest_war/logout",//请求的url地址
                type: 'get',//设置请求的http方式，method也可以
                dataType: 'json',//将服务器端返回的数据直接认定为是这个格式，然后会做一些自动的处理(如果是json字符串，会自动转化为js对象),服务器返回的默认格式是text/html格式
                data: {//向服务器端发送的数据无
                }, 

                //歌名  name
                //歌手  singer
                //歌曲图片  pic
                
                success: function (response, xml) {
                    var oLogIn_p = document.querySelector(".logIn_p");
                    alert("账号已退出！");
                    oLogIn_p.innerHTML = "登录";
                },
                fail: function (status) {
                    // 此处放失败后执行的代码
                    
                }
            });
        }
        
    }