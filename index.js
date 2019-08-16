const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = 'd0230f91908655a7d0b4990fe077cc7c';

document.getElementById('search').onclick = () => {
    const cityName = document.getElementById('cityName').value;

    fetch(`${apiUrl}${cityName}&appid=${apiKey}`)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error('City not found');
    })
    .then(function(myJson) {

        //Weather Description
        const weatherDescription = 'Weather condition: ' + myJson.weather[0].description;
        document.getElementById('weather').innerHTML = weatherDescription;
        const iconUrl = `http://openweathermap.org/img/wn/${myJson.weather[0].icon}@2x.png`;
        document.getElementById('icon').src = iconUrl;
    });
};