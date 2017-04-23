var elem = document.querySelector('.card');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.card-item',
  columnWidth: '.card-column',
  gutter: '.card-gutter',
  // percentPosition: true
});
