var bullet, wall, thickness;
var speed,weight;
var damage;
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50, 150, 50, 10);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX = speed;
}

function draw() {
  background("black");  
  if(bullet.x-wall.x < bullet.width/2 + wall.width/2 &&
    wall.x - bullet.x <bullet.width/2 + wall.width/2 &&
    bullet.y-wall.y < bullet.height/2 + wall.height/2 &&
    wall.y - bullet.y <bullet.height/2 + wall.height/2){ 
     damage = 0.5*weight*speed*speed/thickness*thickness*thickness
     if(damage<10){
       bullet.shapeColor = "green";
       bullet.velocityX = 0;
     }
     if(damage>10){
       bullet.shapeColor = "red";
       bullet.velcoityX = 0;
     }
    }
  drawSprites();
}