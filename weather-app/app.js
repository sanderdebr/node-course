const request = require("request");

let url =
  "http://api.weatherstack.com/current?access_key=608f629f4180348404e2fd7730c3fa7d&query=51.586290,4.777120&units=f";

// request({ url: url, json: true }, (error, response) => {
//   const current = response.body.current;
//   // console.log(
//   //   `It is currently ${current.temperature} fahrenheit out. There is a ${
//   //     current.precip * 100
//   //   }% change of rain.`
//   // );
// });

// Geocoding
// Address -> Lat/Long ->

url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2FuZGVyZGViciIsImEiOiJjazY1YXR3NDQxNHlwM3JwZWJicHZ6ZDNyIn0.hs2f4c6kJanQ7E9QnHziLg";

function getNestedValue(obj, target) {
  let result = null;
  if (obj instanceof Array) {
    for (let i = 0; i < obj.length; i++) {
      result = getNestedValue(obj[i], target);
      if (result) break;
    }
  } else {
    for (let prop in obj) {
      if (prop === target) {
        return obj[target];
      }
      if (obj[prop] instanceof Object || obj[prop] instanceof Array) {
        result = getNestedValue(obj[prop], target);
        if (result) break;
      }
    }
  }
  return result;
}

request({ url, json: true }, (err, response) => {
  if (err) {
    console.log("Unable to connect to location services!");
  } else if (response.body.message) {
    console.log("Err: ", response.body.message);
  } else {
    const cur = response.body;
    const val = getNestedValue(cur, "geometry");
    const lat = val.coordinates[0];
    const long = val.coordinates[1];
    console.log(`Lat: ${lat} Long: ${long}`);
  }
});
