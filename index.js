let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
hour = ("0" + hour).slice(-2);
minute = ("0" + minute).slice(-2);
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let dayTime = day + " " + hour + ":" + minute;
document.getElementById("date").innerHTML = dayTime;

function temperatureshown(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#maindegree").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;

  document.querySelector("#Wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(city) {
  let apiKey = "5b6951259ed2a380e2c8dda379d3fc4d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(temperatureshown);
}

function getLocation(event) {
  event.preventDefault();
  let city = document.querySelector("#searchcity").value;
  searchCity(city);
}
document.querySelector("#cityform").addEventListener("submit", getLocation);

function searchLocation(position) {
  let apiKey = "5b6951259ed2a380e2c8dda379d3fc4d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(temperatureshown);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let currentLocationButton = document.querySelector("#currentloc");
currentLocationButton.addEventListener("click", getCurrentLocation);
