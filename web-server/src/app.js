const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views locaton
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Sander de Bruijn",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Sander de Bruijn",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "hi",
    title: "Help",
    name: "Sander de Bruijn",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "50 degrees",
    location: "berend",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Sander de Bruijn",
    errorMsg: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Sander de Bruijn",
    errorMsg: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
