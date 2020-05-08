$( document ).ready(function() {

let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let alphabet = alphabetOriginal.slice()
let cesarString = "";
let shift = 13;
function iterateString(message, outputParagraph, reversed) {
    alphabet = alphabetOriginal;
    if (reversed == true) {
        alphabet = alphabet.reverse();
    }  
    encryptedParagraph = document.getElementById(outputParagraph);
    cesarString = "";
    inputText = document.getElementById(message).value;
    inputText = inputText.toLowerCase();
    for (let i = 0; i < inputText.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (inputText[i] == alphabet[j]) {
                cesarString += alphabet[j + shift];
                j = alphabet.length;
            }
            if ((!/^[a-z]/.test(inputText[i]))) {
                cesarString += inputText[i];
                j = alphabet.length;
            }
        }
    }
    console.log("alphabetOriginal: " + alphabetOriginal);
    encryptedParagraph.innerHTML = cesarString;
}
$("#cesar-btn").click(function() {
    iterateString('input-text', 'encrypted', false);
})
$("#cesar-decipher-btn").click(function() {
    iterateString('text-to-decrypt', 'decrypted', true);
})
//$("#cesar-btn").click(iterateString('input-text', 'encrypted'));
//$("#cesar-decipher-btn").click(decipher);
});