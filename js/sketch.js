var canvas;

const PATH = 'js/data/', FILE = 'image', EXT = '.png';
const IMAGES = 39, imgs = Array(IMAGES);
var idx;

function preload() {
    for (var i = 0; i < IMAGES; i++){
        imgs[i] = loadImage(PATH + FILE + i + EXT);
    }
}

function setup() {
    // background(255,0,0);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-holder');
    imageMode(CENTER);
    blendMode(EXCLUSION);

}

// function mouseWheel(event) {
// function mouseDragged() {
function mouseReleased() {
        idx = Math.floor(random(imgs.length));
        push();
        translate(mouseX, mouseY);
        rotate(random(-30, 30));
        image(imgs[idx], 0, 0);
        pop();
}

function mousePressed() {
        tint(255,255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}