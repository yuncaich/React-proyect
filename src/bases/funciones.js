//funciones

//function saludar(nombre) {  //hacer como constante
//    return `Hola ${nombre}`;
//}
//
//saludar = 30;
//
//console.log(saludar);

const saludar = function(nombre) {  //hacer como constante
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {  //hacer como constante
    return `Hola ${nombre}`;
}

const saludar2_Simplificado = (nombre) => `Hola ${nombre}`;


console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar2_Simplificado('Gohan'));

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_papi1502'
});

console.log(getUser());



//TRANSFORMAR FUNCIONES EN FLECHA
//1. function getUsuarioActivo(nombre) {
//TIENE QUE RETORNAR UN OBJETO IMPLICITO
const activeUser = (nombre) => ({
    nombre : nombre,
});

console.log(activeUser('Fernando'));