$(document).ready(function () {

    let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let userString;
    let alphabet = alphabetOriginal.slice();
    let inputKey;
    let key = [];
    function getKey(userKey) {
        key = [];
        console.log("userKey is: " + typeof userKey);
        inputKey = document.getElementById(userKey).value;
        for (let i = 0; i < inputKey.length; i++) {
            for (k = 0; k < alphabet.length; k++) {
                if (inputKey[i] == alphabet[k]) {
                    key.push(alphabet.indexOf(alphabet[k]));
                    k = alphabet.length;
                }
            }
        }
        console.log("Userkey is: " + key);
    }

    function iterateVigenereString(vigenereString, outputParagraph) {
        let vigenereText = "";
        getKey("vigenere-key");
        userString = document.getElementById(vigenereString).value;
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
        iterateVigenereString("vigenere-input", "vigenere-output");
    })
    /*
    encryptText();
    console.log(cesarString);
    
    let reversedAlphabet = alphabet.reverse();
    let decrypted = "";
    
    function decryptText() {
        for (let i = 0, g = 0; i < cesarString.length; i++, g++) {
            if (g == key.length) {
                g = 0;
            }
            for (let j = 0; j < reversedAlphabet.length; j++) {
                if (cesarString[i] == alphabet[j]) {
                    decrypted += reversedAlphabet[j + key[g]];
                    j = reversedAlphabet.length;
                }
                if ((!/^[a-ø]/.test(cesarString[i]))) {
                    decrypted += cesarString[i];
                    j = reversedAlphabet.length;
                }
            }
        }
    }
    decryptText();
    console.log(decrypted);
    */

});