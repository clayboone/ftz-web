const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Fight the Zog" });
});

/**
 * Get memory information, but not the entire object.
 */
router.get('/api/meminfo', (req, res, next) => {
  getMeminfo((meminfoObject) => {

    res.send(JSON.stringify({
      memUsedPercent: (meminfoObject.MemTotal - meminfoObject.MemFree) / meminfoObject.MemTotal * 100,
      memActivePercent: meminfoObject['Active(anon)'] / meminfoObject.MemTotal * 100,
      swapUsedPercent: (meminfoObject.SwapTotal - meminfoObject.SwapFree) / meminfoObject.SwapTotal * 100
    }));
  });
});

/**
 * Build an object with data from /proc/meminfo
 * 
 * @param {Function} callback called with (meminfoObject)
 */
function getMeminfo(callback) {
  fs.readFile('/proc/meminfo', (err, data) => {
    if (err) {
      throw err;
    }

    let meminfoObject = {};
    data.toString().split('\n').forEach((value, index) => {
      if (value.length > 0) {
        let key = value.split(':')[0];
        let val = Number(value.split(':')[1].trim().match(/^[0-9]+/)[0]);

        meminfoObject[key] = val;
      }
    });

    callback(meminfoObject);
  });
}

module.exports = router;
