const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=608f629f4180348404e2fd7730c3fa7d&query=51.586290,4.777120&units=f";

request({ url: url, json: true }, (error, response) => {
  const current = response.body.current;
  console.log(
    `It is currently ${current.temperature} fahrenheit out. There is a ${
      current.precip * 100
    }% change of rain.`
  );
});
