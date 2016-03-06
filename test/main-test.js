describe("when input a number then output its english spelling", function() {

  it("when input is 0 then output zero", function() {
    var input = '0';
    var result = 'zero';

    expect(result).toEqual(getEnglishSpelling(input));
  });

  it("when input is more than 20 and less than 100", function() {
    var input = '22';
    var result = 'twenty two';

    expect(result).toEqual(getEnglishSpelling(input));
  })

  it("when input is more than 99 and less than 1000", function() {
    var input = '110';
    var result = 'one hundred and ten';

    expect(result).toEqual(getEnglishSpelling(input));
  })

  
});
