var router = require('express').Router();
var Task = require('../models/task');

router.get('/task', function(req, res, next){
    Task.find({}, function(err, results){
        if (err) return next(err);
        res.json(results);
    });
});


module.exports = router;
