const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;

var ball, plank, chain, attached=false;




function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball();
  plank = new Plank();
  chain = new Line(plank.body,ball.body);
  
}

function draw() {
  background("black");  
  Engine.update(engine);
  ball.display();
  plank.display();
  chain.display();

  if(keyDown("space")){
    attached=true
  }

  if(keyDown("enter")){
    attached=false;
  }
  if(attached===true){
    ball.body.position.y = mouseY;
    ball.body.position.x = mouseX;
  }
  else {
    ball.body.position.x = 300;
    ball.body.position.y = 400;
  }
}