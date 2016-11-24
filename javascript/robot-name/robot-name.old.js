const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numer = '1234567890';
var nameList = [];

var Robot = function Robot() {
  this.name = nameGenerator();
};


function nameGenerator() {
  var name = '';
  for (var i = 0; i < 2; i++) {
    name += alpha.charAt(randomInteger(alpha.length));
  }
  for (var n = 0; n < 3; n++) {
    name += numer.charAt(randomInteger(numer.length));
  }
  if (nameAlreadyExists(name, nameList)) {
    nameGenerator();
  }
  else {
    nameList.push(name);
    return name;
  }
}

function randomInteger(upperLimit) {
  return Math.floor((Math.random() * upperLimit));
}

function nameAlreadyExists(name, list) {
  if (list.indexOf(name) !== -1)
    return true;
  return false;
}

module.exports = Robot;
