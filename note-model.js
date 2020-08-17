function Notes(text) {
  this.text = text;
}

Notes.prototype = (function (){

  function content() {
    console.log(this.text);
  };

  return {
    content: content
  };
})();

var words = new Notes('My fave language');
words.content();
