//Test cesar cipher function

describe("Encrypts or decrypts text", function() {
    let shift = 3;
    let text = "correct";
    let decryptedText = "zloobzq";
    let textWithSpacesAndSigns = "my age is _(36)";
    let encryptedTxtWithSpaceSigns = "jv xdb fp _(36)"; 
    let decrypt = false;
    let encrypt = true;

    it("should return zloobzq", function () {
        expect(iterateString(text, shift, encrypt)).toBe("zloobzq");
    });
    it("should return correct", function () {
        expect(iterateString(decryptedText, shift, decrypt)).toBe("correct");
    });
    it("should return jv xdb fp _(36)", function () {
        expect(iterateString(textWithSpacesAndSigns, shift, encrypt)).toBe("jv xdb fp _(36)");
    });
    it("should return my age is _(36)", function () {
        expect(iterateString(encryptedTxtWithSpaceSigns, shift, decrypt)).toBe(textWithSpacesAndSigns);
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

//Test conversion of letters to numbers
describe("Converts text to numbers", function() {
    
let userKey = "abc"

    it("should return 1 2 3", function () {
        expect(convertKeyToNumbers(userKey)).toEqual([ 0, 1, 2 ]);
    });
    

});


