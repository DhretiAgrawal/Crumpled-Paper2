const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject , paper , dustbinImage , dustbin , dustbin2 , dustbin3 , ground;

function preload()
{
	 paper = loadImage("paper.png");
	 dustbinImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(900, 500);

    engine = Engine.create();
	world = engine.world;

	ground=createSprite(width/2, height-35, width,10);
	//ground=createSprite(900,450,15,400);
	ground.shapeColor=color(255)
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	paperObject = new Paper(200,100,50);
	//paperObject.addImage(paper);

	dustbin = createSprite(700,350,100,15);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.7;
	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //2. sketch.js: Line 52, 53, 54: .display()? There is no class created for dustbin, hence, the 
  //display function does not exist. First create a dustbin class, only then dustbins will be displayed

  paperObject.display();
  dustbin.display();

  //ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}

//Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

