(function(exports) {
function Notes(text) {
  this.text = text;
}
exports.Notes = Notes;
})(this);

Notes.prototype = (function (){

  function content() {
    console.log(this.text);
  };

  return {
    content: content
  };
 
})


