//const personajes = ['Goku','Vegueta','Trunks'];
//
//console.log(personajes[0]);
//
//
//const [, ,p1] = personajes;    //ignorar posicion1 y 2
//
//console.log(p1)
//
//const retornaArreglo = () =>{
//    return ['ABC',123]
//}
//
//const [letras,numeros] = retornaArreglo();
//console.log(letras,numeros)

//Tarea 

const prueba = (valor) => {
    return [ valor , () => { console.log('HOla ' + valor) }];
}

const [nombre , setNombre] = prueba( 'Golku' );

console.log(nombre);
setNombre();

