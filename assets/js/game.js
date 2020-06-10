"use strict";
/*
All code encapsulated in IEFE (revealing module pattern) to keep global scope clean.
*/
let game = function () {

    $(document).ready(function () {

        /*
        Elements that will be decrypted when game lost on last level.
        */
        const elements = ["nav-one", "nav-two", "nav-three", "nav-four", "heading", "sub-heading-one",
            "sub-heading-two", "sub-heading-three", "encryption-info-one", "encryption-info-two", "intro-button-one",
            "intro-button-two", "cesar-heading", "vigenere-heading", "cesar-info-heading", "vigenere-info-heading", 
            "error-cesar-encrypt", "error-shift", "error-cesar-decrypt", "error-decrypt-shift", "game-heading", 
            "game-instructions", "enter-cesar-text", "enter-vigenere-text", "enter-shift", "enter-key",
            "enter-vigenere-decrypt", "enter-cesar-decrypt", "enter-key-decrypt", "enter-shift-decrypt", "footer",
        "invalid-text", "invalid-input", "rndm-word", "invalid-decrypt-text", "invalid-decrypt-key"];

        /*
        The stages. Add elements to add more levels.
        */
        const stages = [
            ["car", "cow", "too", "far", "see", "sea", "all", "say"],
            ["milk", "call", "core", "fish", "must", "mill", "mark", "quit"],
            ["ready", "sauce", "cream", "spoke", "tired", "dirty", "crutch", "alias"],
            ["archer", "kitten", "signal", "psycho", "charger", "candle", "gloves", "finger"],
            ["cadaver", "eyeball", "physics", "lunatic", "battery", "flowers", "handbag", "sixpack"],
            ["greatful", "fearless", "truthful", "american", "costumes", "username", "malicious", "ludacris"],
            ["attackatdawn"]
        ];

        /*
        Key for final stage
        */
        const finalStageKeys = ["bag"];

        /*
        These variables will be set and used throughout the game.
        */
        let level;
        let gameShift;
        let gameKey;
        let encryptedGameWord;
        let gameWord;
        let score;
        let timer;
        let seconds;


        /*
        When start button is clicked, it is hidden and first level is displayed.
        */
        $("#start-game-btn").click(function () {
            initiateGame();
            $("#start-game-btn").addClass("hidden");
            displayNextLevel();
        });

        /*
        When check button clicked, check if it's correct or not.
        */
        $("#check-result-btn").click(function () {
            checkWord();
        });

        /*
        Press enter to check word
        */
        $("#user-word").keypress(function (e) {
            var key = e.which;
            if (key == 13) {
                checkWord();
            }
        });

        /*
        When next button is clicked, next stage is set, hide current messagebox and displays next level.
        */
        $("#next-stage-btn").click(function () {
            nextStage();
            toggleNextStageBox();
            getGameShift();
            displayNextLevel();
        });

        /*
        When reset button is clicked, if not last level, hide game-over box and display start button.
        */
        $("#reset-btn").click(function () {
            if (level <= stages.length - 1) {
                toggleGameOverBox();
                $("#start-game-btn").removeClass("hidden");
            }
            else {
                toggleGameOverBox();
            }
        });

        /*
        When exit button is clicked, stop timer, hide game elements, enable decryption fields.
        Display start button.
        */
        $("#exit-game").click(function () {
            clearInterval(timer);
            toggleGameElements();
            enableDecryptFields();
            $("#start-game-btn").removeClass("hidden");
        });

        /*
        Sets the next level. See individual function's comment.
        */
        function displayNextLevel() {
            getWord(level);
            encryptGameWord();
            writeEncryptedWord();
            writeGameInfo();
            toggleGameElements();
            startTimer(80);
            console.log(gameWord);
        }

        /*
        If level is not last level, pass the gameword and shift to iterateString.
        If last level, pass gameword and key to iterateVigenereString.
        */
        function encryptGameWord() {
            if (level < stages.length - 1) {
                encryptedGameWord = encryption.iterateString(gameWord, gameShift, true);
            }
            else {
                gameKey = encryption.convertKeyToNumbers(finalStageKeys[0]);
                encryptedGameWord = encryption.iterateVigenereString(gameWord, gameKey, false);

            }
        }

        /*
        If level is not last level, add 2 to gameshift. If last level, set shift to a key.
        */
        function getGameShift() {
            if (level > 0 && level < stages.length - 1) {
                gameShift += 2;
            }
            else {
                gameShift = finalStageKeys[0];
            }
        }

        /*
        If not last level, write gameshift to game screen.
        If last level, write gamekey (numbers) to screen.
        */
        function writeGameInfo() {
            if (level >= 0 && level < stages.length - 1) {
                $("#shift-value").text("Shift: " + gameShift);
            }
            else {
                $("#shift-value").text("Shift: " + gameKey);
            }
        }

        /*
        Sets game variables when game is started. Displays the data on the game screen.
        Removes classes which are used for the next level message box and game over box on
        next last and last level.
        */
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


        /*
        Gets a random word from array and sets it to gameWord
        */
        function getWord(stageNumber) {
            gameWord = stages[stageNumber][[Math.floor(Math.random() * stages[stageNumber].length)]];
        }

        /*
        Prints encrypted word to game screen, depending on last level or not.
        */
        function writeEncryptedWord() {
            if (level < stages.length - 1) {
                $("#game-word").text(encryptedGameWord);
            }
            else {
                $("#game-word").text(encryptedGameWord);
            }
        }

        /*
        Checks the user input. If blank, display error message. If correct, add remaining seconds
        to score, stop timer, set success message, hide game elements, display next level message box.
        Set current score for next level game screen, reset input field and potential error messages.
        If user input is wrong word, display error message. 
        */
        function checkWord() {
            let userWord = document.getElementById("user-word").value;
            userWord = userWord.toLowerCase();
            if (userWord == "") {
                $("#result").text("Please insert a word.");
            }
            else if (userWord == gameWord) {
                score += seconds + 1;
                clearInterval(timer);
                setMessage();
                toggleGameElements();
                toggleNextStageBox();
                $("#current-score").text("Score: " + score);
                $("#user-word").val("");
                $("#result").text("");
            }
            else {
                $("#result").text("Incorrect");
            }
        }

        /*
        (If correct word) on any level before next last level, display Correct.
        (If correct word) on next last level, display error message.
        (If correct (last level), hide next level message box, display game over 
        message box and let user know they won the game.) 
        */
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
                toggleNextStageBox();
                toggleGameOverBox();
                enableDecryptFields();
                $("#game-over-box").addClass("message-box-wide");
                $("#game-over-message").text("Congratulations!");
                $("#game-finished").text("You prevented the breakdown of the site! You are a true ENCRYPTINATOR!");
                $("#final-score").text("Final score: " + score);
            }
        }

        /*
        Hides or displays game over message box, depending on class.
        */
        function toggleGameOverBox() {
            if ($("#game-over-box").hasClass("hidden")) {
                $("#game-over-box").removeClass("hidden");
            }
            else {
                $("#game-over-box").addClass("hidden");
            }
        }

        /*
        Hides or displays next stage message box, depending on class.
        */
        function toggleNextStageBox() {
            if ($("#next-lvl-box").hasClass("hidden")) {
                $("#next-lvl-box").removeClass("hidden");
            }
            else {
                $("#next-lvl-box").addClass("hidden");
            }
        }

        /*
        Hides or displays the game elements, depending on class.
        */
        function toggleGameElements() {
            if ($("#game-content").hasClass("hidden")) {
                $("#game-content").removeClass("hidden");
            }
            else {
                $("#game-content").addClass("hidden");
            }
        }

        /*
        Add 1 to level for each level.
        */
        function nextStage() {
            level++;
        }

        /*
        Sets and starts the countdown. countDown is called once before the interval is 
        called, or else the first second will delay. You can, alternatively, remove the call to
        countDown and set the time to 1 second more than you actually want to give the user. if
        seconds reach 0, stop timer, hide game elements, display game over message box, set game over
        text and enable decrypting fields. 
        Else, subtract 1 from seconds every 1000th ms. 
        */
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
                setGameOverText();
                enableDecryptFields();
            }
            else {
                $("#timer").text(seconds);
                seconds--;
            }
        }

        /*
        If level is less than last level, display set ordinary Game over message. If last stage,
        Display website destroyed message adn call encryptElements().
        */
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

        /*
        Loops through items(html elements) in elements array. Encrypts the items text and prints it to 
        the same html element. Disables all user input fields, hides elements, changes href to 404 on nav links,
        displays "restore website" button.
        */
        function encryptElements() {
            for (let i = 0; i < elements.length; i++) {
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
            $("a").attr({ "href": "https://www..../", "target": "_blank" });
            $("#input-shift").val(0);
            $("#output-shift").val(0);
            $("#vigenere-key").val(":-(");
            $("#vigenere-key-decrypt").val(":-(");
            $("#restore").removeClass("hidden");
        }

        /*
        Disables decryption fields (used when game is active).
        */
        function disableDecryptFields() {
            $("#text-to-decrypt").prop('disabled', true);
            $("#vigenere-to-decrypt").prop('disabled', true);
        }
        /*
        Enables the decryption fields (when game is not active).
        */
        function enableDecryptFields() {
            $("#text-to-decrypt").prop('disabled', false);
            $("#vigenere-to-decrypt").prop('disabled', false);
        }

        /*
        Makes start button text blink by switching classes.
        */
        function blinkingText() {
            if ($("#start-game-btn").hasClass("dark-green")) {
                $("#start-game-btn").removeClass("dark-green").addClass("light-green");
            }
            else {
                $("#start-game-btn").removeClass("light-green").addClass("dark-green");
            }
        }

        /*
        Call to blinking text with intervals. Makes button blink continously.
        */
        setInterval(blinkingText, 500);

        /*
        When restore website button is clicked, browser refresh.
        */
        $("#restore").click(function () {
            window.location.reload();
        });
    });
}();