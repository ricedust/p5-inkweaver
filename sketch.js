let cellSize = 20;
let columns;
let rows;

function setup() {
  createCanvas(windowWidth, windowHeight);
  columns = floor(width/cellSize);
  rows = floor(height/cellSize);

  noStroke();
  noFill();
}

function draw() {
  background(255);

  // beginShape();
  for (let x = 0; x < columns; x++) {
    // let xOffset = 0;
    for (let y = 0; y < rows; y++) {
      // let index = (y * width) + x;
      
      push();
      stroke(0);
      // translate(x * cellSize, y * cellSize);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      pop();
      
    }
  }
}
