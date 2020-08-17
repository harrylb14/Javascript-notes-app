(function(exports) {
function Notes(text) {
  this.text = text;
};

Notes.prototype = (function (){

  function content() {
    console.log(this.text);
  };

  return {
    content
  };
 })();

exports.Notes = Notes;
})(this);
