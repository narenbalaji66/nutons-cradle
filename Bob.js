class Bob{
    constructor(x,y,radius){
   var options={
       
       restitution:0.3,
       friction:0.5,
       density:1.2
   }
   this.radius=radius
   this.body=Matter.Bodies.circle(x,y,radius,options)
   World.add(world,this.body)
    }
  display(){
var position=this.body.position
fill("purple");
ellipse(position.x,position.y,this.radius*2,this.radius*2)
  }

}