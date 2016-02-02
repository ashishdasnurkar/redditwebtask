var MongoClient = require('mongodb').MongoClient;

function savePost(post, db, cb) {
	var col = db.collection('posts');

	col.insertOne(post, function(err, r) {
		if(err) return cb(err);
    	console.log('inserted ', post);
    	cb(null);
	});
};

module.exports = function (ctx, done) { 
	MongoClient.connect(ctx.data.MONGO_URL, function (err, db) {
	    if(err) return done(err);

	    var post = {};
	    post.title = ctx.data.title;
	    post.content = ctx.data.content;
	    post.postURL = ctx.data.postURL;
	    post.subreddit = ctx.data.subreddit;

	    savePost(post, db, function(err) {
	    	if(err) return done(err);
	    	db.close();
	    	done(null, 'Success');
	    })
	});
};