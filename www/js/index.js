<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function()
{
  	$('#taptruefalse').on("tap", function() {
		random();
	//beep three times
	navigator.notification.beep(3);
	//vibrate for 2000 milliseconds 
	navigator.notification.vibrate(2000);
	});
	
});

function random()
{ 
	var randy = !Math.round(Math.random()); 
	
	alert(randy);      
	return randy;	
}