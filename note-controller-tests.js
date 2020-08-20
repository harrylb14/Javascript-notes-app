(function(exports) {
  function renderHTMLTest() {
    var list = new NoteList();
    var controller = new NoteController(list);

    controller.renderHTML = function() {
      return controller.view.returnHTML();
    };

    assert.isTrue(controller.renderHTML() === "<ul><li><div><a href='#notes/0'>Favourite Drink: Sel</a></div></li></ul>")
  };
  renderHTMLTest();

  /*function singleNoteViewTest() {
    var list = new NoteList();
    var controller = new NoteController(list);
    controller.makeUrlChangeShowCurrentNote();
    var event = new CustomEvent("hashchange", { getNoteFromUrl : 0});
    document.dispatchEvent(event);
    console.log(document.getElementById('app').innerHTML);
    assert.isTrue(document.getElementById('app').innerHTML === "<div>Favourite Drink: Seltzer</div>");
  }
  singleNoteViewTest(); */
})(this)
