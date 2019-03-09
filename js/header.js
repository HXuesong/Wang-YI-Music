
    var oTriangle = document.querySelector('.triangle');
    var oLogIn_p = document.querySelector('.logIn_p');
    var oLogIn = document.querySelector('#logIn');
    // 搜索框
    var oSearch_text = document.querySelector("#search_text");

    oTriangle.onmouseover = function()
    {
        oLogIn_p.style.color = '#999999';
        oLogIn.style.display = 'block';
    }

    oTriangle.onmouseout = function()
    {
        oLogIn_p.style.color = '#787878';
        oLogIn.style.display = 'none';
    }

    oLogIn_p.onmouseover = function()
    {
        if(oLogIn_p.innerHTML == "注销")
        {
            oLogIn.style.display = 'none';
        }
        else
        {
            oLogIn.style.display = 'block';
        }
    }

    oLogIn_p.onmouseout = function()
    {
        oLogIn.style.display = 'none';
    }

    oLogIn.onmouseover = function()
    {
        oLogIn.style.display = 'block';
    }

    oLogIn.onmouseout = function()
    {
        oLogIn.style.display = 'none';
    }

    oSearch_text.onclick = function()
    {
        window.open('Sec.html','blank');
    }

