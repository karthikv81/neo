var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //'index.html' is present in '../client/dist'
    res.sendfile('index.html');
});

module.exports = router;