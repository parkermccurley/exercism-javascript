// ugly, hate this problem.
var BeerSong = function() {};

BeerSong.prototype.verse = function(input) {
  var number = input;
  return makeVerse(number);
};

BeerSong.prototype.sing = function(start, end) {
  var verses = [];
  if (!end) var end = 0;
  for (var i  = start; i >= end; i--) {
    verses.push(this.verse(i));
  }

  return verses.join('\n');
};

function makeVerse(input) {
  var verse = '';
  var number = input;
  var a = quantity(number);
  var b = plural(number);
  var c = howMany(number);
  var d = quantity(number - 1);
  var e = plural(number - 1);

  var prefix = `${a} ${b} of beer on the wall, ${a} ${b} of beer.\n`;
  var standardSuffix = `Take ${c} down and pass it around, ${d} ${e} of beer on the wall.\n`;
  var end = `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;

  if (number > 0)
    verse = prefix + standardSuffix;
  else
    verse = prefix + end;

  return verse.charAt(0).toUpperCase() + verse.slice(1);
}

function quantity(input) {
  var number = input;
  if (number == 0)
    return 'no more';
  return number;
}

function plural(input) {
  var number = input;
  if (number == 1)
    return 'bottle';
  else
    return 'bottles';
}

function howMany(input) {
  var number = input;
  if (number == 1)
    return 'it';
  else
    return 'one';
}

module.exports = BeerSong;
