var betterHackerNewsApp = angular.module("betterHackerNewsApp", ["firebase"]);

betterHackerNewsApp.controller("HackerNewsCtrl", ["$scope", "$firebase", 
	function($scope, $firebase) {
  	// now we can use $firebase to synchronize data between clients and the server!
		var topStoriesRef = new Firebase("https://hacker-news.firebaseio.com/v0/topstories");
 	 	var syncTop = $firebase(topStoriesRef);
  		var topStories = syncTop.$asArray(); //JSON Object of the IDs for the top 100 stories
  		var test;
  		var items = [];
  		topStories.$loaded().then(function(){
  			//test = topStories[0].$value;
  			//console.log(test);	
  			for(var i = 0; i < 30; i++){
  				//console.log("https://hacker-news.firebaseio.com/v0/item/" + topStories[i].$value);
  				var storyRef = new Firebase("https://hacker-news.firebaseio.com/v0/item/" + topStories[i].$value);
  				//console.log(storyRef);
  				var syncStory = $firebase(storyRef);
  				var story = syncStory.$asObject();
  				//console.log(story);
  				items.push(story);//Adds story objects to items
  			}
  			console.log(items);
  			$scope.stories = items;
  		}).catch(function(error){
  			console.log("Error:", error);
  		});
  	 		
  		
	}
]);