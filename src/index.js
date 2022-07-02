function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let city = searchInput.value;
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(displaySearchCity);
  console.log(cityUrl)
}
function getLocation(city) {
  let lat = city.coords.latitude;
  let long = city.coords.longitude;
  let currentUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${apiKey}&units=metric`;
  axios.get(currentUrl).then(displayCurrentCity)
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(getLocation);
}
function displaySearchCity (response){
  searchCityDisplay = document.querySelector("#city-display");
  searchCityDisplay.innerHTML = response.data.name;
}

function displayCurrentCity(response){
  let currentCityDisplay = document.querySelector("#city-display");
  currentCityDisplay.innerHTML = response.data[0].name;
  let city = response.data[0].name;
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl).then(displayForecast)
}
function displayForecast (weather){
  tempToday = document.querySelector("#temp-today");
  tempToday.innerHTML = weather.data.temp;
  tempOne = document.querySelector("#temp-one");
  tempTwo = document.querySelector("#temp-two");
  tempThree = document.querySelector("#temp-three");
  tempFour = document.querySelector("#temp-four");
  tempFive = document.querySelector("#temp-five");
  tempSix = document.querySelector("#temp-six");

  precToday = document.querySelector("#prec-today");
  windToday = document.querySelector("#wind-today");

  today = document.querySelector("#today");
  dayOne = document.querySelector("#day-one");
  dayTwo = document.querySelector("#day-two");
  dayThree = document.querySelector("#day-three");
  dayFour = document.querySelector("#day-four");
  dayFive = document.querySelector("#day-five");
  daySix = document.querySelector("#day-six");
 
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