let petalNumSlider;
let petalSizeSlider;
let centerSizeSlider;
let petalColorPicker;
let centerColorPicker;
let backgroundColorPicker;
let saveButton;

function setup() {
  createCanvas(400, 400);

  createP("Number of Petals");
  petalNumSlider = createSlider(4, 16, 8);

  createP("Petal Size");
  petalSizeSlider = createSlider(40, 140, 90);

  createP("Center Size");
  centerSizeSlider = createSlider(20, 100, 50);

  createP("Petal Color");
  petalColorPicker = createColorPicker('#ed8cba');

  createP("Center Color");
  centerColorPicker = createColorPicker('#f4ce62');

  createP("Background Color");
  backgroundColorPicker = createColorPicker('#fff0f5');

  createP("Save Your Sticker");
  saveButton = createButton("Download");
  saveButton.mousePressed(function() {
    saveCanvas("flower-sticker", "png");
  });
}

function draw() {
  background(backgroundColorPicker.value());

  translate(width/2, height/2);

  let num = petalNumSlider.value();
  let size = petalSizeSlider.value();

  for (let i = 0; i < num; i++) {
    push();

    rotate(i / num * TWO_PI);

    fill(petalColorPicker.value());
    noStroke();

    ellipse(0, -size/2, size/2, size);

    pop();
  }

  fill(centerColorPicker.value());
  noStroke();

  circle(0, 0, centerSizeSlider.value());
}
