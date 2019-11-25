const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({ // Comandos directamente en la raiz

    direccion: {

        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true

    }

}).argv;


// console.log( argv.direccion );

// lugar.getLugarLatLng( argv.direccion )
//     .then( console.log ); // Colocando así, imprime nomas la respuesta (objeto) recibido


// clima.getClima( -32.889999, -68.830002 )
//     .then( console.log )
//     .catch( console.log );

// Función tarea
const getInfo = async ( direccion ) => {

    // Salida esperda
    /*
    El clima de XXXXX es de XX
    No SE PUDO DETERMINAR EL CLIMA DE XXXX
    */

    try {

        const coordenadas = await lugar.getLugarLatLng( direccion );
        const temperatura = await clima.getClima( coordenadas.lat, coordenadas.lng );

        return `El clima de ${ coordenadas.direccion } es de ${ temperatura }.`

    } catch( error ) {

        return `No se pudo detarminar el clima de ${ direccion }`

    }


};


getInfo( argv.direccion )
     .then( console.log )
     .catch( console.log );