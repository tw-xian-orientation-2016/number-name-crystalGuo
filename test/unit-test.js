describe("when input is a number string then split it into numberArray", function() {

  it("when input is less than 1000 then split it into one part", function() {
    var inputs = ['1', '10', '100'];
    var expects = [['1'], ['10'], ['100']];

    inputs.forEach(function(input,index) {
      expect(expects[index]).toEqual(getNumberString(input));
    });
  });

  it("when input is less than 1000000 and more than 999 then split it into two part", function() {
    var input = '123456';
    var expects = ['456', '123'];

    expect(expects).toEqual(getNumberString(input));
  });

  it("when input is more than 999999 then split it into three part", function() {
    var input = '123456789';
    var expects = ['789', '456', '123'];

    expect(expects).toEqual(getNumberString(input));
  });
});

describe("transform numberArray's number into english spelling", function() {

  it("when input is less than 20 then transform it", function() {
    var input = '9';
    var result = ['nine'];

    expect(result).toEqual(transformNumberArray(input));
  });

  it("when input is less than 100  and more than 19 then transform it", function() {
    var inputs = [['20'], ['99']];
    var results = [['twenty'], ['ninety nine']];

    inputs.forEach(function(input,index) {
      expect(results[index]).toEqual(transformNumberArray(input));
    });
  });

  it("when input is less than 1000  and more than 99 then transform it", function() {
    var inputs = [['100'], ['199']];
    var results = [['one hundred'], ['one hundred and ninety nine']];

    inputs.forEach(function(input,index) {
      expect(results[index]).toEqual(transformNumberArray(input));
    });
  });

});

describe("connect number unit after english number spelling", function() {

  it('when input is less than 100 then connect nothing', function() {
    var input = ['ninety nine'];
    var result = ['ninety nine'];

    expect(result).toEqual(getNumberSpelling(input));
  });

  it('when input is more than 999 then connect thousand', function() {
    var input = ['ninety nine', 'one hundred and eleven'];
    var result = ['one hundred and eleven thousand', 'ninety nine'];

    expect(result).toEqual(getNumberSpelling(input));
  });

  it('when input is more than 999999 then connect million', function() {
    var input = ['ninety nine', 'one hundred and eleven', 'one'];
    var result = ['one million', 'one hundred and eleven thousand', 'ninety nine'];

    expect(result).toEqual(getNumberSpelling(input));
  });
});
