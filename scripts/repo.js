(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {

    $.ajax({
      url: 'https://api.github.com/users/paulsheridan/repos' + '?per_page=100&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken },
      success: function(data, message, xhr) {
      repos.all = data;
      }
    })
    .done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
