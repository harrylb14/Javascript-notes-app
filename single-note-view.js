(function(exports) {
  function SingleNoteView(Note) {
    this.note = Note;
  }

  SingleNoteView.prototype = ( function() {
    function returnHTML() {
      return "<div>" + this.note.content() + "</div>";
    }

    return {
      returnHTML
    }
  })()
  exports.SingleNoteView = SingleNoteView;
})(this)
