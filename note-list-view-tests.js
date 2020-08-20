(function(exports) {
  function noteListViewTest(){
    var noteList = new NoteList();
    noteList.addNote('Test Note');
    noteList.addNote('Another Test Note');
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.returnHTML() === "<ul><li><div><a href='#notes/0'>Test Note</a></div></li><li><div><a href='#notes/1'>Another Test Note</a></div></li></ul>");   
  };
  noteListViewTest();

  function noteListViewTestSingleItem(){
    var noteList = new NoteList();
    noteList.addNote('Test Note');
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.returnHTML() === "<ul><li><div><a href='#notes/0'>Test Note</a></div></li></ul>");   
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

    assert.isTrue(noteListView.returnHTML() === "<ul><li><div><a href='#notes/0'>This is a much longe</a></div></li></ul>");
  };
  noteListViewTwentyCharacters();

  function noteListViewURLLinkTest() {
    var noteList = new NoteList(); 
    noteList.addNote('This will be note 0');
    noteList.addNote('This will be note 1');
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnHTML().includes("<li><div><a href='#notes/0'>This will be note 0</a></div></li>"));
    assert.isTrue(noteListView.returnHTML().includes("<li><div><a href='#notes/1'>This will be note 1</a></div></li>"))
  }
  noteListViewURLLinkTest();
})(this);
