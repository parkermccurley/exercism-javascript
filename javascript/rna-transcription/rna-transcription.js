var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var rna = '';
  var key = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  };

  for (var i = 0; i < dna.length; i++) {
    rna += key[dna[i]];
  }

  return rna;
};

module.exports = DnaTranscriber;
