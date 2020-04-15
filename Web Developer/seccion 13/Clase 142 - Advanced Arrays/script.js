// Advanced Arrays

// a veces la cache puede afectar
// que se muestre la salida en 
// el java console de chrome
// cuando esto suceda borrar la cache

const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num *2);
})

console.log(double);

// estos tres son probablemente los 
// mas importantes metodos que usaras
// diariamente en tu trabajo con javascript

// map, filter, reduce

// map

// la manera en que map funciona es que siempre 
// retorna algo, lo que hace diferente maps de 
// foreach, es que itera sobre lo que le digamos
// y hace lo que diga la funcion, en el caso
// de arriba crea un nuevo array 

// y maps recorre el array haciendo simualtenamente
// la operacion que le indiquemos y guarda el resultado en 
// el mismo array simplificando asi mucho la operacion 
// realizada por forEach

const array = [1, 2, 10, 16];
const mapArray  = array.map((num) => {
    return num * 2;
});

console.log(mapArray);

// como estamos pasando un solo parametro y no estamos 
// mutando el array... y tenemos un solo retorno 
// podemos simplificar aun mas la expresion

const array = [1, 2, 10, 16];
const mapArray  = array.map(num => num * 2);

console.log(mapArray);

// el resultado del map array es el array 
// multiplicado por 2 .. (4) [2, 4, 20, 32]

//mas limpio 

// el segundo metodo es filter 
// filter

const array = [1, 2, 10, 16];
const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray)

// el resultado es el filtro de los elementos del array 
// mayores a 5 .... filter (2) [10, 16]

// el tercer metodo 'reduce'(con este metodo podemos 
// hacer filtering and mapping al mismo tiempo) es un 
// metodo realmente poderoso
// pero comenzaremos por la manera mas facil 

const array = [1, 2, 10, 16];
const reduceArray = array.reduce((accumulator, num) =>{
    return accumulator + num
}, 0);

console.log('reduce', reduceArray);

// el metodo tiene dos parametros uno en el que se define el
// acumulador y otro en el que se define un valor en el que 
// se acumula para este caso '0'... el array se termina 
// reduciendo el resultado de esta operacion es 29