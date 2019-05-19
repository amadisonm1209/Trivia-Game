//Global Variables
const questionsList = [{
    question: "What is the only native mammal to Iceland?",
    answers: ["Cow", "Arctic Fox", "Reindeer", "Sheep"],
    correctAnswer: 1
}, {
    question: "When did beer become legal in Iceland?",
    answers: ["1865", "1950", "1989", "2018"],
    correctAnswer: 2
}, {
    question: "Which of these is NOT a musuem in Iceland?",
    answers: ["The Icelandic Ice Musuem", "The Icelandic Phallological Musuem", "The Icelandic Punk Musuem", "Icelandic Sorcery and Witchcraft"],
    correctAnswer: 0
}, {
    question: "What percent of Icelanders believe in elves and trolls?",
    answers: ["5%", "10%", "25%", "Over 50%"],
    correctAnswer: 3
}, {
    question: "How many train stations are there in Iceland?",
    answers: ["100", "0", "50", "200"],
    correctAnswer: 1
}, {
    question: "Which of these countries formerly ruled Iceland prior to 1944, where it become an independent republic?",
    answers: ["Spain", "Norway", "The United States", "Greenland"],
    correctAnswer: 1
}, {
    question: "What is the main industry that Iceland depends on?",
    answers: ["Natural Gas", "Technology", "Coffee Industry", "Fishing Industry"],
    correctAnswer: 3
}, {
    question: "Which major show filmed in Iceland, including the iconic Kirkjufell Mountain?",
    answers: ["Game of Thrones", "Lord of the Rings", "Brooklyn Nine-Nine", "Stranger Things"],
    correctAnswer: 0
}, {
    question: "Which of these restaurant chains is not found in Iceland?",
    answers: ["Taco Bell", "Dominoes Pizza", "McDonalds", "Subway"],
    correctAnswer: 2
}, {
    question: "How many volcanoes are there on the island?",
    answers: ["30", "Less than 50", "100", "Over 125"],
    correctAnswer: 3
}];


var timeLeft = 21;
var intervalId;
var correct = 0;
var incorrect = 0;
var currentQuestion = 0; //sets the index value of the current question
var answered = false; //will stop the clock when answered and allow only one choice

//Objects with questions, answer options, answer and image
//Counters for incorrect and correct

//Functions
//Generate quiz
$("#start-button").on("click", function startQuiz() {
    //hide start button
    $("#start-button").hide();
    //populate the .quiz div
    correct = 0;
    incorrect = 0;
    generateQuiz();
});



function generateQuiz() {
    $(".inbetween").empty();
    answered = false;
    timeLeft = 21;

    clearInterval(intervalId);
    intervalId = setInterval(timer, 1000);

    if (answered === false) {
        timer();
    }

    var question = questionsList[currentQuestion].question;
    $(".question").text(question);


    for (var i = 0; i < 4; i++) {

        var choices = questionsList[currentQuestion].answers[i];
        var options = $("<div class= choice data-id=" + i + "></div>");
        $(options).text(choices);
        $(".answer-list").append(options);

    };

    $(".choice").on("click", function () {
        var value = $(this).data('id');
        console.log(value);

        if (value === questionsList[currentQuestion].correctAnswer) {
            answered = true;
            stop();
            answer();
            //function correct answer screen and add correct
        } else {
            answered = true;
            stop ();
            incorrectAnswer();
            //function answer screen and add incorrect
        }
    });


};

function timer() {

    timeLeft--;

    $(".timer").text("Time Remaining: " + timeLeft);
    if (timeLeft === 0) {
        stop();
        timesUp();
    }
};

function stop() {
    clearInterval(intervalId);
}

function reset() {
    $(".results").empty();
    $(".answer-list").empty();
    $(".question").empty();
    $(".timer").empty();
    answered = false;

    currentQuestion++;

    if (currentQuestion < questionsList.length) {
        setTimeout(function () {
            generateQuiz();
        }, 5000);

    } else {
        setTimeout(function () {
            $(".question").remove();
            $(".timer").remove();
            //display results page
            $(".results").append("<h2 class= end-answers>Well Done! Here are your results: </h2>");
            $(".results").append("<h2 class= end-answers> Correct Answers: " + correct + "</h2>");
            $(".results").append("<h2 class= end-answers> Incorrect Answers: " + incorrect + "</h2>");
        }, 5000);
    }
}

function answer() {
    correct++;
    setTimeout(function () {

        $(".answer-list").empty();
        $(".timer").empty();
        console.log("hey")
        $(".inbetween").append("<h2> Nicely Done! The correct answer was: " + questionsList[currentQuestion].answers[questionsList[currentQuestion].correctAnswer] + "</h2>");
        reset();
    }, 1000);
};

function incorrectAnswer() {
    incorrect++;
    setTimeout(function () {
        $(".answer-list").empty();
        $(".timer").empty();
        $(".inbetween").append("<h2> Nope! The correct answer was: " + questionsList[currentQuestion].answers[questionsList[currentQuestion].correctAnswer] + "</h2>");
        reset();
    }, 1000);
};

function timesUp() {
    incorrect++;
    setTimeout(function () {
        $(".answer-list").empty();
        $(".timer").empty();
        $(".inbetween").append("<h2> Looks like you ran out of time! The correct answer was: " + questionsList[currentQuestion].answers[questionsList[currentQuestion].correctAnswer] + "</h2>");
        reset();
    }, 1000);
};
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