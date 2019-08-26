const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
// location -> longtitude, latitude -> get weather
// callbacks have two arguments usually. first is error, second is the response.

const locationToGet = process.argv[2];

if(locationToGet){
    geoCode(locationToGet.toString(), (error, data) => {
        if (error) {
            return console.log(error);
        }
    
        forecast(data.lattitude, data.longtitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
    
            console.log(`Location is ${data.location} is ${forecastData.temp} degrees celcius and prepcipitation is ${forecastData.precipProbability}. Overall it is ${forecastData.summary}.`);
        })
    });
}else{
    console.log("Please provide an input");
}