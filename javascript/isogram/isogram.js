var Isogram = function(input) {
  this.word = input;
};

Isogram.prototype.isIsogram = function() {
  var word = this.word;
  var preparedWord = prepareString(word);
  var mappedWord = mapString(preparedWord);
  var allCharactersUnique = referenceCharacterMap(mappedWord);

  return allCharactersUnique;
};

function prepareString(input) {
  var string = input;
  return string.toLowerCase().replace(/[- ]/g, '');
}

function mapString(input) {
  var string = input;
  var characterMap = {};
  for(var i = 0; i < string.length; i++) {
    if (string[i] in characterMap)
      characterMap[string[i]]++;
    else
      characterMap[string[i]] = 1;
  }

  return characterMap;
}

function referenceCharacterMap(input) {
  var characterMap = input;
  for (var character in characterMap) {
    if (characterMap.hasOwnProperty(character))
      if (characterMap[character] != 1)
        return false;
  }

  return true;
}

module.exports = Isogram;
