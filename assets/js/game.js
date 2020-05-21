
$(document).ready(function () {

    let stages = [
        ["car", "cow", "too", "far", "see", "sea", "all", "say"],
        ["milk", "call", "core", "fish", "must", "mill", "mark", "quit"],
        ["ready", "sauce", "cream", "spoke", "tired", "dirty", "crutch", "alias"],
        ["archer", "kitten", "signal", "psycho", "charger", "candle", "gloves", "finger"],
        ["cruches", "eyeball", "physics", "lunatic", "battery", "flowers", "handbag", "sixpack"] 
    ];
    let level;
    let nextLevel;



    $("#start-game-btn").click(function () {
        initiateGame();
        $("#start-game-btn").addClass("hidden");
        displayNextLevel();
        console.log(level);
    });

    $("#next-stage-btn").click(function () {
        nextStage();
        displayNextLevel();
    });

    $("#reset-btn").click(function () {
        toggleGameOverBox();
        $("#start-game-btn").removeClass("hidden");
    });

    function displayNextLevel() {
        getWord(level);
        console.log(gameWord);
        iterateString(gameWord, false);
        writeEncryptedWord();
        toggleGameElements();
        startTimer(60);
    }

    function initiateGame() {
        level = 0;
        score = 0;
        $("#current-score").text("Score: 0");
    }

    let gameWord;
    function getWord(stageNumber) {
        gameWord = stages[stageNumber][[Math.floor(Math.random() * stages[stageNumber].length)]];
        console.log(gameWord);
    }

    function writeEncryptedWord() {
        $("#game-word").text(cesarString);
    }

    function checkWord() {
        let userWord = document.getElementById("user-word").value;
        if (userWord == "") {
            $("#result").text("Please insert a word.");
        }
        else if (userWord == gameWord) {
            score += seconds + 1;
            console.log(score);
            $("#current-score").text("Score: " + score)
            clearInterval(timer);
            $("#success-message").text("Correct!");
            toggleNextStageBox();
            toggleGameElements();
            $("#user-word").val("");
        }
        else {
            $("#result").text("Incorrect");
        }
        console.log(typeof userWord);
    }

    $("#check-result-btn").click(function () {
        checkWord();
    });

    function toggleGameOverBox () {
       if ($("#game-over-box").hasClass("hidden")) {
        $("#game-over-box").removeClass("hidden");
       }
       else {
        $("#game-over-box").addClass("hidden")
       }
    }

    function toggleNextStageBox () {
        if ($("#next-lvl-box").hasClass("hidden")) {
            $("#next-lvl-box").removeClass("hidden");
        }
        else {
            $("#next-lvl-box").addClass("hidden")
        }
    }

    function toggleGameElements () {
        if ($(".game-element").hasClass("hidden")) {
            $(".game-element").removeClass("hidden");
        }
        else {
            $(".game-element").addClass("hidden")
        }
    }

    function nextStage() {
        if (level < 5) {
            level++;
        }
        toggleNextStageBox();
    }

    let score;
    let timer;
    let seconds;
    function startTimer(timeInseconds) {
        seconds = timeInseconds;
        countDown();
        timer = setInterval(countDown, 1000)
    }

    function countDown() {
        if (seconds < 0) {
            clearInterval(timer);
            toggleGameElements();
            toggleGameOverBox();
            $("#game-over-message").text("Game Over");
            $("#final-score").text("Final score: " + score);
        }
        else {
            $("#timer").text(seconds);
            seconds--;
        }
    }
});