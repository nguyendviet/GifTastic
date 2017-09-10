$(document).ready(function() {
	var topics = ["dog", "cat", "horse", "monkey", "panda", "cute puppy", "funny dog", "bird", "rabbit", "dance", "funny cat", "funny ape", "funny robot", "kids", "sports fail", "mr bean"];
	
	//populate a list of topics from an array
	for (var i = 0; i < topics.length; i++) {
		$(".allTopics").append('<button type="button" class="btn btn-info ' + 'topic' + i + '">' + topics[i] + '</button>');
	} //can remove class topic later if not needed
	
	

	//click on one button, show gif of that topic



	//GIPHY API KEY: e76dd1758cb74a9bb16571a9ae644b11

	//get gif from giphy
	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=e76dd1758cb74a9bb16571a9ae644b11&limit=5"); //limit determines number of gif shown on screen
	xhr.done(function(data) { console.log("success got data", data); });

	//click on each gif, it moves

	//click again, it stops: use 480w_still value to show jpg file instead of gif

	//type in input box a topic, click add, topic shows in list of topics

});