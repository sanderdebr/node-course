const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=608f629f4180348404e2fd7730c3fa7d&query=45,-75&units=f`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
