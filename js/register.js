
    // 请求路径
    var httpurl2 = "http://47.106.224.177:8080/contenttest_war/register";
    // 数据请求
    function myClick2() {

        var reg_phonestr = document.getElementById("reg_input_phone").value;
        var reg_passwordstr = document.getElementById("reg_pw").value;
        var reg_usernamer = document.getElementById("reg_username").value;

        if(reg_phonestr==""||reg_phonestr==null){
            alert("注册手机为空");
            return;
        }
        if(reg_passwordstr==""||reg_passwordstr==null){
            alert("密码为空");
            return;
        }
        if(reg_usernamer==""||reg_usernamer==null){
            alert("昵称为空");
            return;
        }

        $.ajax({
            url: httpurl2,//请求的url地址
            type: 'post',//设置请求的http方式，method也可以
            dataType: 'json',//将服务器端返回的数据直接认定为是这个格式，然后会做一些自动的处理(如果是json字符串，会自动转化为js对象),服务器返回的默认格式是text/html格式
            data: {//向服务器端发送的数据
                id: reg_phonestr,
                username: reg_usernamer,
                password: reg_passwordstr,
            }, 
            success: function (response, xml) {
                if(response[0].result == "注册成功")
                {
                    alert("注册成功！");
                    oLog_box_reg.style.display = 'none';
                }
                else
                {
                    alert("账号或昵称已存在");
                }
            },
            fail: function (status) {
                // 此处放失败后执行的代码
            }
        });
    }

