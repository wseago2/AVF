// JSHero

var watchID = null;
var start = document.getElementById('startWatch');
var stop = document.getElementById('stopWatch');
//alert(watchID);
//alert(start);
//alert(stop);


//compass.getCurrentHeading implementation
$('#startWatch').click(function (){
	//alert("startWatch was clicked");
	startWatch();
});

$('#stopWatch').click(function (){
	//alert("stopWatch was clicked");
	stopWatch();
});

function onBodyLoad() {
	//alert("Compass onBodyLoad has fired!");
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	//alert("Compass onDeviceReady has fired!");
	navigator.compass.getCurrentHeading(compassSuccess, compassError);
}

function compassSuccess(heading) {
	//alert("compassSuccess has fired.");
//	alert("Heading: " + heading.magneticHeading);
	document.getElementById('compassHeading').innerHTML = heading.magneticHeading;
}

function compassError() {
	alert('Compass has encountered an internal error.');
}


//compass.watchHeading implementation

function startWatch(){
	//update every second
	var options = { frequency: 1000 };
	watchID = navigator.compass.watchHeading(watchSuccess, watchError);
}

function stopWatch() {
	if (watchID) {
		navigator.compass.clearWatch(watchID);
		watchID = null;
	}
}

function watchSuccess(heading) {
	var element = document.getElementById('watchHeading');
	element.innerHTML = 'Heading: ' + heading.magneticHeading;
}

function watchError() {
	alert('Compass as encountered an internal error.');
}




