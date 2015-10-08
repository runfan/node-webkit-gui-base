function disableTitle(){
	$("menuTitle").hide();
}

function disableMinButton(){
	$(".minButton").hide();
}

function disableExitButton(){
	$(".exitButton").hide();
}

function disableMenu(){
	$("#menu").hide();
	$("#displayContainer").css("padding-top", "0");
}

function activateMenu(){
	$("#menu").show();
	$("#displayContainer").css("padding-top", "35px");
}

function activateTitle(){
	activateMenu();
	$("menuTitle").show();
}

function activateMinButton(){
	activateMenu();
	$(".minButton").show();
}

function activateExitButton(){
	activateMenu();
	$(".exitButton").show();
}

function refreshGUI(){
	if(!GUI_title){
		disableTitle();
	} else {
		activateTitle();
	}

	if(!GUI_minimizeButton){
		disableMinButton();
	} else {
		activateMinButton();
	}

	if(!GUI_exitButton){
		disableExitButton();
	} else {
		activateExitButton();
	}
	
	if(!GUI_menu){
		disableMenu();
	} else {
		activateMenu();
	}
}
