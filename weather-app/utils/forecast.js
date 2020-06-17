const request = require("request");

const forecast = (long, lat, callback) => {
  let url = `http://api.weatherstack.com/current?access_key=608f629f4180348404e2fd7730c3fa7d&query=${long},${lat}&units=f`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Something went wrong.");
    } else if (response.body.error) {
      callback("Wrong coordinates provided.");
    } else {
      const { current } = response.body;
      callback(
        undefined,
        `It is currently ${current.temperature} fahrenheit out. There is a ${
          current.precip * 100
        }% change of rain.`
      );
    }
  });
};

module.exports = forecast;
