var path,playerBee;
var stone
var pathImg,mainRacerImg1,mainRacerImg2;

var stoneImage
var gameOverImg,cycleBell;

var pinkCG, yellowCG,redCG; 

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
  pathImg = loadImage("background2.jpg");
  mainRacerImg1 = loadAnimation("beesprite1.png","beesprite3.png");
  // mainRacerImg2= loadAnimation("mainPlayer3.png");
  
  stoneImage = loadImage("stone.png");
  // oppPink2Img = loadAnimation("opponent3.png");
  
  // oppYellow1Img = loadAnimation("opponent4.png","opponent5.png");
  // oppYellow2Img = loadAnimation("opponent6.png");
  
  // oppRed1Img = loadAnimation("opponent7.png","opponent8.png");
  // oppRed2Img = loadAnimation("opponent9.png");
  
  // cycleBell = loadSound("bell.mp3");
  // gameOverImg = loadImage("gameOver.png");
}

function setup(){
  
createCanvas(1200,850);
// Moving background
path=createSprite(width,450);
path.scale=4
path.addImage(pathImg);
path.velocityX = -5;

//creating bee flying
playerBee  = createSprite(70,150);
playerBee.addAnimation("bee",mainRacerImg1);
playerBee.scale=1;
  
// //set collider for playerBee


// playerBee.setCollider("rectangle",0,0,40,40);


  
// gameOver = createSprite(650,150);
// gameOver.addImage(gameOverImg);
// gameOver.scale = 0.8;
// gameOver.visible = false;  
  
// pinkCG = new Group();
// yellowCG = new Group();
// redCG = new Group();
  
}

function draw() {
  background(0);
  
  drawSprites();
//   textSize(20);
//   fill(255);
//   text("Distance: "+ distance,900,30);
  
//   if(gameState===PLAY){
    
//    distance = distance + Math.round(getFrameRate()/50);
//    path.velocityX = -(6 + 2*distance/150);
  
//    playerBee.y = World.mouseY;
  
//    edges= createEdgeSprites();
//    playerBee .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  
//     //code to play cycle bell sound
//   if(keyDown("space")) {
//     cycleBell.play();
//   }
  
//   //creating continous opponent players
//   var select_oppPlayer = Math.round(random(1,3));
  
//   if (World.frameCount % 150 == 0) {
//     if (select_oppPlayer == 1) {
//       pinkCyclists();
//     } else if (select_oppPlayer == 2) {
//       yellowCyclists();
//     } else {
//       redCyclists();
//     }
//   }
  
//    if(pinkCG.isTouching(playerBee)){
//      gameState = END;
//      stone.velocityY = 0;
//      stone.addAnimation("opponentstone",oppPink2Img);
//     }
    
//     if(yellowCG.isTouching(playerBee)){
//       gameState = END;
//       player2.velocityY = 0;
//       player2.addAnimation("opponentPlayer2",oppYellow2Img);
//     }
    
//     if(redCG.isTouching(playerBee)){
//       gameState = END;
//       player3.velocityY = 0;
//       player3.addAnimation("opponentPlayer3",oppRed2Img);
//     }
    
// }else if (gameState === END) {
//     gameOver.visible = true;
  
//     textSize(20);
//     fill(255);
//     text("Press Up Arrow to Restart the game!", 500,200);
  
//     path.velocityX = 0;
//     playerBee.velocityY = 0;
//     playerBee.addAnimation("SahilRunning",mainRacerImg2);
  
//     pinkCG.setVelocityXEach(0);
//     pinkCG.setLifetimeEach(-1);
  
//     yellowCG.setVelocityXEach(0);
//     yellowCG.setLifetimeEach(-1);
  
//     redCG.setVelocityXEach(0);
//     redCG.setLifetimeEach(-1);
    
//     if(keyDown("UP_ARROW")) {
//       reset();
//     }
createStones()
}

// }

function createStones(){
  if(frameCount % 80 === 0){
        stone =createSprite(1100,Math.round(random(50, 250)));
        stone.scale =0.06;
        stone.velocityX = -(6 + 2*distance/150);
        stone.addAnimation("opponentstone",stoneImage);
        //stone.setLifetime=170;
        //pinkCG.add(stone);
      }
}

// function yellowCyclists(){
//         player2 =createSprite(1100,Math.round(random(50, 250)));
//         player2.scale =0.06;
//         player2.velocityX = -(6 + 2*distance/150);
//         player2.addAnimation("opponentPlayer2",oppYellow1Img);
//         player2.setLifetime=170;
//         yellowCG.add(player2);
// }

// function redCyclists(){
//         player3 =createSprite(1100,Math.round(random(50, 250)));
//         player3.scale =0.06;
//         player3.velocityX = -(6 + 2*distance/150);
//         player3.addAnimation("opponentPlayer3",oppRed1Img);
//         player3.setLifetime=170;
//         redCG.add(player3);
// }

// function reset(){
//  gameState = PLAY;
//  gameOver.visible = false;
//  playerBee.addAnimation("SahilRunning",mainRacerImg1);
  
//  pinkCG.destroyEach();
//  yellowCG.destroyEach();
//  redCG.destroyEach();
  
//  distance = 0;
// }