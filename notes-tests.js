(function(exports){
  function notes(){
    var words = new Notes('My favourite language is JavaScript');

    if(words.text !== 'My favourite language is JavaScript' ){
      throw new Error('You do not like JS');
    };
  };

  notes();
})(this);
