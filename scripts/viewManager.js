(function(module) {
  pageView = {};

  pageView.initPage = function(){
    Project.all.forEach(function(a){
      $('#portfolio').append(a.postProj());
    });
  };

  module.pageView = pageView;
})(window);
