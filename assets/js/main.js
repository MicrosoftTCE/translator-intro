$('.accept').click(function(e) {
  var lang = $(this).data('lang');

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
    var url = window.msft.translator.appUrl;
    url += '?lang=' + lang;
    document.location = url;
  }, 1500);
});
