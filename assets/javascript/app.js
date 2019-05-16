//Global Variables
const questionsList = [{
        question: "When did beer become legal in Iceland?",
        answers:["1865", "1950", "1989", "2018"],
        correctAnswer: "2"

    }, {
        question: "When did beer become legal in Iceland?",
        answers: ["1865", "1950", "1989", "2018"],
        correctAnswer: "2"
    }, {
        question: "Which of these is NOT a musuem in Iceland?",
        answers: ["The Icelandic Ice Musuem", "The Icelandic Phallological Musuem", "The Icelandic Punk Musuem", "Icelandic Sorcery and Witchcraft"],
        correctAnswer: "0"
    }, {
        question: "When did beer become legal in Iceland?",
        answers: ["1865", "1950", "1989","2018"],
        correctAnswer: "2"
    }];



let correct = 0;
let incorrect = 0;
let currentQuestion = 0; //sets the index value of the current question
let answered = false; //will stop the clock when answered and allow only one choice

//Objects with questions, answer options, answer and image
//Counters for incorrect and correct

//Functions
//Generate quiz
$("#start-button").on("click", function startQuiz(){
    //hide start button
    $("#start-button").hide();
    //populate the .quiz div
    correct = 0;
    incorrect = 0;
    generateQuiz();
    });

function generateQuiz() {

    // if (answered === false){
    //     timer(); //starts the timer
    // }

    var question = questionsList[currentQuestion].question;
    $(".question").text(question);


    for (var i = 0; i < 4; i++) {

    var choices = questionsList[currentQuestion].answers[i];
    var options = $("<div class = choice id='data-value + [i]'></div");
    $(options).text(choices);
    $(".answer-list").append(options);

    };


};

// function timer (){

// }

// function reset(){

// }

//Timer for question
//Timer to set how long the answer is shown
//For loop to go through the questions
//On click event for single selection
//For loop to dynamically show the questions and answers
//Reset function to empty


//Dis is the game


//Set amount of time for question and for answer reveal