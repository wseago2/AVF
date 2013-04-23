function onBodyLoad (){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady (){
	alert("Camera onDeviceReady has fired!");
}