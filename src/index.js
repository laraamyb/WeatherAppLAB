let weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function day;

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