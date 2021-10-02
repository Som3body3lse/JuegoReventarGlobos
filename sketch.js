var arrow, arrowImage, arrowGroup;
var bow, bowImage, background, backgroundImage;
var green, green_balloonImage, greenGroup;
var red, red_balloonImage, redGroup;
var pink, pink_balloonImage , pinkGroup;
var blue, blue_balloonImage, blueGroup;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  //crea el fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crea el arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  greenGroup=new Group();
  redGroup=new Group();
  blueGroup=new Group();
  pinkGroup=new Group();
  arrowGroup=new Group();
}

function draw() {
 background(0);
  //fondo en movimiento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco en movimiento
  bow.y = World.mouseY
  
   //suelta la flecha cuando se presione la tecla de barra espaciadora
  if (keyDown("space")) {
    createArrow(); 
  }
  
  //crea globos de forma continua 
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2){
      blueBalloon();
    } else if (select_balloon == 3){
      greenBalloon();
    } else if (select_balloon == 4){
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  if (arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
  
  if (arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
  }
  
  if (arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  
  drawSprites();
  textSize (20)
  text("Score:"+score,270,30);
}


//crea las flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.scale = 0.3;
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrowGroup.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.scale = 0.1;
  red.velocityX = 3;
  red.lifetime = 130;
  redGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20,370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.scale = 0.1;
  blue.velocityX = 3;
  blue.lifetime = 130;
  blueGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20,370)), 10, 10);
  green.addImage(green_balloonImage);
  green.scale = 0.1;
  green.velocityX = 3;
  green.lifetime = 130;
  greenGroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20,370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.scale = 1.4;
  pink.velocityX = 3;
  pink.lifetime = 130;
  pinkGroup.add(pink);
}