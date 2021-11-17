function activateLightOne(){
    var lightRed = document.getElementById("one");
    lightRed.style.backgroundColor = "red";
}

function activateLightTwo(){
    var lightBlue = document.getElementById("two");
    lightBlue.style.backgroundColor = "blue";
}

function activateLightThree(){
    var lightGreen = document.getElementById("three");
    lightGreen.style.backgroundColor = "green";
}

function activateLightFour(){
    var lightYellow = document.getElementById("four");
    lightYellow.style.backgroundColor = "yellow";
}

function activateLightFive(){
    var lightOrange = document.getElementById("five");
    lightOrange.style.backgroundColor = "orange";
}

function disableLights(lightId){
    var disableLight = document.getElementById(lightId);
    disableLight.style.backgroundColor = "#CDCDCD";
}