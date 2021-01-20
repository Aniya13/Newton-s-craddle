
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,100,300,10);
   bob1 = new Bob(300,500,20);
   bob2 = new Bob(350,500,20);
   bob3 = new Bob(400,500,20);
   bob4 = new Bob(450,500,20);
   chain1 = new Chain(ground.body, bob1.body);
   chain2 = new Chain(ground.body, bob2.body);
   chain3= new Chain(ground.body, bob3.body);
   chain4 = new Chain(ground.body, bob4.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
chain1.display();
chain2.display();
chain3.display();
chain4.display();

  drawSprites();
 
}
function keyPressed() {
   if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50,y:-45}); } }


