var setup = function() {
  createCanvas(1400, 780);
  colorMode(HSB, 100);
  background(50);
};

var a = 690;
var b = 395;
var c = 540;
var d = 655;
var e = 390;
var f = 395;

var draw = function() {

  // Triangle 3
  fill(95, 55, 100);
  noStroke();
  triangle(710, 385, 860, 125, 1010, 385);

  // Triangle 4
  colorMode(HSB, 100);
  var col = map(mouseX, 0, width, 0, 100);
  fill(col, 50, 100);
  frameRate(50);
  triangle(710, 395, 1010, 395, 860, 655);


  // Triangle 6

  if (keyIsDown(LEFT_ARROW)) {
    a -=5;
    c-=5;
    e-=5;
    background(50);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    a+=5;
    c+=5;
    e+=5;
    background(50);
  }
  if (keyIsDown(UP_ARROW)) {
    b-=5;
    d-=5;
    f-=5;
    background(50);
  }
  if (keyIsDown(DOWN_ARROW)) {
    b+=5;
    d+=5;
    f+=5;
    background(50);
  }

  fill(16, 67, 100);
  triangle(a, b, c, d, e, f);

  // Triangle 2
  colorMode(HSB, 100);
  var r = random(0, 100);
  fill(255);
  stroke(r,30,100);
  strokeWeight(4);
  frameRate(50);
  triangle(700, 385, 550, 125, 850, 125);


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
  triangle(mouseX, mouseY, 850, 655, 550, 655);

  // Triangle 1
  fill('#E187FF');
  noStroke();
  translate(542, 255);
  if ((mouseX > 410 && mouseX < 670) && (mouseY > 145 && mouseY < 365)) {
    rotate(radians(frameCount));
    background(50);
    // clear();
  }
  triangle(148, 130, -152, 130, -2, -130);


}
