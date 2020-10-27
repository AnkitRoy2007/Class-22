const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var object,ball;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true
  }
  var ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,90,25,ball_options);
  World.add(world,ball);
  object = Bodies.rectangle(200,350,270,40,object_options);
  World.add(world,object);
  console.log(object);
}
function draw(){
  background("black");
  rectMode(CENTER);

  Engine.update(engine);
  rect(object.position.x,object.position.y,270,40);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}
