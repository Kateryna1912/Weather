function formatDate(dateDay) {
    let allDay = dateDay.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let hours = dateDay.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = dateDay.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let day = days[allDay];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  function weather(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temp").innerHTML = Math.round(
      response.data.main.temp
    );
  
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
      response.data.weather[0].main;
  }
  
  function searchCity(city) {
    let apiKey = "5f416bb725054d95c069c3242ad90e74";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weather);
  }
  
  function submit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
  }
  
  function searchLoc(position) {
    let apiKey = "5f416bb725054d95c069c3242ad90e74";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weather);
  }
  
  function currentLoc(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLoc);
  }
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    let tempElement = document.querySelector("#temp");
    tempElement.innerHTML = 66;
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let tempElement = document.querySelector("#temp");
    tempElement.innerHTML = 19;
  }
  
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", submit);
  
  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", currentLoc);
  
  searchCity("New York");
  