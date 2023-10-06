import { getHeroeByIdSimpli } from "./bases/import_y_find";
//
////Promesas
//const promesas = new Promise( (resolve, reject) => {
//    
//    setTimeout( () => {
//        const heroes1 = getHeroeByIdSimpli(50);
//        resolve(heroes1);
//        //reject(heroes1 ,'no se puede encontrar');
//    } , 2000);
//
//});
//
//promesas.then( (heroes) => {
//
//    console.log('Then de la promesa', heroes);
//
//
//}).catch(err => console.warn(err) );

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

            setTimeout( () => {
                const heroes1 = getHeroeByIdSimpli(id);
                if( heroes1 ){
                    resolve(heroes1);
                }else{  
                    reject('no se puede encontrar');
                }
             
                

            } , 2000);
        
        });

}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn)