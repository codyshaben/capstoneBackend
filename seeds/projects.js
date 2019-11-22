
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    // .then(function () {
    //   // Inserts seed entries
    //   return knex('projects').insert([
    //     {mastercase_id: 1, title: "Project 1", business_unit: "Retail", description: "This is the first project", pilot_date: "February 6 2020", users_id: 1 },
    //     {mastercase_id: 2, title: "Project 2" , business_unit: "E-commerce" , description: "This is the second project", pilot_date: "December 15 2019", users_id: 1},
    //     {mastercase_id: 3, title: "Project 3", business_unit: "Service", description: "This is the third project", pilot_date: "March 20 2020", users_id: 1}
    //   ]);
    // });
};