const router = express.Router();
const express = require('express');

// const subprocess = require('subprocess')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
