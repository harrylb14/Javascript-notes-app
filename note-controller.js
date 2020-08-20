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
      window.addEventListener('hashchange', showCurrentNote);
      console.log(this.view);
    };

    function showCurrentNote() {
      x = getNoteFromUrl(window.location);
      showNote(parseInt(x, 10));
    };

    function getNoteFromUrl(location) {
      console.log(this.view);
      return location.hash.split("#notes/")[1];
    };
    
    function showNoteTest () {
      document
        .getElementById("app")
        .innerHTML = 'Testing';
    };

    function showNote(id) {
      var view = noteListView().viewNoteList().list[id];
      var noteView = new SingleNoteView(view);
      document
        .getElementById("app")
        .innerHTML = noteView.returnHTML();
    };

    return {
      noteListView,
      renderHTML,
      makeUrlChangeShowCurrentNote,
      showNote,
      getNoteFromUrl,
      showNoteTest,
      showCurrentNote

    };
  })();
  exports.NoteController = NoteController;
})(this)
