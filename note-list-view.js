(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype = (function() {
    function viewNoteList() {
      return this.noteList;
    }

    function returnHTML() {
      array = this.noteList.notes().map(note => note.text);
      return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>";
    };

    return {
      returnHTML,
      viewNoteList
    };
  })();

  exports.NoteListView = NoteListView;
})(this);
