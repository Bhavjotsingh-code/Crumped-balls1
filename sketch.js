
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
  paper=new Paper(200,200,20,20)
  ground= new Ground(400,500,800,30)
  left =new Dustbin(610,450,15,70)
  right =new Dustbin(490,450,15,70)
  bottom=new Dustbin(550,480,110,15)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
 ground.display();
 left.display();
 right.display();
 bottom.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,(X=550,Y=480))
	}
}


