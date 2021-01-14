// API key

const api = {
    key: "88d3486f5adba8d3fb254a19a5b8cb9c",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

// Select Elements

const inputElement = document.querySelector(".input-box");
const tempElement = document.querySelector(".temp-value p");
const tempDescription = document.querySelector(".temp-description p");
const locationText = document.querySelector(".location-text p");

// Search location

inputElement.addEventListener('keypress', setQuery);

function setQuery(event) {
    if (event.keyCode === 13) {
        getResults(inputElement.value);
    } 
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(weather => {
        return weather.json();
    }) .then(displayResults);
}

function displayResults(weather) {
    console.log(weather);

    locationText.querySelector('.location-text p');
    locationText.innerText = `${weather.name}, ${weather.sys.country}`;

    tempElement.querySelector('.temp-value p');
    tempElement.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    tempDescription.querySelector('temp-description p');
    tempDescription.innerText = weather.weather[0].description;

}




