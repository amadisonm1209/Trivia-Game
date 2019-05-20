//Global Variables
const questionsList = [{
    question: "What is the only native mammal to Iceland?",
    answers: ["Cow", "Arctic Fox", "Reindeer", "Sheep"],
    correctAnswer: 1,
    answerImage: "https://images.unsplash.com/photo-1513785022314-98df09d85028?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80"
}, {
    question: "When did beer become legal in Iceland?",
    answers: ["1865", "1950", "1989", "2018"],
    correctAnswer: 2,
    answerImage: "https://media.giphy.com/media/5xtDarpBh4nqwNsmnMk/giphy.gif"
}, {
    question: "Which of these is NOT a musuem in Iceland?",
    answers: ["The Icelandic Ice Musuem", "The Icelandic Phallological Musuem", "The Icelandic Punk Musuem", "Icelandic Sorcery and Witchcraft"],
    correctAnswer: 0,
    answerImage: "https://media.giphy.com/media/Qmmpdnp8SicWQ/giphy.gif"

}, {
    question: "What percent of Icelanders believe in elves and trolls?",
    answers: ["5%", "10%", "25%", "Over 50%"],
    correctAnswer: 3,
    answerImage: "http://thefairytaletraveler.files.wordpress.com/2013/09/elves-iceland.jpg?resize=299%2C448"

}, {
    question: "How many train stations are there in Iceland?",
    answers: ["100", "0", "50", "200"],
    correctAnswer: 1,
    answerImage: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

}, {
    question: "Which of these countries formerly ruled Iceland prior to 1944, when it become an independent republic?",
    answers: ["Spain", "Norway", "The United States", "Greenland"],
    correctAnswer: 1,
    answerImage: "https://media.giphy.com/media/3o6EhQhTudJRYRnO5G/giphy.gif"

}, {
    question: "What is the main industry that Iceland depends on?",
    answers: ["Natural Gas", "Technology", "Coffee Industry", "Fishing Industry"],
    correctAnswer: 3,
    answerImage: "assets/images/boats.jpg"

}, {
    question: "Which major show filmed in Iceland, including the iconic Kirkjufell Mountain?",
    answers: ["Game of Thrones", "One Tree Hill", "Brooklyn Nine-Nine", "Stranger Things"],
    correctAnswer: 0,
    answerImage: "https://media.giphy.com/media/AP0evo8byvxYI/giphy.gif"

}, {
    question: "Which of these restaurant chains is not found in Iceland?",
    answers: ["Taco Bell", "Dominoes Pizza", "McDonalds", "Subway"],
    correctAnswer: 2,
    answerImage: "https://images.unsplash.com/photo-1533182390818-fb24be7ca4e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

}, {
    question: "How many volcanoes are there on the island?",
    answers: ["30", "Less than 50", "100", "Over 125"],
    correctAnswer: 3,
    answerImage: "https://images.unsplash.com/photo-1540411790430-d7c045b32267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"

}];


var timeLeft = 21;
var intervalId;
var correct = 0;
var incorrect = 0;
var currentQuestion = 0; //sets the index value of the current question
var isQuizRunning = false; //will allow only one choice

//Functions

function generateQuiz() {

    $(".answer-image").empty();
    $(".inbetween").empty();
    timeLeft = 21;

    clearInterval(intervalId);
    intervalId = setInterval(timer, 1000);

    timer();

    var question = questionsList[currentQuestion].question;
    $(".question").text(question);

    for (var i = 0; i < 4; i++) {

        var choices = questionsList[currentQuestion].answers[i];
        var options = $("<div class= choice data-id=" + i + "></div>");
        $(options).text(choices);
        $(".answer-list").append(options);

    }

    if (isQuizRunning === false) {

        $(".choice").one("click", function () {

            isQuizRunning = true;

            var value = $(this).data('id');

            if (value === questionsList[currentQuestion].correctAnswer) {
                stop();
                answer();
                //function correct answer screen and add correct
            } else {
                stop();
                incorrectAnswer();
                //function answer screen and add incorrect
            }
        });
    }
}


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
};

function reset() {
    $(".results").empty();
    $(".answer-list").empty();
    $(".question").empty();
    $(".timer").empty();
    isQuizRunning = false;
    currentQuestion++;

    if (currentQuestion < questionsList.length) {
        setTimeout(function () {
            generateQuiz();
        }, 3000);

    } else {
        setTimeout(function () {
            $(".question").remove();
            $(".timer").remove();
            $(".answer-image").remove();
            $(".inbetween").remove();
            //display results page
            $(".results").append("<h2 class= end-answers> Well Done! Here are your results: </h2>");
            $(".results").append("<h2 class= end-answers> Correct Answers: " + correct + "</h2>");
            $(".results").append("<h2 class= end-answers> Incorrect Answers: " + incorrect + "</h2>");
        }, 3000);
    }
}

function answer() {
    $("answer-list").empty();
    $(".timer").empty();

    correct++;

    setTimeout(function () {

        $(".inbetween").append("<h2> Nicely Done! The correct answer was: " + questionsList[currentQuestion].answers[questionsList[currentQuestion].correctAnswer] + "</h2>");
        $(".answer-image").append("<img src=" + questionsList[currentQuestion].answerImage + " class='img-fluid'/>");

        reset();
    }, 1000);
};

function incorrectAnswer() {
    $("answer-list").empty();
    $(".timer").empty();

    incorrect++;

    setTimeout(function () {

        $(".inbetween").append("<h2> Nope! The correct answer was: " + questionsList[currentQuestion].answers[questionsList[currentQuestion].correctAnswer] + "</h2>");
        $(".answer-image").append("<img src=" + questionsList[currentQuestion].answerImage + " class='img-fluid'/>");

        reset();
    }, 1000);
};

function timesUp() {
    $("answer-list").empty();
    $(".timer").empty();
    incorrect++;

    setTimeout(function () {

        $(".inbetween").append("<h2> Looks like you ran out of time! The correct answer was: " + questionsList[currentQuestion].answers[questionsList[currentQuestion].correctAnswer] + "</h2>");
        $(".answer-image").append("<img src=" + questionsList[currentQuestion].answerImage + " class='img-fluid'/>");

        reset();
    }, 1000);
};

//Game Start

$("#start-button").on("click", function startQuiz() {
    //hide start button
    $("#start-button").remove();
    //populate the .quiz div
    correct = 0;
    incorrect = 0;
    generateQuiz();
});
