
let images = []
let canvas;



// let img;
// let img2;
// let img3;
// let img4;
// let img5;
// let img6;


function preload() {
 img = loadImage('Big/big_1.png');
 img2 = loadImage('Big/big_2.png');
 img3 = loadImage('Big/Big_3.png');
 img4 = loadImage('Big/Big_4.png');
 img5 = loadImage('Big/Big_5.png');
 img6 = loadImage('Big/Big_6.png');
  
  images = [img,img2,img3,img4,img5,img6]
 

}



function setup() {


  canvas =  createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  noLoop();
  // background(255, 204, 0);

  rectMode(CENTER);
    let X = random(0,100)
  
    

    let randoimages = random(images);
    let randoimages2 = random(images);
    let randoimages3 = random(images);
    let randoimages4 = random(images);

    image(randoimages,20,350,350,350)
    image(randoimages2,20,350,350,350)
    image(randoimages3,20,350,350,350)
    image(randoimages4,20,350,350,350)


    


}





function placeImage1(){
  image(img,20,350,350,350)
  

  
}
function placeImage2(){
  image(img2,20,350,350,350)
  
}
function placeImage3(){
  image(img3,20,350,350,350)
  
}
function placeImage4(){
  image(img4,20,350,350,350)
  
}
function placeImage5(){
  image(img5,20,350,350,350)
  
}
function placeImage6(){
  image(img6,20,350,350,350)
  
}


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


