(function(exports) {
  function noteListViewTest(){
    var noteList = new NoteList();
    noteList.addNote('Test Note');
    noteList.addNote('Another Test Note');
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.returnHTML() === "<ul><li><div>Test Note</div></li><li><div>Another Test Note</div></li></ul>");   
  };
  noteListViewTest();

  function noteListViewTestSingleItem(){
    var noteList = new NoteList();
    noteList.addNote('Test Note');
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.returnHTML() === "<ul><li><div>Test Note</div></li></ul>");   
  };
  noteListViewTestSingleItem();

  function noteListViewTestNoItems(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.returnHTML() === "<ul><li><div></div></li></ul>");   
  };
  noteListViewTestNoItems();

  function noteListViewTwentyCharacters() {
    var noteList = new NoteList();
    noteList.addNote('This is a much longer string that hopefully will be chopped down by this method');
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.returnHTML() === "<ul><li><div>This is a much longe</div></li></ul>");
  };
  noteListViewTwentyCharacters();
})(this);
