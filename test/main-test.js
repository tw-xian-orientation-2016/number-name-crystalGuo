describe("when input a number then output its english spelling", function() {

  it("when input is 0 then output zero", function() {
    var input = '0';
    var result = 'zero';

    expect(result).toEqual(getEnglishSpelling(input));
  });

  
});
