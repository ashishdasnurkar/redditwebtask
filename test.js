var yargs = require('yargs').argv;
var saveIt = require('./save-reddit-posts');
var ctx = {};
var data = {};
data.title = 'Reddit Post';
data.content = 'http://i.imgur.com/Z5o9aQ9.jpg';
data.postURL = 'https://www.reddit.com/r/javascript/comments/3ey0ob/im_all_in/';
data.subreddit = 'javascript';
ctx.data = data;
ctx.data.MONGO_URL = yargs.MONGO_URI;

saveIt(ctx, function(err, result) {
	console.log(err, result);
});