(function(exports) {
  function singleNoteViewTest() {
    var list = new NoteList();
    var controller = new NoteController(list);
    controller.makeUrlChangeShowCurrentNote(controller.view);
    window.location.hash = '#notes/0';
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    assert.isTrue(document.getElementById('app').innerHTML === "<div>Favourite Drink: Seltzer</div>");
  }
  singleNoteViewTest(); 

  function renderHTMLTest() {
    var list = new NoteList();
    var controller = new NoteController(list);

    controller.renderHTML = function() {
      return controller.view.returnHTML();
    };

    assert.isTrue(controller.renderHTML() === "<ul><li><div><a href='#notes/0'>Favourite Drink: Sel</a></div></li></ul>")
  }; 
  renderHTMLTest(); 
})(this)
