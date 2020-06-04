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