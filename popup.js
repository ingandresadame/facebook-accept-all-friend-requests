$(document).ready(function(){
	var sleep = 0;
	$('.ruResponseButtons').each(function(){
		var likeElement = $(this);
		setTimeout(function(){
			likeElement.children('button').click();
		}, sleep);
		sleep += 10000;
	});
});