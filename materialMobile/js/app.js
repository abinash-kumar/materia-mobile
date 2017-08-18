function openNav() {
	$('.navOverley').css({"width":"100%"});
	$('#mySidenav').toggleClass('offEffect', 'navEffect');	
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
	$('#mySidenav').toggleClass('offEffect', 'navEffect');	
	$('.navOverley').css({"width":"0"});	
    }
	
	$(document).mouseup(function(e){  
	var containr = $("#mySidenav");
		if (!containr.is(e.target) && (containr.has(e.target).length === 0)){
			$('#mySidenav').addClass('offEffect', 'navEffect');	
			$('.navOverley').css({"width":"0"});
		}
	});	