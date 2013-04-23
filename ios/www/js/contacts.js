function onBodyLoad (){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady (){
	alert("Contacts onDeviceReady has fired!");
}