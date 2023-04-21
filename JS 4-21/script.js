function getWeather() {
    const zipcode = document.getElementById("zipcode").value;
    const apiKey = "f173e4e6e0ff938c6417ec3d8bdf77e1";
    const url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "&units=imperial&appid=" + apiKey;

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const date = new Date().toLocaleDateString();
            const temp = Math.round(data.main.temp);
            const city = data.name;
            const condition = data.weather[0].description;
            const tempMin = Math.round(data.main.temp_min);
            const tempMax = Math.round(data.main.temp_max);

            const weatherInfo = document.getElementById("weather-info");
            weatherInfo.innerHTML = "";
            const list = document.createElement('ul');
            list.innerHTML = "<li>Date: " + date + "</li>" +
                           "<li>City: " + city + "</li>" +
                           "<li>Zip code: " + zipcode + "</li>" +
                           "<li>Current Temperature: " + temp + "°F</li>" +
                           "<li>Current Conditions: " + condition + "</li>" + 
                           "<li>Temperature Range: " + tempMin + "°F - " + tempMax + "°F</li>";
            weatherInfo.appendChild(list);
        })
        .catch(function(error) {
            console.error(error);
        });
}