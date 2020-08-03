console.log("Client side javascript file is loaded!");

import * as Utils from "./utils.js";

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.getElementById("message-1");
const messageTwo = document.getElementById("message-2");

// messageOne.textContent = "From JS";

const updateAddress = async (address) => {
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  let { error, location, forecast } = await Utils.fetchAddress(address);

  if (error) {
    messageOne.textContent = "";
    messageTwo.textContent = error;
  } else {
    messageOne.textContent = `Location: ${location} - Forecast: ${forecast}`;
  }
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const address = search.value;

  updateAddress(address);
});
