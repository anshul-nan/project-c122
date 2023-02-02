function preload()
{

}
function setup(){
canvas = createCanvas(450,450);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw()
{
    image(video,58,75,335,335);
  
    fill(0,255,0);
    stroke(0,255,0);
    rect(25,25,360,25);
    fill(255,0,0);
    stroke(255,0,0);
    circle(35,35,60);
    fill(0,225,0);
    stroke(0,255,0);
    rect(25,62,25,360);
    fill(255,0,0);
    stroke(255,0,0);
    circle(35,415,60);
    fill(0,225,0);
    stroke(0,255,0);
    rect(400,62,25,360);
    fill(255,0,0);
    stroke(255,0,0);
    circle(415,415,60);
    circle(415,35,60);
  
    
    
}

function take_snapshot()
{
    save('my_picture.jpg')
}