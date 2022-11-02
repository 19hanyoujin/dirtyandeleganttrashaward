

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


// 쓰레기 이미지 이벤트 처리

let trashImage = document.querySelectorAll(".tImg");
let letterBox = document.querySelector('#letterBox');


//console.log(trashImage);

for(let i = 0; i < trashImage.length; i++)
{
    trashImage[i].addEventListener("mouseover", overEvent);
    trashImage[i].addEventListener("mouseout", outEvent);
    
}

//window.addEventListener("mousemove", moveEvent);

function overEvent(e)
{
    console.log(e);
    console.log(letterBox);
    letterBox.classList.add("on");
    letterBox.style.left = e.path[0].offsetLeft + e.path[0].offsetWidth/2 + "px" ;
    letterBox.style.top = e.path[0].offsetTop + e.path[0].offsetHeight/2 + "px";

    letterBox.innerHTML = e.path[0].getAttribute("val");
}

function outEvent(e)
{
    //console.log(e.path[0]);
    letterBox.classList.remove("on");
    

}

function moveEvent(e)
{
    if(mouseMove)
    {
        
    }
}