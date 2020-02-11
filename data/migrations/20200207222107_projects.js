
exports.up = function(knex) {
    return(knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description', 256);
        tbl.boolean('is_completed').notNullable().default(false);
    }))
      .createTable('resources', tbl => {
          tbl.increments();
          tbl.string('name', 128).unique().notNullable();
          tbl.string('description', 256);
      })
      .createTable('tasks', tbl => {
          tbl.increments();
          tbl.string('description').notNullable();
          tbl.string('notes');
          tbl.boolean('is_completed').notNullable().default(false);
      })
      .createTable('projects_resources', tbl => {        
        tbl.integer('project_id').notNullable().unsigned().references('projects.id');
        tbl.integer('resource_id').notNullable().unsigned().references('resources.id');
        tbl.primary(['project_id', 'resource_id']);
    })
    .createTable('projects_tasks', tbl => {        
        tbl.integer('project_id').notNullable().unsigned().references('projects.id');
        tbl.integer('task_id').notNullable().unsigned().references('tasks.id');
        tbl.primary(['project_id', 'task_id']);
    });
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('projects_tasks')
          .dropTableIfExists('projects_resources')
          .dropTableIfExists('tasks')
          .dropTableIfExists('resources')
          .dropTableIfExists('projects');
  };
  
