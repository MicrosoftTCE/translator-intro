// add languages to future events when language is selected
$('button.language').click(function(e) {
  heap.addEventProperties({'Language': $(this).data('lang-name')});
});

// track when modal is closed without accepting
$('.modal.language').on('hide.bs.modal', function (e) {
  if (!window.msft.translator.agreementAccepted) {
    heap.track('Not Accept');
  }
})

// clear languages after modal is closed
$('.modal.language').on('hidden.bs.modal', function (e) {
  heap.removeEventProperty('Language');
})

$('.accept').click(function(e) {
  window.msft.translator.agreementAccepted = true;

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
    url += '?language=' + lang;
    url += '&returnTo=' + encodeURIComponent(document.location);
    document.location = url;
  }, 1500);
});
