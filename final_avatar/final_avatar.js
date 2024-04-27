function setup() {
createCanvas(600,600)
background(151, 145, 131)
}

function draw() {
fill(45, 19, 12); //hair
stroke(0, 0, 0);
strokeWeight(2);
arc(300, 300, 240, 260, PI, 0, CHORD); //curved rectangular hair
rect(180, 300, 240, 110);

stroke(45, 19, 12); //line covering the intersecting arc and rect stroke lines
rect(182, 299, 236, 3);

stroke(0, 0, 0); //head
fill(243, 206, 176);
arc(300, 300, 200, 200, 0, PI, CHORD);

rect(215, 310, 75, 40); //rect glasses
rect(310, 310, 75, 40);
line(290, 325, 310, 325);

fill(0, 0, 0); //mouth
arc(300, 375, 20, 10, PI, 0, CHORD);

arc(250, 325, 50, 15, 0, PI, CHORD); //eyes
arc(350, 325, 50, 15, 0, PI, CHORD);

fill(243, 206, 176); //hands
ellipse(185, 360, 40, 40);
ellipse(415, 360, 40, 40);

strokeWeight(2);
fill(243, 206, 176); //feet
ellipse(260, 420, 35, 35);
ellipse(340, 420, 35, 35);

fill(45, 19, 12); //bangs
snoStroke();
arc(300, 300, 200, 200, PI, 0, CHORD);

stroke(0, 0, 0); //bangs border
line(150, 300, 300, 300);
}
