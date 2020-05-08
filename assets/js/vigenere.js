$(document).ready(function () {

    let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let alphabet = alphabetOriginal.slice();
    let inputKey;
    //let cesarString = "";
    //let userString = "jeg møter deg bak stortinget med konvolutten!";
    let key = [];
    function getKey(userKey) {
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

    /*function encryptText() {
        for (let i = 0, g = 0; i < userString.length; i++, g++) {
            if (g == key.length) {
                g = 0;
            }
            for (let j = 0; j < alphabet.length; j++) {
                if (userString[i] == alphabet[j]) {
                    cesarString += alphabet[j + key[g]];
                    j = alphabet.length;
                }
                if ((!/^[a-ø]/.test(userString[i]))) {
                    cesarString += userString[i];
                    j = alphabet.length;
                }
            }
        }
    }
    */
    $("#vigenere-btn").click(function () {
        getKey("vigenere-key");
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