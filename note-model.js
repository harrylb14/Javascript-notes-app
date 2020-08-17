(function(exports) {
function Notes(text) {
  this.text = text;
};

Notes.prototype = (function (){

  function notescontent() {
    console.log(this.text);
  };

  return {
    content: notescontent
  };
 
})();
exports.Notes = Notes;
})(this);

