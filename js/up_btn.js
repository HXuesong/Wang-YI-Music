
    var btn = document.querySelector('#up_btn');
    var bSys = true;
    var timer = null;

    //检测是否拖动了滚动条
    window.onscroll = function () {
        if (!bSys) {
            clearInterval(timer)
        }
        bSys = false;
    }

    window.onscroll = function() {
        
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

        //滚动到第二屏的时候，会出现回到顶部按钮
        if(scrollTop > 0){
            btn.style.display = 'block';
        }else{
            btn.style.display = 'none';
        }
        if(!bSys){
            clearInterval(timer);
        }
        bSys = false;
    }

    //点击了返回顶部
    btn.onclick = function () {

        timer = setInterval(
            function () {
                //顶部距离
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var iSpeed = Math.floor(-scrollTop / 16);
                //如果滚动到了顶部，清除定时器
                if (scrollTop == 0) {
                    clearInterval(timer)
                }
                bSys = true
                document.documentElement.scrollTop = document.body.scrollTop = scrollTop + iSpeed;
            },
            4
        )
    
    }
