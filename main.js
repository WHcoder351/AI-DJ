song1 = "";
song2 = "";
lY = 0; 
lX = 0;
rY = 0; 
rX = 0;  
Lcore = 0;
SongS = "";
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    pose = ml5.poseNet(video, ml);
    pose.on('pose', gotPoses);
}
function ml() {
    console.log("Model Loaded");
}

function draw(){
    image(video, 0 , 0 , 500 , 500);
    fill("#3449eb");
    stroke("#3448ec");

    if (Lcore > 0.2) {
        circle(lX, lY , 20);
        Numbers = Number(lWy);
        numbers2 = floor(Numbers);
        volume = numbers2 / 600;
        song.setVolume(volume);
        document.getElementById("V").innerHTML = "Volume: " + volume;
    }
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        Lcore = results[0].pose.keypoints[9].score;
        lX = results[0].pose.leftWrist.x;
        lY = results[0].pose.leftWrist.y;
        console.log("leftWrist x = " + lX + " leftWrist y = " + lY);

        rX = results[0].pose.rightWrist.x;
        rY = results[0].pose.rightWrist.y;
        console.log("rightWrist x = " + rX + " rightWrist y = " + rY);
    }
}