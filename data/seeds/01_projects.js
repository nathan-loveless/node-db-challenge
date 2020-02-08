exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { name: 'Create React App', description: 'How to create a React App', is_completed: false},
    { name: 'Create a migrations file', description: 'How to create a migrations file', is_completed: false},
    { name: 'Create a seed file', description: 'How to create a seed file', is_completed: false}
  ]);
};
