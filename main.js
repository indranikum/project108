var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7S8kaGtWw/model.json', modelReady);
    }
    function modelReady() {
    classifier.classify(gotResults);
    } 
    function gotResults (error, results) {
    if(error) {
    console.error(error);
    }
    else{
    console.log(results);
    random_number_r = Math.floor(Math.random()*255) + 1;
    random_number_g = Math.floor(Math.random()*255) + 1;
    random_number_b = Math.floor(Math.random()*255) + 1;

    document.getElementById("detected").innerHTML = "Detected Dog - "+dog+", Detected Cat - "+cat+", Detected lion - "+lion+", Detected cow - "+cow;
    document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
    document.getElementById("animal_voices").innerHTML = "Detected Voice is Of - " + results[0].label;
    document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
    img = document.getElementById("animal_images");

    if(results[0].label == "Barking"){
        img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
        dog = dog + 1;
    }
    else if(results[0].label == "Meowing"){
        img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
        cat = cat + 1;
    }
    else if(results[0].label == "Roar"){
        img.src = "https://tse2.mm.bing.net/th?id=OIP.7UJM5-iqjo6lkJxew5S-BwHaHa&pid=Api&P=0&h=180";
        lion = lion + 1;
    }
    else if(results[0].label == "Mooing"){
        img.src = "https://tse4.mm.bing.net/th?id=OIP.oBRpxocgY4aN37i9MFwaLwHaGY&pid=Api&P=0&h=180";
        cow = cow + 1;
    }
    else{
        img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
    }
    

}
}

 