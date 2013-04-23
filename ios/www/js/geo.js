function onBodyLoad (){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady (){
	alert("Geolocation onDeviceReady has fired!");
}