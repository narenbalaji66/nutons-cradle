class Constraint{
    constructor(bodyA,bodyB,offsetX){
        this.offsetX=offsetX
        var options={
      bodyA:bodyA,
      bodyB:bodyB
      
        }
     this.rope=Matter.Constraint.create(options)
     World.add(world,this.rope)
    }

    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(4)
        line(pointA.x+this.offsetX,pointA.y,pointB.x,pointB.y)
    }
}