const array = new Array(100);
array.push(1);    //ampliar 1 posicion

const array2 = [1,2,3,4];
//array2.push(1);   //ampliar 1 posicion  
//array2.push(2);   //ampliar 1 posicion

let array3 = [...array2, 5];

const array4 = array3.map(function(numero){
    return numero * 2;
});


console.log(array2);
console.log(array3);
console.log(array4);
