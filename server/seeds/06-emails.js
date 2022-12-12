var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('emails').del()
    .then(function () {
      // Inserts seed entries
      var emails = []
      var email
      for(var i=0;i<total;i++){
        email = {
          email: faker.internet.email(),
          description: faker.lorem.sentence()
          }
        emails.push(email)
      }
      return knex('emails').insert(emails);
    });
};