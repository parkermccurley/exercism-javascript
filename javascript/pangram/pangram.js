var Pangram = function(input) {
  this.sentence = input;
};

Pangram.prototype.isPangram = function() {
  var sentence = this.sentence;
  var mapped = mapCharacters(sentence);
  var result = referenceCharacterMap(mapped);

  return result;
};

function mapCharacters(input) {
  var sentence = input;
  var characterMap = {};
  for (var i = 0; i < sentence.length; i++) {
    var character = sentence[i].toLowerCase();
    if (characterMap[character])
      characterMap[character]++;
    else
      characterMap[character] = 1;
  }

  return characterMap;
}

function referenceCharacterMap(input) {
  var characterMap = input;
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < alphabet.length; i++) {
    if (!characterMap[alphabet[i]])
      return false;
  }

  return true;
}

module.exports = Pangram;
