var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('aboutmes').del()
    .then(function () {
      // Inserts seed entries
      var aboutmes = []
      var aboutme
      for(var i=0;i<total;i++){
        aboutme = {
          description: faker.lorem.sentence(),
          image: faker.random.image(width=300, height=600),
          }
        aboutmes.push(aboutme)
      }
      return knex('aboutmes').insert(aboutmes);
    });
};