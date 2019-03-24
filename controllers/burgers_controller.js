const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

// Create router for app
router.get('/', function(req, res) {
    burger.all(function(result) {
        const obj = {
            burgers: result
        };
        console.log(obj);
        res.json(obj);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.create([
        'name', 'devoured'
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);
  
    burger.update({
      sleepy: req.body.sleepy
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }); 
});

router.delete('/api/burgers/:id', function(req, res) {
    const condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Export router
module.exports = router;