var projects = [];

function Project (details) {
  this.title = details.title;
  this.publishedDate = details.publishedDate;
  this.description = details.description;
  this.projectUrl = details.projectUrl;
}

Project.prototype.postProj = function(){
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

projectBank.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#portfolio').append(a.postProj());
});
