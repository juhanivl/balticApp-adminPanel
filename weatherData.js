var id_token = localStorage.getItem('id_token')


function startSendindWeatherData(){

  getSomeAsAdmin("place/start-weather-update" , id_token )
  .then(function(response){
    document.getElementById("weatherDataStatus").innerHTML = "Sending Weather Data"
    return response;
  })
}

function stopSendindWeatherData(){

  getSomeAsAdmin("place/stop-weather-update" , id_token )
  .then(function(response){
    console.log("repsonse" , response);
    document.getElementById("weatherDataStatus").innerHTML = "Not Sending Weather Data"
    return response;
  })
}
