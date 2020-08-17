(function(exports) {
  function noteList(){
    var note = new NoteList();

    if(note.list.length !== 0){
      throw new Error('Your list is not empty')
  }
}
  noteList();
})(this);

