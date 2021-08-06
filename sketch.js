
var sea;
var ship;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addAnimation("sea moving", seaImg);
  sea.velocityX = -3
  sea.scale = 0.3
  
  ship = createSprite(200, 270, 30, 30);
  ship.addAnimation("ship moving up and down", shipImg1);
  ship.scale = 0.3;

 
}

function draw() {
  if(sea.x<0){
    sea.x = sea.width/7;
  }
 
  
  background("blue");
  drawSprites();
}