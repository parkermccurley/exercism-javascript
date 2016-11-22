var PhoneNumber = function(string) {
  this.string = string;
};

PhoneNumber.prototype.number = function() {
  return formatString(this.string);
};

PhoneNumber.prototype.areaCode = function() {
  return this.number().slice(0, 3);
};

PhoneNumber.prototype.toString = function() {
  var areaCode = this.areaCode();
  var prefixNum = this.number().slice(3, 6);
  var suffixNum = this.number().slice(6, 10);
  var formatted = `(${areaCode}) ${prefixNum}-${suffixNum}`;
  return formatted;
};

function formatString(string) {
  string = string.replace(/[^0-9]/g, '');
  if (string.length == 11 && string[0] == 1)
    string = string.slice(1);
  else if (string.length >= 11 || string.length == 9)
    string = '0000000000';
  return string;
}

module.exports = PhoneNumber;
