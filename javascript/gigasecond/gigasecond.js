var Gigasecond = function (startDate) {
  this.startDate = startDate;
};

Gigasecond.prototype.date = function() {
  var gigasecond = Math.pow(10, 12);
  var startDate = this.startDate;
  var endDate = new Date();

  endDate.setTime(startDate.getTime() + gigasecond);

  return endDate;
}

module.exports = Gigasecond;
