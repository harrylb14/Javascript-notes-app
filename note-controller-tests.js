(function(exports) {
  function renderListAfterSubmit(){
    var list = new NoteList();
    var controller = new NoteController(list);
    controller.listenForSubmit();
    document.getElementById('textfield').value="This is a test!";
    document.dispatchEvent(new Event("submit"));
    assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><div><a href="#notes/0">This is a test!</a></div></li></ul>');
  }
  renderListAfterSubmit();

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

  function renderEmptyList() {
    var list = new NoteList();
    var controller = new NoteController(list);
    controller.renderHTML();
    assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div></div></li></ul>" )
  }
  renderEmptyList();
})(this)
