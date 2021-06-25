const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var hexPic
var floor
var floater1
var floater2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
var physicalabuseofhexagon
var sling
var score = 0
function preload(){
hexPic = loadImage("polygon.png")
}
function setup() {
    createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
box1 = new Box(431.25,450,112.4,50)
box2 = new Box(543.75,450,112.4,50)
box3 = new Box(656.25,450,112.4,50)
box4 = new Box(768.75,450,112.4,50)
box5 = new Box(475,400,112.4,50)
box6 = new Box(475+112.5,400,112.4,50)
box7 = new Box(475+112.5+112.5,400,112.4,50)
box8 = new Box(431.25+112.5,350,112.4,50)
box9 = new Box(431.25+112.5*2,350,112.4,50)
box10 = new Box(431.25+168.75,300,112.4,50)
box11 = new Box(933.333,270,115,30)
box12 = new Box(933.333+115,270,115,30)
box13 = new Box(933.333+115*2,270,115,30)
box14 = new Box(933.333+60,240,115,30)
box15 = new Box(933.333+60+115,240,115,30)
box16 = new Box(112.5+933.3,210,115,30)
floor = new Floor(650,600,2000,50);
floater1 =new Floor(600,500,450,20)
floater2 =new  Floor(1050,300,350,20)
var option = {
density:1
}
physicalabuseofhexagon = Bodies.circle(100,350,30,option)
World.add(world,physicalabuseofhexagon)
sling = new Shoot(physicalabuseofhexagon,{x:150,y:350})
}

function draw() {
background("blue")
Engine.update(engine)
floor.display()
floater1.display()
floater2.display()
box1.display()
box2.display()
box3.display()
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
box15.display()
box16.display()
sling.display()
box1.score()
box2.score()
box3.score()
box4.score()
box5.score()
box6.score()
box7.score()
box8.score()
box9.score()
box10.score()
box11.score()
box12.score()
box13.score()
box14.score()
box15.score()
box16.score()
textSize(25)
text("Score =" + score,100,100)
imageMode(CENTER)
image(hexPic,physicalabuseofhexagon.position.x,physicalabuseofhexagon.position.y,60,60)
}
function mouseDragged(){
    Matter.Body.setPosition(physicalabuseofhexagon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(physicalabuseofhexagon);
	}
}