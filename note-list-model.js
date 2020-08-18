(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype = (function() {
    function noteList() {
      console.log(this.list);
    };

    function addNote(text) {
      this.list.push(text);
    }; 

    return {
      noteList, addNote 
    };
  })();

  exports.NoteList = NoteList;
})(this);
