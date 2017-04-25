$(document).ready( function(){

	var $contact = $('#contact');
	var contactInput = $('#contactForm').children('input');
	$('.input').focusin(function(){
		$(this).addClass('activeInput');
		$(this).children('input[type="text"]').removeAttr('placeholder');
		$(this).children('input[type="email"]').removeAttr('placeholder');
	}).focusout(function(){
		$(this).removeClass('activeInput');

	});
	$('.text').focusin(function(){
		$(this).addClass('activeInput');
		$(this).removeAttr('placeholder');
	}).focusout(function(){
		$(this).removeClass('activeInput');

	});

	
    $(document).on("scroll", onScroll);
    
    //smoothscroll
	    $('a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('li').each(function () {
	            $(this).removeClass('selected');
	        });
	    	$(this).addClass('selected');    	
	      
	        var target = this.hash,
	            menu = target;
	        $target = $(target);
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top-58
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });


	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('#top-menu a').each(function () {
	        var currLink = $(this);

	        var refElement = $(currLink.attr('href'));
	
	        if (refElement.position().top-300 <= scrollPos && refElement.position().top-300 + refElement.height() > scrollPos) {
	            $('#top-bar ul a').removeClass("selected");
	            currLink.addClass("selected");
	        }
	        else{
	            currLink.removeClass("selected");
	        }
	    });
	}

	





});