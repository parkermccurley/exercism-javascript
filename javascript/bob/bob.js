var Bob = function() {};

Bob.prototype.hey = function(input) {
  var bobsay;

  if (multipleSentences(input)) {
    if (lastLetter(input) == '!')
      bobsay = 'Whoa, chill out!';
    else if (lastLetter(input) == '?')
      bobsay = 'Sure.';
    else if (lastLetter(input) == '.')
      bobsay = 'Whatever.';
  }
  else if (isSilent(input))
    bobsay = 'Fine. Be that way!';
  else if (countUppercase(input) >= 2 && (lastLetter(input) == '!' || lastLetter(input) == '?') || isAllCaps(input))
    bobsay = 'Whoa, chill out!';
  else if (lastLetter(input) == '?')
    bobsay = 'Sure.';
  else
    bobsay = 'Whatever.';

  function countUppercase(string) {
    return string.replace(/[^A-Z]/g, '').length;
  }

  function lastLetter(string) {
    return string.substr(-1);
  }

  function isAllCaps(string) {
    if (string.length == string.replace(/[^A-Z ]/g, '').length)
      return true;
    return false;
  }

  function multipleSentences(string) {
    if (string.replace(/[^!?.]/g, '').length > 1)
      return true;
    return false;
  }

  function isSilent(string) {
    if (!string || (string.length == string.replace(/[^ ]/g, '').length))
      return true;
    return false;
  }

  return bobsay;
};

module.exports = Bob;
