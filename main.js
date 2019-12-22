jQuery(document).ready(function()
{
	var hamburger= jQuery('.hamburger');
	var navHam = jQuery('#navHam');

	/*Hamburger Menu*/
	hamburger.click(function()
	{
		if(jQuery(this).hasClass('is-active'))
		{
			jQuery(this).removeClass('is-active');
			navHam.removeClass('active');
		}
		else{
			jQuery(this).addClass('is-active');
			navHam.addClass('active');
		}
	})
})