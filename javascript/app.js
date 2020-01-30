// Declare variables
var correctInput = 0;
var wrongInput = 0;
var clickedInput = 0;

// Start screen hides content within trivia game
$(".timeCount").hide();
$(".questions").hide();
$(".btndone").hide();

// Function to show results
function endGame(){
    $(".timeCount").empty();
    $(".questions").empty();
    $(".btndone").empty();
    $("#gameOver").text("Done!");
    $("#correctAnswers").text("Correct Answers: "+ correctInput);
    $("#wrongAnswers").text("Wrong Answers: "+ wrongInput);
    var blankInput = 5 - clickedInput;
    $("#blankAnswers").text("Unanswered: "+ blankInput);
};

// On click of start button
$(".btnstart").click(function(){
    $(".btnstart").hide();
    $(".timeCount").show();
    $(".questions").show();
    $(".btndone").show();
    // Set timer to 30 seconds
    var timeLeft = 30;
    const timerId = setInterval(countdown,1000);
    function countdown(){
        // End game if time runs out
        if (timeLeft === -1){
            clearTimeout(timerId);
            endGame();
            correctInput = 0;
            wrongInput = 0;
            clickedInput = 0;
        }
        // Display timer text on trivia screen
        else{
            $("#timer").text(`Time Remaining: ${timeLeft} seconds`);
            timeLeft--;
        }
    }
});

// Track answer for question 1
$(".question1").click(function(){
    console.log($(this).val());
    if ($(this).val() === "Pepsi Company"){
        correctInput++;
    }
    else{
        wrongInput++;
    }
    clickedInput++;
});

// Track answer for question 2
$(".question2").click(function(){
    console.log($(this).val());
    if ($(this).val() === "13 Seconds"){
        correctInput++;
    }
    else{
        wrongInput++;
    }
    clickedInput++;
});

// Track answer for question 3
$(".question3").click(function(){
    console.log($(this).val());
    if ($(this).val() === "Gooseberry"){
        correctInput++;
    }
    else{
        wrongInput++;
    }
    clickedInput++;
});

// Track answer for question 4
$(".question4").click(function(){
    console.log($(this).val());
    if ($(this).val() === "Three"){
        correctInput++;
    }
    else{
        wrongInput++;
    }
    clickedInput++;
});

// Track answer for question 5
$(".question5").click(function(){
    console.log($(this).val());
    if ($(this).val() === "Big"){
        correctInput++;
    }
    else{
        wrongInput++;
    }
    clickedInput++;
});

// On click of the done button
$(".btndone").click(function(){
    endGame();
    $(".timeCount").hide();
});