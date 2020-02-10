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
  Projects.addProject(req.body)
  .then(proj => {
    res.json(proj);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.post('/tasks', (req, res) => {
  Projects.addTask(req.body)
  .then(task => {
    res.json(task);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});



  module.exports = router;