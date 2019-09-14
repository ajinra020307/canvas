
const canvas=document.querySelector('canvas')
 canvas.width=window.innerWidth;
 canvas.height=window.innerHeight
 const c=canvas.getContext("2d")
 
//constructor function

 function Circle(x,y,radius,xspeed,yspeed){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.xspeed=xspeed;
    this.yspeed=yspeed; 

    this.draw=function(){
        c.beginPath();
        c.strokeStyle="blue";
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.stroke()
        c.fill()
    }
    this.move=function(){

        if(this.x+this.radius>innerWidth || this.x-radius<0){
            this.xspeed=-this.xspeed
        }
        if(this.y+this.radius>innerHeight || this.y-radius<0){
            this.yspeed=-this.yspeed
        }
        this.x+=this.xspeed
        this.y+=this.yspeed
        this.draw()
    }
 }

//make 100 new circle and push into an array

 let circlearray=[]
 let colorarray=["red","blue","green","purple","grey"]

for(let i=0;i<100;i++){
 let x=Math.floor(Math.random()*window.innerWidth)
 let y=Math.floor(Math.random()*window.innerHeight)
 let radius=Math.floor(Math.random()*30)
 let xspeed=Math.random()*2;
 let yspeed=Math.random()*2;

 let newcircle=new Circle(x,y,radius,xspeed,yspeed)
 circlearray.push(newcircle)
}
 

let firsttime=true
 function animation(){
     
     requestAnimationFrame(animation)
     c.clearRect(0,0,innerWidth,innerHeight)

     for(let i=0;i<circlearray.length;i++){
        circlearray[i].move()

     }
    
   } 
 
 animation()

