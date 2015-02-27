function refreshScroll() {
	if(scroll_MoreContentNotice) {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			// Bottom
			$("#scrollMore").hide();
		} else {
			// Not bottom
			$("#scrollMore").show();
		}
	} else {
		$("#scrollMore").hide();
	}
}

if(scroll_MoreContentNotice) {
	function atBottom(){
		$("#scrollMore").hide("fast");
	}

	function notAtBottom(){
		$("#scrollMore").show("fast");
	}

	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			// Bottom
			atBottom();
		} else {
			// Not bottom
			notAtBottom();
		}
	});
}