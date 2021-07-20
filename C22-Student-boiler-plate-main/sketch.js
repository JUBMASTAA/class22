const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

let engine;
let world;
var ball1;
var ball2
var ground;
var chain;
var chain2;




function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  
  world = engine.world;

  ball1 = new Ball(250, 50, 30);
  ball2 = new Ball(250,450, 40);

  chain = new Rope({x:250, y:50}, ball1.body);
  //chain2 = new Rope({x:ball1.body.position.x, y:ball1.body.position.y}, ball2.body);

  /*
  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);
  */

  
  
  con2 = Matter.Constraint.create({
          bodyA : ball1.body,
          pointA:{x:0, y:0},
          bodyB:ball2.body,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });

      World.add(world,con2);
      
      
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: true
	  }
  });
  
  Render.run(render);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  /*ellipse(ball.position.x,ball.position.y,10);
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y); 
  pop();
  */
  chain.display();
  ball1.display();
  //con2.display();
  ball2.display();
  line(ball1.body.position.x,ball1.body.position.y,ball2.body.position.x,ball2.body.position.y); 

}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball1.body,{x:0,y:0},{x:5,y:0});
    }
}

