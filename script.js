const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");


const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

 let stopcolor;

function startChangingColor () {

     stopcolor = setInterval(() => {
    body.style.backgroundColor = randomColor();
   },1000);

 
};

function stopChangingColor (){
    clearInterval(stopcolor)
}

start.addEventListener("click" , startChangingColor)
stop.addEventListener("click" , stopChangingColor)

