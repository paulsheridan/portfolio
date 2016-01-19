(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    repos.requestRepos(repoView.index);
    $('#about').show().siblings().hide();
  };

  module.aboutController = aboutController;
})(window);
