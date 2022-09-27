timer_counter = 0;
quick_draw_data_set = ["eraser", "welc"];
answer_holder="";

function setup() {
    canvas = createCanvas(400, 300);
    background("white");
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
}
function clearCanvas() {
    background("white");
}
function preload() {
    classifier = ml5.imageClassifier('DoodleNet');

}
function draw() {
    strokeWeight(5);
    stroke("green");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);

}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById("label").innerHTML = "Label: " + results[0].label;
    document.getElementById("confidence").innerHTML = "Confidence: " + Math.round(results[0].confidence * 100) + "%";
    speak(results[0].label);
}
function speak(speakthis) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(speakthis));
}




function draw() {
    function checksketch() {
        timer_counter++;
        document.getElementById("timer").innerHTML = "Timer: " + timer_counter;
        console.log(timer_counter);
        if (timer_counter > 10000) {
            timer_counter = 0;
            timer_check = "completed";
        }
        if ((timer_check = "completed") || (answer_holder = set)) {
            timer_check = "";
            answer_holder = "";
        }
    }
}

function newSketchGoal() {
    random_number = Math.random() * quick_draw_data_set.length;
    document.getElementById("sketchtobedrawn").innerHTML = "Sketch to be drawn: " + random_number;
}
