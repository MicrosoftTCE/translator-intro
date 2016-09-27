$('.accept').click(function() {
  // fade in
  $('.checkmark-background').removeClass('hide');

  window.setTimeout(function() {
    $('.checkmark-background').removeClass('transparent');
    $('.checkmark').removeClass('hide');
  }, 250);

  // fade out
  window.setTimeout(function() {
    $('.checkmark-background').addClass('transparent');

    window.setTimeout(function() {
      $('.checkmark-background').addClass('hide');
      $('.checkmark').addClass('hide');
    }, 1000);
  }, 10000);
});
