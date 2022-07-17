function formatDate(timestamp)
{ let date = new date(timestamp);
  let hours = date.getHours();
  if (hours <10) {
    hours = `0${hours}`
  }
  let minutes = date.getMinutes();
  if (minutes <10) {
    minutes = `0${minutes}`
  }
let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
dateTime.innerHTML = `${day} - ${hours}:${minutes}`;
console.log(`${day} - ${hours}:${minutes}`)
}
function displayForecast(response){
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`
  let days =["Tues", "Wed","Thu", "Fri", "Sat"];
  days.forEach(function (day){
  forecastHTML = forecastHTML + ` 
    <div class="col-6 box text-truncate"> 
   <h3 id="date">${day}</h3>
    <p> Temperature: <Span id="temp-forecast"></Span><span class="units">°C |<a href="#" id="farenheit-link"> °F</a> </span></p>
    </div>
   </div>`;
   forecastHTML =  forecastHTML + `</div>`
   forecastElement.innerHTML = forecastHTML})
}
function getForecast(coordinates){
  console.log(coordinates)
  let forecastApi= `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={minutely,hourly,alerts}&appid=${apiKey}`;
  console.log(forecastApi);
}
function displayTemperature (response){
let searchCityDisplay = document.querySelector("#city-display");
searchCityDisplay.innerHTML = response.data.name;
let tempElement = document.querySelector("#temp-today");
tempElement.innerHTML = Math.round(response.data.main.temp);
celsiusTemp = response.data.main.temp;
let descriptionElement  = document.querySelector("#description");
descriptionElement.innerHTML = response.data.weather[0].description;
let precElement  = document.querySelector("#prec-today");
precElement.innerHTML = response.data.main.humidity;
let windElement  = document.querySelector("#wind-today");
windElement.innerHTML = response.data.wind.speed;
let iconElement = document.querySelector("#icon");
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
getForecast(response.data.coord);
}
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let city = searchInput.value;
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(displayTemperature);
  }
function getLocation(city) {
  let lat = city.coords.latitude;
  let long = city.coords.longitude;
  let currentUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${apiKey}&units=metric`;
  axios.get(currentUrl).then(getCity);
 function getCity (response){
  let city = response.data[0].name;
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(displayTemperature);
  }}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(getLocation);
}
function displayFarenheit(event){
  event.preventDefault();
  let tempElement = document.querySelector("#temp-today");
  celsiusLink.classList.remove("active");
  farenheitLink.classList.add("active");
  let farenheitTemp = (celsiusTemp * 9/5) + 32;
  tempElement.innerHTML = Math.round(farenheitTemp)
}
function displayCelsius (event){
  event.preventDefault();
  let tempElement = document.querySelector("#temp-today");
  celsiusLink.classList.add("active");
  farenheitLink.classList.remove("active");
  tempElement.innerHTML = Math.round(celsiusTemp)
}

let dateTime = document.querySelector("#date-time");

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", displayFarenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsius);

let apiKey ="177424da3f8dbafeadee840a7b087feb";
let celsiusTemp = null;
displayForecast();
