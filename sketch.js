
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chain,support,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//chain= new conClass(bird.body,log6.body);
	support= new roof(320,100,400,30);
	bobObject1= new bob(200,300,30);
	bobObject2= new bob(260,300,30);
	bobObject3= new bob(320,300,30);
	bobObject4= new bob(380,300,30);
	bobObject5= new bob(440,300,30);
	rope1= new rope(bobObject1.body,support.body,-120,200);
    rope2= new rope(bobObject2.body,support.body,-4*13, 200);
	rope3= new rope(bobObject3.body,support.body,10,200);
	rope4= new rope(bobObject4.body,support.body,4*13, 200);
    rope5= new rope(bobObject5.body,support.body,110, 200);
		




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  support.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display(); 
  rope2.display();
  rope3.display();
  rope4.display();
 rope5.display();

  drawSprites();
 
}


function keyPressed(){


	if(keyCode=== UP_ARROW){
	
		
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:279,y:-310});
	
	}
	
	
	}

