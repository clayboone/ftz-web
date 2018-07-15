const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

/* GET home page. */
router.get('/', function(req, res, next) {
  const free = spawn('free', ['-m']);
  let stdoutData = [];
  free.stdout.on('data', (data) => {
    stdoutData.push(data)
  });

  res.render('index', { stdout: stdoutData });
});

module.exports = router;
