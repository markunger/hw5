var x1 = [];
var y1 = [];

var d1 = 30;
var d2 = 100;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	for(var i = 0; i < 100; i++){
		x1[i] = random(0, width);
		y1[i] = random(0, height);
	}
}
  
function draw() {
  background(255);
  noStroke();

  // draw two ellipses
  fill(120, 60, 100);
	for(var i = 0; i < 100; i++){
		
  ellipse(x1[i], y1[i], random(d1, d2));
	}
  
  // 1% of the time
  if (random() < 0.01) {
    // random diameter between 10 and 400
    d1 = random(10, 400);
  }
  
  // 2% of the time…
  if (random() < 0.02) {
    // random diameter between 10 and 400
    d2 = random(10, 400);
  }
}
