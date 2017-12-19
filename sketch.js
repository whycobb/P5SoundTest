var mySound;
var peaks = [];
var current;

function preload() {
  mySound = loadSound("volumes.mp3");
}

function setup() {
  createCanvas(800,200);
 // display instructions
  textAlign(CENTER);
  fill(0);
  noStroke();
  text("Click to play sound", width/2, height/2);

    textAlign(LEFT);
    
    peaks = mySound.getPeaks(800);
    
    current = 0;
}

function draw(){
    clear();
    
    //p5js is bad so this variable calibrates the playhead. Might need tweaking on other computers.
    if (mySound.isPlaying()) current = mySound.currentTime() * 1.088747;
    
    //if (mySound.isPlaying()) current = mySound.currentTime();
    
    for (i = 0; i < peaks.length; i++) {
        
        if ( Math.abs(current/mySound.duration() - i/800) < 0.001) {
            fill(255, 0, 0)
        } else {
            fill(0, 255, 255);
        }
        
        rect(i*(width/peaks.length), 0, width/peaks.length, peaks[i] * 200);
        
    }
    
    
    text("Current time: " + current.toFixed(3) + "\"", 5, 170);
    text("Total time: " + mySound.duration().toFixed(3) + "\"", 5, 180);
    text("Framerate: " + getFrameRate(), 5, 190);
    
    
    
    //rect(0, 0, 50, 50);

}
  

 
function mousePressed() 
{
  // trigger sound
    if (mySound.isPlaying()) {
        //mySound.rate(0.5);
        mySound.pause();
    } else {
        mySound.play();
    }
    
  //mySound.play();
  
  // change background color
  //background(random(255), random(255), random(255));
  
}
