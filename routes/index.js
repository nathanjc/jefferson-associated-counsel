var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.get('/about', function (req, res) {
  res.render('about');
});

router.get('/resources', function (req, res) {
  res.render('resources');
});

router.get('/contact', function (req, res) {
  res.render('contact');
});

module.exports = router;
