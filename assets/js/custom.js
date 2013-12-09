// javascript that needs to run when the page is ready goes here.
$(document).ready(function() {

	// smooth anchor
	// add a class of scroll to any anchor link and this will smoothly scroll to the location.
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 100);
	});

});

// functions and plugins can go below here for speed, instead of separate and slow script files.

// input placeholder for ie
// use along with modernizer
// input elements in html used in same way as if browser supported placeholder text
jQuery(function () {
	  // check placeholder browser support
	  if (!Modernizr.input.placeholder)
	  {
			 // set placeholder values
			 jQuery(this).find('[placeholder]').each(function ()
			 {
					 if (jQuery(this).val() == '')  // if field is empty
					 {
							jQuery(this).val(jQuery(this).attr('placeholder'));
							jQuery(this).addClass('placeholder');
					 }
			 });

			 // focus and blur of placeholders
			 jQuery('[placeholder]').focus(function ()
			 {
					 if (jQuery(this).val() == jQuery(this).attr('placeholder')) {
							jQuery(this).val('');
							jQuery(this).removeClass('placeholder');
					 }
			 }
	  ).blur(function ()
			 {
					 if (jQuery(this).val() == '' || jQuery(this).val() == jQuery(this).attr('placeholder'))
					 {
					 jQuery(this).val(jQuery(this).attr('placeholder'));
					 jQuery(this).addClass('placeholder');
			 }
	  }
	  );

			 // remove placeholders on submit
	  jQuery('[placeholder]').closest('form').submit(function ()
			 {
					 jQuery(this).find('[placeholder]').each(function ()
					 {
							if (jQuery(this).val() == jQuery(this).attr('placeholder'))
							{
								  jQuery(this).val('');
							}
					 });
			 });
	  }
});