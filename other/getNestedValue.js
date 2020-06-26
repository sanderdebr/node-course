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
