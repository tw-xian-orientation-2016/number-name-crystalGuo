describe("when input is a number string then split it into numberArray", function() {

  it("when input is less than 1000 then split it into one part", function() {
    var inputs = ['1', '10', '100'];
    var expects = [['1'], ['10'], ['100']];

    inputs.forEach(function(input,index) {
      expect(expects[index]).toEqual(getNumberString(input));
    });
  });

});
