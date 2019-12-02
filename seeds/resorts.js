
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('resorts').insert([
        {name: "Vail", mountain_id: 1, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-vail.png?v=2'},
        {name: "Beaver Creek",mountain_id: 2, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-beaver-creek.png?v=2'},
        {name: "Whistler Black", mountain_id: 13, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-whistlerblackcomb.png'},
        {name: "Breckendridge", mountain_id: 3, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-breckenridge.png?v=2'},
        {name: "Park City", mountain_id: 12, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-parkcity.png?v=2'},
        {name: "Keystone", mountain_id: 4, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-keystone.png?v=2'},
        {name: "Crested Butte", mountain_id: 15, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-crestedbutte.png'},
        {name: "Heavenly",mountain_id: 5, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-heavenly.png?v=2'},
        {name: "Northstar", mountain_id: 7, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-northstar.png?v=2'},
        {name: "Kirkwood", mountain_id: 9, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-kirkwood.png?v=2'},
        {name: "Stowe", mountain_id: 14, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-stowe.png'},
        {name: "Okemo", mountain_id: 17, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-okemo.png'},
        {name: "Mount Sunapee", mountain_id: 16, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-mountsunapee.png'},
        {name: "Afton Alps", mountain_id: 10, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-aftonalps.png?v=2'},
        {name: "Mt. Brighton", mountain_id: 11, logo: 'https://www.epicmix.com/VailResorts/sites/epicmix/client/images/logo-mtbrighton.png?v=2'},
      ]);
    });
};