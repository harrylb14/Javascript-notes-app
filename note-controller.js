(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    var note = new Note("Favourite Drink: Seltzer");
    this.noteList.addNote(note);
    this.view = new NoteListView(noteList);
  }

  NoteController.prototype = (function() {
    function renderHTML() {
      html = this.view.returnHTML();
      document.getElementById('app').innerHTML = html;
    };

    return {
      renderHTML
    }
  })();
  exports.NoteController = NoteController;
})(this)
