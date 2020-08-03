const request = require("request");

const geocode = (address, callback) => {
  if (!address) {
    return callback("No address provided!");
  }

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2FuZGVyZGViciIsImEiOiJjazY1YXR3NDQxNHlwM3JwZWJicHZ6ZDNyIn0.hs2f4c6kJanQ7E9QnHziLg`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!");
    } else if (body.message) {
      callback("Unable to find location. Try another search.");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
