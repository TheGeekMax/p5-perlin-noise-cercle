var oldy = 200 , y = 200;
var offy =0.01;
 

function setup(){
  createCanvas(400,400);
  background(200);
  stroke(0);
  strokeWeight(1);
  
  for( x = 0 ; x < 400 ; x++){
    print(x);
    y = map(noise(map(x,0,400,0,1),offy),0,1,100,300);
    stroke(0,map(noise(map(x,0,400,0,1),offy),0,1,250,10),0);
    line(x-1,oldy,x,y);
    oldy = y;
    offy += 0.01;
  }
}

function draw(){
  
}