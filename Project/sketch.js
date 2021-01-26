
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var crumpledPaper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,700,width,100);
	dustbinObj=new dustbin(1200,650);
	crumpledPaper =new Paper(200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
 
   if (keyDown(DOWN_ARROW)){
	crumpledPaper.y=crumpledPaper.y+2
	crumpledPaper.x=crumpledPaper.x+6
   }

  groundObject. shapeColor=rgb(44,101,29);

  groundObject.display();
  dustbinObj.display();
  crumpledPaper.display();
}

