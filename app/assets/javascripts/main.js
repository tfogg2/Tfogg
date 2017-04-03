$(document).ready( function(){
	console.log('ready');
	var menuItem = document.getElementsByClassName('menu-item');
	$(menuItem).on('click', function(){
		$(this).addClass('selected');

	});

	$('#contact').append($('#contactForm'));

	$('#contact').one('ready', function(){
		$.ajax({
			type: 'GET',
			url: "/contact",
			success: function(data) {
				$('#contact').append(data);
			}


		});


	});





});