(function(exports) {
function Note(text) {
  this.text = text;
};

Note.prototype = (function () {

  function content() {
    console.log(this.text);
  };

  return {
    content
  };
 })();

exports.Note = Note;
})(this);
