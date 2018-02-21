var x = 230;
var y = 220;
var numbers = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	for(var i = 0; i<10;i++){
		numbers[i] = random(1,10)
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  // draw drip
  
  
  for(var i = 0; i<10;i++){
		ellipse(x, y, 10);
		y = y + numbers[i];
		if(y > 600){
			y = 220;
		}
	}
}
