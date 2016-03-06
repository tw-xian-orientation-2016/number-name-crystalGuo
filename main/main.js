function getEnglishSpelling(input) {
    var numberArray = getNumberString(input);
    var numberString = transformNumberArray(numberArray);
    var numberSpelling = getNumberSpelling(numberString);
    var englishSpelling = jointNumberSpelling(numberSpelling);

    return englishSpelling;
}

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

function transformNumberArray(numberArray) {
  var numberString = [];

  for(var i = 0; i < numberArray.length; i++) {
    var stringElement;
    if(parseInt(numberArray[i]) < 100) {
      stringElement = transformDecades(numberArray[i]);
    } else {
      stringElement = transformHundreds(numberArray[i]);
    }
    numberString.push(stringElement);
  }

  return numberString;
}

function transformDecades(stringNumber) {

  var numberDirectory = loadNumberDirectory();

  var number = parseInt(stringNumber);
  var result;
  if(number < 20) {
    result = numberDirectory[0][number];
  } else {
    var firstBit = parseInt(stringNumber.charAt(1));
    var secondBit = parseInt(stringNumber.charAt(0));
    if(firstBit === 0) {
      result = numberDirectory[1][secondBit];
    } else {
      result = numberDirectory[1][secondBit] + ' ' + numberDirectory[0][firstBit]
    }
  }

  return result;
}

function transformHundreds(stringNumber) {

  var numberDirectory = loadNumberDirectory();
  var thirdBit = parseInt(stringNumber.charAt(0));
  var subStringNumber = stringNumber.substr(1,2) ;
  var subStingForm = transformDecades(subStringNumber);

  var result;
  if(subStingForm === '') {
    result = numberDirectory[0][thirdBit] + ' hundred';
  } else {
    result = numberDirectory[0][thirdBit] + ' hundred' + ' and ' + subStingForm;
  }

  return result;
}

function getNumberSpelling(numberString) {
  var numberSpelling = [];
  var units = loadUnits();

  for(var i = 0; i < numberString.length; i++) {
    if(i > 0 && numberString[i] !== '') {
      numberSpelling.push(numberString[i] + ' ' + units[i]);
    } else {
      numberSpelling.push(numberString[i]);
    }
  }

  return numberSpelling.reverse();
}

function jointNumberSpelling(numberSpelling) {
  var englishNumber = numberSpelling[0];
  if(numberSpelling.length > 1) {
    for(var i = 1; i < numberSpelling.length; i++) {
      if(numberSpelling[i].indexOf(' and ') > -1) {
        englishNumber += (', ' + numberSpelling[i]);
      } else if(numberSpelling[i] === ''){

      } else {
        englishNumber += ' and ' + numberSpelling[i];
      }
    }
  }

  return englishNumber==='' ? 'zero' : englishNumber;
}
