

//Test cesar cipher function

describe("Encrypts or decrypts text", function () {
    //Declared these variables to easilly pass values to the functions
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

describe("Encrypts or decrypts text", function () {
    //Declared these variables to easilly pass values to the functions
    let key = [1, 2, 3];
    let text = "correct";
    let decryptedText = "dqusgfu";
    let textWithSpacesAndSigns = "my age is _(36)";
    let encryptedTxtWithSpaceSigns = "na dhg lt _(36)";
    let decrypt = true;
    let encrypt = false;

    it("should return dqusgfu", function () {
        expect(iterateVigenereString(text, key, encrypt)).toBe("dqusgfu");
    });
    it("should return correct", function () {
        expect(iterateVigenereString(decryptedText, key, decrypt)).toBe("correct");
    });
    it("should return na dhg lt _(36)", function () {
        expect(iterateVigenereString(textWithSpacesAndSigns, key, encrypt)).toBe(encryptedTxtWithSpaceSigns);
    });
    it("should return my age is _(36)", function () {
        expect(iterateVigenereString(encryptedTxtWithSpaceSigns, key, decrypt)).toBe(textWithSpacesAndSigns);
    });

});

//Test conversion of letters to numbers
describe("Converts text to numbers", function () {

    let userKey = "abc";

    it("should return 1 2 3", function () {
        expect(convertKeyToNumbers(userKey)).toEqual([0, 1, 2]);
    });
});

//Test users shift input
describe("Checks shift, return userinput or default shift (13)", function () {

    let correctShift = 4;
    let correctShiftString = "4";
    let letterShift = "test";
    let tooLowShift = 0;
    let tooBigShift = 26;

    it("should return 4(1)", function () {
        expect(checkShift(correctShift)).toBe(4)
    });
    it("should return 4(2)", function () {
        expect(checkShift(correctShiftString)).toBe(4);
    });
    it("should return 13(3)", function () {
        expect(checkShift(letterShift)).toBe(13);
    });
    it("should return 13(4)", function () {
        expect(checkShift(tooLowShift)).toBe(13);
    });
    it("should return 13(5)", function () {
        expect(checkShift(tooBigShift)).toBe(13);
    });
});

//Test that default key is returned when user input is of wrong format
describe("Checks key, returns userinput or default key (thisisthekey)", function () {

    let userKey = "mykey";
    let keyWithUpper = "TesT";
    let keyWithNum = "34";
    let keyWithSpace = "my key";
    let keyWithSymbols = "#%__%HJ(YR)";

    it("should return mykey", function () {
        expect(checkUserKey(userKey)).toBe("mykey");
    });
    it("should return test", function () {
        expect(checkUserKey(keyWithUpper)).toBe("test");
    });
    it("should return thisisthekey", function () {
        expect(checkUserKey(keyWithNum)).toBe("thisisthekey");
    });
    it("should return thisisthekey", function () {
        expect(checkUserKey(keyWithSpace)).toBe("thisisthekey");
    });
    it("should return thisisthekey", function () {
        expect(checkUserKey(keyWithSymbols)).toBe("thisisthekey");
    });
});


