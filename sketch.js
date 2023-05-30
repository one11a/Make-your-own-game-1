var runner;
var runnerImg;
var backgroundImg;
function preload(){
    runnerImg = loadImage("runner.png");
    backgroundImg = loadImage("Forest3.jpg");
    }

function setup(){
    createCanvas(1500,750);
runner = createSprite(400,600,20,40);
runner.addImage(runnerImg);
runner.scale = 0.5;
}



function draw(){
background(backgroundImg);
if(keyIsDown(RIGHT_ARROW)){
    runner.x +=5
}
drawSprites()
}
