const canvas=document.querySelector('#canvas')
let ctx=canvas.getContext("2d")
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

class Ball{
	constructor(x,y,radius,dx,dy,color){
         this.x=x
         this.y=y
         this.radius=radius
         this.dx=dx
         this.dy=dy
         this.color=color
	
	this.draw=function(){
		ctx.beginPath()
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
		ctx.fillStyle=this.color
		ctx.strokeStyle="black";
		ctx.stroke()
		ctx.fill()
	}
	this.move=function(){
        this.draw()
        if(this.x+this.radius>innerWidth || this.x-this.radius<0){
	         this.dx=-this.dx
          }else{
          	this.dx+=1

          }
        if(this.y+this.radius>innerHeight || this.y-this.radius<0){
	         this.dy=-this.dy
         }else{
         	this.dy+=1
         }
           this.x+=this.dx
           this.y+=this.dy
	}
}
}
let ballarray=[]
function createballs(){
	for(let i=0;i<200;i++){
		let x=Math.floor(Math.random()*(innerWidth-50)) +10
		let y=Math.floor(Math.random()*(innerHeight-50))+10
		let r=10
		let dx=Math.floor(Math.random()*4)+1
		let dy=Math.floor(Math.random()*4)+1
	    let colorarray=["red","blue","green","purple","white"]
	    let color=colorarray[Math.floor(Math.random()*colorarray.length)]
		let ball=new Ball(x,y,r,dx,dy,color)
		ballarray.push(ball)
	}
}


function calldraw(){

	requestAnimationFrame(calldraw)
	ctx.clearRect(0,0,innerWidth,innerHeight)

	ballarray.forEach((v,i)=>{
		ballarray[i].move()

	})

}
createballs()
calldraw()