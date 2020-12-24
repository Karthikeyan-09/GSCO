var car, wall;
var speed, weight;

function setup() {
  createCanvas(600,400);
  speed =random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(595,200,90,200);
  wall.shapeColor = "brown";
  car.velocityX = speed;
  
}

function draw() {
  background("black"); 
  if (wall.x - car.x <(car.width+wall.width)/2 && car.x + wall.x > (car.width / 2+wall.width/2)) {
    car.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/22500;
  if (deformation>180) {
    car.shapeColor = "red";
    car.velocityX = 0;
  }
  if (deformation<180 && deformation>100) {
    car.shapeColor = "yellow";
  }
  if (deformation<100) {
    car.shapeColor = "green";
  }
  }
  drawSprites();
}