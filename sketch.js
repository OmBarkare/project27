
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var rod, bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,500,20);
	bob2 = new Bob(440,500,20);
	bob3 = new Bob(480,500,20);
	bob4 = new Bob(360,500,20);
	bob5 = new Bob(320,500,20);

	rod = new Rod(400,300,260,18);

	chain1 = new Chain(bob1.body,rod.body,0,0);
	chain2 = new Chain(bob2.body,rod.body,40,0);
	chain3 = new Chain(bob3.body,rod.body,80,0);
	chain4 = new Chain(bob4.body,rod.body,-40,0);
	chain5 = new Chain(bob5.body,rod.body,-80,0);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(220);

  bob1.display()
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rod.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:0.05,y:0});
	}
}

