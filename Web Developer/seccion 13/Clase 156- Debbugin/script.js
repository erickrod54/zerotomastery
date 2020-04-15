
// Debbugin es la accion o estrategia empleada 
// para localizar fallas o comportamientos 
// anormales en un codigo

// Ejemplo de Debuggin

// el 1er paso es leer la funcion para entenderla tenemos 
// una funcion de tipo constante llamada 'flattend / aplanado'
// despues del igual tenemos un array compuesto que seria 
// un array compuesto por otros array 

const flattend = [[0, 1],[2, 3],[4, 5]].reduce(
    (a,b) => a.concat(b), []);

// el 2do paso es darle una interpretacion mas familiar 
// sabemos lo que hace reduce el metodo tiene dos parametros 
// uno en el que se define el acumulador y otro en el que 
// se define un valor en el que se acumula para este caso 'b'
// que es un array 

const flattend = [[0, 1],[2, 3],[4, 5]].reduce(
    (accumulator,array) => accumulator.concat(array), []);

// el 3er paso es probar la funcion imprimiendo sus valores de 
// salida

const flattened = [[0,1],[2,3],[4,5]].reduce((accumulator, array) =>{
    console.log('array', array);
    console.log('accumulator', accumulator);
    return accumulator.concat(array)
}, []);

// alli nos damos cuenta que el proposito de esta funcion es 
// unir los tres array en uno solo mediante reduce 

(6) [0, 1, 2, 3, 4, 5]

// en vez de usar console log para darnos cuenta de esto 
// podemos usar debbuger que es un keyword especial de java

const flattened = [[0,1],[2,3],[4,5]].reduce(
    (accumulator, array) => {
    debugger; 
    return accumulator.concat(array)
}, []);

// esta keyword 'debugger' lo que hace es detener la funcion 
// hace que se congele en medio de la ejecucion y en las ventanas 
// de la consola que se abren podemos ejecutar paso a paso 
// la funcion para ver que hace 

