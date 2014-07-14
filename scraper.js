var cheerio = require('cheerio');
var request = require('request');

var url = 'http://news.ycombinator.com';
request(url, function(err, resp, body){
	if(err)
		throw err;
	$ = cheerio.load(body);
	$('.title a').each(function() {
		console.log($(this).text()+"\n");
		console.log($(this).attr("href")+"\n");
	});
});