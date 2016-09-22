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

var y1 = -30;
var y2 = -17;
var y3 = -120;
var y4 = -107;

var draw = function() {
  colorMode(HSB, 100);
  var r = random(0, 100);

  // Rain Triangles
  fill(255);
  background(50);
  triangle(70, (y1 + 7), 85, (y1 + 7), 77.5, (y2 + 7));
  triangle(1340, (y1-200), 1355, (y1-200), 1347.5, (y2-200));
  triangle(45, (y3-70), 60, (y3-70), 52.5, (y4-70));
  triangle(1150, (y3-10), 1165, (y3-10), 1157.5, (y4-10));
  triangle(450, (y3-600), 465, (y3-600), 457.5, (y4-600));

  fill(r,50,100);
  triangle(1200, (y1-100), 1215, (y1-100), 1207.5, (y2-100));
  triangle(125, (y1-500), 140, (y1-500), 132.5, (y2-500));
  triangle(205, (y3-700), 220, (y3-700), 212.5, (y4-700));
  triangle(40, y1, 55, y1, 47.5, y2);
  triangle(350, (y1-300), 365, (y1-300), 357.5, (y2-300));
  triangle(700, (y1-40), 715, (y1-40), 707.5, (y2-40));
  triangle(1100, y1, 1115, y1, 1107.5, y2);

  fill(50,40,100);
  triangle(1300, (y3-200), 1315, (y3-200), 1307.5, (y4-200));
  triangle(680, y3, 695, y3, 687.5, y4);
  triangle(750, (y1-100), 765, (y1-100), 757.5, (y2-100));
  triangle(100, (y1 - 40), 115, (y1-40), 107.5, (y2-40));
  triangle(600, (y1-400), 615, (y1-400), 607.5, (y2-400));
  triangle(1250, (y3-50), 1265, (y3-50), 1257.5, (y4-50));

  fill(30, 40, 100);
  triangle(500, (y3-500), 515, (y3-500), 507.5, (y4-500));
  triangle(200, (y3-100), 215, (y3-100), 207.5, (y4-100));
  triangle(900, y3, 915, y3, 907.5, y4);
  triangle(400, (y1-200), 415, (y1-200), 407.5, (y2-200));

  // Triangle 3
  fill(95, 55, 100);
  noStroke();

  if ((mouseX > 780 && mouseX < 930) && (mouseY > 210 && mouseY < 350)) {
    scale(0.5, 0.5);
    translate(700, 400);
  }
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
  fill(255);
  stroke(r,30,100);
  strokeWeight(6);
  frameRate(50);
  triangle(700, 385, 550, 125, 850, 125);

  // Triangle 1
  fill('#E187FF');
  noStroke();
  translate(540, 298);
  if ((mouseX > 410 && mouseX < 670) && (mouseY > 145 && mouseY < 365)) {
    rotate(radians(frameCount * 3));
    background(50);
    // clear();
  }
  triangle(150, 87, -150, 87, 0, -173);

  // Triangle 5
  noFill();
  noStroke();
  translate(-540,-298);
  if (mouseIsPressed) {
    fill(r, 30, 100);
    frameRate(50);
    background(50);
  }
  triangle(mouseX, mouseY, 850, 655, 550, 655);

}

function mouseWheel(event) {
  println(event.delta);
  //move the square according to the vertical scroll amount
  y1 += event.delta;
  y2 += event.delta;
  y3 += event.delta * 1.4;
  y4 += event.delta * 1.4;

  if (y1 >= 900) {
    y1 = -30;
  }
  if (y2 >= 913) {
    y2 = -17;
  }

  if (y3 >= 900) {
    y3 = -120;
  }
  if (y4 >= 913) {
    y4 = -107;
  }
  //uncomment to block page scrolling
  return false;

}
