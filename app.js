const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
// location -> longtitude, latitude -> get weather
// callbacks have two arguments usually. first is error, second is the response.

const locationToGet = process.argv[2];

if(locationToGet){
    geoCode(locationToGet.toString(), (error, {lattitude, longtitude, location}) => {
        if (error) {
            return console.log(error);
        }
    
        forecast(lattitude, longtitude, (error, {temp, precipProbability, summary}) => {
            if (error) {
                return console.log(error);
            }
    
            console.log(`Location is ${location} is ${temp} degrees celcius and prepcipitation is ${precipProbability}. Overall it is ${summary}.`);
        })
    });
}else{
    console.log("Please provide an input");
}