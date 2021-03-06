(function(exports) {
  function singleNoteViewTest() {
    var list = new NoteList();
    list.addNote('Favourite Drink: Seltzer');
    var controller = new NoteController(list);
    controller.makeUrlChangeShowCurrentNote(controller.view);
    window.location.hash = '#notes/0';
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    assert.isTrue(document.getElementById('app').innerHTML === "<div>Favourite Drink: Seltzer</div>");
  }
  singleNoteViewTest(); 
})(this)