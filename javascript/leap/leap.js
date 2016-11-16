var Year = function (year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  if (this.year % 4 === 0 && this.year % 100 !== 0)
    return true;
  return false;
}

module.exports = Year;
