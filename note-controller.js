(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.addNote("Favourite Drink: Seltzer");
    this.view = new NoteListView(this.noteList);
  }

  NoteController.prototype = (function() {
    function renderHTML() {
      var html = this.view.returnHTML();
      document.getElementById('app').innerHTML = html;
    };

    function noteListView() {
      return this.view;
    };

    function makeUrlChangeShowCurrentNote() {
      window.addEventListener('hashchange', showNote.bind(this));
    };
    
    function showNote() {
      id = parseInt(getNoteFromUrl(), 10);
      let note = this.noteListView().viewNoteList().list[id];
      let noteView = new SingleNoteView(note);
      document.getElementById("app").innerHTML = noteView.returnHTML();
    };

    function getNoteFromUrl() {
      location = window.location;
      return location.hash.split("#notes/")[1];
    };

    return {
      noteListView,
      renderHTML,
      makeUrlChangeShowCurrentNote,
    };
  })();
  exports.NoteController = NoteController;
})(this)
