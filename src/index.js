function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let cityDisplay = document.querySelector("#city-display");
  cityDisplay.innerHTML = searchInput.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showCity(response) {
  console.log(response.data);
}
function displayLocation(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  console.log(lat);
  console.log(long);
  position.preventDefault();
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}lon=${long}&appid=177424da3f8dbafeadee840a7b087feb`;
  axios.get(url).then(showCity);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(displayLocation);
}

let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);

let weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;
let weather = [{
    "paris": {
    name: paris,
      temp: 19.7,
      humidity: 80
    },
    "tokyo": {
     name: tokyo,
      temp: 17.3,
      humidity: 50
    },
    "lisbon": {
     name: lisbon,
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      name: sanfrancisco,
      temp: 20.9,
      humidity: 100
    },
    "moscow": {
     name: moscow,
      temp: -5,
      humidity: 20
    }
}]