encryption = function () {

    //===================== Cesar cipher logic =======================

    function getAlphabet() {
        let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
            "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
            "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        return alphabetOriginal;
    }

    function iterateString(text, shiftNumber, reversed) {
        let alphabet = getAlphabet();
        if (reversed == true) {
            alphabet = alphabet.reverse();
        }
        let shift = shiftNumber;
        let cesarString = "";
        let inputText = text;
        inputText = inputText.toLowerCase();
        for (let i = 0; i < inputText.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (inputText[i] == alphabet[j]) {
                    cesarString += alphabet[j + shift];
                    j = alphabet.length;
                }
                if (!(/^[a-z]/).test(inputText[i])) {
                    cesarString += inputText[i];
                    j = alphabet.length;
                }
            }
        }
        return cesarString;
    }

    function getShift(shiftField) {
        let shift = document.getElementById(shiftField).value;
        if (shift < 1 || shift > 25 || shift === isNaN(shift)) {
            shift = 13;
            document.getElementById(shiftField).value = shift;
            return shift;
        }
        else {
            shift = Number(document.getElementById(shiftField).value);
            return shift;
        }
    }

    //========================== Vignere Cipher logic =============================

    // Assigns user input to userString
    function getUserText(vigenereUserText) {
        let userString = document.getElementById(vigenereUserText).value;
        userString = userString.toLowerCase();
        return userString;
    }

    // Assigns user key to inputKey
    function getUserKey(userKey) {
        let inputKey = document.getElementById(userKey).value;
        console.log(inputKey);
        inputKey = inputKey.toLowerCase();
        return inputKey;
    }

    // Sets inputKey to default key
    function writeDefaultKey(userKey, keyField) {
        let key = userKey;
        if (/[^a-z]/.test(key) || key == "") {
            console.log("User key is not according to rule");
            key = "thisisthekey";
            document.getElementById(keyField).value = key;
            console.log("userKey is: " + typeof key);
            return key;
        }
        else {
            return key;
        }
    }

    // Loops through each letter in the key and gets its index. Assigns index numbers to key
    function convertKeyToNumbers(userKey) {
        let alphabetOriginal = getAlphabet();
        let keyToConvert;
        keyToConvert = userKey;
        let convertedKey = [];
        console.log(getAlphabet());
        for (let i = 0; i < keyToConvert.length; i++) {
            for (k = 0; k < alphabetOriginal.length; k++) {
                if (keyToConvert[i] == alphabetOriginal[k]) {
                    convertedKey.push(alphabetOriginal.indexOf(alphabetOriginal[k]));
                    k = alphabetOriginal.length;
                }
            }
        }
        console.log("Userkey is: " + convertedKey);
        return convertedKey;
    }

    /*Loops through each letter in the userString and each number in key synchronically. userString[i] 
    is compared to alphabet[j], which is looped through for each letter in userString. When matched,
    alphabet[j + key[g]] is added to vigenereText. Reverse parameter is used to check if the function
    is called for encryption or decryption.*/
    function iterateVigenereString(text, numberKey, reverse) {
        let vigenereText;
        let key = numberKey;
        console.log("text is: " + text);
        alphabet = getAlphabet();
        vigenereText = "";
        if (reverse === true) {
            alphabet = alphabet.reverse();
        }
        let inputText = text;
        console.log("userstring is: " + inputText);
        let g = 0;
        for (let i = 0; i < inputText.length; i++) {
            if (g == key.length) {
                g = 0;
            }
            for (let j = 0; j < alphabet.length; j++) {
                if (inputText[i] === alphabet[j]) {
                    vigenereText += alphabet[j + key[g]];
                    j = alphabet.length;
                    g++;
                    console.log("encryptedmsginloopis: " + vigenereText);
                }
                if ((!/^[a-z]/.test(inputText[i]))) {    //Makes sure characters not in the range of a-z is printed
                    vigenereText += inputText[i];
                    break;
                }
            }
        }
        return vigenereText;
    }

    //Prints vigenereText to html element.
    function writeVigenereText(outputParagraph, text) {
        let textToPrint = text;
        cryptedParagraph = document.getElementById(outputParagraph);
        console.log("Encryptedtextis: " + textToPrint);
        cryptedParagraph.innerHTML = textToPrint;
    }

    function decryptVigenereText() {
        let userText = getUserText("vigenere-to-decrypt");
        let key = getUserKey("vigenere-key-decrypt");
        key = writeDefaultKey(key, "vigenere-key-decrypt");
        let numberKey = convertKeyToNumbers(key);
        let decryptedText = iterateVigenereString(userText, numberKey, true);
        writeVigenereText("vigenere-decrypt-output", decryptedText);
    }

    function encryptVigenereText() {
        let userText = getUserText("vigenere-input");
        let key = getUserKey("vigenere-key");
        key = writeDefaultKey(key, "vigenere-key");
        let numberKey = convertKeyToNumbers(key);
        let encryptedText = iterateVigenereString(userText, numberKey, false);
        writeVigenereText("vigenere-output", encryptedText);
    }

    function encryptCesarText() {
        let userText = getUserText("input-text");
        let shift = getShift("input-shift");
        let cesarString = iterateString(userText, shift, true);
        writeVigenereText("encrypted", cesarString);
    }

    function decryptCesarText() {
        let userText = getUserText("text-to-decrypt");
        let shift = getShift("output-shift");
        let cesarString = iterateString(userText, shift, false);
        writeVigenereText("decrypted", cesarString);
    }

    //=================== Click handlers and function calls ========================
    $(document).ready(function () {

        // Cesar encrypt/decrypt button handlers
        $("#cesar-btn").click(function () {
            encryptCesarText();
        })
        $("#cesar-decipher-btn").click(function () {
            decryptCesarText();
        })

        // Vigenere encrypt/decrypt button handlers

        $("#vigenere-btn").click(function () {
            encryptVigenereText();
        })
        $("#vigenere-decrypt-btn").click(function () {
            decryptVigenereText();
        })




    });
    return {
        iterateString: iterateString,
        convertKeyToNumbers: convertKeyToNumbers,
        iterateVigenereString: iterateVigenereString
    };
}();