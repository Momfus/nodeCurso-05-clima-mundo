// Obteniendo con el api openWeather

const axios = require('axios'); // Maneja peticiones basado en promesas

const getClima = async( lat, lng ) => {

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=a67d4275f295ba874b337584fc817edd`);

    return res.data.main.temp;

};

module.exports = {

    getClima

};