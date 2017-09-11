$(document).ready(function() {
	
	//if add topic, should be a function with empty topics, then update topics, then print
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
			//clear old topic gif
			$(".showGif").html("");
			
			//show new topic gif
			for (var i = 0; i < data.data.length; i++) {
				$(".showGif").append('<div class="gifImg"><img src="' + data.data[i].images["480w_still"].url + '"/></div>');
			}
			
			//when clicked, image changes into gif
			//should be toggle between 2 functions
			$(".gifImg").on("click", function() {
				var str = $(this).children('img').attr('src');
				var res = str.replace("480w_s.jpg", "giphy.gif");
				
				$(this).html('<img src="' + res + '"/>');	
			});		
		});
	});

	//click again, it stops: use 480w_still value to show jpg file instead of gif

	//type in input box a topic, click add, topic shows in list of topics

});