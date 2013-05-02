$("document").ready (function () {	
	getTwitter();
//	getWeather(); remove on init, left in to test in browser
//	getMoon(); for testing in browser
});


var getTwitter = function (){
	$(".twitterHeader").remove();
	var maketwitterHeader = $('<h2 class="twitterHeader">Recent Astronomy Tweets</h2>');
	maketwitterHeader.appendTo('#twitterHeader');
	var makeTwitterList = $('<ul id="twitterList" class="tweet"></ul>');
	makeTwitterList.appendTo('#twitterHeader');
	$.ajax({
		url: 'http://search.twitter.com/search.json?q=celestron&rpp=5&include_entities=true&result_type=mixed',
		type: 'GET',
		dataType: 'jsonp',
		success: function (tdata){
			console.log(tdata);
				var currentTweets = $();
				currentTweets.appendTo('#twitterList');
				for (i=0, l=tdata.results.length; i<l; i++){
					var userIcon = tdata.results[i].profile_image_url;
					$(' ' +
							'<li>' + 
							'<img class=' + '"' + 'twitterIcon' + '"' + ' ' + 'src=' + '"' + userIcon + '"' + '/>' +
							'<h3>' + tdata.results[i].from_user + ' ' + '</h3>' + 
							'<p>' +
							tdata.results[i].from_user_name + ' ' + 
							'<br />' +
							tdata.results[i].text + ' ' + 
							'</p>' +
							'</li>'
						).appendTo('#twitterList');
				}	
		}
	});
};

function onBodyLoad() {
	//alert("onBodyLoad has fired!");
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	//alert("Geolocation onDeviceReady has fired!");
	navigator.geolocation.getCurrentPosition (onCoordsSuccess, onCoordsError);
	
}

var onCoordsSuccess = function(coords) {
	//alert("Latitude = " + coords.coords.latitude + "\n" +
	//		"Longitude = " + coords.coords.longitude + "\n" 
	//	);
	var myLat = coords.coords.latitude.toFixed(2);
	var myLon = coords.coords.longitude.toFixed(2);
	//alert(myLat);
	//alert(myLon);
	$(".weatherHeader").remove();
		var makeweatherHeader = $('<h2 class="weatherHeader">Weather</h2>');
		makeweatherHeader.appendTo('#weatherHeader');
		$.ajax({
				url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q='+myLat+','+myLon+'&format=json&num_of_days=5&includeLocation=yes&key=ugp5sknf56rtzf69nt5p59rx',
				type: 'GET',
				dataType: 'jsonp',
				success: function(weatherData) {				
					for (i=0, l=weatherData.data.current_condition.length; i<l; i++){
						$('<ul>' + '<li>' + '<img src="img/weather.png" class="weatherPic">' + '</li>' +
							'<li>' + '<li><h3>Current Weather</h3></li>' + 
							'</ul>'
							).appendTo('#weatherHeader');						
							$(' ' +
									'<ul class="weatherList">' +
										'<li> Current Condition: ' + weatherData.data.current_condition[i].weatherDesc[i].value + '</li>' +
										'<li> Temperature: ' + weatherData.data.current_condition[i].temp_F + 'F' + '</li>' +
										'<li> Humidity: ' + weatherData.data.current_condition[i].humidity + '%' + '</li>' +
										'<li> Precipitation: ' + weatherData.data.current_condition[i].precipMM + '"' + '</li>' +
										'<li> Barometric Pressure: ' + weatherData.data.current_condition[i].pressure + ' mb' + '</li>' +
										'<li> Cloud Cover: ' + weatherData.data.current_condition[i].cloudcover + '%' + '</li>' +
										'<li> Visibility: ' + weatherData.data.current_condition[i].visibility + ' miles' + '</li>' +
									'</ul>' 
								).appendTo('#weatherHeader');
						}
					}					
			});
	$(".moonHeader").remove();
		var makemoonHeader = $('<h2 class="moonHeader">Moon</h2>');
		makemoonHeader.appendTo('#moonHeader');
		$('<ul>' + '<li><h3>Moon Phase Information</h3></li>' + '</ul>').appendTo('#moonHeader');
 	$.ajax({
        url: "http://api.aerisapi.com/sunmoon/?p=:auto&to=+2days&client_id=hT7nlbwYbCsudFZe2I7XV&client_secret=jbR7ld98dfEU96crQO4mFSvv3yrwowyZakgDR21T",
        dataType: "jsonp",
        success: function(moonData) {
         	console.log(moonData);
			for (i=0, l=moonData.response.length; i<l; i++) {
				//Run these inside loop to include more than 1 day in moon forcast.
				var moonState = moonData.response[i].moon.phase.name;
					moonState = moonState.replace(/\b./g, function(m){ return m.toUpperCase(); }); //regex to capitalize
				var moonPhase = moonData.response[i].moon.phase.phase;
					moonPhase = (moonPhase*100); // convert to percentage
					moonPhase = moonPhase.toFixed(0); // get rid of decimal
				var moonAge = moonData.response[i].moon.phase.age;
					moonAge = moonAge.toFixed(0); // get rid of decimal
					// can use moonAge to select proper moon phase image
					$(
								'<ul class="moonList">' +
									'<li>Moon State: ' + moonState + '</li>' +
									'<li>Moon Phase: ' + moonPhase + '%' + '</li>' +
									'<li>Moon Age: ' + moonAge + ' Days' + '</li>' +
									'<li>Moon Illumination: ' + moonData.response[i].moon.phase.illum + '%' + '</li>' +
								'</ul>' 
									).appendTo('#moonHeader' + i);
					$('<ul>' + '<img src="img/moonphase/moon' + moonAge + '.gif" class="moonPic">' + '<ul>').appendTo('#moonHeader' + i);
			}
         }
 	});
};

var onCoordsError = function() {
	alert("onCoordsSuccess suffered an internal error.");
};



