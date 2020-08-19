(function(exports) {
  function renderHTMLTest() {
    var list = new NoteList();
    var controller = new NoteController(list);

    controller.renderHTML = function() {
      return controller.view.returnHTML();
    };

    assert.isTrue(controller.renderHTML() === '<ul><li><div>Favourite Drink: Seltzer</div></li></ul>');

  };
  renderHTMLTest();
})(this)