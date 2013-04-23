function onBodyLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	//alert("Compass onDeviceReady has fired!");
	navigator.compass.getCurrentHeading(getHeading, onError);
}

function getHeading(heading) {
	alert('Current Heading: ' + heading);
}

function onError() {
	alert('Compass has suffered an internal error.');
}