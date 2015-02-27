var gui = require('nw.gui');
var win = gui.Window.get();

var app = angular.module('myApp', []);

function closeWindow() {
	win.close();
}

function minimizeWindow() {
	win.minimize();
}