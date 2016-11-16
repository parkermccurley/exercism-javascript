var Hamming = function() {};

Hamming.prototype.compute = function(stringA, stringB) {
  var hammingDifference = 0;

  if (stringA.length !== stringB.length)
    throw "DNA strands must be of equal length.";

  for (var i = 0; i < stringA.length; i++) {
    if (stringA[i] !== stringB[i])
      hammingDifference++;
  }

  return hammingDifference;
}

module.exports = Hamming;
