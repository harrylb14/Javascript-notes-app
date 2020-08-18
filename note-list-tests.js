(function(exports) {
  function noteListTest(){
    var note = new NoteList();

    assert.isTrue(note.list.length === 0);   
  };
  noteListTest();
})(this);

(function(exports) {
  function addNoteTest() {
    var morenote = new NoteList();
    morenote.addNote('More JS');

    assert.isTrue(morenote.list[0] === 'More JS');
  }
  addNoteTest();
})(this)
