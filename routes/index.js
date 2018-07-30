'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');

const getTitle = require('../titles.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', {
  //   title: getTitle()
  // });
  res.render('index');
});

router.get('/home', function (req, res, next) {
  res.render('home');
});

/**
 * Send a random title object to the client
 */
router.get('/api/title', (req, res, next) => {
  res.json({
    title: getTitle()
  });
});

/**
 * Send some limited memory information to the client
 */
router.get('/api/meminfo', (req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    getMeminfo((meminfoObject) => {
      res.json({
        memUsedPercent: ((meminfoObject.MemTotal - meminfoObject.MemFree) / meminfoObject.MemTotal * 100).toFixed(2),
        memActivePercent: (meminfoObject['Active(anon)'] / meminfoObject.MemTotal * 100).toFixed(2),
        swapUsedPercent: ((meminfoObject.SwapTotal - meminfoObject.SwapFree) / meminfoObject.SwapTotal * 100).toFixed(2)
      });
    });
  } else {
    res.json({
      // Number.prototype.toFixed() returns a string (above), so send a string.
      memUsedPercent: '22.5',
      memActivePercent: '15',
      swapUsedPercent: '80'
    });
  }
});

/**
 * Send some limited CPU information to the client
 */
router.get('/api/stat', (req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    getProcstat((result) => {
      res.json(result);
    });
  } else {
    res.json([
      ["cpu", "21059388", "1141", "143700", "96372349", "25706", "0", "4579", "0", "0", "0"],
      ["cpu0", "2053112", "301", "20557", "17527846", "4417", "0", "668", "0", "0", "0"],
      ["cpu1", "5088460", "260", "27436", "14466600", "3128", "0", "3394", "0", "0", "0"],
      ["cpu2", "4078084", "314", "26010", "15490226", "3816", "0", "222", "0", "0", "0"],
      ["cpu3", "4298255", "128", "22723", "15280267", "4098", "0", "58", "0", "0", "0"],
      ["cpu4", "2659158", "129", "29229", "16903938", "4922", "0", "112", "0", "0", "0"],
      ["cpu5", "2882316", "6", "17742", "16703470", "5324", "0", "124", "0", "0", "0"]
    ]);
  }
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
    data.toString().split('\n').forEach((line) => {
      if (line.length > 0) {
        let key = line.split(':')[0];
        let val = Number(line.split(':')[1].trim().match(/^[0-9]+/)[0]);

        meminfoObject[key] = val;
      }
    });

    if (callback) callback(meminfoObject);
  });
}

function getProcstat(callback) {
  fs.readFile('/proc/stat', (err, data) => {
    if (err) {
      throw err;
    }

    let result = [];
    data.toString().split('\n').forEach((line) => {
      const elements = line.split(/ +/).filter(Boolean);
      if (elements.length > 0 && elements[0].match(/cpu[0-9]*/)) {
        result.push(elements);
      }
    });

    if (callback) callback(result);
  });
}

module.exports = router;
