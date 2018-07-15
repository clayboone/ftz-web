const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { stdout: "stdout data" });
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
