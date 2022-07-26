// Pig Latin - це спосіб шифрування англійських слів. Правила такі:

// - Якщо слово починається на приголосний звук, початкові приголосні переміщуються в кінець слова і додається ay.

// - Якщо слово починається на голосний звук, в кінці просто додається way.

// Перекласти даний рядок на Pig Latin. Необхідно вводити лише англійські слова в нижньому регістрі.


function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");

// вар 2

function translatePigLatin2(str) {
  // Create variables to be used
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}

// test here
translatePigLatin2("consonant");

// вар 3

function translatePigLatin3(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin3("consonant");


// вар4

function translatePigLatin4(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatin4(str.slice(1) + str[0], charPos + 1);
}