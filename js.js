













//페이지 내에서 메뉴 이동
document.addEventListener('DOMContentLoaded', setVal);

var targetScrollPos;
var scrollPos = 0;
var scrollInterval;

function setVal()
{
    nowScrollPos = pageYOffset;
    var menu = document.querySelectorAll('#menus ul li');
    var contents = document.querySelectorAll('.scrollT')

    for(var i = 0; i < menu.length; i++)
    {
        menu[i].addEventListener('click', menuClick);

        function menuClick()
        {
            clearInterval(scrollInterval);
            var index = this.getAttribute('clickVal');
            targetScrollPos = contents[index].offsetTop;            
            moveTo();
        }
    }
}

function moveTo()
{
    nowScrollPos += (targetScrollPos - nowScrollPos) * 0.05;
    window.scroll(0, Math.round(nowScrollPos));

    scrollInterval = requestAnimationFrame(moveTo);

    if(Math.abs(targetScrollPos - nowScrollPos) < 1)
    {
        window.scroll(0, targetScrollPos);
        nowScrollPos = targetScrollPos;
        cancelAnimationFrame(scrollInterval);
    }
}