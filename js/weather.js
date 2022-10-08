const key = "436aba4730244999bbdaedb26f688c7f";

function Goe(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      temp.innerText = `${Math.ceil(data.main.temp)}℃`;
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}

function GoeError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(Goe, GoeError);
