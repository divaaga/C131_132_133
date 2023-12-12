var img = "";
var status = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(660, 400);
    canvas.center();    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Objects are being detected";
}

function modelLoaded() {
    console.log("initializing object detection...");
    status = true;
    objectDetector.detect(img, gotResults);
}

function draw() {
    image(img, 0, 0, canvas.width, canvas.height);
    fill("red");
    textSize(20);
    text("DOG", 200, 80);
    noFill();
    stroke("red");
    rect(10, 50, canvas.width-35, canvas.height-60);

    fill("red");
    textSize(20);
    text("CAT", 310, 80);
    noFill();
    stroke("red");
    rect(300, 60, canvas.width-350, canvas.height-85);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else{
        console.log(results);
    }
}
