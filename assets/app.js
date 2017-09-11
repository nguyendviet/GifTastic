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

			//print out all gif images
			for (var i = 0; i < data.data.length; i++) {
				
				$(".showGif").append('<div class="gifImg gifNo' + i + '"><img src="' + data.data[i].images["480w_still"].url + '"/></div>');		
			
				/*
				$(".showGif").append('<div style="width:100%;height:0;padding-bottom:57%;position:relative;"><iframe src="' + data.data[i].embed_url + '" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="' + data.data[i].url + '"></a></p>');
				*/
			}
			
			//when clicked, image changes into gif
			//should be toggle between 2 functions
			$(".gifImg").on("click", function() {
				console.log("clicked on: ", this);
				
				//get the id of the gif (maybe a function?)
				var x = $(this).children('img').attr('src');
				var y = x.split("media/");
				var z = y[1].split("/");
				
				//show gif after click
				$(this).html('<iframe src="https://giphy.com/embed/' + z[0] + '" width="480" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>');
			});		
		});
	});

	//click again, it stops: use 480w_still value to show jpg file instead of gif

	//type in input box a topic, click add, topic shows in list of topics

});