(function(module) {
  function Project (details) {
    Object.keys(details).forEach(function(e, index, keys) {
      this[e] = details[e];
    },this);
  }

  Project.all = [];

  Project.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY, title VARCHAR(50), githubURL VARCHAR(50), projectURL VARCHAR(50), publishedDate DATETIME, description TEXT, textClass VARCHAR (50), imgURL VARCHAR(50));',
      callback
    );
  };

  Project.prototype.postProj = function(){
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);
    return template(this);
  };

  Project.prototype.insertProj = function (callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO projects (title, githubURL, projectURL, publishedDate, description, textClass, imgURL) VALUES (?,?,?,?,?,?,?);',
          'data': [this.title, this.githubURL, this.projectURL, this.publishedDate, this.description, this.textClass, this.imgURL],
        }
      ]
    );
  };

  Project.loadAll = function(rows) {
    Project.all = rows.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.fetchAll = function(next) {
    webDB.execute('SELECT * FROM projects ORDER BY publishedDate DESC', function(rows) {
      if (rows.length) {
        Project.loadAll(rows);
        next();
      } else {
        $.getJSON('/data/projects.json', function(rawData) {
          rawData.forEach(function(item) {
            var project = new Project(item);
            project.insertProj();
          });
          webDB.execute('SELECT * FROM projects', function(rows) {
            Project.loadAll(rows);
            next();
          });
        });
      }
    });
  };

  Project.createTable();

  module.Project = Project;
})(window);
