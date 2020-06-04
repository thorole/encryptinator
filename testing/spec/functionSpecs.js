describe("Encrypts or decrypts text", function() {
    let shift = 3;
    let text = "correct";
    let decryptedText = "zloobzq";
    let decrypt = true;
    let encrypt = false;

    it("should return zloobzq", function () {
        expect(iterateString(text, shift, decrypt)).toBe("zloobzq");
    });
    it("should return correct", function () {
        expect(iterateString(decryptedText, shift, encrypt)).toBe("correct");
    });

});

/*describe("The Drink Game", function () {
    it("should return error!", function () {
        expect(whatCanIDrink(0)).toBe("Sorry. I can't tell what drink because that age is incorrect");
      
    });
    it("should return error!", function() {
        expect(whatCanIDrink("hei")).toBe("Sorry. I can't tell what drink because that age is incorrect");
    });
    it("should return drink beer", function() {
        expect(whatCanIDrink(19)).toBe("Drink Beer");
    });
});*/