//import {heroes} from './data/heroes'
import heroes,{owners} from '../heroes/heroes';

console.log(owners);

const getHeroeById = (id) => {
    return heroes.find((heroes) => heroes.id === id)
}

//simplificado 

export const getHeroeByIdSimpli = (id) => heroes.find((heroes) => heroes.id === id);


console.log(getHeroeById(2));
console.log(getHeroeByIdSimpli(3));

const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner)

console.log(getHeroesByOwner('maven'))