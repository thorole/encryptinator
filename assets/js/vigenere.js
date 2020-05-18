$(document).ready(function () {

    let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let userString;
    let alphabet = alphabetOriginal.slice();
    let inputKey;
    let key;

    function getUserKey(userKey) {
        inputKey = document.getElementById(userKey).value;
        console.log(inputKey);
        inputKey = inputKey.toLowerCase();
    }

    function convertKeyToNumbers(textKey) {
        key = [];
        console.log(alphabetOriginal);
        if (textKey == "") {
            textKey = "thisisthekey"
            document.getElementById(textKey).value = inputKey;
            console.log("userKey is: " + typeof userKey);
        }
        for (let i = 0; i < inputKey.length; i++) {
            for (k = 0; k < alphabetOriginal.length; k++) {
                if (inputKey[i] == alphabetOriginal[k]) {
                    key.push(alphabetOriginal.indexOf(alphabetOriginal[k]));
                    k = alphabetOriginal.length;
                }
            }
        }
        console.log("Userkey is: " + key);
    }

    let vigenereText;
    function iterateVigenereString(vigenereString, keyField, reverse) {
        alphabet = alphabetOriginal.slice();
        if (reverse === true) {
            alphabet = alphabet.reverse();
        }
        vigenereText = "";
        userString = document.getElementById(vigenereString).value;
        userString = userString.toLowerCase();
        console.log("userstring is: " + userString);
        for (let i = 0, g = 0; i < userString.length; i++) {
            if (g == key.length) {
                g = 0;
            }
            for (let j = 0; j < alphabet.length; j++) {
                if (userString[i] == alphabet[j]) {
                    vigenereText += alphabet[j + key[g]];
                    j = alphabet.length;
                    g++;
                    console.log("encryptedmsginloopis: " + vigenereText);
                }
                if ((!/^[a-z]/.test(userString[i]))) {
                    vigenereText += userString[i];
                    j = alphabet.length;
                }
            }
        }
    }

    function writeVigenereText (outputParagraph) {
        cryptedParagraph = document.getElementById(outputParagraph);
        console.log("Encryptedtextis: " + vigenereText);
        cryptedParagraph.innerHTML = vigenereText;
    }

    $("#vigenere-btn").click(function () {
        getUserKey("vigenere-key");
        convertKeyToNumbers(inputKey);
        iterateVigenereString("vigenere-input", "vigenere-key", false);
        writeVigenereText("vigenere-output");
    })
    $("#vigenere-decrypt-btn").click(function () {
        iterateVigenereString("vigenere-to-decrypt", "vigenere-decrypt-output", "vigenere-key-decrypt", true);
    })
});