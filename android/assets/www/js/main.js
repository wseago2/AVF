$("document").ready (function () {	
	getTwitter();
	getWeather();
});

var getTwitter = function (){
	$(".twitterHeader").remove();
	var maketwitterHeader = $('<h2 class="twitterHeader">Recent Astronomy Tweets</h2>');
	maketwitterHeader.appendTo('#twitterHeader');
	$.ajax({
		url: 'http://search.twitter.com/search.json?q=celestron&rpp=5&include_entities=true&result_type=mixed',
		type: 'GET',
		dataType: 'jsonp',
		success: function (tdata){
			console.log(tdata);
				var currentTweets = $();
				currentTweets.appendTo('#twitterHeader');
				for (i=0, l=tdata.results.length; i<l; i++){
					$(' ' +
						'<ul class="twitterList">' +
							'<li><h3>' + tdata.results[i].from_user + ' ' + '</h3></li>' +
							'<li>' + tdata.results[i].from_user_name + ' ' + '</li>' +
							'<li>' + tdata.results[i].text + ' ' + '</li>' +
							'</ul>'
						).appendTo('#twitterHeader');
				}	
		}
	});
};

var getWeather = function (){
	$(".weatherHeader").remove();
		var makeweatherHeader = $('<h2 class="weatherHeader">Weather</h2>');
		makeweatherHeader.appendTo('#weatherHeader');
			$.ajax({
				url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q=Orlando&format=json&num_of_days=5&key=ugp5sknf56rtzf69nt5p59rx',
				type: 'GET',
				dataType: 'jsonp',
				success: function (weatherData){
					console.log(weatherData);					
					for (i=0, l=weatherData.data.current_condition.length; i<l; i++){
						$('<ul class="weatherCity">' + '<li><h3>Orlando, FL</h3></li>' + '</ul>').appendTo('#weatherHeader');						
							$(' ' +
									'<ul class="weatherList">' +
										'<li> Current Condition: ' + weatherData.data.current_condition[i].weatherDesc[i].value + '</li>' +
										'<li> Temperature: ' + weatherData.data.current_condition[i].temp_F + 'F' + '</li>' +
										'<li> Humidity: ' + weatherData.data.current_condition[i].humidity + '%' + '</li>' +
										'<li> Precipitation: ' + weatherData.data.current_condition[i].precipMM + '"' + '</li>' +
										'<li> Barometric Pressure: ' + weatherData.data.current_condition[i].pressure + 'mb' + '</li>' +
										'<li> Cloud Cover: ' + weatherData.data.current_condition[i].cloudcover + '%' + '</li>' +
										'<li> Visibility: ' + weatherData.data.current_condition[i].visibility + 'miles' + '</li>' +
									'</ul>'
								).appendTo('#weatherHeader');
						}
					}					
			});
};

/* Weather API Notes
	If I assign a variable to the URL
	I can use a zipcode instead of a 
	city name and allow the user to 
	enter their own zip code, so that
	the weather report will be for them.
*/	
/*
 /   //Connection Type Function
    var getConnectionStatus = function () {
        var networkState = navigator.network.connection.type;
            var states = {};
                states[Connection.UNKNOWN]  = 'Unknown Connection';
                states[Connection.ETHERNET] = 'Ethernet Connection';
                states[Connection.WIFI]     = 'WiFi Connection';
                states[Connection.CELL_2G]  = '2G Cellular Connection';
                states[Connection.CELL_3G]  = '3G Cellular Connection';
                states[Connection.CELL_4G]  = '4G Cellular Connection';
                states[Connection.NONE]     = 'Network Connection Unavailable';
                    alert('Connection Type ' + states[networkState]);

    };
*/
