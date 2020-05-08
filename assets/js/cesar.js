$( document ).ready(function() {

let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/*let cesarDeciphered = "";
let cesarString = "";
let shift = 13;
let decryptedMsg = "";
function iterateString() {    //Encrypts whatever message is entered into the input field
    encryptedParagraph = document.getElementById("encrypted");
    cesarString = "";
    inputText = document.getElementById("inputText").value;
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
    encryptedParagraph.innerHTML = cesarString;
}

function decipher() {     //Deciphers whatever message is entered in the input field
    alphabetReversed = alphabet.reverse();
    decryptedMsg = "";
    decryptedParagraph = document.getElementById("decrypted");
    inputText = document.getElementById("textToDecrypt").value;
    inputText = inputText.toLowerCase();
    for (let i = 0; i < inputText.length; i++) {
        for (let j = 0; j < alphabetReversed.length; j++) {
            if (inputText[i] == alphabetReversed[j]) {
                decryptedMsg += alphabetReversed[j + shift];
                j = alphabet.length;
            }
            if ((!/^[a-z]/.test(inputText[i]))) {
                decryptedMsg += inputText[i];
                j = alphabetReversed.length;
            }
        }
    }
    decryptedParagraph.innerHTML = decryptedMsg;
}*/
let alphabet = alphabetOriginal.slice()
let cesarString = "";
let shift = 13;
let decryptedMsg = "";
function iterateString(message, outputParagraph, reversed) {
    alphabet = alphabetOriginal;
    if (reversed == true) {
        alphabet = alphabet.reverse();
        console.log("alphabet: " + alphabet);
        console.log("alphabetOriginal: " + alphabetOriginal);
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
    iterateString('input-text', 'encrypted', true);
})
//$("#cesar-btn").click(iterateString('input-text', 'encrypted'));


//$("#cesar-decipher-btn").click(decipher);
});