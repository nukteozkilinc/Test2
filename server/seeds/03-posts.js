var faker = require('faker')

var total = 50

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      var posts = []
      var post
      for(var i=0;i<total;i++){
        post = {
          title: faker.lorem.word(),
          image: faker.random.image(width=300, height=600),
          description: faker.lorem.sentence(),
          date: faker.datatype.datetime(),
          }
        posts.push(post)
      }
      return knex('posts').insert(posts);
    });
};