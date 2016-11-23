var School = function School() {
  this.grades = {};
};

School.prototype.roster = function roster() {
  var roster = {};
  for (grade in this.grades) {
    roster[grade] = this.grades[grade].sort();
  }
  
  return roster;
};

School.prototype.add = function add(name, grade) {
  if (!(grade in this.grades))
    this.grades[grade] = [];
  this.grades[grade].push(name);
};

School.prototype.grade = function grade(year) {
  if (!(year in this.grades))
    this.grades[year] = [];
  return this.grades[year].sort();
};

module.exports = School;
