const db = require('../data/db-config');

function findResources() {
     return db('resources');
}

function findProjects() {
    return db('projects');

}

function findTasks() {
    return db('tasks').join('projects', 'projects_tasks.project_id', '=', 'projects.id').join('projects_tasks', 'tasks.id', '=', 'projects_tasks.task_id').select('tasks.id', 'tasks.description', 'tasks.notes', 'tasks.is_completed', 'projects.name', 'projects.description as proj_desc');
}

function addResource(res) {
    return db('resources').insert(res)

}

function addProject(proj) {
    return db('projects').insert(proj)
}

function addTask(task) {
    return db('tasks').insert(task)
}



module.exports = {
    findResources,
    findProjects,
    findTasks,
    addResource,
    addProject,
    addTask
}


