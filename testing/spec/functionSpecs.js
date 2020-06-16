

//Test cesar cipher function

describe("This function should take what ever text it gets, but should only try to encrypt or decrypt letters from a-z.", function () {
    //Declared these variables to easilly pass values to the functions
    let shift = 3;
    let text = "correct";
    let decryptedText = "zloobzq";
    let textWithSpacesAndSigns = "my age is _(36)";
    let encryptedTxtWithSpaceSigns = "jv xdb fp _(36)";
    let decrypt = false;
    let encrypt = true;

    it("should return zloobzq", function () {
        expect(encryption.iterateString(text, shift, encrypt)).toBe("zloobzq");
    });
    it("should return correct", function () {
        expect(encryption.iterateString(decryptedText, shift, decrypt)).toBe("correct");
    });
    it("should return jv xdb fp _(36)", function () {
        expect(encryption.iterateString(textWithSpacesAndSigns, shift, encrypt)).toBe("jv xdb fp _(36)");
    });
    it("should return my age is _(36)", function () {
        expect(encryption.iterateString(encryptedTxtWithSpaceSigns, shift, decrypt)).toBe("my age is _(36)");
    });

});

//Test Vigenere cipher encryption/decryption function

describe("This function should take what ever text it gets, but should only try to encrypt or decrypt letters from a-z.", function () {
    //Declared these variables to easilly pass values to the functions
    let key = [1, 2, 3];
    let text = "correct";
    let decryptedText = "dqusgfu";
    let textWithSpacesAndSigns = "my age is _(36)";
    let encryptedTxtWithSpaceSigns = "na dhg lt _(36)";
    let decrypt = true;
    let encrypt = false;

    it("should return dqusgfu", function () {
        expect(encryption.iterateVigenereString(text, key, encrypt)).toBe("dqusgfu");
    });
    it("should return correct", function () {
        expect(encryption.iterateVigenereString(decryptedText, key, decrypt)).toBe("correct");
    });
    it("should return na dhg lt _(36)", function () {
        expect(encryption.iterateVigenereString(textWithSpacesAndSigns, key, encrypt)).toBe(encryptedTxtWithSpaceSigns);
    });
    it("should return my age is _(36)", function () {
        expect(encryption.iterateVigenereString(encryptedTxtWithSpaceSigns, key, decrypt)).toBe(textWithSpacesAndSigns);
    });

});

//Test conversion of letters to numbers
describe("This function should take letters as input and return each letter's index.", function () {
    //Declared these variables to easilly pass values to the functions
    let userKey = "abc";
    let userKeyTwo = "zyx";

    it("should return 1 2 3", function () {
        expect(encryption.convertKeyToNumbers(userKey)).toEqual([0, 1, 2]);
    });
    it("should return 25 24 23", function () {
        expect(encryption.convertKeyToNumbers(userKeyTwo)).toEqual([25, 24, 23]);
    });
});

//Test users shift input
describe("This function should sort out invalid shifts and return the default shift, 13.", function () {
    //Declared these variables to easilly pass values to the functions
    let correctShift = 4;
    let correctShiftString = "4";
    let letterShift = "test";
    let tooLowShift = 0;
    let tooBigShift = 26;

    it("should return 4", function () {
        expect(encryption.checkShift(correctShift)).toBe(4);
    });
    it("should return 4", function () {
        expect(encryption.checkShift(correctShiftString)).toBe(4);
    });
    it("should return 13", function () {
        expect(encryption.checkShift(letterShift)).toBe(13);
    });
    it("should return 13", function () {
        expect(encryption.checkShift(tooLowShift)).toBe(13);
    });
    it("should return 13", function () {
        expect(encryption.checkShift(tooBigShift)).toBe(13);
    });
});

//Testing checking of user key input
describe("This function should return the default key if user's key is invalid.", function () {
    //Declared these variables to easilly pass values to the functions
    let userKey = "mykey";
    let keyWithUpper = "TesT";
    let keyWithNum = "34";
    let keyWithSpace = "my key";
    let keyWithSymbols = "#%__%HJ(YR)";

    it("should return mykey", function () {
        expect(encryption.checkUserKey(userKey)).toBe("mykey");
    });
    it("should return test", function () {
        expect(encryption.checkUserKey(keyWithUpper)).toBe("test");
    });
    it("should return thisisthekey", function () {
        expect(encryption.checkUserKey(keyWithNum)).toBe("thisisthekey");
    });
    it("should return thisisthekey", function () {
        expect(encryption.checkUserKey(keyWithSpace)).toBe("thisisthekey");
    });
    it("should return thisisthekey", function () {
        expect(encryption.checkUserKey(keyWithSymbols)).toBe("thisisthekey");
    });
});


