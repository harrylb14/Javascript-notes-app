(function(exports) {
  function singleNoteViewHTMLTest() {
    var note = new Note("Test Note");
    var singleNoteView = new SingleNoteView(note);

    assert.isTrue(singleNoteView.returnHTML() === "<div>Test Note</div>")
  }
  singleNoteViewHTMLTest();
})(this)
