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

  function renderEmptyList() {
    var list = new NoteList();
    var controller = new NoteController(list);
    controller.renderHTML();
    assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div></div></li></ul>" )
  }
  renderEmptyList();
})(this)
