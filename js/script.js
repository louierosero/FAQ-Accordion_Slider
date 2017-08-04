// Accordion
var action = "click";
var speed = "500";

$(document).ready(function() {
		// Question Handler
		$('li.q').on(action, function() {
			// Get next element
			$(this).next().slideToggle(speed)
			// Select all others answer
			.siblings('li.a').slideUp();
			// Get image for active question
			var img = $(this).children('img');
			// Remove the rotate class for all images except the active one
			$('img').not(img).removeClass('rotate');
			// Toggle Rotate Class
			img.toggleClass('rotate');
		});
});