(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.view = new NoteListView(this.noteList);
  }

  NoteController.prototype = (function() {
    function renderHTML() {
      var html = this.noteListView().returnHTML();
      document.getElementById('app').innerHTML = html;
    };

    function noteListView() {
      return this.view;
    };

    function makeUrlChangeShowCurrentNote() {
      var list = this.noteList;
      window.addEventListener('hashchange', function() {
        id = parseInt(getNoteFromUrl(), 10);
        new NoteDisplay(list, id);
      });
    };

    function getNoteFromUrl() {
      location = window.location;
      return location.hash.split("#notes/")[1];
    };

    function listenForSubmit() {
      var state = this;
      document.addEventListener('submit', function(event) {
        event.preventDefault();
        new NoteAdd(state);
    })};

    return {
      noteListView,
      renderHTML,
      makeUrlChangeShowCurrentNote,
      listenForSubmit
    };
  })();
  exports.NoteController = NoteController;
})(this)
