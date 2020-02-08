exports.seed = function(knex, Promise) {
  return knex('resources').insert([   
    { name: 'VS Code', description: 'it is a free program' },
    { name: 'NPM', description: 'download and install' },
    { name: 'Knex', description: '' }
  ]);
};
