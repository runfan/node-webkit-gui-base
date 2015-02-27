function refreshGUI(){
	if(!GUI_title){
		$("menuTitle").hide();
	}

	if(!GUI_minimizeButton){
		$(".minButton").hide();
	}

	if(!GUI_exitButton){
		$(".exitButton").hide();
	}
	
	if(!GUI_menu){
		$("#menu").hide();
		$("#displayContainer").css("padding-top", "0");
	}
}