function displayForecast (response){
  let searchCityDisplay = document.querySelector("#city-display");
  searchCityDisplay.innerHTML = response.data.name
let tempElement = document.querySelector("#temp-today");
tempElement.innerHTML = response.data.main.temp;
let descriptionElement  = document.querySelector("#description");
descriptionElement.innerHTML = response.data.weather[0].description;
let precElement  = document.querySelector("#prec-today");
precElement.innerHTML = response.data.main.humidity;
let windElement  = document.querySelector("#wind-today");
windElement.innerHTML = response.data.wind.speed;
let iconElement = document.querySelector("#icon");
descriptionElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let city = searchInput.value;
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(displayForecast);
}
function getLocation(city) {
  let lat = city.coords.latitude;
  let long = city.coords.longitude;
  let currentUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${apiKey}&units=metric`;
  axios.get(currentUrl).then(getCity);
 function getCity (response){
  let city = response.data[0].name;
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(displayForecast);
console.log(cityUrl)}
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(getLocation);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);

let apiKey ="177424da3f8dbafeadee840a7b087feb";


let weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var dt = new Date()
document.getElementById('date-time').innerHTML=dt;