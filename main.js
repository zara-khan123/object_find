video = "";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 480, 380);
    f(status != "")
    {objectDetector.detect(video, gotResults)};
    for (i = 0; i < objects.length; i++ ) 
    {
        document.getElementById("status").innerHTML = "Status: object detected";
        document.getElementById("number_of_objects").innerHTML = "number of objects detected are: "+objects.length;
        fill('#ff0000');
        percent = floor(objects[i].confidence * 100);
        text = (objects[i].label + " " + percent + "%" ,objects[i].x + 15, objects[i].y + 15);
        nofill();
        stroke('#ff0000');
        rect(object[i].x, object[i].y, objects[i].width, objects[i].height);

    }
}
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
}

function modelLoaded()
{
    console.log("Model loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResults(error, results)
{
if (error){
    console.log(error);
} else {
console.log(results);
objects = results;
}}