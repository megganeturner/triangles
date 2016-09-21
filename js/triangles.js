var setup = function() {
  createCanvas(1400, 780);
  background(200, 200, 200);
};




var draw = function() {
  var r = random(0, 255);

  // Triangle 1
  fill(255);
  stroke(r,255,255);
  strokeWeight(5);
  frameRate(2);
  triangle(700, 390, 400, 390, 550, 130);

  // Triangle 2
  fill('#E187FF');
  noStroke();
  // if (mouseIsPressed && (mouseX > )
  triangle(700, 390, 550, 130, 850, 130);

  // Triangle 3
  fill(255);
  noStroke();
  triangle(700, 390, 850, 130, 1000, 390);

  // Triangle 4
  var col = map(mouseX, 0, width, 0, 255);
  fill(col, col, 0);
  triangle(700, 390, 1000, 390, 850, 650);



  // Triangle 6
  fill(255);
  triangle(700, 390, 550, 650, 400, 390);

  // Triangle 5
  noFill();
  noStroke();
  if (mouseIsPressed) {
    fill(random(200, 255), random(200, 255), random(200, 255))
    frameRate(100);
  }
  triangle(mouseX, mouseY, 850, 650, 550, 650);



}
