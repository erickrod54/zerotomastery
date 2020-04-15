// que es un programa?

// allocate memory - asignacion de memoria

// parse and execute - ejecuta y corre 


// ahora sabemos como lo habiamos visto antes 
// que existe un motor de javaScript que se 
// encarga de convertir nuestras instrucciones 
// en programas ejecutables (En Chrome V8)

// ahora el motor de busqueda se compone de
// dos partes 'Memory Heap' y 'Call Stack'

// 'Memory Heap' es donde ocurre asignacion de 
// memoria

         'Memory Heap' (el motor de JavaScript recordara
                       que el valor de a es '1')
const a = 1;
const b = 1;
const c = 100;

// (variables globlales)

// pero la memoria heap es  limitada por lo que 
// va a existir un numero limite de variables

// hay algo que se llama 'Memory Leak' y esto sucede 
// cuando no se limpian estas variables "por ejemplo 
// usamos 1 sola vez la variable 'a' y despues de usada
// no la usamos mas pero sigue solo ocupando ese espacio
// mientras se crean mas variables"

// 'Call Stack' - es lo que lee y ejecuta nuestros scripts

// supongamos que tenemos las siguientes instrucciones en 
// nuestro script

console.log('1');//seria la primera linea en nuestro call stack
console.log('2');//destruye la primera linea y ejecuta la segunda call stack
console.log('3');//destruye la segunda linea y ejecuta la tercera call stack

// un ejemplo mas complejo de 'call stack'

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

one()

// paso a paso en el call stack estariamos corriendo

// 1ero
console.log('4');

// 2do
two();

// 3ero
one();

// JavaScript es single threaded language quiere decir decir
// que ejecuta una cosa por vez y en orden como lo vemos 
// en los ejemplos de arriba ahora puede ser de dos formas 
// sincrono y asincrono

// hay un comportamiento que se llama stackoverflow y esto 
// sucede cuando el call stack excede la memoria heap o 
// cuando hay un memory leak por variables que no se han 
// limpiado correctamente entonces alli hay un stackoverflow
// que hace que se sobrepase el limite de la pila callstack

// un ejemplo de esto seria 

// esto es algo llamado recursion, y sucede cuando
// una funcion se llama a si misma

function foo(){
    foo()
}

foo()

// dandonos como resultado

// Uncaught RangeError: Maximum call stack size exceeded
//     at foo (<anonymous>:1:13)
//     at foo (<anonymous>:2:5)
//     at foo (<anonymous>:2:5)
//     at foo (<anonymous>:2:5)
//     at foo (<anonymous>:2:5)
//     at foo (<anonymous>:2:5)
//     at foo (<anonymous>:2:5)
//     at foo (<anonymous>:2:5)
//     at foo (<anonymous>:2:5)
//     at foo (<anonymous>:2:5)

// que sucede cuando queremos priorizar tareas generalmente hacer 
// que procesos ligeros se ejecuten primero y procesos masivos 
// se ejecuten luego 

// COMPORTAMIENTO ASINCRONO

// tomamos nuestro ejemplo de arriba para mostrar el 
// comportamiento asincrono de JavaScript

console.log('1'); //seria la primera linea en nuestro call stack

setTimeout(() =>{
    console.log('2');//destruye la segunda linea y ejecuta la tercera call stack 2s despues    
}, 2000)


console.log('3');//destruye la primera linea y ejecuta la tercera call stack

// dandonos como resultado

1 //se ejectuta primero 
3 //se ejectuta de segundo

2 // 2seg despues

// el 'setTimeout' que logra el comportamiento asincrono 
// en JavaScript es una herramienta proporcionada por todos
// los navegadores, y para que esto suceda en detalle 
// hay algo llamado 'JavaScript Run-Time Enviroment' 
// (algo mas grande que JavaScript engine)

// como funciona el comportamiento asincrono 
// en 'JavaScript Run-Time Enviroment' 

// setTimeout dispara WebApi y como no es una 
// caracteristica de JavaScript se despliega 
// el proceso de 'JavaScript Run-Time Enviroment' 

console.log('1'); 

setTimeout(() =>{
    console.log('2');
}, 2000)


console.log('3');


// CALL STACK - como recordaremos call stack no es mas 
// que la ejecucion de una instruccion a la vez de la 
// instruccion

// al llegar a esta linea dispara Web API y le indica debes 
// esperar 2 seg para ejecutar lo que hay en esta linea 

setTimeout(() =>{
    console.log('2');
}, 2000)

// WEB API 

// despues de los 2 segundos WEB API hace un callback 
// para ejecutar la instruccion

callback()

// y este callback() se anade al callback queue para revisar 
// y ejecutar la instruccion

// CALLBACK QUEUE 

// EVENT LOOP

// el event loop lo que hace es chekear que el call stack este 
// vacio para anadir la intruccion puesta en el callback queue

// que pasaria si 

setTimeout(() =>{
    console.log('2');
}, 0)

// no se ejecutaria de manera sincrona pues por el hecho 
// de tener 'setTimeout' dispara el WEB API y de alli 
// ejecuta todo el run time WEB API -> CALLBACK QUEUE -> EVENT LOOP

// usos comunes de procesos asincronos

// cuando intenta hablar entre máquinas, 
// como hablar a una base de datos haciendo solicitudes de red, 
// procesamiento de imágenes, lectura de archivos







