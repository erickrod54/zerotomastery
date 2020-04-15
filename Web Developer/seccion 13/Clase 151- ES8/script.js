// las nuevas caracteristicas anadidas en 2017 a es8
// hablaremos de las mas importantes 

// 1era caracteristica string paddding 

// .padStart()

// .padEnd()

// esta caracteristica anade espacios al principio 
// o al final de una cadena 

'Turtle'.padStart(10)
"    Turtle"

// anade 10 espacios en blancos al principio de la cadena 

'Turtle'.padEnd(10)
"Turtle    "

// anade 10 espacios en blancos al final de la cadena 

// 2da caracteristica es de tipo sintactico

// trailing commas in function's 
// parameter lists and calls.
// -
// 'Comas finales en las listas 
// de parámetros de función y llamadas.'

const fun =  (a,b,c,d,) => {
    console.log(a);
}

// la coma al final de la d en la funcion 
// y del llamado a la funcion es una expresion 
// valida de la funcion

fun(1,2,3,4,)

// Y EL RESULTADO ES 

1

// y porque esta segunda caracteristica es realmente util ?
// cuando hay una gran lista de parametros veras a los 
// desarrolladores hacidendo cosas como esta 

const fun =  (
                a,
                b,
                c,
                d,
                ) => {
    console.log(a);
}

fun(1,2,3,4,)

// es una practica que hace lucir el codigo mas limpio 
// y ya la ultima coma al ser valida no daria errores

// la 3era caracteristica es Object.values() 
// y Object.entries() y estas son muy utiles

// porque antes de estas dos caracteristicas se usaba 
// mucho algo que se llama Object.keys() la cual 
// nos ayudaba hacer algo similar a los arrays pero 
// con objetos

// un ejemplo

let obj = {
    username0: 'Santa',    
    username1: 'Rudolf',
    username2: 'Mr Grinch'
}

// mirando este objeto, por el hecho de no ser un array 
// no podemos implementarle 'map' o 'filter o reduce'
// pero este tipo de objetos feos nos los podemos encontrar
// cuando trabajamos con servidores, pero igual necesitamos
// iterarlos y lo hariamos de la siguiente manera

let obj = {
    username0: 'Santa',    
    username1: 'Rudolf',
    username2: 'Mr Grinch'
}

Object.keys(obj).forEach((key,keys) =>{
    console.log(key, obj[key])
})

// y da como resultado 

username0 Santa
username1 Rudolf
username2 Mr Grinch

// y esta es una manera de nosotros iterar con objetos

// AHORA CON Object.entries y Object.values lo 
// hariamos mas facil

let obj = {
    username0: 'Santa',    
    username1: 'Rudolf',
    username2: 'Mr Grinch'
}

Object.values(obj).forEach(value =>{
    console.log(value);
})

// daria como resultado 

Santa 
Rudolf
Mr Grinch

// este recorrido nos da como resultado los valores 
// de nuestros objetos 

let obj = {
    username0: 'Santa',    
    username1: 'Rudolf',
    username2: 'Mr Grinch'
}

Object.entries(obj).forEach(value =>{
    console.log(value);
})

// y nos da como resultado 

(2) ["username0", "Santa"]
(2) ["username1", "Rudolf"]
(2) ["username2", "Mr Grinch"]

// el arreglo de nuestros objetos, entonces esto 
// da un gran poder de controlar tanto valores como
// parametros - keys

// otro ejemplo digamos que queremos hacer uso de estos 
// dos poderes nuevos para aplicarlo sobre una lista de 
// usuarios para remover 'username0 username1  y username2'

let obj = {
    username0: 'Santa',    
    username1: 'Rudolf',
    username2: 'Mr Grinch'
}

Object.entries(obj).map(value =>{
    return value[1] + value[0].replace('username', '');
})
// remplaza el 1 que seria el primer valor y con el cero 
// reemplaza todos los secesivos

// y el resultado da 

(3) ["Santa0", "Rudolf1", "Mr Grinch2"]

            0: "Santa0"
            1: "Rudolf1"
            2: "Mr Grinch2"
            length: 3
            __proto__: Array(0)


// todas las caracteristicas anteriores son muy utiles en ES8
// pero hay una con la cual todos se sienten muy emocionados

// Async Await es muy nueva y todos en la comunidad estan 
// emocionados con ella



