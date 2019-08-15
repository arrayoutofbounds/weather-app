const request = require('request');

const URL =
  'https://api.darksky.net/forecast/f6807345f31c2edde3f429275a44447e/37.8267,-122.4233';

request(
  {
    url: URL
  },
  (error, response) => {
    const r = JSON.parse(response.body);
    console.log(r);
  }
);
