var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      var projects = []
      var project
      for(var i=0;i<total;i++){
        project = {
          title: faker.lorem.word(),
          image: faker.random.image(width=300, height=600),
          description: faker.lorem.sentence(),
          date: faker.datatype.datetime(),
        }
        projects.push(project)
      }
      return knex('projects').insert(projects);
    });
};