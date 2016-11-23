var Anagram = function Anagram(subject) {
  this.subject = subject;
};

Anagram.prototype.matches = function matches(cases) {
  var subject = this.subject;
  var matches = [];
  if (arguments.length > 1 || typeof arguments[0] === 'string') {
    var temp = [];
    for (var i = 0; i < arguments.length; i++) {
      temp.push(arguments[i]);
    }
    cases = temp;
  }
  for (var i = 0; i < cases.length; i++) {
    var string = cases[i];
    if (sameString(subject, string)) {
      continue;
    }
    else if (stringSort(string) === stringSort(subject)) {
      matches.push(string);
    }
  }

  return matches;
};

function stringSort(string) {
  return string.toLowerCase().split('').sort().join('');
}

function sameString(stringA, stringB) {
  console.log(stringB);
  return (stringA.toLowerCase() === stringB.toLowerCase());
}

module.exports = Anagram;
