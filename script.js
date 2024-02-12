var character = document.getElementById("character");
var circle = document.getElementById("circle");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let circleLeft = parseInt(window.getComputedStyle(circle).getPropertyValue("left"));
    if(circleLeft<20 && circleLeft>-20 && characterTop>=130){
        circle.style.animation = "none";
        alert("Game over. You did not escape the bear's love. Score: "+Math.floor(counter/100)+".");
        counter=0;
        circle.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);