const canvas=document.querySelector('canvas')
 canvas.width=window.innerWidth;
 canvas.height=window.innerHeight
 const c=canvas.getContext("2d")

 class Ball{
 	constructor(x,y,radius,yspeed,xspeed,color){
 		this.x=x;
 		this.y=y;
 		this.radius=radius;
 		this.yspeed=yspeed;
 		this.xspeed=xspeed;
 		this.color=color
 		this.draw=function(){
 			c.beginPath();
 			c.fillStyle=this.color
 			c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
 			c.fill()
 		}
 		this.move=function(){
           
           if(this.y+this.radius>innerHeight || this.y-radius<0){
           	 this.yspeed=-this.yspeed
           }else{
           	this.yspeed+=1
           }
           
           this.y+=this.yspeed
           this.draw()
 		}
 	}
 }

let ballarray=[]
function createballs(){

 for(let i=0;i<400;i++){
 	 let x=Math.floor(Math.random()*window.innerWidth)
     let y=Math.floor(Math.random()*600)+40
     let colorarray=["red","green","orange","purple","black","gold","violet","indigo"]
     let radius=Math.floor(Math.random()*20)
     let yspeed=Math.random()*2
     let xspeed=Math.floor(Math.random()*1)
     let color=colorarray[Math.floor(Math.random()*colorarray.length)]
     let newball=new Ball(x,y,radius,yspeed,xspeed,color)
 	ballarray.push(newball)
 }
}
function animate(){
	
	 requestAnimationFrame(animate)
     c.clearRect(0,0,innerWidth,innerHeight)
     for(let i=0;i<ballarray.length; i++){
     	ballarray[i].move()
     }
}
createballs()
animate()