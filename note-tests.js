(function(exports) {
  function noteTest() {
    var words = new Note('My favourite language is JavaScript');

    assert.isTrue(words.text === 'My favourite language is JavaScript');
  };

  noteTest();
})(this);
