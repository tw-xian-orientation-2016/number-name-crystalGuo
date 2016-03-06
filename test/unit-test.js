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
