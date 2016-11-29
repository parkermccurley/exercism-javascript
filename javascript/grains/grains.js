var BigInt = require('./big-integer');

var Grains = function Grains() {};

Grains.prototype.square = function square(which) {
  var bigTwo = BigInt(2);
  var power = which - 1;
  bigTwo = bigTwo.pow(power);

  return bigTwo.toString();
};

Grains.prototype.total = function total() {
  var bigTotal = BigInt(0);
  for (var i = 1; i <= 64; i++) {
    bigTotal = bigTotal.add(this.square(i));
  }

  return bigTotal.toString();
};

module.exports = Grains;
