var productBank = [
  {
    title:       'Go Ship GO',
    projectUrl:   'https://github.com/paulsheridan/go-ship-go',
    publishedDate: '2015-11-05',
    description:        '<p>A simple game about a simple spaceship.</p>'
  },
];

var projects = [];

function Project (details) {
  this.title = details.title;
  this.publishedDate = details.publishedDate;
  this.description = details.description;
  this.projectUrl = details.projectUrl;
}

Project.prototype.postToSite = function(){
  var $newProject = $('article.template').clone();
  $newProject.data('title', this.title);
  $newProject.removeClass('template');
  return $newProject;
};
productBank.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.postToSite());
});
