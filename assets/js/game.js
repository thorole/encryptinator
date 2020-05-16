
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
        toggleGameOverBox();
        $("#start-game-btn").removeClass("hidden");
    });

    function displayNextLevel() {
        getWord(level);
        console.log(gameWord);
        encryptGameWord(gameWord);
        writeEncryptedWord();
        toggleGameElements();
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
        if (userWord == "") {
            $("#result").text("Please insert a word.");
        }
        else if (userWord == gameWord) {
            score += seconds;
            console.log(score);
            clearInterval(timer);
            $(".message-box").text("Correct!");
            toggleNextStageBox();
            toggleGameElements();
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
       if ($(".game-over").hasClass("hidden")) {
        $(".game-over").removeClass("hidden");
       }
       else {
        $(".game-over").addClass("hidden")
       }
    }

    function toggleNextStageBox () {
        if ($(".next-lvl").hasClass("hidden")) {
            $(".next-lvl").removeClass("hidden");
        }
        else {
            $(".next-lvl").addClass("hidden")
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
        if (level < 3) {
            level++;
        }
        toggleNextStageBox();
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
                toggleGameElements();
                toggleGameOverBox();
                $(".message-box").text("Game Over");
            }
            else {
                $("#timer").text(seconds);
                seconds--;
            }
        }
    }


});