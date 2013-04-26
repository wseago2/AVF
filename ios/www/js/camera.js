//jsHero

function onBodyLoad() {
	//alert("Camera onBodyLoad has fired!");
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	//alert("Camera onDeviceReady has fired!");
}

$('#capturePhoto').click(function() {
	//alert("capturePhoto was clicked");
	capturePhoto();
});

function capturePhoto() {
	navigator.camera.getPicture (cameraSuccess, cameraError, { quality: 50, saveToPhotoAlbum: true});
}

function cameraSuccess(imageData) {
	//alert("cameraSuccess has fired!");
}

function cameraError() {
	alert("The Camera has suffered an internal error.");
}

