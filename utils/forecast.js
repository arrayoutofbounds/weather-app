const request = require('request');


const forecast = (latitude, longtitude,  callback ) => {
  const URL = `https://api.darksky.net/forecast/f6807345f31c2edde3f429275a44447e/${latitude},${longtitude}?units=si`;

  request(
    {
      url: URL,
      json: true
    },
    (error, response) => {
      if(error){
          callback("Unable to connect to weather service");
      }else if(response.body.error){
          callback("Unable to find location");
      }else{
          const temp = response.body.currently.temperature;
          const precipProbability = response.body.currently.precipProbability;
          const summary = response.body.daily.data[0].summary;
          callback(undefined, {
            temp,
            precipProbability,
            summary
          });
      }
    }
  );
}

module.exports = forecast;



