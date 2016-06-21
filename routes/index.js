var express = require('express');
var router = express.Router();

const sequelize = require('../models').sequelize;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/health', function(req, res, next) {
  sequelize.authenticate().then( errors => {
    console.log(errors)
    res.json({
      status: 'OK'
    });
  }).catch( e => {
    res.status(500);
    res.json({
      status: 'FAIL'
    });
  });
});

module.exports = router;
