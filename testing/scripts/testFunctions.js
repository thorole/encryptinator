function getAlphabet() {
    let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return alphabetOriginal;
}
//Checks that value entered is within the rule
function checkShift(usershift) {
    let shift = Number(usershift);
    let isNotNumber = isNaN(shift);
    if (shift < 1 || shift > 25 || isNotNumber === true) {
        shift = 13;
        return shift;
    }
    else {
        shift = parseInt(usershift);
        shift = Number(shift);
        return shift;
    }
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

function iterateVigenereString(text, numberKey, reverse) {
    let vigenereText;
    let key = numberKey;
    console.log("text is: " + text);
    let alphabet = getAlphabet();
    vigenereText = "";
    if (reverse === true) {
        alphabet = alphabet.reverse();
    }
    let inputText = text;
    console.log("userstring is: " + inputText);
    for (let i = 0, g = 0; i < inputText.length; i++) {
        if (g === key.length) {
            g = 0;
        }
        for (let j = 0; j < alphabet.length; j++) {
            if (inputText[i] === alphabet[j]) {
                vigenereText += alphabet[j + key[g]];
                j = alphabet.length;
                g++;
                console.log("encryptedmsginloopis: " + vigenereText);
            }
            if (!(/^[a-z]/).test(inputText[i])) {    //Makes sure characters not in the range of a-z is printed
                vigenereText += inputText[i];
                break;
            }
        }
    }
    return vigenereText;
}

//Converts text to numbers
function convertKeyToNumbers(userKey) {
    let alphabetOriginal = getAlphabet();
    let keyToConvert;
    keyToConvert = userKey;
    let convertedKey = [];
    console.log(getAlphabet());
    for (let i = 0; i < keyToConvert.length; i++) {
        for (let k = 0; k < alphabetOriginal.length; k++) {
            if (keyToConvert[i] === alphabetOriginal[k]) {
                convertedKey.push(alphabetOriginal.indexOf(alphabetOriginal[k]));
                k = alphabetOriginal.length;
            }
        }
    }
    console.log("Userkey is: " + convertedKey);
    return convertedKey;
}

//Should return default key if users input is the wrong format
function checkUserKey(userKey) {
    let key = userKey.toLowerCase();
    if ((/[^a-z]/).test(key) || key == "") {
        console.log("User key is not according to rule");
        key = "thisisthekey";
        console.log("userKey is: " + typeof key);
        return key;
    }
    else {
        return key;
    }
}