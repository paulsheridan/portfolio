var projects = [];

function Project (details) {
  this.title = details.title;
  this.publishedDate = details.publishedDate;
  this.description = details.description;
  this.projectUrl = details.projectUrl;
}

Project.prototype.postToSite = function(){
  var $newProject = $('article.template').clone();

  $newProject.find('h2').text(this.title);
  $newProject.find('.description').html(this.description);
  $newProject.find('time').html(this.publishedDate);

  $newProject.removeClass('template');
  return $newProject;
};
projectBank.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#portfolio').append(a.postToSite());
});
