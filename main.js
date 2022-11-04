function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 550);
    canvas.position(790, 110);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw(){
    background("black");
}

function modelLoaded(){
    console.log("ze model is fully charged 👌🗿👍");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}
