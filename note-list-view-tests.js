(function(exports) {
  function noteListViewTest(){
    var noteList = new NoteList();
    noteList.addNote('Test Note');
    noteList.addNote('Another Test Note');
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.returnHTML() === "<ul><li><div>Test Note</div></li><li><div>Another Test Note</div></li></ul>");   
  };
  noteListViewTest();
})(this);

(function(exports) {
  function noteListViewTestSingleItem(){
    var noteList = new NoteList();
    noteList.addNote('Test Note');
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

