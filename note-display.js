(function(exports) {
  function NoteDisplay(noteList, id) {
    this.noteList = noteList;
    this.id = id;
    this.showNote(noteList, id);
  };

  NoteDisplay.prototype = (function(){

    function showNote(noteList, id) {
      let note = noteList.list[id];
      let noteView = new SingleNoteView(note);
      document.getElementById("app").innerHTML = noteView.returnHTML();
    };

    return {
      showNote
    }
  })();
exports.NoteDisplay = NoteDisplay;
})(this)
