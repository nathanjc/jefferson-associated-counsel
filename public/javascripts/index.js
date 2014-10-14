$( document ).ready(function() {
  var navButton = $('#show-nav');
  var mobileNav = $('#mobile-nav');

  navButton.click(function () {
    mobileNav.toggleClass('hidden');
  });
});