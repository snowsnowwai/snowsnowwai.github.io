var img;
var initials ='aw'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png'); //fix this
  img2 = loadImage('bottom_bun.png');
  img3 = loadImage('patty.png');
  img4 = loadImage('cheese.png');
  img5 = loadImage('pickle.png');
  img6 = loadImage('onion.png');
  img7 = loadImage('lettuce.png');
  img8 = loadImage('tomato.png');
  img9 = loadImage('ketchup.png');
  img0 = loadImage('mustard.png');
  img1 = loadImage('top_bun.png');
  bg = loadImage('background.png');
}

function setup() {
createCanvas(945, 712);  // canvas size
background(bg);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

//bottom bun
 if (toolChoice == '1' ) {  // first tool
    image(img2, mouseX-187, mouseY-187, 375, 375);

//patty
  } else if (toolChoice == '2') { // second tool
    image(img3, mouseX-187, mouseY-187, 375, 375);

// cheese   
  } else if (img4, toolChoice == '3') { // third tool
    image(img4, mouseX-187, mouseY-187, 375, 375);
    
//pickle
  } else if (toolChoice == '4') {
    image(img5, mouseX-187, mouseY-187, 375, 375);

//onion
  } else if (key == '5') { // this tool calls a function
    image(img6, mouseX-187, mouseY-187, 375, 375);
    
//lettuce
  } else if (key == '6') { // this tool calls a function
    image(img7, mouseX-187, mouseY-187, 375, 375);
    
//tomato
  } else if (key == '7') { // this tool calls a function
    image(img8, mouseX-187, mouseY-187, 375, 375);
    
//ketchup
  } else if (key == '8') { // this tool calls a function
    image(img9, mouseX-187, mouseY-187, 375, 375);

//mustard
  } else if (key == '9') { // this tool calls a function
    image(img0, mouseX-187, mouseY-187, 375, 375);
    
//top bun
  } else if (key == '0') { // this tool calls a function
    image(img1, mouseX-187, mouseY-187, 375, 375);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {

    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
