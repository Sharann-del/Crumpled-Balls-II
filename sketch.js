var paper, paperBody, paperImg;
var dustbin,dustbin1,dustbin2,dustbinImg;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preLoad(){
	paperImg = loadImage("paper.png");
	dustbinImg = loadImage("dustbin.png");
}

function setup(){
	createCanvas(1200,400);
/* 
	paper=new Paper(100, 200, 25, 25);
	dustbin1 = new Dustbin(900,310,20,100);
	dustbin = new Dustbin(1000, height-45, 200, 20);
	dustbin2 = new Dustbin(1100, 310, 20, 100);
	ground=new Ground(width/2, height-35, width,10);
*/ 

	var options={
		isStatic:true,
		restitution:0.3,
		friction:0.5,
		density:1.2,
	}

	dustbin1 = createSprite(900,310,20,100);
	dustbin = createSprite(1000, height-45, 200, 20);
	dustbin.addImage(dustbinImg);
	dustbin2 = createSprite(1100, 310, 20, 100);

	dustbin1.shapeColor = "violet";
	dustbin.shapeColor = "violet";
	dustbin2.shapeColor = "violet";

	paper=createSprite(100, 348, 25, 25);
	paper.shapeColor="red";
    paper.addImage(paperImg); 

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);

	paperBody = Bodies.circle(100 , 348 , 5 , options);
	World.add(world, paperBody);
	
	dustbinDrop = Bodies.rectangle(width/2, height-65, 200, 20 , {isStatic:true} );
 	World.add(world, dustbinDrop);

	dustbinDrop1 = Bodies.rectangle(300, 610, 20, 200 , {isStatic:true} );
	World.add(world, dustbinDrop1);

	dustbinDrop2 = Bodies.rectangle(500, 610, 20, 200 , {isStatic:true} );
	World.add(world, dustbinDrop2);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);
//	paper.x= mouseX; 
//	paper.y= mouseY; 
	paper.collide(dustbin);
	paper.collide(dustbin1);
	paper.collide(dustbin2);
//	paper.mouseX = false;
	drawSprites();
	keyPressed();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
	  paper.velocityY = -3;
	  paper.velocityX = 7;
	  if(paper.x >= 480){
        paper.velocityY = -2;
	  }
	  if(paper.x >= 520){
        paper.velocityY = -1;
	  }
	  if(paper.x >= 580){
        paper.velocityY = 0;
	  }
	  if(paper.x >= 620){
        paper.velocityY = 1;
	  }
	  if(paper.x >= 680){
        paper.velocityY = 2;
	  }
	//Matter.Body.setStatic(paperBody,false);
  }
}