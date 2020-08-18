(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype = (function() {
    function returnHTML() {
      array = this.noteList.notes()
      return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>";
    };

    return {
      returnHTML
    };
  })();

  exports.NoteListView = NoteListView;
})(this);
