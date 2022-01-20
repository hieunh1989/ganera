jQuery(function($){
	$('*[data-popup]').click(function(e){
		e.preventDefault();
		var id = $(this).attr('data-popup');
		$('#' + id).addClass('show');
		$('body').css('overflow','hidden');
	})
	$('.popup .close').click(function(){
		$(this).closest('.popup').removeClass('show')
		$('body').removeAttr('style');
	})
	$("#app-menu a").on('click', function(event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	        // Prevent default anchor click behavior
	        event.preventDefault();

	        // Store hash
	        var hash = this.hash;

	        // Using jQuery's animate() method to add smooth page scroll
	        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	        $('html, body').animate({
	            scrollTop: $(hash).offset().top - 70
	        }, 800, function() {

	        });
	    } // End if
	});
})