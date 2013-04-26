// JSHero 

function onBodyLoad (){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady (){
	//alert("Connection onDeviceReady has fired!");
	checkConnection();
}

function checkConnection(){
	var networkState = navigator.network.connection.type;
	var states = {};
		states[Connection.UNKNOWN] = 'Unknown';
		states[Connection.ETHERNET] = 'Ethernet';
		states[Connection.WIFI] = 'WiFi';
		states[Connection.CELL_2G] = '2G Cellular';
		states[Connection.CELL_3G] = '3G Cellular';
		states[Connection.CELL_4G] = '4G Cellular';
		states[Connection.NONE] = 'No Network Connection';
	//	alert('Connection Type: ' + states[networkState]);
		document.getElementById('connectionStatus').innerHTML = states[networkState];

}
