/*
jQuery animation
*/

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

// $('input[id = "whichkey"]').focus();	
// $('input[id = "whichkey"]').on("keydown", function( event ) {
// 	if(event.which == 13){

// 	window.location.replace("home.html");
// 	}
// });



// Let's do it!!
$(document).ready(function() {
	$('.command').hide();
	//$('.welcome').hide();
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
	
	//Command input
	$('#cmdInput').keyup(function(key){
		var name = $('#cmdInput').val();
		if(key.which == 13){// ENTER key pressed
			$('.command').addClass("animated fadeOut slow");
			$('#home').addClass("animated fadeOut slow");

			$('.welcome').append(name);
			$('.welcome').addClass("welcomeFade");
			$('.welcome').addClass("animated fadeIn slow delay-1s");
			//$(document).ready(function(){window.location.replace("home.html")})}
			
		
		}	
	});// end keyup function

	// End Command Input-----------------------------

});
