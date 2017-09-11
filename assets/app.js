$(document).ready(function() {
	function toggleGif(src) {
		var newSrc = "";
		if (src.indexOf('.gif') != -1) { // if .gif in str
			newSrc = src.replace("giphy.gif", "480w_s.jpg");
		}
		else { // if .gif not in str 
			newSrc = src.replace("480w_s.jpg", "giphy.gif");
		}
		return newSrc;
	}
	
	function addTopic(topicName) {
		// create button
		$newTopic = $('<button type="button" class="btn btn-info topic">' + topicName + '</button>');
		
		// add event handler
		$newTopic.on("click", function() {
			//MY GIPHY API KEY: e76dd1758cb74a9bb16571a9ae644b11
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
					var src = $(this).children('img').attr('src');
					var res = toggleGif(src);
					$(this).html('<img src="' + res + '"/>');
				});
			});
		});
		
		$(".allTopics").append($newTopic);
	}
	
	var topics = ["dog", "cat", "horse", "monkey", "panda", "cute puppy", "funny dog", "bird", "rabbit", "dance", "funny cat", "funny ape", "funny robot", "kids", "sports fail", "mr bean"];

	//populate a list of topics from array topics
	for (var i = 0; i < topics.length; i++) {
		addTopic(topics[i]);	
	}

	//type in input box a topic, click add, topic shows in list of topics
	$(".addTopic").on("click", function() {
		var newTopic = $("input").val();
		
		if (newTopic) {
			addTopic(newTopic);
		}
		else {
			return;
		}
	});
});