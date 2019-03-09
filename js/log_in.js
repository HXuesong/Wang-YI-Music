
    // 请求路径
    var httpurl1 = "http://47.106.224.177:8080/contenttest_war/login";
    // 数据请求
    function myClick() {
        var usernamestr = document.getElementById("input_phone").value;
        var passwordstr = document.getElementById("pw").value;
        if(usernamestr==""||usernamestr==null){
            alert("账号为空");
            return;
        }
        if(passwordstr==""||passwordstr==null){
            alert("密码为空");
            return;
        }

        $.ajax({
            url: httpurl1,//请求的url地址
            type: 'post',//设置请求的http方式，method也可以
            dataType: 'json',//将服务器端返回的数据直接认定为是这个格式，然后会做一些自动的处理(如果是json字符串，会自动转化为js对象),服务器返回的默认格式是text/html格式
            credentials: "include",
            xhrFields: {
                withCredentials: true
            },
            data: {//向服务器端发送的数据
                username: usernamestr,
                password: passwordstr,
            }, 
            /*    
            success: function (data, textStatus, jqXHR, response) {//请求成功之后执行的回调函数
                
                if(data.resultCode!=200){
                    alert(data.resultCode)
                    return;
                }
                
                var token = data.extras.token;
                console.log(token);
                location.href = "Listview1.html?" + "token=" + token + "&&" + usernamestr;

            },
            error: function (jqXHR, textStatus, errorThrown) {//请求失败之后执行的回调函数
                console.log(errorThrown);
            }
            */
            success: function (response, xml) {
                if(response[0].result == "登陆成功")
                {
                    alert("登陆成功！");
                    oLog_box_phone.style.display = 'none';

                    var oLogIn_p = document.querySelector(".logIn_p");
                    oLogIn_p.innerHTML = "注销";
                }
                else
                {
                    alert("账号不存在！");
                }
            },
            fail: function (status) {
                // 此处放失败后执行的代码
            }
        });
    }

