const persona = {   
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 45,
    direccion: {
        ciudad: 'Bogota',
        zip: 123456,
        lat: 14.3232,
    }
}
console.log( {persona} );

//console.table( {prueba:persona} );

//const persona2 = { persona };   //esto apunta a misma espacio de memoria
const persona2 = { ...persona };   //esto crea un nuevo objeto con los mismos valores
persona.nombre = 'Peter';

console.log(persona2);