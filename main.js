music_1 = "music.mp3";
music_2 = "music2.mp2";
leftwristy = 0;
leftwristx = 0;
right_wrist_x = 0;
right_wrist_y = 0;
leftWrist = 0;
Status = "";

function preload() {
    music_1 = loadSound("music.mp3");
    music_2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill('#FF0000');
    stroke('#FF0000');
    if (leftWrist > 0.2) {
        circle(leftwristx, leftwristy, 20);
        Status = "true";
        music_1.play();
        music_1.setVolume(1);
        music_1.rate(1);
    }
    if(Status = "false"){
        stop.music_1;

    }

}

function modelLoaded() {
    console.log("Posenet is model Loaded");
}3

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("left wristx = " + leftwristx, "left wristy = " + leftwristy);
        rightwristx = rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("right wristx = " + rightwristx, "right wristy = " + rightwristy);
    }

}