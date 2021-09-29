



var questionsText = document.querySelector('.questionsText');//<p>tag 
//object with questions, answers,and result if wrong answer(button) clicked
var questionIndex = [ 
  {
      question: "Which operator means less than?",
      answers: ("=", "@", "<", ">"),
      result: ("Correct!", "Incorrect."),
      index: 1
  },
  {
      name: "Which operator means 'and'?",
      answers:("and", "&&", "&", "<="),
      result: ("Correct!", "Incorrect."),
      index: 2
  },
  {
      question: "What does .querySelector(p) target?",
      answers: ("Paragraph tag", "Header tag", "Navigation bar","Last reference"),
      result: ("Correct!", "Incorrect."),
      index: 3
  }
];
// console.log(questionIndex[2]);
// var addText = function() {

//   $('.questionsText').text();
// };
console.log(questionsText);





// var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
// var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
// var star = "polaris";

// // The unshift method adds an element to the beginning of the array 
// constellations.unshift("Canis Major");
// console.log(constellations);

// // The pop method removes the last element in the array
// planets.pop();
// // The original array is changed
// console.log(planets);

// //The concat method joins constellations and planets array and returns new array
// var galaxy = constellations.concat(planets);
// //The galaxy and planet arrays are unchanged
// console.log(planets);
// console.log(constellations);
// console.log(galaxy);

















// var buttonText = document.querySelector('.btn btn-primary btn-lg btn-block');
// var buttonBox = document.querySelector('.answersButtons');

// buttonBox.append










// var mainBox = document.querySelector('#mainBox');//main container
// var timeCount = $('#timer');//timer
// var mainTitle = $('.mainTitle');//largest font title

// var answersButtons = $('.answersButtons');//main content area
// var answersButton = $('.btn btn-primary btn-lg');//button to start game

// console.log(mainBox);

// var answers1= [""];

// var function = myFunction() {
//   mainBox.style.textContent
//   answersButton.currentTarget.
// }

// // Make a list
// const ul = document.createElement('ul');
// document.body.appendChild(ul);

// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// ul.appendChild(li1);
// ul.appendChild(li2);

// function hide(evt) {
//   // e.target refers to the clicked <li> element
//   // This is different than e.currentTarget, which would refer to the parent <ul> in this context
//   evt.target.style.visibility = 'hidden';
// }

// // Attach the listener to the list
// // It will fire when each <li> is clicked
// ul.addEventListener('click', hide, false);
 






//  var question1 = function() {
//    for (i = 0; i< questionIndex.length; i++) {
//      console.log("Hello " + i);
//    }
//    return(question1);
//  }





// for (i = 0; i < monsters.length; i++) {
//     if(monsters[i].level <100) {
//         console.log(monsters[i].name + "," + monsters[i].difficulty)
//     }
// };


















//isClicked = true;
//  startGame.on('click', function () {
//   if (isClicked) {
//     questionsBox.css('display:block');
//     isClicked = !isClicked;
//   } else {
//     questionsBox.css('display:none');
//     isClicked = !isClicked;
//   }
//   console.log(startGame);
// });










//clicking button to add a new button (missing onclick)

//creates container button to add element 
//var btn = document.createElement("BUTTON");

//event listener when clicked, this happens

//var 

//hiding a div with display none
//function buttonDisplay() {
//    if (buttonDiv.style.display === "none") {
//      buttonDiv.style.display = "block";
//    } else {
//      buttonDiv.style.display = "none";
//    }
//  }

//function pulling html class and adding style
 

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