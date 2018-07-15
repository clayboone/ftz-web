const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  const free = spawn('cat', ['/proc/meminfo']);
  let stdoutData = [];
  free.stdout.on('data', (data) => {
    stdoutData.push(data)
  });

  free.on('close', (exitCode) => {
    res.render('index', { stdout: stdoutData });
  });
});

/**
 * Get the amount of free system memory in bytes.
 * 
 * @returns {Number} Positive integer or zero
 */
function getFreeMem () {

}

/**
 * Get the total amount of system memory, used and free.
 * 
 * @returns {Number} Positive integer or zero
 */

module.exports = router;
