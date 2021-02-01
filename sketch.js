let img;

function preload (){
  img = loadImage ('/Images/DayWindow3.png');
}

function setup() {
  createCanvas(windowWidth, windowWidth);
noStroke ();
}

function draw() { 
  
var num = 4; 
  
var XsideLen = windowWidth / num;

 var YsideLen = (windowWidth / num) / 2;

  
  for (var dy = 0; dy < windowWidth; dy = dy + YsideLen) {

    for (var dx = 0; dx < windowWidth; dx = dx + XsideLen) {
    
   quad(dx, dy,
          dx + XsideLen, dy,
          dx + XsideLen, dy + YsideLen,
          dx, dy + YsideLen);

    image(img, dx, dy, XsideLen, YsideLen);
  } 
    
  }

}
