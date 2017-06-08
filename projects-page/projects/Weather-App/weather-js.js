
//Get IP API INFO.. 
  var ipURL = "http://ip-api.com/json";
  $.getJSON(ipURL).done(function(coordinates){
    var city = coordinates.city;
    var country = coordinates.countryCode;
    $("#city").html(city + ", " + country);
    
    //Push those coordinates through weather API using getWeather Function
    getWeather(coordinates.lat, coordinates.lon);
  });

var getWeather = function(latitude, longitude){
  //Info for Weather API Call
    var keyID = "27649817598548f0e83974eabe481f35"
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + 
        latitude + "&lon="+ longitude + "&appid=" + keyID + "&units=metric";
 
  //Pull Weather API INFO
  $.getJSON(weatherURL).done(function(data){
    //Icon Info
    var iconPic = data.weather[0].icon;
    var iconURL = "http://openweathermap.org/img/w/" + iconPic +".png";
    document.getElementById("img").src= iconURL; 
    
   var iconInfo = data.weather[0].description.toLowerCase();
    //Description Title Case
    var description = iconInfo.split(" ");
    for (index = 0; index < description.length; index++){
      description[index] = description[index].charAt(0).toUpperCase() + description[index].slice(1); }
    description = description.join(" ");
    $("#description").html(description);
    
    //Temperature variables
     var temperature = data.main.temp;
     var value = 0;
    var celcius = parseInt(temperature);
    var fahrenheit = parseInt(temperature * (9/5) + 32);
 //Celcius to Fahrenheit Conversion/Click Event
  $("#button").on("click", function(){
    var c = "Celcius";
    var f = "Fahrenheit";
    if (value == 0){
      $("#button").html(c);
      $("#temperature").html(celcius + " &deg ");
      value = 1;
    }
    else{
      $("#button").html(f);
      $("#temperature").html(fahrenheit + " &deg " );
      value = 0;
    }
    });  
    
    
  }); 
};
  