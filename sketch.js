const Engine = Matter.Engine 
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint

var ball 
var ground 
var box1 , box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14
var engine ,world 
var rope

function setup() {
  createCanvas(3000,800);
  
  engine = Engine.create ()
  world = engine.world

ground = new Ground(600,620,1000,20)
ball = new Ball(200,200,100)

box1 = new Box(900, 100, 70, 70);
box2 = new Box(900, 100, 70, 70);
box3 = new Box(900, 100, 70, 70);
box4 = new Box(900, 100, 70, 70);
box5 = new Box(900, 100, 70, 70);
box6 = new Box(900, 100, 70, 70);
box7 = new Box(800, 100, 70, 70);
box8 = new Box(800, 100, 70, 70);
box9 = new Box(800, 100, 70, 70);
box10 = new Box(800, 100, 70, 70);
box11 = new Box(800, 100, 70, 70);
box12 = new Box(800, 100, 70, 70);
box13 = new Box(700, 100, 70, 70);
box14 = new Box(700, 100, 70, 70);

rope = new Rope(ball.body,{x:500, y:50})
}

function draw() {
  background(170);  

  ground.display()
  ball.display()
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()

  rope.display();
}