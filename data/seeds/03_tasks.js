exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    { description: 'Download VS Code', notes: 'www.code.visualstudio.com', is_completed: false },
    { description: 'Install NPM', notes: 'www.npmjs.com', is_completed: false },
    { description: 'Run npm create-react-app', is_completed: false },
    { description: 'Install Knex', notes: 'use npm i knex', is_completed: false },
    { description: 'Create migrations file', notes: 'Run npx knex migrate:make <NameOfFile>', is_completed: false },
    { description: 'Install Knex', notes: 'use npm i knex', is_completed: false },
    { description: 'Create seed file', notes: 'Run npx knex seed:make <NameOfFile>', is_completed: false }
  ]);
};
