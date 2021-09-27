var buttonDiv = document.querySelector(".buttonBox");
var container = document.querySelector(".button");
var startGame = document.querySelector(".startButton");//need to add to html
var contentBox = document.querySelector(".content"); // change again to match html


//clicking button to add a new button (missing onclick)

//creates container button to add element 
var btn = document.createElement("BUTTON");

//event listener when clicked, this happens
startGame.addEventListener("click", ####);
var 

//hiding a div with display none
function buttonDisplay() {
    if (buttonDiv.style.display === "none") {
      buttonDiv.style.display = "block";
    } else {
      buttonDiv.style.display = "none";
    }
  }

//function pulling html class and adding style
  function myFunction() {
    document.querySelector(".example").style.backgroundColor = "red";
  }

  //timer template
  /*
  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }*/