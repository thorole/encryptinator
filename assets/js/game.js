
$(document).ready(function () {

    let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let stage1 = ["car", "cow", "too"];
    let stage2 = ["milk", "call", "core"];
    let stage3 = ["ready", "sauce", "cream"];
    let level;
    let nextLevel;

    $("#start-game-btn").click(function () {
        $("#start-game-btn").addClass("hidden");
        $(".game-element").removeClass("hidden");
        getWord(stageOne);
        encryptGameWord(gameWord);
        writeEncryptedWord();
    });

    function initiateGame() {
        level = 1;
        
    }

    let gameWord;
    function getWord(level) {
        gameWord = level[0];
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

    function writeEncryptedWord () {
        $("#game-word").text(cesarString);
    }

    function checkWord () {
        let userWord = document.getElementById("user-word").value;
        $("#result").text("").removeClass("hidden");
        if (userWord == "") {
            $("#result").text("Please insert a word.");
        }
        else if (userWord == gameWord) {
            $(".game-element").addClass("hidden");
            $("#correct-elements").removeClass("hidden");
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

    function nextStage() {
        if (level < 5) {
            level++;
        }
        nextLevel = "stage" + level.toString();
        //getWord()
    }

    nextStage();

});