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