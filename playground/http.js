const https = require("https");

const url = `https://api.darksky.net/forecast/f6807345f31c2edde3f429275a44447e/40,-75?units=si`;

const request = https.request(url, (response) => {
    let data = '';
    
    // runs multiple times as this is a stream
    response.on('data', (chunk) => { // chunk is a buffer
        data = data + chunk.toString();
    });

    // runs one time when entire response is received.
    response.on('end', () => {
        const parsedData = JSON.parse(data);
        console.log(parsedData);
    });
});

request.on('error', (error) => {
    console.log(error);
});

request.end(); /// fire the request off