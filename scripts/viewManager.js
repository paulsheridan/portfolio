pageView = {};

pageView.mainNav = function() {
  $('.nav-bar').on('click', '.tab', function(event) {
    event.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.nav-bar .tab:first').click();
};

pageView.mainNav();
