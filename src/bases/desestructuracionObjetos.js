//Desestructuración de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const {edad, clave, nombre, } = persona;  //desestructuración de objetos 


const retornaPersona = ({clave, nombre, edad, rango = 'Capitán'}) => {  //desestructuración de objetos
    return {
        nombreClave: clave,
        anios: edad,
        rango: rango,
        lating :{
            lat: 14.1232,
            lng: -12.3232,
        }
    }
}

const {nombreClave, anios,lating:{lat, lng}} = retornaPersona(persona);


console.log(nombreClave, anios);
console.log(lat, lng);
//console.log(persona.clave);
//console.log(persona.edad);
