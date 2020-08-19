(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype = (function() {
    function notes() {
      return (this.list);
    };

    function addNote(text) {
      let note = new Note(text);
      note.id = this.list.length;
      this.list.push(note);
    }; 

    return {
      notes, addNote 
    };
  })();

  exports.NoteList = NoteList;
})(this);
