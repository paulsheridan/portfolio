(function(module) {
  function Project (details) {
    this.title = details.title;
    this.publishedDate = details.publishedDate;
    this.description = details.description;
    this.projectURL = details.projectURL;
    this.textClass = details.textClass;
    this.imgURL = details.imgURL;
  }

  Project.all = [];

  Project.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY, title VARCHAR(50) NOT NULL, githubURL VARCHAR(50) NOT NULL, projectURL VARCHAR (50) NOT NULL, publishedDate DATETIME NOT NULL, description TEXT NOT NULL, body TEXT NOT NULL, imgURL VARCHAR (50), textClass VARCHAR (50) NOT NULL);',
      callback
    );
  };

  Project.prototype.postProj = function(){
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);
    return template(this);
  };

  Project.prototype.insertProj = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO projects (title, githubURL, projectURL, publishedDate, description, textClass, imageURL) VALUES (?, ?, ?, ?, ?, ?, ?);',
          'data': [this.title, this.githubURL, this.projectURL, this.publishedDate, this.description, this.textClass, this.imageURL],
        }
      ],
      callback
    );
  };

  Project.loadAll = function(rows) {
    Project.all = rows.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.fetchAll = function(callback) {
    webDB.execute('SELECT * FROM projects ORDER BY publishedDate DESC', function(rows) {
      if (rows.length) {
        Project.loadAll(rows);
        callback();
      } else {
        console.log('one');
        $.getJSON('/data/projects.json', function(rawData) {
          console.log('two');
          rawData.forEach(function(item) {
            var project = new Project(item);
            project.insertProj();
          });
          webDB.execute('SELECT * FROM projects', function(rows) {
            Project.loadAll(rows);
            callback();
          });
        });
      }
    });
  };

  module.Project = Project;
})(window);
