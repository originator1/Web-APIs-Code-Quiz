const answerButtons = document.querySelector(".answersButtons");
const timer = document.querySelector("#timer");
const startButton = document.querySelector("#startGame");
const answers = document.querySelectorAll("[data-answer]");




const answerChoices = [
  {
    questionNumber: 0,
    question: "Which operator means less than?",
    answers: [">", "<", "||", "&"],
    correct: ">",
  },
  {
    questionNumber: 1,
    question: "What is another word for || operator?",
    answers: ["and", "or", "else", "if"],
    correct: "or",
  },
  {
    questionNumber: 2,
    question: "What does [display: none;] effectively do?",
    answers: [
      "show content",
      "hides content",
      "puts content on z-axis",
      "aligns content to center",
    ],
    correct: "hides content",
  },
  {
    questionNumber: 3,
    question: "Which language is the oldest out of these four choices?",
    answers: ["HTML", "Java", "JavaScript", "CSS"],
    correct: "HTML",
  },
  {
    questionNumber: 4,
    question: "How many threads does JavaScript code run in?",
    answers: ["one", "two", "three", "five"],
    correct: "one",
  },
];
// console.log(answerChoices[0].answers[0]);
// console.log(answerChoices[1].answers[1]);
// console.log(answerChoices[2].answers[1]);
// console.log(answerChoices[3].answers[1]);
// console.log(answerChoices[4].answers[0]);

// console.log
//if the index of answers array for question num0 of answerChoices object0 is 0, textContent = correct
//if answerChoices[0].answers[0] = clicked print correct, else print incorrect



let index = 0;
let result = document.querySelector(".result");


const answerClicked = function(event){
  // console.log(event.target.outerText);
  // console.log(event)
  let choice = this.value;
  // console.log(this)
  if (choice === answerChoices[index].correct){
    result.textContent = "Correct";
  } else {
    result.textContent = "Incorrect";
  }

  if(index < answerChoices.length - 1){
    index++;
    displayQuestion();
  }
};

const displayQuestion = function () {
  // grab question element
  var questionsText = document.querySelector(".questionsText");
  //reset answer buttons div
  answerButtons.innerHTML = "";
 
  questionsText.textContent = answerChoices[index].question;
  answerChoices[index].answers.forEach(function(value, index){
    //console.log(value, index)
    let answerBtn = document.createElement("button");
    answerBtn.textContent = value;
    answerBtn.value = value
    // answerBtn.classList.add(value)
    // console.log(value);
    
    answerBtn.onclick = answerClicked; 
    answerButtons.appendChild(answerBtn);
    
  });
};

  
startButton.addEventListener("click",() => {
  displayQuestion();
  startButton.style.display = "none";
  //
  const timerFunc = () => {
  
    var counter = 30;
    setInterval(function () {
      counter--;
      if (counter >= 0) {
        timer.textContent = counter;
      }else{
        alert("sorry, out of time");
        clearInterval(counter);
      };  
        //clear timer after alert click ok(add high score in this section?)
     
    }, 1000);
  };    
   timerFunc(); 
 
  //
});










  //title Code Quiz
//timer top right absolute display on start game click?
//content Question
//generate buttons on choice click

// const highScore = function () {
//   document.getElementById("answersButtons").style.display = "none";
//   document.getElementById("startGame").style.display = "none";
// };

// const filterdQuestions = questionList.filter(function(value) {
//   return value === questionList[2];
// });
// console.log(filterdQuestions);



  

  

  //console.log(bttn);
  // bttn.addEventListener("click", function (event) {
  //   index++;
  //   console.log(event)
  // });
  // bttn.onclick = function(event){
  //   event.preventDefault();
  //   console.log("Hey")
  // }




//var timerStart =
//button = document.createElement('button');
//for (i = 0; i < questionList.length; i++) {
//console.log(questionList[i])
//}
//button.setAttribute('questionsList[i].question')
// questionList[0].question

//create and append questions to

//.appendChild(li);

//  const li1 = document.createElement('li');

//  ul.appendChild(li1);
//  ul.appendChild(li2);
// console.log(questionList[1].question);

// Make a list
// const ul = document.createElement('ul');
// document.body.appendChild(ul);

// const li1 = document.createElement('button');
// const li2 = document.createElement('li');
// ul.appendChild(li1);
// ul.appendChild(li2);

//function hide(evt) {
// e.target refers to the clicked <li> element
// This is different than e.currentTarget, which would refer to the parent <ul> in this context
//evt.target.style.visibility = 'hidden';
//}

// Attach the listener to the list
// It will fire when each <li> is clicked
//ul.addEventListener('click', hide, false);

//  function setTime() {
//    // Sets interval in variable
//    var timerInterval = setInterval(function() {
//      secondsLeft--;
//      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//      if(secondsLeft === 0) {
//        // Stops execution of action at set interval
//        clearInterval(timerInterval);
//        // Calls function to create and append image
//        sendMessage();
//      }

//    }, 1000);

// startButton.addEventListener("click", {
//   answerButtons.css("display:none");
// })
// console.log(startButton);
// // startButton.addEventListener("Click", function(event) {
//   var element = event.target
//   if (element.matches())
// )};

// answersArray.forEach(answer => {
//   answer.text('This has been added')
// });

// answerButtons.forEach(function(elem) {
//   elem.addEventListener("click", function(e) {
//     if(elem.dataset.answer__text === "true") {

//     }
//   })
// })

// //object with questions, answers,and result if wrong answer(button) clicked
//
// console.log(questionIndex[2].question);//index 2 question string value

// var addText = function() {
//    for (i = 0; i < questionIndex.length; i++) {
//      $('.questionsText').text(questionIndex[i].question);
//    }
//   };

// // console.log(addText());
// var actualButton = $('.btn btn-primary btn-lg btn-block');
// var doorKnob = function() {
//   var x = actualButton.text(questionIndex[0].question);
//   var y = actualButton.text(questionIndex[1].question);
//   var z = actualButton.text(questionIndex[2].question);

// };

// };
// console.log(questionsText);

// $('.answersButtons').hide();

// $('p').text("");

//  var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
//  var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
//  var star = "polaris";

//   //The unshift method adds an element to the beginning of the array
//  constellations.unshift("Canis Major");
//  console.log(constellations);

//   //The pop method removes the last element in the array
//  planets.pop();
//   //The original array is changed
//  console.log(planets);

//  //The concat method joins constellations and planets array and returns new array
//  var galaxy = constellations.concat(planets);
//  //The galaxy and planet arrays are unchanged
//  console.log(planets);
//  console.log(constellations);
//  console.log(galaxy);

// var buttonText = document.querySelector('.btn btn-primary btn-lg btn-block');
//  var buttonBox = document.querySelector('.answersButtons');

//  buttonBox.append

//  var mainBox = document.querySelector('#mainBox');//main container
//  var timeCount = $('#timer');//timer
//  var mainTitle = $('.mainTitle');//largest font title

//  var answersButtons = $('.answersButtons');//main content area
//  var answersButton = $('.btn btn-primary btn-lg');//button to start game

//  console.log(mainBox);

//  var answers1= [""];

//  var function = myFunction() {
//    mainBox.style.textContent
//    answersButton.currentTarget.
//  }

//  // Make a list
//  const ul = document.createElement('ul');/ document.body.appendChild(ul);

//  function hide(evt) {
//    // e.target refers to the clicked <li> element
//    // This is different than e.currentTarget, which would refer to the parent <ul> in this context
//    evt.target.style.visibility = 'hidden';
//  }

//  // Attach the listener to the list
//  // It will fire when each <li> is clicked
//  ul.addEventListener('click', hide, false);

//   var question1 = function() {
//     for (i = 0; i< questionIndex.length; i++) {
//       console.log("Hello " + i);
//     }
//     return(question1);
//   }

//  for (i = 0; i < monsters.length; i++) {
//      if(monsters[i].level <100) {
//          console.log(monsters[i].name + "," + monsters[i].difficulty)
//      }
//  };

// isClicked = true;
//   startGame.on('click', function () {
//    if (isClicked) {
//      questionsBox.css('display:block');
//      isClicked = !isClicked;
//    } else {
//      questionsBox.css('display:none');
//      isClicked = !isClicked;
//    }
//    console.log(startGame);
//  });

// //clicking button to add a new button (missing onclick)

// //creates container button to add element
// var btn = document.createElement("BUTTON");
// //event listener when clicked, this happens

// var

// //hiding a div with display none
// function buttonDisplay() {
//     if (buttonDiv.style.display === "none") {
//       buttonDiv.style.display = "block";
//     } else {
//       buttonDiv.style.display = "none";
//     }
//   }
// function pulling html class and adding style
