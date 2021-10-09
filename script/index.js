let pacman = document.querySelector('#pacman');
let pacman_Animation = ['url(img/Pacman-1.png)', 'url(img/Pacman-2.png)', 'url(img/Pacman-3.png)']
let leftPos = 506;
var topPos = 370;
let i=1;
var speed = 6;
let wall = document.querySelectorAll(".verticals");
let b=false;


setInterval(PacManAnimation, 115);
function PacManAnimation()
{
    i++;
    if(i==3)
        i=0;
    pacman.style.backgroundImage = pacman_Animation[i];    
}

window.addEventListener("keypress", function(event){
    console.log(leftPos);
    console.log("wall: " + wall[0].style.left);
    if(event.key === "d")
    {
        if(parseInt(pacman.style.left) >= 1100)
        {
            leftPos = -15;
        }
        pacman.style.transform = "rotate(0deg)";
        leftPos = leftPos + speed;
        for(let j=0;j<wall.length;j++)
        {
            if(leftPos===parseInt(wall[i].offsetLeft))
            {
                alert("Blah");
                b=true;
            }
        }
        if(b === false)
        {
            pacman.style.left = leftPos + "px";
        }
    }
    if(event.key === "a")
    {
        if(parseInt(pacman.style.left) < -20)
        {
            leftPos = 1080;
        }
        pacman.style.transform = "rotate(180deg)";
        leftPos = leftPos - speed;
        pacman.style.left = leftPos + "px";
    }
    if(event.key === "w")
    {
        if(parseInt(pacman.style.top) < -15)
        {
            topPos = 580;
        }
        pacman.style.transform = "rotate(-90deg)";
        topPos = topPos - speed;
        pacman.style.top = topPos + "px";
    }
    if(event.key === "s")
    {
        if(parseInt(pacman.style.top) >= 590)
        {
            topPos = -20;
        }
        // console.log(pacman.style.top);
        pacman.style.transform = "rotate(90deg)";
        topPos = topPos + speed;
        pacman.style.top = topPos + "px";
    }
});