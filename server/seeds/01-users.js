exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {
            login: 'admin',
            password: 'admin',
            email: 'admin@email.com',
            member: true
          }
        ]);
      });
  };