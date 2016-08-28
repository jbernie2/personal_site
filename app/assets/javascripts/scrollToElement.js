$(document).on('click', 'a[href^="#"]', function(e){
	var target = $(this.getAttribute('href'));
	if(target.length) {
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, 1000);
	}
});

