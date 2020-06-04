//Test cesar cipher function

describe("Encrypts or decrypts text", function() {
    let shift = 3;
    let text = "correct";
    let decryptedText = "zloobzq";
    let decrypt = false;
    let encrypt = true;

    it("should return zloobzq", function () {
        expect(iterateString(text, shift, encrypt)).toBe("zloobzq");
    });
    it("should return correct", function () {
        expect(iterateString(decryptedText, shift, decrypt)).toBe("correct");
    });

});

//Test Vigenere cipher encryption/decryption function

describe("Encrypts or decrypts text", function() {
    let key = [1,2,3];
    let text = "correct";
    let decryptedText = "dqusgfu";
    let decrypt = true;
    let encrypt = false;

    it("should return dqusgfu", function () {
        expect(iterateVigenereString(text, key, encrypt)).toBe("dqusgfu");
    });
    it("should return correct", function () {
        expect(iterateVigenereString(decryptedText, key, decrypt)).toBe("correct");
    });

});


