$(document).ready(function() {
	var topics = ["dog", "cat", "horse", "monkey", "panda", "cute puppy", "funny dog", "bird", "rabbit", "dance", "funny cat", "funny ape", "funny robot", "kids", "sports fail", "mr bean"];
	
	//populate a list of topics from an array
	for (var i = 0; i < topics.length; i++) {
		$(".allTopics").append('<button type="button" class="btn btn-info ' + 'topic' + i + '">' + topics[i] + '</button>');
		
		//get gif from giphy
		//MY GIPHY API KEY: e76dd1758cb74a9bb16571a9ae644b11
		var getGif = $.get("http://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=e76dd1758cb74a9bb16571a9ae644b11&limit=10");
		getGif.done(function(data) {
			console.log("success got data: ", data);
		});
	} //can remove class topic later if not needed
	
	

	//click on one button, show gif of that topic
	$(".btn").on("click", function() {
		var topicName = $(this).text();
		var chosenTopic = $.get("http://api.giphy.com/v1/gifs/search?q=" + topicName + "&api_key=e76dd1758cb74a9bb16571a9ae644b11&limit=10");
		
		chosenTopic.done(function(data) {
			$(".showGif").html(data);
			
			console.log(data.data); //need to display gif/image
		});
		
		
		console.log(topicName);
	});


	

	

	//click on each gif, it moves

	//click again, it stops: use 480w_still value to show jpg file instead of gif

	//type in input box a topic, click add, topic shows in list of topics

});