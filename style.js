let button = document.getElementById("myBtn");

let message = document.getElementById("message1");

let message2 = document.getElementById("message2");

let message3 = document.getElementById("message3");

let message4 = document.getElementById("message4");




let clickCount = 0;

button.addEventListener("click", function() {
    clickCount++;

    if (clickCount === 1) {
        button.style.background = "blue";
        document.getElementById("message1").innerHTML = "You clicked the button once, good job!";
    }
    else if (clickCount === 2) {
        button.style.background = "yellow";
        document.getElementById("message2").innerHTML = "okay You clicked the button again cool, I guess"
        fontFamily = "Arial";
    }
    else if (clickCount === 3) {
        button.style.background = "blue";
        document.getElementById("message3").innerHTML = "okay you started to annoy me now"
        fontFamily = "courier";
    }
    else if (clickCount === 4) { 
        button.style.background = "red";
        document.getElementById("message4").innerHTML = "okay you are really annoying me now, stop it"
        fontFamily = "Comic Sans MS";
        button.style.color = "white";
    }

    else if (clickCount === 5) {
        button.style.background = "white";
        document.getElementById("message5").innerHTML = "I'm done with you, stop clicking the button"
        fontFamily = "arial";
        button.style.color = "black";
    }

    else if (clickCount > 5) {
        location.reload();
    }

    console.log("Click count: " + clickCount);
});