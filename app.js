const request = require('request');

const URL =
    'https://api.darksky.net/forecast/f6807345f31c2edde3f429275a44447e/37.8267,-122.4233?units=si';

// request(
//   {
//     url: URL,
//     json: true
//   },
//   (error, response) => {
//     if(error){
//         console.log("Unable to connect to weather service");
//     }else if(response.error){
//         console.log("Unable to find location");
//     }else{
//         const temp = response.body.currently.temperature;
//         const precipProbability = response.body.currently.precipProbability;
//         console.log(response.body.daily.data[0].summary + `It is currently ${temp}. There is a ${precipProbability} chance of rain`);
//     }
//   }
// );

// location -> longtitude, latitude -> get weather


const geocodingUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5tb2xkZXNhaTQiLCJhIjoiY2p6ZzU1cTVrMGdsZTNicDVla200YTk0aCJ9.NxfMJQIBGMIEnMBmcHZ9iA";

request(
    {
        url: geocodingUrl,
        json: true
    },
    (error, response) => {
        if(error){
            console.log("Unable to connect to location services");
        }else if(!response.body.features.length){
            console.log("No results found for place");
        }else{
            console.log("longtitude", response.body.features[0].center[0], "latitude", response.body.features[0].center[1]);
        }
    });