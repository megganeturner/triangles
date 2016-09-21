var setup = function() {
  createCanvas(1400, 780);
  colorMode(HSB, 100);
  background(50);
};




var draw = function() {


  // Triangle 2
  fill('#E187FF');
  noStroke();
  // if (keyIsDown(DOWN_ARROW)) {
  //   rotate(90);
  // }
  triangle(700, 390, 550, 130, 850, 130);

  // Triangle 3
  fill(255);
  noStroke();
  triangle(700, 390, 850, 130, 1000, 390);

  // Triangle 4
  colorMode(HSB, 100);
  var col = map(mouseX, 0, width, 0, 100);
  fill(col, 50, 100);
  frameRate(50);
  triangle(700, 390, 1000, 390, 850, 650);


  // Triangle 6

  // Make this one move! http://p5js.org/reference/#/p5/keyIsDown
  fill(255);
  triangle(700, 390, 550, 650, 400, 390);

  // Triangle 1
  colorMode(HSB, 100);
  var r = random(0, 100);
  fill(255);
  stroke(r,30,100);
  strokeWeight(4);
  frameRate(50);
  triangle(700, 390, 400, 390, 550, 130);

  // Triangle 5
  noFill();
  noStroke();
  // colorMode(RGB, 255);
  if (mouseIsPressed) {
    fill(r, 30, 100);
    // fill(random(200, 255), random(200, 255), random(200, 255))
    frameRate(50);
    background(50);
    // background(200, 200, 200);
  }
  triangle(mouseX, mouseY, 850, 650, 550, 650);


}
