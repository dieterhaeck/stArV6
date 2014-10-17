$(document).ready(function() {		
	slideShow();
});

function slideShow() {
	var rand = Math.floor(Math.random()*12) + 1;
	$('#gallery a').not('#gallery a.'+rand).css({opacity: 0.0});
	$('#gallery a.'+rand).css({opacity: 1.0}).addClass('show');
	setInterval('gallery()',4000);
}

function gallery() {
	var current = ($('#gallery a.show')?  $('#gallery a.show') : $('#gallery a:first'));
	var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#gallery a:first') : current.next()) : $('#gallery a:first'));
	next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);
	current.animate({opacity: 0.0}, 1000).removeClass('show');
}