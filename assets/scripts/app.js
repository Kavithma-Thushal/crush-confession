const questions = [
    "Do you smile when you see me? 💖",
    "Do you like talking with me? 😊",
    "Do I make your day better? ✨",
    "Do you feel special with me? 🥰",
    "Will you keep me in your heart? 💘"
];

let index = 0;
let yesCount = 0;

function showQuestion() {
    $(".question").fadeOut(300, function () {
        $(this).text(questions[index]).fadeIn(300);
    });
}

showQuestion();

$(".yes").click(function () {
    yesCount++;
    nextQuestion();
});

$(".no").click(function () {
    nextQuestion();
});

function nextQuestion() {
    index++;

    if (index < questions.length) {
        showQuestion();
    } else {
        $(".question, .buttons").hide();

        if (yesCount >= 3) {
            $(".result").html("You like me 💖🥰<br>My heart is smiling 💕").fadeIn();
        } else {
            $(".result").html("You don’t like me 💔<br>But you’re still special 🌸").fadeIn();
        }
    }
}