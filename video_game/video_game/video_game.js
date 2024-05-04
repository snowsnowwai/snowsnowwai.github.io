var ballx = 250;
var bally = 250;
var ballSize = 80;
var score = 0;
var gameState = "L1";
var bg, img;

function preload() {
  bg = loadImage('jade_bkgd.png');
  img = loadImage('ball.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textFont('Courier New', 30);
  fill(255);
} // end setup

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

  text(("Score: " + score), width / 2, 80);
} // end draw

function levelOne() {
  text("Level 1", width / 2, height - 50);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(0, 550);
    bally = random(0, 550);
    score = score + 1;
  }
  if (score > 5) {
    gameState = "L2";
  }
  image(img, ballx, bally, ballSize, ballSize);
} // end level one

function levelTwo() {
  background(bg);
  text("Level 2", width / 2, height - 50);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(0, 560);
    bally = random(0, 560);
    ballSize = ballSize - 3
    score = score + 1;
  }
  if (score > 10) {
    gameState = "L3";
  }
  image(img, ballx, bally, ballSize, ballSize);
} // end level two

function levelThree() {
  background(bg);
  text("Level 3", width / 2, height - 50);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(0, 575);
    bally = random(0, 575);
    ballSize = ballSize - 5
    score = score + 1;
  }
  if (score > 15) {
  }
  image(img, ballx, bally, ballSize, ballSize);
} // end level three
