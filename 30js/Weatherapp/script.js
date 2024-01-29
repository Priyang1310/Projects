const apikey = "10f5c343fb082fe90f82dd636c4796d3";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function callAPI(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json(); //extract JSON from the http response

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main === "Thunderstorm") {
    weatherIcon.src = "https://openweathermap.org/img/wn/11d@2x.png";
  } 
  else if (data.weather[0].main === "Clouds") {
    if (data.weather[0].icon === "02d") {
      weatherIcon.src = "https://openweathermap.org/img/wn/02d@2x.png";
    } else if (data.weather[0].icon === "02n") {
      weatherIcon.src = "https://openweathermap.org/img/wn/02n@2x.pngv";
    } else if (data.weather[0].icon === "03d") {
      weatherIcon.src = "https://openweathermap.org/img/wn/03d@2x.png";
    } else if (data.weather[0].icon === "03n") {
      weatherIcon.src = "https://openweathermap.org/img/wn/03n@2x.png";
    } else if (data.weather[0].icon === "04d") {
      weatherIcon.src = "https://openweathermap.org/img/wn/04d@2x.png";
    } else {
      weatherIcon.src = "https://openweathermap.org/img/wn/04n@2x.png";
    }
  } 
  else if (data.weather[0].main == "Rain") {
    if (data.weather[0].icon === "10d") {
      weatherIcon.src = "https://openweathermap.org/img/wn/10d@2x.png";
    } else if (data.weather[0].icon === "13d") {
      weatherIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
    } else {
      weatherIcon.src = "https://openweathermap.org/img/wn/09d@2x.png";
    }
  } 
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "https://openweathermap.org/img/wn/09d@2x.png";
  } 
  else if (data.weather[0].main == "Clear") {
    if (data.weather[0].icon == "711") {
      weatherIcon.src = "https://openweathermap.org/img/wn/01d@2x.png";
    } else {
      weatherIcon.src = "https://openweathermap.org/img/wn/01n@2x.png";
    }
  } 
  else if (data.weather[0].main == "Smoke") {
    if (data.weather[0].icon === "50d") {
      weatherIcon.src = "https://openweathermap.org/img/wn/50d@2x.png";
    } else {
      weatherIcon.src = "https://openweathermap.org/img/wn/50n@2x.png";
    }
  } 
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "https://openweathermap.org/img/wn/50d@2x.png";
  } 
  else {
    weatherIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
  }
}

searchbtn.addEventListener("click", () => {
  callAPI(searchinput.value);
});
