(function(exports) {
  function noteListViewTest(){
    var noteList = new NoteList();
    var note1 = new Note('Test Note');
    var note2 = new Note('Another Test Note');
    noteList.addNote(note1);
    noteList.addNote(note2);
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.returnHTML() === "<ul><li><div>Test Note</div></li><li><div>Another Test Note</div></li></ul>");   
  };
  noteListViewTest();
})(this);

(function(exports) {
  function noteListViewTestSingleItem(){
    var noteList = new NoteList();
    var note = new Note('Test Note')
    noteList.addNote(note);
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.returnHTML() === "<ul><li><div>Test Note</div></li></ul>");   
  };
  noteListViewTestSingleItem();
})(this);

(function(exports) {
  function noteListViewTestNoItems(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.returnHTML() === "<ul><li><div></div></li></ul>");   
  };
  noteListViewTestNoItems();
})(this);
