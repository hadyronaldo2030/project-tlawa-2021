
//---------------------------------------------------------

$(document).ready(function(){
    
//  _______________  sidebar_________________

	$(document).on('click', '.open-side', function(){
	 $('aside').toggleClass('aside-open');
});
//___________________________________________
	
	
	
	
//	______________ active play list ___________________
$(document).on('click', 'aside section', function(){
	$(this).addClass('active-play').siblings().removeClass('active-play');
});
//_____________________________________________________

//	______________ active icons play list ______________
$(document).on('click', 'aside section svg', function(){
	 $(this).toggleClass('text-danger');
});
$(document).on('click', 'aside .openAudio', function(){
	$('.main-openAudio').removeClass('d-none');
	$('main').addClass('d-none');
});


	
	
//_____________________________________________________
 
	
// ___________________	NiceScroll ____________________
$("body").niceScroll({
	cursorcolor:"rgba(14,14,15,0.78)",
	cursorwidth:"16px",
	cursorwidth: "10px",
	scrollspeed: 100
});
	$('aside').niceScroll({
	cursorcolor:"rgba(82,80,187,0.78)",
	cursorwidth:"16px",
	cursorwidth: "10px",
	scrollspeed: 100
});

});


