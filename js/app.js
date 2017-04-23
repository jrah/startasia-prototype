imagesLoaded( document.querySelector('.card'), function( instance ) {
  console.log('all images are loaded');
  var elem = document.querySelector('.card');
  console.log('masonry loaded');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.card-item',
    columnWidth: '.card-column',
    gutter: '.card-gutter',
    // percentPosition: true
  });

});
