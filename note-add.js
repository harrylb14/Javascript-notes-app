(function(exports) {
  function NoteAdd(noteController) {
    this.noteController = noteController;
    this.addNoteFromSubmitAndRender(noteController);
  };

  NoteAdd.prototype = (function(){

  function addNoteFromSubmitAndRender(state) {
    state.noteList.addNote(document.getElementById("textfield").value);
    state.view = new NoteListView(state.noteList)
    state.renderHTML();
  };

  return {
    addNoteFromSubmitAndRender
  }
})();
exports.NoteAdd = NoteAdd;
})(this)