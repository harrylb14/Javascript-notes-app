(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype = (function() {
    function notes() {
      return (this.list);
    };

    function addNote(text) {
      this.list.push(text);
    }; 

    return {
      notes, addNote 
    };
  })();

  exports.NoteList = NoteList;
})(this);
