import { getHeroeByIdSimpli } from "./bases/import_y_find";

//Promesas
const promesas = new Promise( (resolve, reject) => {
    
    setTimeout( () => {
        const heroes1 = getHeroeByIdSimpli(1);
        console.log(heroes1);
    } , 2000);

});

promesas.then( () => {

    console.log('Then de la promesa')

})

