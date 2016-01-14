(function(module) {
  pageView = {};

  pageView.mainNav = function() {
    $('.nav-bar').on('click', '.tab', function(event) {
      event.preventDefault();
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('.nav-bar .tab:first').click();
  };

  pageView.initPage = function(){
    Project.all.forEach(function(a){
      $('#portfolio').append(a.postProj());
    });
  };

  pageView.mainNav();

  module.pageView = pageView;
})(window);
