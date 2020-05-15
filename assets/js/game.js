
$(document).ready(function () {

    let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let stages = [
        ["car", "cow", "too"],
        ["milk", "call", "core"],
        ["ready", "sauce", "cream"]
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
        $("#reset-btn").addClass("hidden");
        $("#correct-elements").addClass("hidden");
        $("#start-game-btn").removeClass("hidden");
        
    });

    function displayNextLevel() {
        getWord(level);
        console.log(gameWord);
        encryptGameWord(gameWord);
        $(".game-element").removeClass("hidden");
        writeEncryptedWord();
        startTimer(5);
    }

    function initiateGame() {
        level = 0;
        score = 0;
    }

    let gameWord;
    function getWord(stageNumber) {
        gameWord = stages[stageNumber][0];
        console.log(gameWord);
    }

    let cesarString = "";
    let shift = 13;
    function encryptGameWord(word) {
        let alphabet = alphabetOriginal;
        cesarString = "";
        let inputText = word.toLowerCase();
        for (let i = 0; i < inputText.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (inputText[i] == alphabet[j]) {
                    cesarString += alphabet[j + shift];
                    j = alphabet.length;
                }
            }
        }
    }

    function writeEncryptedWord() {
        $("#game-word").text(cesarString);
    }

    function checkWord() {
        let userWord = document.getElementById("user-word").value;
        $("#result").text("").removeClass("hidden");
        if (userWord == "") {
            $("#result").text("Please insert a word.");
        }
        else if (userWord == gameWord) {
            score += seconds;
            console.log(score);
            clearInterval(timer);
            displayMessage();
            $(".correct-message").text("Correct!");

        }
        else {
            $("#result").text("Incorrect");
        }
        console.log(typeof userWord);
    }

    $("#check-result-btn").click(function () {
        checkWord();
    });

    function displayMessage() {
        $(".game-element").addClass("hidden");
        $("#correct-elements").removeClass("hidden");
    }

    function nextStage() {
        if (level < 3) {
            level++;
        }
        $("#next-stage-btn")
        $(".game-element").removeClass("hidden");
        $("#correct-elements").addClass("hidden");
    }

    let score;
    let timer;
    let seconds;
    function startTimer(timeInseconds) {
        seconds = timeInseconds;
        timer = setInterval(countDown, 1000)
        function countDown() {
            if (seconds < 0) {
                clearInterval(timer);
                displayMessage();
                $("#next-stage-btn").addClass("hidden");
                $("#timer").addClass("hidden");
                $(".correct-message").text("Time's up! GAME OVER");
                $("#final-score").text("Your score: " + score);
                $("#reset-btn").removeClass("hidden");

            }
            else {
                $("#timer").text(seconds);
                seconds--;
            }
        }
    }


});