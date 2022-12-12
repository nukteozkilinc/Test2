var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      var contacts = []
      var contact
      for(var i=0;i<total;i++){
        contact = {
          email: faker.internet.email(),
          description: faker.lorem.sentence(),
          socialnetworks: faker.name.firstName(),
          }
        contacts.push(contact)
      }
      return knex('contacts').insert(contacts);
    });
};