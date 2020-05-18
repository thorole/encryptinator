$(document).ready(function () {
    
    let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let userString;
    let alphabet = alphabetOriginal.slice();
    let inputKey;
    let key;
    let vigenereText;
    
    // Assigns user input to userString
    function getUserText(vigenereUserText) {
        userString = document.getElementById(vigenereUserText).value;
        userString = userString.toLowerCase();
    }
    
    // Assigns user key to inputKey
    function getUserKey(userKey) {
        inputKey = document.getElementById(userKey).value;
        console.log(inputKey);
        inputKey = inputKey.toLowerCase();
    }

    // Sets inputKey to default key
    function writeDefaultKey(keyField) {
        if (inputKey == "") {
            inputKey = "thisisthekey";
            document.getElementById(keyField).value = inputKey;
            console.log("userKey is: " + typeof userKey);
        }
    }
    
    // Loops through each letter in the key and gets its index. Assigns index numbers to key
    function convertKeyToNumbers() {
        key = [];
        console.log(alphabetOriginal);
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

    /*Loops through each letter in the userString and each number in key synchronically. userString[i] 
    is compared to alphabet[j], which is looped through for each letter in userString. When matched,
    alphabet[j + key[g]] is added to vigenereText. Reverse parameter is used to check if the function
    is called for encryption or decryption.*/ 
    function iterateVigenereString(reverse) {
        alphabet = alphabetOriginal.slice();
        vigenereText = "";
        if (reverse === true) {
            alphabet = alphabet.reverse();
        }
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
                if ((!/^[a-z]/.test(userString[i]))) {    //Makes sure characters not in the range of a-z is printed
                    vigenereText += userString[i];
                    j = alphabet.length;
                }
            }
        }
    }
    
    //Prints vigenereText to html element.
    function writeVigenereText(outputParagraph) {
        cryptedParagraph = document.getElementById(outputParagraph);
        console.log("Encryptedtextis: " + vigenereText);
        cryptedParagraph.innerHTML = vigenereText;
    }

    $("#vigenere-btn").click(function () {
        getUserText("vigenere-input");
        getUserKey("vigenere-key");
        writeDefaultKey("vigenere-key");
        convertKeyToNumbers();
        iterateVigenereString("vigenere-input", "vigenere-key", false);
        writeVigenereText("vigenere-output");
    })
    $("#vigenere-decrypt-btn").click(function () {
        getUserText("vigenere-to-decrypt");
        getUserKey("vigenere-key-decrypt");
        writeDefaultKey("vigenere-key-decrypt");
        convertKeyToNumbers();
        iterateVigenereString(true);
        writeVigenereText("vigenere-decrypt-output");
    })
});