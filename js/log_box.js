
    // 登录下拉栏
    var oLogIn = document.querySelector('#logIn'); 
    var oPhone = oLogIn.querySelectorAll('li')[0];
    var oWY = oLogIn.querySelectorAll('li')[4];

    //其他登录方式
    var oLog_bottom_phone_link1 = document.querySelector('#log_bottom_phone_link1');
    var oLog_bottom_WY_link1 = document.querySelector('#log_bottom_WY_link1');
    var oLog_bottom_reg_link1 = document.querySelector('#log_bottom_reg_link1');
    var oLog_total_phone = document.querySelector('.log_total_phone');
    var oLog_total_reg = document.querySelector('.log_total_reg');

    //右侧图标区登录
    var oLog_total_right = document.querySelector('.log_total_right');
    var oLog_total_right1 = oLog_total_right.querySelectorAll('a')[0];
    var oLog_total_right2 = oLog_total_right.querySelectorAll('a')[1];
    var oLog_total_right3 = oLog_total_right.querySelectorAll('a')[2];
    var oLog_total_right4 = oLog_total_right.querySelectorAll('a')[3];
    var oLog_total_right_WX = document.querySelector('.log_total_right_WX');
    var oLog_total_right_QQ = document.querySelector('.log_total_right_QQ');
    var oLog_total_right_WB = document.querySelector('.log_total_right_WB');
    var oLog_total_right_WY = document.querySelector('.log_total_right_WY');

    // 登录、注册框
    var oLog_box_phone = document.querySelector('.log_box_phone');
    var oLog_box_WY = document.querySelector('.log_box_WY');
    var oLog_box_reg = document.querySelector('.log_box_reg');
    var oLog_box_total = document.querySelector('.log_box_total');

    //关闭窗体图标×
    var oCloseWindow_phone = document.querySelector('.closeWindow_phone');
    var oCloseWindow_WY = document.querySelector('.closeWindow_WY');
    var oCloseWindow_reg = document.querySelector('.closeWindow_reg');
    var oCloseWindow_total = document.querySelector('.closeWindow_total');

    //账号注册
    var oLog_bottom_link2 = document.querySelector('.log_bottom_link2');

    // 手机账号登录
    oPhone.onclick = function()
    {
        oLog_box_phone.style.display = 'block';
    }

    // 网易邮箱账号登录
    oWY.onclick = function()
    {
        oLog_box_WY.style.display = 'block';
    }

    //其他登录方式
    oLog_bottom_phone_link1.onclick = function()
    {
        oLog_box_phone.style.display = 'none';
        oLog_box_total.style.display = 'block';
    }    

    oLog_bottom_reg_link1.onclick = function()
    {
        oLog_box_reg.style.display = 'none';
        oLog_box_total.style.display = 'block';
    }   
    
    oLog_bottom_WY_link1.onclick = function()
    {
        oLog_box_WY.style.display = 'none';
        oLog_box_total.style.display = 'block';
    }    
    
    oLog_total_phone.onclick = function()
    {
        oLog_box_total.style.display = 'none';
        oLog_box_phone.style.display = 'block';
    }

    oLog_total_reg.onclick = function()
    {
        oLog_box_total.style.display = 'none';
        oLog_box_reg.style.display = 'block';
    }

    //右侧图标区登录
    oLog_total_right_WX.onclick = function()
    {
        oLog_box_total.style.display = 'none';
        window.open('https://open.weixin.qq.com/connect/qrconnect?appid=wxe280063f5fb2528a&response_type=code&redirect_uri=https://music.163.com/back/weichat&forcelogin=true&scope=snsapi_login&state=mLXRJuabWp&checkToken=9ca17ae2e6ffcda170e2e6ee8ac2599a9caf98f17eb09e8ab7c84f868b8a84b73cb5909eb9fb42f2ed83a5f02af0feaec3b92aed8afabacf809aeba0d2d54e829b9fa6c85ba8b0a989e850839f968cd26194b9ee9e&lang=zh_CN#wechat_redirect','blank');
    }

    oLog_total_right_QQ.onclick = function()
    {
        oLog_box_total.style.display = 'none'; 
        window.open('https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100495085&response_type=code&redirect_uri=https://music.163.com/back/qq&forcelogin=true&state=bYaunQGiWB&checkToken=9ca17ae2e6ffcda170e2e6ee8ac2599a9caf98f17eb09e8ab7c84f868b8a84b73cb5909eb9fb42f2ed83a5f02af0feaec3b92a8bea98a7b444f5a98383d14e828a8fb7c44b8ab0008de849979bfa87ef6b8ea8ee9e','blank');       
    }

    oLog_total_right_WB.onclick = function()
    {
        oLog_box_total.style.display = 'none';
        window.open('https://api.weibo.com/oauth2/authorize?client_id=301575942&response_type=code&redirect_uri=http://music.163.com/back/weibo&forcelogin=true&scope=friendships_groups_read,statuses_to_me_read,follow_app_official_microblog&state=bPdzpxbwsF&checkToken=9ca17ae2e6ffcda170e2e6ee8ac2599a9caf98f17eb09e8ab7c84f868b8a84b73cb5909eb9fb42f2ed83a5f02af0feaec3b92afc9b858fc743b195ad88c44a979a8fa7c55b8eb0008dcf4986998fd9bb66b8a6ee9e','blank');
    }

    oLog_total_right_WY.onclick = function()
    {
        oLog_box_total.style.display = 'none';
        oLog_box_WY.style.display = 'block';
    }

    oLog_total_right1.onclick = function()
    {
        oLog_box_total.style.display = 'none';
        window.open('https://open.weixin.qq.com/connect/qrconnect?appid=wxe280063f5fb2528a&response_type=code&redirect_uri=https://music.163.com/back/weichat&forcelogin=true&scope=snsapi_login&state=mLXRJuabWp&checkToken=9ca17ae2e6ffcda170e2e6ee8ac2599a9caf98f17eb09e8ab7c84f868b8a84b73cb5909eb9fb42f2ed83a5f02af0feaec3b92aed8afabacf809aeba0d2d54e829b9fa6c85ba8b0a989e850839f968cd26194b9ee9e&lang=zh_CN#wechat_redirect','blank');        
    }

    oLog_total_right2.onclick = function()
    {
        oLog_box_total.style.display = 'none'; 
        window.open('https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100495085&response_type=code&redirect_uri=https://music.163.com/back/qq&forcelogin=true&state=bYaunQGiWB&checkToken=9ca17ae2e6ffcda170e2e6ee8ac2599a9caf98f17eb09e8ab7c84f868b8a84b73cb5909eb9fb42f2ed83a5f02af0feaec3b92a8bea98a7b444f5a98383d14e828a8fb7c44b8ab0008de849979bfa87ef6b8ea8ee9e','blank');               
    }

    oLog_total_right3.onclick = function()
    {
        oLog_box_total.style.display = 'none';
        window.open('https://api.weibo.com/oauth2/authorize?client_id=301575942&response_type=code&redirect_uri=http://music.163.com/back/weibo&forcelogin=true&scope=friendships_groups_read,statuses_to_me_read,follow_app_official_microblog&state=bPdzpxbwsF&checkToken=9ca17ae2e6ffcda170e2e6ee8ac2599a9caf98f17eb09e8ab7c84f868b8a84b73cb5909eb9fb42f2ed83a5f02af0feaec3b92afc9b858fc743b195ad88c44a979a8fa7c55b8eb0008dcf4986998fd9bb66b8a6ee9e','blank');
    }

    oLog_total_right4.onclick = function()
    {
        oLog_box_total.style.display = 'none';
        oLog_box_WY.style.display = 'block';
    }

    // 关闭登录窗口
    oCloseWindow_phone.onclick = function()
    {
        oLog_box_phone.style.display = 'none';
    }

    oCloseWindow_WY.onclick = function()
    {
        oLog_box_WY.style.display = 'none';
    }

    oCloseWindow_reg.onclick = function()
    {
        oLog_box_reg.style.display = 'none';
    }
    
    oCloseWindow_total.onclick = function()
    {
        oLog_box_total.style.display = 'none';
    }    

    // 账号注册
    oLog_bottom_link2.onclick = function()
    {
        oLog_box_phone.style.display = 'none';   
        oLog_box_reg.style.display = 'block';     
    }

    // 微信登录
    oLogIn.querySelectorAll('li')[1].onclick = function()
    {
        window.open('https://open.weixin.qq.com/connect/qrconnect?appid=wxe280063f5fb2528a&response_type=code&redirect_uri=https://music.163.com/back/weichat&forcelogin=true&scope=snsapi_login&state=mLXRJuabWp&checkToken=9ca17ae2e6ffcda170e2e6ee8ac2599a9caf98f17eb09e8ab7c84f868b8a84b73cb5909eb9fb42f2ed83a5f02af0feaec3b92aed8afabacf809aeba0d2d54e829b9fa6c85ba8b0a989e850839f968cd26194b9ee9e&lang=zh_CN#wechat_redirect','blank');
    }

    // QQ登录
    oLogIn.querySelectorAll('li')[2].onclick = function()
    {
        window.open('https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100495085&response_type=code&redirect_uri=https://music.163.com/back/qq&forcelogin=true&state=bYaunQGiWB&checkToken=9ca17ae2e6ffcda170e2e6ee8ac2599a9caf98f17eb09e8ab7c84f868b8a84b73cb5909eb9fb42f2ed83a5f02af0feaec3b92a8bea98a7b444f5a98383d14e828a8fb7c44b8ab0008de849979bfa87ef6b8ea8ee9e','blank');
    }

    // 新浪微博登录
    oLogIn.querySelectorAll('li')[3].onclick = function()
    {
        window.open('https://api.weibo.com/oauth2/authorize?client_id=301575942&response_type=code&redirect_uri=http://music.163.com/back/weibo&forcelogin=true&scope=friendships_groups_read,statuses_to_me_read,follow_app_official_microblog&state=bPdzpxbwsF&checkToken=9ca17ae2e6ffcda170e2e6ee8ac2599a9caf98f17eb09e8ab7c84f868b8a84b73cb5909eb9fb42f2ed83a5f02af0feaec3b92afc9b858fc743b195ad88c44a979a8fa7c55b8eb0008dcf4986998fd9bb66b8a6ee9e','blank');
    }

    var oRight_part1_bac = document.querySelector('.right_part1_bac');

    oRight_part1_bac.onclick = function()
    {
        oLog_box_total.style.display = 'block';
    }