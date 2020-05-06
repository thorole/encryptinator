alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"];

let cesarDeciphered = "";
let cesarString = "";
let shift = 13;
function iterateString() {
    encryptedParagraph = document.getElementById("encrypted");
    inputText = document.getElementById("inputText").value;
    inputText = inputText.toLowerCase();
    for (let i = 0; i < inputText.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (inputText[i] == alphabet[j]) {
                cesarString += alphabet[j + shift];
                j = alphabet.length;
            }
            if ((!/^[a-zA-Z]/.test(inputText[i]))) {
                cesarString += inputText[i];
                j = alphabet.length;
            }
        }
    }
    encryptedParagraph.innerHTML = cesarString;
}
alphabetReversed = alphabet.reverse();
/*function decipher(messageToDecrypt) {
    let inputTextTwo = messageToDecrypt;
    for (let i = 0; i < inputTextTwo.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (inputTextTwo[i] == " ") {
                cesarDeciphered += " ";
                break;
            }
            else if (inputTextTwo[i] == alphabet[j] && j < 13) {
                cesarDeciphered += alphabet[j + 16];
            }
            else if (inputTextTwo[i] == alphabet[j]) {
                cesarDeciphered += alphabet[j - 13];
            }
            else {
                continue;
            }
        }
    }
}
*/

$("#cesar-btn").click(iterateString);
//iterateString("abcdefghijklmnopqrstuvwxyzæøå");
console.log(cesarString);
//decipher(cesarString);
console.log(cesarDeciphered);