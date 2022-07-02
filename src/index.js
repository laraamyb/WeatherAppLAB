function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let cityDisplay = document.querySelector("#city-display");
  cityDisplay.innerHTML = searchInput.value;
  let city = searchInput.value;
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(cityUrl);
}
function displayLocation(showCity){
  let currentCity = showCity.name;
  let currentDisplay = document.querySelector("#city-display");
  currentDisplay.innerHTML = currentCity;
}
function getLocation(response) {
  let lat = response.coords.latitude;
  let long = response.coords.longitude;
  let currentUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=5&appid=${apiKey}&units=metric`;
  axios.get(currentUrl).then(displayLocation);
  console.log(currentUrl)
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(getLocation);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let apiKey ="177424da3f8dbafeadee840a7b087feb";


let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);


let weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;