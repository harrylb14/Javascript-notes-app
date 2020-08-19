(function(exports) {
function Note(text) {
  this.text = text;
  this.id = 0;
};

Note.prototype = (function () {

  function content() {
    return(this.text);
  };

  return {
    content
  };
 })();

exports.Note = Note;
})(this);
