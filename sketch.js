
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin; 
var paper; 
var ground; 
var world; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER); 

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(200,450,40);
	ground=new Ground(width/2,670,width,20);
	dustbin=new Dustbin( 1200,650);
	


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ground.display(); 
  paper.display(); 
  dustbin. display(); 

  keyPressed(); 
  
  drawSprites();
 
}

function keyPressed(){

 
	if(keyPressed===UP_ARROW){

		Matter.Body.applyForce(paperObject.body, paperObject.body.positon, {x:85, y:-85}); 
	}
}



