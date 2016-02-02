# redditwebtask
If this then that webtask for storing your saved reddit posts to mongodb instance

#How to use
Fork this repo and create a webtask with following command
`wt create --secret MONGO_URI="<mongo_connection_url>" https://raw.githubusercontent.com/<user_github_username>/redditwebtask/master/save-reddit-posts.js`

Setup a ifttt trigger for "New post saved by you" on reddit channel. Then setup a Maker channel action to trigger your redditwebtask url and pass following query string parameters

* title
* content
* postURL
* subreddit


# testing this locally
First 

`npm install` 

and then run 

`node test.js --MONGO_URI=<mongolab_or_local_mongo_connection_url>`

This should insert a reddit post document in `posts` collection in specified mongodb instance.