// La lógica para obtener las coordenadas de la dirección

const axios = require('axios'); // Maneja peticiones basado en promesas

// Función para utilizarlo

const getLugarLatLng = async( dir ) => { // Al manejar una promesa, puedo usar el async para utilizar el await

    // Obtener dirección
    const encodeUrl = encodeURI( dir );
    // console.log( encodeUrl );

    // Instancia de axios
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: {'x-rapidapi-key': '15b77f034fmsh55d8da233211097p14d7aejsnf45c5449b70b'}
    });

    // Se llama a la instancia
    const res = await instance.get();


    // En caso que no existan datos para lo enviado
    if( res.data.Results.length === 0 ) {
        
        throw new Error(`No hay resultados para ${ dir }`);

    }


    const data      = res.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {

        direccion,
        lat,
        lng


    };

};


// Exportar para usarla
module.exports = {

    getLugarLatLng

};
