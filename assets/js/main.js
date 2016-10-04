$('.accept').click(function() {
  // fade in
  window.scrollTo(0, 0);
  $('body').addClass('checkmark-visible');
  $('.checkmark-background').removeClass('hide');

  window.setTimeout(function() {
    $('.checkmark-background').removeClass('transparent');
    $('.checkmark').removeClass('hide');
  }, 250);

  // redirect
  window.setTimeout(function() {
    document.location = window.msft.translator.appUrl;
  }, 1500);
});
