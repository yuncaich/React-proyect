//variables 

const nombre = 'Fernando';
let apellido = 'Herrera';

let valorDado = 5;

console.log(nombre, apellido, valorDado);

if(true){
    let valorDado = 6;
    console.log(valorDado);
}

console.log(valorDado);


// Template String



const nombreCompleto = `${nombre} ${apellido}`;	

console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo()}`);