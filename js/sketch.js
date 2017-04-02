var canvas;

const PATH = 'data/', FILE = 'image', EXT = '.png';
const IMAGES = 4, imgs = Array(IMAGES);
var idx = 0;

function preload() {
    for (var i = 0; i != IMAGES; imgs[i] = loadImage(PATH + FILE + (i++) + EXT));
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-holder');
    imageMode(CENTER);
}

function draw(){
    if (mouseIsPressed) {
    idx = ~~random(IMAGES);
    console.log("!!!!!" + idx);
    push();
    translate(mouseX, mouseY);
    rotate(random(-30, 30));
    image(imgs[idx], 0, 0);
    blendMode(blendMode(EXCLUSION));
    pop();
}

}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}