'use strict';

var express = require('express'),
    twitterRouter = express.Router();
    //Tweet = require('../models/tweet');


/*twitterRouter.get('/', function (req, res) {
    // Call static model method to get tweets in the db
    Tweet.getTweets(0,0, function(tweets, pages) {
        res.json(tweets);
    });
});*/

twitterRouter.get('/read', function (req, res) {
    var x = {
        name: 'tw'
    };

    res.json(x);
});

module.exports = twitterRouter;





