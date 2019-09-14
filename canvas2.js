const canvas=document.querySelector('canvas')
 canvas.width=window.innerWidth;
 canvas.height=window.innerHeight


const c=canvas.getContext("2d")

x=Math.floor(Math.random()*window.innerWidth)
y=Math.floor(Math.random()*window.innerHeight)
radius=40;const canvas=document.querySelector('canvas')
 canvas.width=window.innerWidth;
 canvas.height=window.innerHeight


const c=canvas.getContext("2d")

x=Math.floor(Math.random()*window.innerWidth)
y=Math.floor(Math.random()*window.innerHeight)
radius=40;
xspeed=2;
yspeed=2;

function movecircle(){

	requestAnimationFrame(movecircle)  //a loop function
	c.clearRect(0,0,innerWidth,innerHeight) //clears the canvas

	c.beginPath()
    c.strokeStyle="blue"
    c.arc(x,y,radius,0,Math.PI*2,true)
    c.stroke()

    if(x+radius>innerWidth || x-radius<0){
    	xspeed=-xspeed
    }
    if(y+radius>innerHeight || y-radius<0){
    	yspeed=-yspeed
    }
    x+=xspeed;
    y+=yspeed
	
}
movecircle()
xspeed=2;
yspeed=2;

function movecircle(){

	requestAnimationFrame(movecircle)  //a loop function
	c.clearRect(0,0,innerWidth,innerHeight) //clears the canvas

	c.beginPath()
    c.strokeStyle="blue"
    c.arc(x,y,radius,0,Math.PI*2,true)
    c.stroke()

    if(x+radius>innerWidth || x-radius<0){
    	xspeed=-xspeed
    }
    if(y+radius>innerHeight || y-radius<0){
    	yspeed=-yspeed
    }
    x+=xspeed;
    y+=yspeed
	
}
movecircle()




