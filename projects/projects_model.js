const db = require('../data/db-config');

function findResources() {
     return db('resources');
}

function findProjects() {
    return db('projects');

}

function findTasks() {
    return db('tasks');
    // const tasks =  db('tasks');

    // tasks.map(task => {
    //     const projId = db('projects_tasks').where('task_id', task.id);
    //      const project = db('projects').where('id', projId);
    //      task.project = project.name;
    //      task.project_description = project.description; 
    // })

    // return tasks;
    //return db('steps as st').join('schemes as sc').select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions').where('st.scheme_id', id).where('sc.id', id).orderBy('step_number');
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


