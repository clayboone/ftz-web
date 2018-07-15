const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  const meminfo = getMeminfo();
  res.render('index', { stdout: meminfo });
});

/**
 * Build an object with data from /proc/meminfo
 * 
 * @returns {Object} Map-type object holding data from /proc/meminfo
 */
function getMeminfo() {
  meminfoString = "";
  fs.readFile('/proc/meminfo', (err, data) => {
    if (err) return err;
    meminfoString += data;
  });
  return meminfoString;
}

/**
 * Get the amount of free system memory in bytes.
 * 
 * @param meminfo {Object} meminfo object
 * @returns {Number} Positive integer or zero
 */
function getFreeMem(meminfo) {
  
}

/**
 * Get the total amount of system memory, used and free.
 * 
 * @param meminfo {Object} meminfo object
 * @returns {Number} Positive integer or zero
 */
function getTotalMem(meminfo) {

}

module.exports = router;
