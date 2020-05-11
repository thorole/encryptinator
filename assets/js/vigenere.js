$(document).ready(function () {

    let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let userString;
    let alphabet = alphabetOriginal.slice();
    let inputKey;
    let key;
    function getKey(userKey) {
        key = [];
        console.log(alphabetOriginal);
        inputKey = document.getElementById(userKey).value;
        inputKey = inputKey.toLowerCase();
        if (inputKey == "") {
            inputKey = "thisisthekey"
            document.getElementById(userKey).value = inputKey;
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


    function iterateVigenereString(vigenereString, outputParagraph, keyField, reverse) {
        alphabet = alphabetOriginal.slice();
        if (reverse === true) {
            alphabet = alphabet.reverse();
        }
        getKey(keyField);
        let vigenereText = "";
        userString = document.getElementById(vigenereString).value;
        userString = userString.toLowerCase();
        console.log("userstring is: " + userString);
        cryptedParagraph = document.getElementById(outputParagraph);
        for (let i = 0, g = 0; i < userString.length; i++, g++) {
            if (g == key.length) {
                g = 0;
            }
            for (let j = 0; j < alphabet.length; j++) {
                if (userString[i] == alphabet[j]) {
                    vigenereText += alphabet[j + key[g]];
                    j = alphabet.length;
                    console.log("encryptedmsginloopis: " + vigenereText);
                }
                if ((!/^[a-ø]/.test(userString[i]))) {
                    vigenereText += userString[i];
                    j = alphabet.length;
                }
            }
        }
        console.log("Encryptedtextis: " + vigenereText);
        cryptedParagraph.innerHTML = vigenereText;
    }

    $("#vigenere-btn").click(function () {
        iterateVigenereString("vigenere-input", "vigenere-output", "vigenere-key", false);
    })
    $("#vigenere-decrypt-btn").click(function () {
        iterateVigenereString("vigenere-to-decrypt", "vigenere-decrypt-output", "vigenere-key-decrypt", true);
    })
});