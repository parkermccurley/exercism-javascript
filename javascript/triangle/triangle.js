var Triangle = function Triangle(a, b, c) {
  this.sides = [a, b, c];
};

Triangle.prototype.kind = function kind() {
  var uniqueSides = this.sides.unique().length;
  if (uniqueSides === 1)
    return 'equilateral';
  else if (uniqueSides === 2)
    return 'isosceles';
  else if (uniqueSides === 3)
    return 'scalene';
};

Array.prototype.unique = function unique() {
  var seen = {};
  return this.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

module.exports = Triangle;
