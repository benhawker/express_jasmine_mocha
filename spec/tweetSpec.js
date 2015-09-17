var TweetFetch = require("../src/tweet");

describe ("Twitter API Fetch", function() {

	var tweetFetch = new TweetFetch();

	it ("takes a URL", function() {
		expect(tweetFetch.url).toEqual("httpTest");
	});

});