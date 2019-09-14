const canvas=document.querySelector('canvas')
canvas.width=window.innerWidth;
canvas.height=window.innerHeight



const c=canvas.getContext("2d")

//fillRect(x,y,width,height)
c.fillStyle="red"
c.fillRect(100,100,200,200)

//line
//moveto(x,y)
//lineto(length,yposition)

c.beginPath()
c.moveTo(100,500);
c.lineTo(900,100);
c.strokeStyle="red"
c.stroke()
c.closePath()

//arc
//arc(x,y,radius,startanglr,endangle,clockoranticlock)
c.beginPath()
c.strokeStyle="blue"
c.arc(400,400,50,0,Math.PI*2,true)
c.stroke()

for(let x=0;x<100;x++){
	let colors=["red","blue","green","purple"]
	let a=Math.round(Math.random()*1200)
	let b=Math.round(Math.random()*600)
	c.beginPath()
    c.strokeStyle=colors[Math.round(Math.random()*(colors.length-1))]
    c.arc(a,b,50,0,Math.PI*2,true)
    c.stroke()
}