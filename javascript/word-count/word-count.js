// super ugly but I'm tired
var Words = function() {};

Words.prototype.count = function(input) {
  var wordArray = normalize(input.replace(/[\n\t]/g, ' ').trim()).split(' ');
  var result = {};

  toLower(wordArray).forEach(function(item) {
    if (result[item] && Number.isInteger(result[item]))
      result[item] += 1;
    else
      result[item] = 1;
  });

  function toLower(array) {
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i].toLowerCase();
    }
    return array;
  }

  function normalize(string) {
    return string.replace(/\s+/g, ' ');
  }

  return result;
}

module.exports = Words;
