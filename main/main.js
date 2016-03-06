function getNumberString(input) {

  var numberArray = [];
  var length = input.length;

  for(var i = length - 3; i >= 0; i -= 3) {
    var subString = input.substr(i, 3);
    numberArray.push(subString);
  }
  if(length%3 != 0) {
    numberArray.push(input.substr(0,length%3));
  }

  return numberArray;
}
