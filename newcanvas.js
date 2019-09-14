const canvas=document.querySelector('#canvas')
let ctx=canvas.getContext("2d")
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


//
let xspeed=2
let x=200;
let y=200;
let dx=2;
let dy=2;
let radius=40
function createball(){
ctx.clearRect(0,0,innerWidth,innerHeight)
ctx.beginPath()
ctx.arc(x,y,radius,0,Math.PI*2,true)
ctx.fillStyle="red";
ctx.fill()
if(x+radius>innerWidth || x-radius<0){
	dx=-dx
}
if(y+radius>innerHeight || y-radius<0){
	dy=-dy
}
x+=dx
y+=dy
}

setInterval(createball,10)