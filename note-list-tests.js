(function(exports) {
  function noteListTest(){
    var note = new NoteList();

    assert.isTrue(note.list.length === 0);   
  };
  noteListTest();

  function addNoteTest() {
    var morenote = new NoteList();
    morenote.addNote('More JS');

    assert.isTrue(morenote.list[0].content() === 'More JS');
  }
  addNoteTest();

  function noteIdTest() {
    var noteList = new NoteList();
    noteList.addNote('firstNote');
    noteList.addNote('secondNote');
    noteList.addNote('thirdnote');

    assert.isTrue(noteList.list[0].id === 0);
    assert.isTrue(noteList.list[1].id === 1);
    assert.isTrue(noteList.list[2].id === 2);
  }
  noteIdTest();
})(this)
