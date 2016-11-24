var ETL = function() {};

ETL.prototype.transform = function transform(old) {
  var oldData = old;
  var newData = {};
  for (var score in oldData) {
    old[score].forEach(function newify(letter) {
      newData[letter.toLowerCase()] = Number(score);
    });
  }

  return newData;
};

module.exports = ETL;
