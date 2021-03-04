
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    roof = new Roof(400,100,400,60)
	bob3 = new Bob(400,500,40,40)
  bob2 = new Bob(320,500,40,40)
	bob1 = new Bob(240,500,40,40)
	bob4 = new Bob(480,500,40,40)
	bob5 = new Bob(560,500,40,40)

  rope1 = new Constraint(roof.body,bob3.body,0)
  rope2 = new Constraint(roof.body,bob2.body,-80)
  rope3 = new Constraint(roof.body,bob1.body,-160)
  rope4 = new Constraint(roof.body,bob4.body,80)
  rope5 = new Constraint(roof.body,bob5.body,160)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(255);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-150})
  }
}



