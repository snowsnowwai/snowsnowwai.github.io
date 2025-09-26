function setup() {
createCanvas(800,800)
background(151, 145, 131)
}

function draw() {
    //hair details
    strokeWeight(0);
    fill(45, 19, 12);
    stroke(0, 0, 0);

    //hair
    arc(400, 300, 440, 460, PI, 0, CHORD); 
    rect(180, 300, 440, 275);

    //line covering the intersecting arc and rect stroke lines
    stroke(45, 19, 12); 
    rect(182, 299, 436, 3);

    //head
    fill(243, 206, 176);
    arc(400, 300, 400, 400, 0, PI, CHORD);

    //glasses
    strokeWeight(3);
    line(382, 385, 418, 385);
    ellipse(305, 385, 150, 70);
    ellipse(495, 385, 150, 70);
    
    //mouth
    strokeWeight(4);
    fill(0, 0, 0);
    arc(400, 475, 20, 10, PI, 0, CHORD);

    //eyes
    strokeWeight(2);
    arc(310, 375, 100, 30, 0, PI, CHORD);
    arc(490, 375, 100, 30, 0, PI, CHORD);

    //hands
    strokeWeight(0);
    fill(243, 206, 176);
    ellipse(200, 460, 60, 60);
    ellipse(600, 460, 60, 60);

    //feet
    strokeWeight(2);
    fill(243, 206, 176);
    ellipse(310, 540, 45, 45);
    ellipse(490, 540, 45, 45);
}