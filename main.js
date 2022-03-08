function preload() {
    
}
function take_snapshot() {
    save("myfilterimage.png");
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center(); 
    video=createCapture(VIDEO);
    video.size(300,292);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('poseNet has initialized qwerty');
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        console.log("noseX = " + results[0].pose.nose.x);
        console.log("noseY = " + results[0].pose.nose.y);
    }
}