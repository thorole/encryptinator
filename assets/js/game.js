
$(document).ready(function () {

    let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let stageOne = ["car", "cow", "too"];
    let stageTwo = ["milk", "call", "core"];
    let stageThree = ["ready", "sauce", "cream"];

    $("#start-game-btn").click(function () {
        $("#start-game-btn").addClass("hidden");
        $(".game-element").removeClass("hidden");
        getWord(stageOne);
        writeEncryptedWord();
    });

    let gameWord;
    function getWord(level) {
        gameWord = level[0];
    }

    let cesarString = "";
    let shift = 13;
    function encryptGameWord(word) {
        alphabet = alphabetOriginal;
        cesarString = "";
        inputText = inputText.toLowerCase();
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
        $("#game-word").text(gameWord);
    }

    //getWord(stageOne);
    //console.log("Gameword: " + gameWord);

});