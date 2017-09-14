$(document).ready(function() {
	//default topics
	var topics = ["dog", "cat", "horse", "monkey", "panda", "cute puppy", "funny dog", "bird", "rabbit", "dance", "funny cat", "funny ape", "funny robot", "kids", "sports fail", "mr bean", "star wars"];
	
	function toggleGif(src) {
		var newSrc = "";
		
		if (src.indexOf('.gif') != -1) {
			newSrc = src.replace("giphy.gif", "480w_s.jpg");
		}
		else {
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
			var chosenTopic = $.get("https://api.giphy.com/v1/gifs/search?q=" + topicName + "&api_key=e76dd1758cb74a9bb16571a9ae644b11&limit=10");
			
			chosenTopic.done(function(response) {
				//clear old topic gif
				$(".gifBoard").html("");
				
				//show new topic gif
				for (var i = 0; i < response.data.length; i++) {
					$(".gifBoard").append('<div class="gif"><img src="' + response.data[i].images["480w_still"].url + '"/></div>');
				}
				
				//img to gif, use attr data-state still	
				$(".gif").on("click", function() {
					var src = $(this).children('img').attr('src');
					var res = toggleGif(src);
					$(this).html('<img src="' + res + '"/>');
				});
			});
		});
		
		$(".allTopics").append($newTopic);
	}

	//populate a list of topics from array topics
	for (var i = 0; i < topics.length; i++) {
		addTopic(topics[i]);	
	}

	//user adds new topic
	$(".addTopic").on("click", function() {
		var newTopic = $("input").val().trim();
		
		if (newTopic) {
			addTopic(newTopic);
		}
		else {
			return;
		}
	});
	
	//prevent default enter
	$(".form").submit(function(event) {
		event.preventDefault();
	});
});