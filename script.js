function weatherBallon( cityID ) {
    var key = '{88107b5d4c713e0e883f6b636fc103a2}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+
     '&appid=' + key)
     .then(function(resp) {return resp.json() })
     .then(function(data) {
         console.log(data);
     })
     .catch(function() {

     });
}
window.onload = function() {
    weatherBallon( 6167865 );
}
function drawWeather( d ) {
    var fahrenheit = math.round(((parseFloat(d.main.temperature)-273.15)*1.8)+32);

    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temperature').innerHTML = fahrenheit + '&deg;';
    document.getElementById('location').innerHTML = d.name;
}

function weatherBallon( cityID ) {
    var key = '{88107b5d4c713e0e883f6b636fc103a2}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+
     '&appid=' + key)
     .then(function(resp) {return resp.json() })
     .then(function(data) {
         drawWeather(data);
     })
     .catch(function() {

     });
}