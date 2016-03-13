var router = require('express').Router();
var Task = require('../models/task');

router.get('/tasks', function(req, res){
    Task.getTasks(function(err, tasks){
      if (err) return console.log(err);
      res.json(tasks);
    });
});

router.get('/task/:id', function(req, res){
    Task.getTaskById(req.params.id, function(err, task){
      if (err) return console.log(err);
      res.json(task);
    });
});
router.post('/task', function(req, res){
  var task = req.body;
  Task.createTask(task, function(err, task){
    if (err) return console.log(err);
    res.json(task);
  });
});


module.exports = router;
