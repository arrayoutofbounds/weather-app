const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
// location -> longtitude, latitude -> get weather

geoCode("Sydney", (error, data) => {
    if(error){
        console.log(error);
    }else{
        forecast( data.lattitude, data.longtitude, (error, data) => {
            if(error){
                console.log(error);
            }else{
                console.log(data);
            }
        })
    }
});