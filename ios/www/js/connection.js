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
		states[Connection.UNKNOWN] = 'Unknown Connection';
		states[Connection.ETHERNET] = 'Ethernet Connection';
		states[Connection.WIFI] = 'WiFi Connection';
		states[Connection.CELL_2G] = '2G Cellular Connection';
		states[Connection.CELL_3G] = '3G Cellular Connection';
		states[Connection.CELL_4G] = '4G Cellular Connection';
		states[Connection.NONE] = 'No Network Connection';
		alert('Connection Type: ' + states[networkState]);

}