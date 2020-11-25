
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottomSide;
var side1;
var side2;

function setup() {
	var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,350,1200,20);
	paper = new Paper(1000,350,1200,20);

	bottomSide = createSprite(1000,330,300,20);
	bottomSide.shapeColor = "white";
	side1 = createSprite(1140,260,20,150);
	side1.shapeColor = "white";
	side2 = createSprite(860,260,20,150);
	side2.shapeColor = "white";

	
    

	Engine.run(engine);
  
}

function draw() {
	
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  keyPressed();

  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
}
