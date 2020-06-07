"use strict";

/*
All code encapsulated in IEFE (revealing module pattern) to keep global scope clean.
*/ 
let encryption = function () {

    /*
    Function which returns the alphabet.
    */
    function getAlphabet() {
        let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
            "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
            "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        return alphabetOriginal;
    }
    /*===================== Cesar cipher logic =======================*/

    /* 
    Encrypts/decrypts the text. Compares each letter in text for a match in alphabet.
    If there's a match, it adds the index of the matched letter + the shift to a string.
    */
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
                    break;
                }
                if (!(/^[a-z]/).test(inputText[i])) { //If not a letter, add it unchanged to string.
                    cesarString += inputText[i];
                    break;
                }
            }
        }
        return cesarString;
    }

    /*
    Get the value from the form and return it.
    */
    function getShift(shiftField) {
        let shift = document.getElementById(shiftField).value;
        return shift;
    }

    /*
    Write whatever value it it gets as argument to form.
    */
    function writeDefaultShift(shiftField, shift) {
        document.getElementById(shiftField).value = shift;
    }

    /*
    Check if value is a number and between 1-25. If not, set shift to default 13.
    Returns shift.
    */
    function checkShift(usershift) {
        let shift = Number(usershift);
        let isNotNumber = isNaN(shift);
        if (shift < 1 || shift > 25 || isNotNumber === true) {
            shift = 13;
            return shift;
        }
        else {
            shift = parseInt(usershift); //If user inputs a decimals
            shift = Number(shift);
            return shift;
        }
    }

    /*========================== Vignere Cipher logic =============================*/

    /*
    Assigns user input to userString
    */
    function getUserText(vigenereUserText) {
        let userString = document.getElementById(vigenereUserText).value;
        userString = userString.toLowerCase();
        return userString;
    }

    /*
    Assigns user value to key. If the key is not letters only, key is set to
    default "thisisthekey". Returns the key.
    */
    function checkUserKey(userKey) {
        let key = userKey.toLowerCase();
        if ((/[^a-z]/).test(key) || key == "") { //Test for letters only or spaces
            console.log("User key is not according to rule");
            key = "thisisthekey";
            console.log("userKey is: " + typeof key);
            return key;
        }
        else {
            return key;
        }
    }

    /*
    Writes whatever value it gets as argument.
    */
    function writeDefaultKey(userKey, keyField) {
        document.getElementById(keyField).value = userKey;
    }

    /*
    Gets the key. Compares each letter in key with alphabet. If match, push the index 
    of the matched alphabet letter to key.
    */
    function convertKeyToNumbers(userKey) {
        let alphabetOriginal = getAlphabet();
        let keyToConvert;
        keyToConvert = userKey;
        let convertedKey = [];
        console.log(getAlphabet());
        for (let i = 0; i < keyToConvert.length; i++) {
            for (let j = 0; j < alphabetOriginal.length; j++) {
                if (keyToConvert[i] === alphabetOriginal[j]) {
                    convertedKey.push(alphabetOriginal.indexOf(alphabetOriginal[j]));
                    break;
                }
            }
        }
        console.log("Userkey is: " + convertedKey);
        return convertedKey;
    }

    /*
    Loops through each letter in the text and each number in key at the same time. Compares current letter (i) 
    with alphabet (k). When matched, alphabet[k + key[g]] is added to vigenereText. Reverse parameter is used 
    to check if the function is called for encryption or decryption. Returns text.
    */
    function iterateVigenereString(text, numberKey, reverse) {
        let vigenereText;
        let key = numberKey;
        console.log("number key in iterate function is: " + key)
        console.log("text is: " + text);
        let alphabet = getAlphabet();
        vigenereText = "";
        if (reverse === true) {
            alphabet = alphabet.reverse();
        }
        let inputText = text;
        console.log("userstring is: " + inputText);
        for (let i = 0, j = 0; i < inputText.length; i++) {
            if (j === key.length) {          //Loop through key again in cases where text is longer than the key
                j = 0;
            }
            for (let k = 0; k < alphabet.length; k++) {
                if (inputText[i] === alphabet[k]) {
                    vigenereText += alphabet[k + key[j]];
                    j++;
                    break;
                    console.log("encryptedmsginloopis: " + vigenereText);
                }
                if (!(/^[a-z]/).test(inputText[i])) {    //Makes sure characters not in the range of a-z is printed
                    vigenereText += inputText[i];
                    break;
                }
            }
        }
        console.log("encrypted text is: " + vigenereText);
        return vigenereText;
    }

    /*
    Prints vigenereText to html element.
    */
    function writeVigenereText(outputParagraph, text) {
        let textToPrint = text;
        let cryptedParagraph = document.getElementById(outputParagraph);
        console.log("Encryptedtextis: " + textToPrint);
        cryptedParagraph.innerHTML = textToPrint;
    }

    /*
    Api request for a random word to wordnik api. Parts of the code is from from w3schools. It also
    checks for all letters. If not, request new word. If api is called too many times, return key
    "toomanyrequests".
    */
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myResponse = this.responseText;
            let randomWord = JSON.parse(myResponse);
            if ((/[^a-zA-Z]/).test(randomWord["word"])) {
                requestRandomWord();
            }
            else {
                document.getElementById("vigenere-key").value = randomWord["word"];
            }
        }
        if (this.status == 429) {
            document.getElementById("vigenere-key").value = "toomanyrequests";
        }
    };
    function requestRandomWord() {
        xhttp.open("GET", "http://api.wordnik.com/v4/words.json/randomWord?api_key=6jvb3k81q3xetcoqdgk9zbkz6by1bcl0h9n9hg7ktkl0563h8", true);
        xhttp.send();
    }

    /*
    Clears form
    */
    function clearForm(inputField, shiftField, outputField) {
        document.getElementById(inputField).value = "";
        document.getElementById(shiftField).value = "";
        document.getElementById(outputField).innerHTML = "";
    }

    /*
    Collection of the vigenere encryption functions in correct order. The functions sets variables that are used
    as arguments in the proceeding functions.
    */
    function encryptVigenereText() {
        let userText = getUserText("vigenere-input");
        let key = getShift("vigenere-key");
        key = checkUserKey(key);
        writeDefaultKey(key, "vigenere-key");
        let numberKey = convertKeyToNumbers(key);
        let encryptedText = iterateVigenereString(userText, numberKey, false);
        writeVigenereText("vigenere-output", encryptedText);
    }

    /*
    Collection of the vigenere decryption functions in correct order. The functions sets variables that are used
    as arguments in the proceeding functions.
    */
    function decryptVigenereText() {
        let userText = getUserText("vigenere-to-decrypt");
        let key = getShift("vigenere-key-decrypt");
        key = checkUserKey(key);
        writeDefaultKey(key, "vigenere-key-decrypt");
        let numberKey = convertKeyToNumbers(key);
        let decryptedText = iterateVigenereString(userText, numberKey, true);
        writeVigenereText("vigenere-decrypt-output", decryptedText);
    }

    /*
    Collection of the cesar encryption functions in correct order. The functions sets variables that are used
    as arguments in the proceeding functions.
    */
    function encryptCesarText() {
        let userText = getUserText("input-text");
        let shift = getShift("input-shift");
        shift = checkShift(shift);
        console.log("shift is: " + shift);
        writeDefaultShift("input-shift", shift);
        console.log("shift is: " + shift);
        let cesarString = iterateString(userText, shift, true);
        writeVigenereText("encrypted", cesarString);
    }

    /*
    Collection of the cesar decryption functions in correct order. The functions sets variables that are used
    as arguments in the proceeding functions.
    */
    function decryptCesarText() {
        let userText = getUserText("text-to-decrypt");
        let shift = getShift("output-shift");
        shift = checkShift(shift);
        writeDefaultShift("output-shift", shift);
        let cesarString = iterateString(userText, shift, false);
        writeVigenereText("decrypted", cesarString);
    }

    //=================== Click handlers and function calls ========================
    $(document).ready(function () {

        /*
        Cesar encrypt/decrypt button handlers.
        */
        $("#cesar-btn").click(function () {
            encryptCesarText();
        });
        $("#cesar-decipher-btn").click(function () {
            decryptCesarText();
        });


        /*
        Vigenere encrypt/decrypt button handlers.
        */
        $("#vigenere-btn").click(function () {
            encryptVigenereText();
        });
        $("#rndm-word").click(function () {
            requestRandomWord();
        })
        $("#vigenere-decrypt-btn").click(function () {
            decryptVigenereText();
        });

        /*
        Clear forms button handlers.
        */
        $("#clear-cesar-encrypt").click(function () {
            clearForm("input-text", "input-shift", "encrypted");
        });
        $("#clear-cesar-decrypt").click(function () {
            clearForm("text-to-decrypt", "output-shift", "decrypted");
        });
        $("#clear-vigenere-encrypt").click(function () {
            clearForm("vigenere-input", "vigenere-key", "vigenere-output");
        });
        $("#clear-vigenere-decrypt").click(function () {
            clearForm("vigenere-to-decrypt", "vigenere-key-decrypt", "vigenere-decrypt-output");
        });

    });
    
    /*
    These functions are made available to the global scope as they're needed in the game.
    */
    return {
        iterateString: iterateString,
        convertKeyToNumbers: convertKeyToNumbers,
        iterateVigenereString: iterateVigenereString
    };
}();