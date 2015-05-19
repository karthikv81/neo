'use strict';

var express = require('express'),
    twitterRouter = express.Router(),
    TweetProvider = require('../modules/tweet.js');


/*twitterRouter.get('/', function (req, res) {
    // Call static model method to get tweets in the db
    Tweet.getTweets(0,0, function(tweets, pages) {
        res.json(tweets);
    });
});*/

twitterRouter.get('/read', function (req, res) {
    var hashTag = req.query.hashTag;

    TweetProvider.fetchTweets(hashTag, function (result) {
        res.json(result);
    });

});

twitterRouter.get('/write', function (req, res) {
    var hashTag = req.query.hashTag;

    TweetProvider.sendTweets(hashTag, function (result) {
        res.json(result);
    });

});

module.exports = twitterRouter;





