//jsHero

function onBodyLoad() {
	//alert("onBodyLoad has fired!");
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	//alert("Geolocation onDeviceReady has fired!");
	navigator.geolocation.getCurrentPosition (onGeoSuccess, onGeoError);
	
}

function onGeoSuccess(position) {
	//alert("onGeoSuccess has fired");
	alert(
		  "Latitude: "          + position.coords.latitude         + "\n" +
		  "Longitude: "         + position.coords.longitude        + "\n" +
		  "Altitude: "          + position.coords.altitude         + "\n" +
		  "Accuracy: "          + position.coords.accuracy         + "\n" +
		  "Altitude Accuracy: " + position.coords.altitudeAccuracy + "\n" +
		  "Heading: "           + position.coords.heading          + "\n" +
		  "Speed: "             + position.coords.speed            + "\n" +
		  "Timestamp: "         + new Date(position.timestamp)     + "\n"
		);
		document.getElementById('geoLat').innerHTML = position.coords.latitude;
		document.getElementById('geoLong').innerHTML = position.coords.longitude;
		document.getElementById('geoTime').innerHTML = new Date(position.timestamp);
}

function onGeoError() {
	alert("Geolocation has suffered an error.");
}