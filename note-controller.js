(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.addNote("Favourite Drink: Seltzer");
    this.view = new NoteListView(noteList);
  }

  NoteController.prototype = (function() {
    function renderHTML() {
      var html = this.view.returnHTML();
      document.getElementById('app').innerHTML = html;
    };

    return {
      renderHTML
    }
  })();
  exports.NoteController = NoteController;
})(this)
