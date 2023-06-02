function start()
{
    navigator.mediaDevices.getUserMedia({ausio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Si7JpCxoY/model.json", modelReady);

}
function modelReady() {
    classifier.classify(gotResults);
}