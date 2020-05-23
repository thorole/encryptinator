
$(document).ready(function () {

    let elements = ["heading", "sub-heading-one", "sub-heading-two", "sub-heading-three"];

    let stages = [
        ["car", "cow", "too", "far", "see", "sea", "all", "say"],
        ["milk", "call", "core", "fish", "must", "mill", "mark", "quit"],
        ["ready", "sauce", "cream", "spoke", "tired", "dirty", "crutch", "alias"],
        ["archer", "kitten", "signal", "psycho", "charger", "candle", "gloves", "finger"],
        ["cruches", "eyeball", "physics", "lunatic", "battery", "flowers", "handbag", "sixpack"],
        ["attackatdawn"]
    ];
    let finalStageKeys = ["war"]
    let level;
    let nextLevel;
    let gameShift;



    $("#start-game-btn").click(function () {
        initiateGame();
        $("#start-game-btn").addClass("hidden");
        displayNextLevel();
        console.log(level);
    });

    $("#next-stage-btn").click(function () {
        nextStage();
        getGameShift();
        displayNextLevel();
    });

    $("#reset-btn").click(function () {
        toggleGameOverBox();
        $("#start-game-btn").removeClass("hidden");
    });

    function displayNextLevel() {
        getWord(level);
        console.log(gameWord);
        encryptGameWord();
        writeEncryptedWord();
        toggleGameElements();
        startTimer(60);
    }

    function encryptGameWord() {
        if (level < 5) {
            iterateString(gameWord, gameShift, false);
        }
        else {
            convertKeyToNumbers(finalStageKeys[0]);
            iterateVigenereString(gameWord, false);

        }
    }

    function getGameShift() {
        if (level > 0 && level < 5) {
            gameShift += 2;
        }
        else {
            gameShift = finalStageKeys[0];
        }
        console.log("shift is: " + gameShift);
        $("#shift-value").text("Shift: " + gameShift)
    }

    function initiateGame() {
        level = 0;
        score = 0;
        gameShift = 3;
        $("#current-score").text("Score: 0");
        $("#shift-value").text("Shift: " + gameShift)
    }

    let gameWord;
    function getWord(stageNumber) {
        gameWord = stages[stageNumber][[Math.floor(Math.random() * stages[stageNumber].length)]];
        console.log(gameWord);
    }

    function writeEncryptedWord() {
        if (level < 5) {
            $("#game-word").text(cesarString);
        }
        else {
            $("#game-word").text(vigenereText);
        }
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
            setMessage();
            toggleNextStageBox();
            toggleGameElements();
            $("#user-word").val("");
        }
        else {
            $("#result").text("Incorrect");
        }
        console.log(typeof userWord);
    }
    function setMessage() {
        if (level < 4) {
            $("#success-message").text("Correct!");
        }
        else {
            $("#success-message").text("ERROR!");
            $("#error-message").text("A critical error has been detected! Encryption method is set to Vigenere Cipher. You must decrypt the the next word to prevent breakdown of the site!");
        }
    }

    $("#check-result-btn").click(function () {
        checkWord();
    });

    function toggleGameOverBox() {
        if ($("#game-over-box").hasClass("hidden")) {
            $("#game-over-box").removeClass("hidden");
        }
        else {
            $("#game-over-box").addClass("hidden")
        }
    }

    function toggleNextStageBox() {
        if ($("#next-lvl-box").hasClass("hidden")) {
            $("#next-lvl-box").removeClass("hidden");
        }
        else {
            $("#next-lvl-box").addClass("hidden")
        }
    }

    function toggleGameElements() {
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

    function encryptElements() {
        for (let i = 0; i < elements.length; i++) {
            let elementText = document.getElementById(elements[i]).innerHTML;
            iterateString(elementText, 13, false);
            console.log(cesarString);
            document.getElementById(elements[i]).innerHTML = cesarString;
        }
    }
    encryptElements();
});