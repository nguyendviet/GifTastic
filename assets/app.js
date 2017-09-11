$(document).ready(function() {
	
	var topics = ["dog", "cat", "horse", "monkey", "panda", "cute puppy", "funny dog", "bird", "rabbit", "dance", "funny cat", "funny ape", "funny robot", "kids", "sports fail", "mr bean"];
	
	//populate a list of topics from an array
	for (var i = 0; i < topics.length; i++) {
		$(".allTopics").append('<button type="button" class="btn btn-info topic">' + topics[i] + '</button>');
		
		//get gif from giphy
		//MY GIPHY API KEY: e76dd1758cb74a9bb16571a9ae644b11
		var getGif = $.get("http://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=e76dd1758cb74a9bb16571a9ae644b11&limit=10");
		
	}
	
	//click on one button, show gif of that topic
	$(".topic").on("click", function() {
		var topicName = $(this).text();
		var chosenTopic = $.get("http://api.giphy.com/v1/gifs/search?q=" + topicName + "&api_key=e76dd1758cb74a9bb16571a9ae644b11&limit=10");
		
		chosenTopic.done(function(obj) {
			//clear old topic gif
			$(".gifBoard").html("");
			
			//show new topic gif
			for (var i = 0; i < obj.data.length; i++) {
				$(".gifBoard").append('<div class="gif"><img src="' + obj.data[i].images["480w_still"].url + '"/></div>');
			}
			
			//img to gif	
			$(".gif").on("click", function() {
				var str = $(this).children('img').attr('src');
				var res = str.replace("480w_s.jpg", "giphy.gif");
				
				$(this).html('<img src="' + res + '"/>');
			});	
			
			//gif to img? toggle?
			
			console.log("gif retrieved: ", obj.data);
		});
	});

	//type in input box a topic, click add, topic shows in list of topics
	$(".addTopic").on("click", function() {
		var newTopic = $("input").val();
		
		if (newTopic) {
			$(".allTopics").append('<button type="button" class="btn btn-info topic">' + newTopic + '</button>');
		}
		else {
			return;
		}
		
		console.log("new topic: ", newTopic);
	});

});