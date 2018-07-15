const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  // const meminfo = getMeminfo();
  // res.render('index', { stdout: meminfo });

  getMeminfo((err, data) => {
    console.log("data is:", data);
    res.render('index', { stdout: data });
  })
});

/**
 * Build an object with data from /proc/meminfo
 * 
 * @param {Function} callback called with (meminfoObject)
 */
function getMeminfo(callback) {
  let meminfoString = "";

  fs.readFile('/proc/meminfo', (err, data) => {
    if (err) {
      throw err;
    }

    meminfoString = data.toString().split(/kb/i);
    callback(meminfoString);
  });
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
