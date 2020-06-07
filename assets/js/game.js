"use strict";
let game = function () {

    $(document).ready(function () {

        const elements = ["nav-one", "nav-two", "nav-three", "nav-four", "heading", "sub-heading-one", "sub-heading-two", "sub-heading-three",
            "encryption-info-one", "encryption-info-two", "intro-button-one", "intro-button-two", "cesar-heading",
            "vigenere-heading", "cesar-info-heading", "vigenere-info-heading", "game-heading", "game-instructions", 
            "enter-cesar-text", "enter-vigenere-text", "enter-shift", "enter-key", "enter-vigenere-decrypt", 
            "enter-cesar-decrypt", "enter-key-decrypt", "enter-shift-decrypt"];

        const stages = [
            ["car", "cow", "too", "far", "see", "sea", "all", "say"],
            ["milk", "call", "core", "fish", "must", "mill", "mark", "quit"],
            ["ready", "sauce", "cream", "spoke", "tired", "dirty", "crutch", "alias"],
            ["archer", "kitten", "signal", "psycho", "charger", "candle", "gloves", "finger"],
            ["cadaver", "eyeball", "physics", "lunatic", "battery", "flowers", "handbag", "sixpack"],
            ["greatful", "fearless", "truthful", "american", "costumes", "username", "malicious", "ludacris"],
            ["attackatdawn"]
        ];
        const finalStageKeys = ["bag"];
        let level;
        let gameShift;
        let gameKey;
        let encryptedGameWord;
        let gameWord;
        let score;
        let timer;
        let seconds;



        $("#start-game-btn").click(function () {
            initiateGame();
            $("#start-game-btn").addClass("hidden");
            displayNextLevel();
            console.log(level);
        });

        $("#next-stage-btn").click(function () {
            nextStage();
            toggleNextStageBox();
            getGameShift();
            displayNextLevel();
            console.log("level is: " + level);
        });

        $("#reset-btn").click(function () {
            if (level <= stages.length - 1) {
                toggleGameOverBox();
                $("#start-game-btn").removeClass("hidden");
            }
            else {
                toggleGameOverBox();
            }
        });

        $("#exit-game").click(function () {
            clearInterval(timer);
            toggleGameElements();
            enableDecryptFields();
            $("#start-game-btn").removeClass("hidden");
        });

        function displayNextLevel() {
            getWord(level);
            console.log(gameWord);
            encryptGameWord();
            writeEncryptedWord();
            writeGameInfo();
            toggleGameElements();
            startTimer(80);
        }

        function encryptGameWord() {
            if (level < stages.length - 1) {
                encryptedGameWord = encryption.iterateString(gameWord, gameShift, true);
            }
            else {
                gameKey = encryption.convertKeyToNumbers(finalStageKeys[0]);
                encryptedGameWord = encryption.iterateVigenereString(gameWord, gameKey, false);

            }
        }

        function getGameShift() {
            if (level > 0 && level < stages.length - 1) {
                gameShift += 2;
                console.log("shift is: " + gameShift);
            }
            else {
                gameShift = finalStageKeys[0];
            }
        }

        function writeGameInfo() {
            if (level >= 0 && level < stages.length - 1) {
                $("#shift-value").text("Shift: " + gameShift);
            }
            else {
                $("#shift-value").text("Shift: " + gameKey);
            }
        }

        function initiateGame() {
            level = 0;
            score = 0;
            gameShift = 3;
            disableDecryptFields();
            $("#current-score").text("Score: 0");
            $("#shift-value").text("Shift: " + gameShift);
            $("#result").text("");
            $("#next-lvl-box").removeClass("message-box-wide");
            $("#next-lvl-box").removeClass("dark-orange");
            $("#game-over-box").removeClass("message-box-wide");
        }

        
        function getWord(stageNumber) {
            gameWord = stages[stageNumber][[Math.floor(Math.random() * stages[stageNumber].length)]];
            console.log(gameWord);
        }

        function writeEncryptedWord() {
            if (level < stages.length - 1) {
                $("#game-word").text(encryptedGameWord);
            }
            else {
                $("#game-word").text(encryptedGameWord);
            }
        }

        function checkWord() {
            let userWord = document.getElementById("user-word").value;
            userWord = userWord.toLowerCase();
            if (userWord == "") {
                $("#result").text("Please insert a word.");
            }
            else if (userWord == gameWord) {
                score += seconds + 1;
                console.log("score: " + score);
                $("#current-score").text("Score: " + score);
                $("#user-word").val("");
                $("#result").text("");
                clearInterval(timer);
                setMessage();
                toggleNextStageBox();
                toggleGameElements();
            }
            else {
                $("#result").text("Incorrect");
            }
            console.log(typeof userWord);
        }
        function setMessage() {
            if (level < stages.length - 2) {
                $("#success-message").text("Correct!");
                $("#error-message").text("");
            }
            else if (level == stages.length - 2) {
                $("#next-lvl-box").addClass("message-box-wide");
                $("#next-lvl-box").addClass("dark-orange");
                $("#success-message").text("ERROR!");
                $("#error-message").text("A critical error has been detected! Encryption method is set to Vigenere Cipher. You must decrypt the the next word to prevent breakdown of the site!");
            }
            else {
                toggleGameOverBox();
                toggleNextStageBox();
                enableDecryptFields();
                $("#game-over-box").addClass("message-box-wide");
                $("#game-over-message").text("Congratulations!");
                $("#game-finished").text("You prevented the breakdown of the site! You are a true ENCRYPTINATOR!");
                $("#final-score").text("Final score: " + score);
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
                $("#game-over-box").addClass("hidden");
            }
        }

        function toggleNextStageBox() {
            if ($("#next-lvl-box").hasClass("hidden")) {
                $("#next-lvl-box").removeClass("hidden");
            }
            else {
                $("#next-lvl-box").addClass("hidden");
            }
        }

        function toggleGameElements() {
            if ($("#game-content").hasClass("hidden")) {
                $("#game-content").removeClass("hidden");
            }
            else {
                $("#game-content").addClass("hidden");
            }
        }

        function nextStage() {
            level++;
            console.log("level is: " + level);

        }

        
        function startTimer(timeInseconds) {
            seconds = timeInseconds;
            countDown();
            timer = setInterval(countDown, 1000);
        }

        function countDown() {
            if (seconds < 0) {
                clearInterval(timer);
                toggleGameElements();
                toggleGameOverBox();
                enableDecryptFields();
                setGameOverText();
            }
            else {
                $("#timer").text(seconds);
                seconds--;
            }
        }

        function setGameOverText() {
            if (level < stages.length - 1) {
                $("#game-over-message").text("Game Over");
                $("#game-finished").text("");
                $("#final-score").text("Final score: " + score);
            }
            else {
                nextStage();
                $("#game-over-message").text("Game Over");
                $("#game-finished").text("");
                $("#final-score").text("Website destroyed. Thanks for trying! Final score: " + score);
                encryptElements();
            }
        }

        function encryptElements() {
            for (let i = 0; i < elements.length; i++) {
                console.log(i);
                let elementText = document.getElementById(elements[i]).innerHTML;
                document.getElementById(elements[i]).innerHTML = encryption.iterateString(elementText, 13, false);
            }
            $("#hide-cesar").addClass("hidden");
            $("#hide-vigenere").addClass("hidden");
            $("#intro-more-two").addClass("hidden");
            $("#start-game-btn").addClass("hidden");
            $("input").prop('disabled', true);
            $("textarea").prop('disabled', true);
            $("number").prop('disabled', true);
            $("button").prop("disabled", true);
            $("button").text("xxxx");
            $("a").attr({"href":"https://www..../", "target":"_blank"});
            $("#input-shift").val(0);
            $("#output-shift").val(0);
            $("#vigenere-key").val(":-(");
            $("#vigenere-key-decrypt").val(":-(");
            $("#restore").removeClass("hidden");
        }

        function disableDecryptFields() {
            $("#text-to-decrypt").prop('disabled', true);
            $("#vigenere-to-decrypt").prop('disabled', true);
        }

        function enableDecryptFields() {
            $("#text-to-decrypt").prop('disabled', false);
            $("#vigenere-to-decrypt").prop('disabled', false);
        }

        $("#restore").click(function () {
            window.location.reload();
        });
    });
}();