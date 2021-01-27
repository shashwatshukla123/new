const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var gameState="start";
var car,carimg,cars;
var car1,car1img,car2,car2img,car3,car3img,car4,car4img;
var track;
var tree,treeimg;
var input1,input2,button;
var backimg,backimg2,roadimg;
var background1,name;


function preload(){
  backimg=loadImage("back.png")
  roadimg=loadImage("track.jpg")
  carimg=loadImage("car0.png")
  treeimg=loadImage("images.png")
  car1img=loadImage("car1.png")
  car2img=loadImage("car2.png")
  car3img=loadImage("car3.png")
  car4img=loadImage("car4.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine=Engine.create()
  world=engine.world
  background1=createSprite(200,200,50,50)
  
  background1.addImage(backimg)
  background1.scale=4;
    input1=createInput("name")
  input1.position(500,330)
  input2=input1.value()
  button=createButton('play')
 button.position(570,350)
 track=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight*5)
 track.addImage(roadimg)
  track.scale=3;
track.velocityY=1;
track.visible=false;
}

function draw() {
  background("grey"); 
  Engine.update(engine) 
  button.mousePressed(()=>{
    gameState="play"
    input1.hide()
    button.hide()
    background1.visible=false;
    track.visible=true;
   car=createSprite(430,700,20,20)
   car.addImage(carimg)
   car.scale=0.5;
   car1=createSprite(530,100)
   car1.addImage(car1img)
   car1.scale=0.5;
   car2=createSprite(630,100)
   car2.addImage(car2img)
   car2.scale=0.5;
   car3=createSprite(730,100)
   car3.addImage(car3img)
   car3.scale=0.2;
   car4=createSprite(830,100)
   car4.addImage(car4img)
   car4.scale=0.3;
   tree=createSprite(730,100)
   tree.addImage(treeimg)
   tree.scale=0.3;
cars[car1,car2,car3,car4]
  })
  

  if(keyDown("up")){
    car.y=car.y-1;
    camera.position.x=displayWidth/2;
    camera.position.y=car.y
    car2.y=car2.y+15;
    car3.y=car3.y+15;
    car4.y=car4.y+15;
    car1.y=car1.y+15;
  }

  if(keyDown("left")){
    car.x=car.x-10;
  }

  if(keyDown("right")){
    car.x=car.x+10;
  }

  if(keyDown("S")){
    car.y=car.y-40;
    camera.position.x=displayWidth/2;
    camera.position.y=car.y
  }

//var random = random-Number(1,4);
  //cars.setAnimation("cars"+random)


  drawSprites();
  if(gameState=="start"){
    textSize(24)
    stroke("black")
    fill("black")
  text("Car Racing Game",500,100)
  }
}
