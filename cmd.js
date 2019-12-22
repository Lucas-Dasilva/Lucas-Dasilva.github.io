/*
jQuery animation
*/

//Function Credit: Paulo Nunes (http://syndicatefx.com)
(function(e){"use strict";e.fn.textTyper=function(t){
	var n={typingClass:"typing",beforeAnimation:function(){},
	afterAnimation:function(){},speed:10,nextLineDelay:400,startsFrom:0,repeatAnimation:false,repeatDelay:4e3,repeatTimes:1,cursorHtml:'<span class="cursor">|</span>'}
	,r=e.extend({},n,t);
	this.each(function(){var t=e(this),
	n=1,i="typingCursor";var s=t,o=s.length,
	u=[];
	while(o--){u[o]=e.trim(e(s[o]).html());
	e(s[o]).html("")}t.init=function(e){var n=r.beforeAnimation;if(n)n();
	t.animate(0)};t.animate=function(o){var a=s[o],f=r.typingClass,l=r.startsFrom;
	e(a).addClass(f);var c=setInterval(function(){
		var f=r.cursorHtml;
	f=e("<div>").append(e(f).addClass(i)).html();e(a).html(u[o].substr(0,l)+f);l++;
	if(u[o].length<l){
		clearInterval(c);o++;
	if(s[o]){
		setTimeout(function(){e(a).html(u[o-1]);
		t.animate(o)},r.nextLineDelay)}
	else{e(a).find("."+i).remove();
	if(r.repeatAnimation&&(r.repeatTimes==0||n<r.repeatTimes)){
		setTimeout(function(){
			t.animate(0);n++},r.repeatDelay)}
		else{
			var h=r.afterAnimation;
			if(h)h()}}
	}
	},
	r.speed)};t.init()});return this}
})(jQuery)

//Skip to home if enter is pressed, but if not then focus on cmd input
$(document).ready(function() {
	$('.command').hide();	
	$('.welcome').hide();
	$('#navWrapper').hide();
	$('#body').hide();

	$('#skipInput').focus();
	$('#cmdInput').focus();
  $('#home').addClass('open');
  $('#home').textTyper({
				speed:7,
				
        afterAnimation:function(){
          $('.command').fadeIn();
          $('#cmdInput').focus();
          $('#cmdInput').val('');
				}	
				
	});

	$('#skipInput').on("keydown", function( event ) {
		if(event.which == 13){						
			$('#skipInput').addClass("animated fadeOut slow");
			$('.command').addClass("animated fadeOut slow");
			$('#home').addClass("animated fadeOut slow");
			$('.welcome').append(name);
			$('.hello').append(" Stranger"+"!");

			


			//New Page
			$('.background').addClass("behind");
			setTimeout(function() {
				$('.welcome').fadeIn("slow");
				
			}, 250);		
			//Wait until animation ends to redirect
			setTimeout(function() {
				$('.welcome').addClass("animated fadeOut");

				$('#home').addClass('close');
				$('#skipInput').addClass('close');
				
				
			}, 1750);		

			setTimeout(function() {
				$('#navWrapper').fadeIn();
				$("#navWrapper").addClass("animated fadeInUp slow delay-1s");
				$('#body').fadeIn();			
			}, 2500);	
			setTimeout(function() {
				$('.command').addClass('close');
				$('#cmdInput').addClass('close');
			}, 2500);	

		}});
	
	//Command input
	$('#cmdInput').keyup(function(key){
		var name = $('#cmdInput').val();
		if(key.which == 13){// ENTER key pressed
			$('#skipInput').addClass("animated fadeOut slow");
			$('.command').addClass("animated fadeOut slow");
			$('#home').addClass("animated fadeOut slow");
			$('.welcome').append(name);
			$('.hello').append(" "+name+"!");

			//New Page
			$('.background').addClass("behind"); //Remove Backgorund
			//Welcome Fade
			setTimeout(function() {
				$('.welcome').fadeIn("slow");
			}, 750);		
			//Wait until animation ends to redirect
			setTimeout(function() {
				$('.welcome').addClass("animated fadeOut");
			}, 1750);		
			setTimeout(function() {
				$('#navWrapper').fadeIn();
				$("#navWrapper").addClass("animated fadeInUp slow delay-1s");
				$('#body').fadeIn();

				$('#home').addClass('close');
				$('#skipInput').addClass('close');
				$('.command').addClass('close');
				$('#cmdInput').addClass('close');
			}, 2500);		
		
		
		}	
	
	});
});

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




