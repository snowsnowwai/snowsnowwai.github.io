var ballx = (100, 700);
var bally = (100,700);
var ballSize = 90;
var score = 0;
var gameState = "L1";
var bg, img;

function preload() {
  bg = loadImage('jade_bkgd.png');
  img = loadImage('ball.png');
  end = loadImage('jade smile.jpg');
  font = loadFont('../game/libraries/Silkscreen/Silkscreen-Regular.ttf');
}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  textFont(font);
  textSize(50);
  fill(255, 255, 255, 200);
}

function draw() {
  background(bg);
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "L4") {
    levelFour();
  }
  if (gameState == "L5") {
    levelFive();
  }
  if (gameState == "L6") {
    levelSix();
  }
  // if (gameState == "L7") {
  //   levelSeven();
  // }
  text(("Score: " + score), 400, 100);
  if (gameState == "L7") {
    levelEnd();
  }
}

function mousePressed() {
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize) {
    ballx = random(0, 750);
    bally = random(0, 750);
    score = score + 1;

    // Adjust ball size based on the level
    if (gameState == "L2") {
      ballSize = ballSize;
    } else if (gameState == "L3") {
      ballSize = ballSize - 2;
    } else if (gameState == "L4") {
      ballSize = ballSize - 3;
    } else if (gameState == "L5") {
      ballSize = ballSize - 4;
    } else if (gameState == "L6") {
      ballSize = ballSize - 5;
    }
  }
}

function levelOne() {
  text("Level One", 400, height - 100);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (score > 5) {
    gameState = "L2";
  }
  image(img, ballx, bally, ballSize, ballSize);
}

function levelTwo() {
  background(bg);
  text("Level Two", 400, height - 100);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (score > 10) {
    gameState = "L3";
  }
  image(img, ballx, bally, ballSize, ballSize);
}

function levelThree() {
  background(bg);
  text("Level Three", 400, height - 100);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (score > 15) {
    gameState = "L4";
  }
  image(img, ballx, bally, ballSize, ballSize);
}

function levelFour() {
  background(bg);
  text("Level Four", 400, height - 100);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (score > 20) {
    gameState = "L5";
  }
  image(img, ballx, bally, ballSize, ballSize);
}

function levelFive() {
  background(bg);
  text("Level Five", 400, height - 100);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (score > 25) {
    gameState = "L6";
  }
  image(img, ballx, bally, ballSize, ballSize);
}

function levelSix() {
  background(bg);
  text("Level Six", 400, height - 100);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (score > 30) {
    gameState = "L7";
  }
  image(img, ballx, bally, ballSize, ballSize);
}

// function levelSeven() {
//   background(bg);
//   text("Level Seven", 400, height - 100);
//   var distToBall = dist(ballx, bally, mouseX, mouseY);
//   image(img, ballx, bally, ballSize, ballSize);
// }

function levelEnd() {
  background(end);
  // text(("Thank for feeding me"), 400, 100);
  text("Thanks for feeding me,", 400, height - 100);
  text("I'm so full!", 400, height - 50);
}