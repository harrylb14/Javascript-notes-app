(function(exports){
  function NoteList() {
    this.list = [];
  };

    NoteList.prototype = (function(){
      function mynoteList() {
        console.log(this.list);
      };


    return {
      noteList: mynoteList
    };
    })
    
    exports.NoteList = NoteList;
})(this);




   
  // })();
  // exports.Notes = Notes;
  // })(this);