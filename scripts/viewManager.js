pageView = {};

pageView.mainNav = function() {
  $('.nav-bar').on('click', '.tab', function(event) {
    event.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.nav-bar .tab:first').click();
};

pageView.toggleNav = function(){
  $('.hamburger').on('click', function(){
  $('nav ul').slideToggle();
  })
};

pageView.initPage = function(){
  Project.all.forEach(function(a){
    $('#portfolio').append(a.postProj());
  });
};

pageView.mainNav();
pageView.toggleNav();
