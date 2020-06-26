const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
  if (error) {
    console.log(error);
    return;
  }

  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log(location);
    console.log(forecastData);
  });
});
