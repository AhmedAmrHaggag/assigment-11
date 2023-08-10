let searchInput = document.getElementById('search');
let weatherDisplay = document.getElementById('weather-display');
let weatherTomrrow = document.getElementById('weather-tomrrow');
let weatherAfterTomrrow = document.getElementById('weather-After-tomrrow');

searchInput.addEventListener('input', async function(event) {
    const searchQuery = searchInput.value;
    getWeatherData(searchQuery)
      .then(weatherData => {
        displayWeather(weatherData);
        displayWeather_2(weatherData);
        displayWeather_3(weatherData);
      })
});

function getWeatherData(location) {
  const apiKey = 'a2009b6a0d1344ed9c092821230408';
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`;
  console.log(apiUrl);
  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      return response.json();
    });
}

function displayWeather(weatherData) {
  const currentWeather = weatherData.current;
  const location = weatherData.location.name;
  const temperature = currentWeather.temp_c;
  const condition = currentWeather.condition.text;


  const weatherHTML = `
  <p>${location}</p>
   <h1 class=""> ${temperature}°C  
 <i class="fa-solid fa-sun text-warning ms-5"></i> </h1>
  <p class="text-primary">${condition}</p>
   <span ><i class="fa-solid fa-umbrella-beach"></i>
   20%
   </span>
   <span class="ms-4"><i class="fa-solid fa-wind"></i>
     18km/h
     </span>
       <span class="ms-4"><i class="fa-regular fa-compass"></i>
         East
         </span>
  `;

  weatherDisplay.innerHTML = weatherHTML;
}

function displayWeather_2(weatherData) {
    if (weatherData) {
      const tomorrowWeather = weatherData.forecast.forecastday[0];
      const location = weatherData.location.name;
      const temperature = tomorrowWeather.day.avgtemp_c;
      const condition = tomorrowWeather.day.condition.text;
      
      const weatherHTML = `
      <p>${location}</p>
       <h1 class=""> ${temperature}°C  
     <i class="fa-solid fa-sun text-warning ms-5"></i> </h1>
      <p class="text-primary">${condition}</p>
       <span ><i class="fa-solid fa-umbrella-beach"></i>
       20%
       </span>
       <span class="ms-4"><i class="fa-solid fa-wind"></i>
         18km/h
         </span>
           <span class="ms-4"><i class="fa-regular fa-compass"></i>
             East
             </span>
      `;
      
      weatherTomrrow.innerHTML = weatherHTML;
    } else {
      weatherTomrrow.innerHTML = 'Failed to fetch weather data';
    }
  }   

  function displayWeather_3(weatherData) {
    if (weatherData) {
      const tomorrowWeather = weatherData.forecast.forecastday[1];
      const location = weatherData.location.name;
      const temperature = tomorrowWeather.day.avgtemp_c;
      const condition = tomorrowWeather.day.condition.text;
      
      const weatherHTML = `
      <p>${location}</p>
       <h1 class=""> ${temperature}°C  
     <i class="fa-solid fa-sun text-warning ms-5"></i> </h1>
      <p class="text-primary">${condition}</p>
       <span ><i class="fa-solid fa-umbrella-beach"></i>
       20%
       </span>
       <span class="ms-4"><i class="fa-solid fa-wind"></i>
         18km/h
         </span>
           <span class="ms-4"><i class="fa-regular fa-compass"></i>
             East
             </span>
      `;
      
      weatherAfterTomrrow.innerHTML = weatherHTML;
    } else {
      weatherAfterTomrrow.innerHTML = 'Failed to fetch weather data';
    }
  } 

function displayErrorMessage() {
  weatherDisplay.innerHTML = 'Failed to fetch weather data';
}



   // <div class="location">${location}</div>
    // <div class="temperature">${temperature}°C</div>
    // <div class="condition">${condition}</div>


    // function startTime() {
    //     //     x=setInterval(function(){
    //     //         let myDate = new Date() 
    //     //         document.querySelector("h2").innerHTML = myDate.toLocaleTimeString()
    //     //     } ,1000) }

    (function test(){
        x= setTimeout(function(){
            let myDate = new Date() 
            document.querySelector(".ss").innerHTML = myDate.toDateString();
        })
    })()

    // toDateString()