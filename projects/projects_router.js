const express = require('express');

const Projects = require('./projects_model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.findProjects()
  .then(proj => {
    res.json(proj);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.get('/resources', (req, res) => {
  Projects.findResources()
  .then(resource => {
    res.json(resource);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.get('/tasks', (req, res) => {
  Projects.findTasks()
  .then(task => {
    res.json(task);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.post('/resources', (req, res) => {
  Projects.addResource(req.body)
  .then(resource => {
    res.json(resource);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.post('/', (req, res) => {
  const project = req.body;

  if(!('is_completed' in project))
    project.is_completed = 0;
  Projects.addProject(project)
  .then(proj => {
    res.json(proj);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.post('/tasks', (req, res) => {
  const tasks = req.body;
  if(!('is_completed' in tasks))
    tasks.is_completed = 0;
  Projects.addTask(tasks)
  .then(task => {
    res.json(task);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});



  module.exports = router;