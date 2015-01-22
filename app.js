var betterHackerNewsApp = angular.module('betterHackerNewsApp', []);
var cheerio = require('cheerio');
var request = require('request');
var url = 'http://news.ycombinator.com';
var text2;
request(url, function(err, resp, body){
	if(err)
		throw err;
	$ = cheerio.load(body);
	$('.title a').each(function() {
		text2 = $(this).text();
		console.log($(this).text()+"\n");
		console.log($(this).attr("href")+"\n");
	});
});
betterHackerNewsApp.controller("betterHNController", function($scope){
	$scope.test = text2;
});