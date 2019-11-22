exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    // .then(function () {
    //   // Inserts seed entries
    //   return knex('users').insert([
    //     {id: 1, username: 'user_one', email: 'userone@gmail.com'},
    //     {id: 2, username: 'user_two', email: 'usertwo@gmail.com'},
    //     {id: 3, username: 'user_three', email: 'userthree@gmail.com'}
    //   ]);
    // });
};



