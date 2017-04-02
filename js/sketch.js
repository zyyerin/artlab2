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
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-holder');
    imageMode(CENTER);

}

function mouseDragged() {
        blendMode(OVERLAY);

        idx = Math.floor(random(imgs.length));
        var s = random(0.6, 1);
        push();
        translate(mouseX, mouseY);
        rotate(random(-30, 30));
        tint(255, random(200,255));
        image(imgs[idx], 0, 0, imgs[idx].width * s, imgs[idx].height * s);
        pop();  
}

function mouseReleased() {
        blendMode(EXCLUSION);

        idx = Math.floor(random(imgs.length));
        var s = random(1, 1.4);
        push();
        translate(mouseX, mouseY);
        rotate(random(-30, 30));
        tint(255, random(200,255));
        image(imgs[idx], 0, 0, imgs[idx].width * s, imgs[idx].height * s);
        pop();  
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}