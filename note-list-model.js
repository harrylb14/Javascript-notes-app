(function(exports){
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype = (function(){
    function mynoteList() {
      console.log(this.list);
    };

    function myaddNote(text) {
      this.list.push(text)
    };

    return {
      noteList: mynoteList,
      addNote: myaddNote
    };
  })();
  
  exports.NoteList = NoteList;
})(this);
