(function(exports) {
  function noteList(){
    var note = new NoteList();

    if(note.list.length !== 0){
      throw new Error('Your list is not empty')
  }
}
  noteList();
})(this);

(function(exports){
  function addNoteTest(){
    var morenote = new NoteList();
    morenote.addNote('More JS')

    if(morenote.list[0] !== 'More JS'){
      throw new Error('NOT HERE')
    }
  }
 addNoteTest();
})(this)