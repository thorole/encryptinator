let inputKey = "a"
let cesarString = "";
let userString = "jeg møter deg bak stortinget med konvolutten!";
let key = [];
function getKey() {
    for (let i = 0; i < inputKey.length; i++) {
        for (k = 0; k < alphabet.length; k++) {
            if (inputKey[i] == alphabet[k]) {
                key.push(alphabet.indexOf(alphabet[k]));
                k = alphabet.length;
            }
        }
    }
}

function encryptText() {
    for (let i = 0, g = 0; i < userString.length; i++, g++) {
        if (g == key.length) {
            g = 0;
        }
        for (let j = 0; j < alphabet.length; j++) {
            if (userString[i] == alphabet[j]) {
                cesarString += alphabet[j + key[g]];
                j = alphabet.length;
            }
            if ((!/^[a-ø]/.test(userString[i]))) {
                cesarString += userString[i];
                j = alphabet.length;
            }
        }
    }
}
getKey();
encryptText();
console.log(cesarString);

let reversedAlphabet = alphabet.reverse();
let decrypted = "";

function decryptText() {
    for (let i = 0, g = 0; i < cesarString.length; i++, g++) {
        if (g == key.length) {
            g = 0;
        }
        for (let j = 0; j < reversedAlphabet.length; j++) {
            if (cesarString[i] == alphabet[j]) {
                decrypted += reversedAlphabet[j + key[g]];
                j = reversedAlphabet.length;
            }
            if ((!/^[a-ø]/.test(cesarString[i]))) {
                decrypted += cesarString[i];
                j = reversedAlphabet.length;
            }
        }
    }
}
decryptText();
console.log(decrypted);