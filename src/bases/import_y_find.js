import heroes from '../heroes/heroes'
//import heroes,{owners} from '../heroes/heroes';

//console.log(owners);

export const getHeroeById = (id) => {
    return heroes.find((heroes) => heroes.id === id)
}

//simplificado 

export const getHeroeByIdSimpli = (id) => heroes.find((heroes) => heroes.id === id);


//console.log(getHeroeById(2));
//console.log(getHeroeByIdSimpli(3));

export const getHeroesByOwner = (owners) => heroes.filter((heroes) => heroes.owner === owners)

//console.log(getHeroesByOwner('maven'))