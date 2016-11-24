var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numer = '1234567890';
var nameList = [];

var Robot = function Robot() {
  this.name = nameGenerator();
};

Robot.prototype.reset = function reset() {
  this.name = nameGenerator();
};

function nameGenerator() {
  var name = '';
  [1,2].forEach(function alphaChars() {
    name += retrieveRandomCharacter(alpha);
  });
  [1,2,3].forEach(function numerChars() {
    name += retrieveRandomCharacter(numer);
  });
  if (nameTaken(name, nameList)) {
    return nameGenerator();
  }
  else {
    nameList.push(name);
    return name;
  }
}

function retrieveRandomCharacter(charset) {
  var string = charset;
  return string.split('')[randomInteger(charset.length)];
}

function randomInteger(upperLimit) {
  return Math.floor((Math.random() * upperLimit));
}

function nameTaken(name, list) {
  if (list.indexOf(name) > -1)
    return true;
  return false;
}

module.exports = Robot;
