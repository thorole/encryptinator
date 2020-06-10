"use strict";

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

function iterateVigenereString(text, numberKey, reverse) {
    let vigenereText;
    let key = numberKey;
    let alphabet = getAlphabet();
    vigenereText = "";
    if (reverse === true) {
        alphabet = alphabet.reverse();
    }
    let inputText = text;
    for (let i = 0, j = 0; i < inputText.length; i++) {
        if (j === key.length) {          //Loop through key again in cases where text is longer than the key
            j = 0;
        }
        for (let k = 0; k < alphabet.length; k++) {
            if (inputText[i] === alphabet[k]) {
                vigenereText += alphabet[k + key[j]];
                j++;                     //j must increment only when there's a match.
                break;
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
    for (let i = 0; i < keyToConvert.length; i++) {
        for (let k = 0; k < alphabetOriginal.length; k++) {
            if (keyToConvert[i] === alphabetOriginal[k]) {
                convertedKey.push(alphabetOriginal.indexOf(alphabetOriginal[k]));
                k = alphabetOriginal.length;
            }
        }
    }
    return convertedKey;
}

//Should return default key if users input is the wrong format
function checkUserKey(userKey) {
    let key = userKey.toLowerCase();
    if ((/[^a-z]/).test(key) || key == "") {
        key = "thisisthekey";
        return key;
    }
    else {
        return key;
    }
}