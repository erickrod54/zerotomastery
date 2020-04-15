// primera caracteristica - let + const -

// el uso de let sustituye el uso de var
const player = 'bobby';
let experience = 100;
let wizardlevel = false;

if (experience > 90){
    let wizardlevel = true; // crea un nuevo nivel de scope por eso da false
}                           // por eso al usar var se mantiene
                           // true porque el var solo tiene un nivel de scope
                         
 // en cuanto al uso de const hace de un identificador
 // una constante por ejemplo si intentaramos cambiar player

// nos daria este error..

//  player = "Sally";

//   VM206:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:8

// pero en cambio si tenemos este ejemplo

const obj = {
    player: 'bobby',
    experience: 100,
    wizardlevel: false
}

// si le intentamos asignar un solo valor en este caso seria un
// numero al objeto nos resultaria 

// obj = 5;
// VM241:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:5

// este error debido a que el objeto esta declarado como constante
// sin embargo, si intento cambiar una propiedad del objeto 
// haciendo la prueba con wizardlevel

obj.wizardlevel = true;
true

obj
{player: "bobby", experience: 100, wizardlevel: true}

// otra caracteristica nueva es destructuring - desestructuración

// aqui cambiamos la estructura de declaracion de las
//propiedades del objeto

const player = obj.player;
const experience = obj.experience;
let wizardlevel = obj.wizardlevel;

// la nueva forma de hacer esto seria 

const { player, experience } = obj;
let wizardlevel = obj;

// mucho mas limpio

//otra nueva forma de declarar propiedades de un objeto

//Object properties - Propiedades del objeto

const name = 'john snow';
// const cambia por let y podras cambiar el valor 
const obj = {
    [name]: 'hello',
    [1 + 2]: 'hihi'
}

// el hecho de tener  [name], [1 + 2] entre corchetes hace
// referencia a que podemos tener propiedades dinamicas para las
// variables 

// Otra cosa grandiosa que se puede hacer con la
// con la declaracion de las propiedades y valor
// muy util en la seccion de react

const a = "Simon";
const b = true;
const c = {};

const obj = {
    a
    b,
    c
}

// Template Strings -- Plantillas de cadenas

// antes

const greeting = " Hello " + name + "you seem to be doing" + greeting + "!";


// ahora

const name = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;

// en cuanto a las propiedades del template tambien puedes
// pasarlas a traves de una funcion
// esto ayuda en que tendrias valores por defecto
//lo que ayudaria a que la funcion no falle y se ejecute
// con normalidad

function greet(name='', age =30, pet= 'cat'){
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;
}

// la salida seria esta 
// "Hello  you seem to be 20. What a lovely cat you have!"

// se pueden asignar los valores desde la funcion

greet("john", 50, "monkey")

// la salida seria esta
// "Hello john you seem to be 40. What a lovely monkey you have!"

//Symbol -del ultimo tipo de dato de javascript- 

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3
//resultado // false

// el resultado de la comparacion es falso, y esto
// es lo que hace de Symbol especial porque crea 
// un tipo de dato especial unico, evitando asi conflictos 
// -asi el valor sea igual crea un tipo unico por cada declaracion- 
// Symbol se utiliza para los identificadores de las 
// propiedades de los objetos es mas que todo su proposito
//por que a veces tenemos decenas y decenas de miles de 
// propiedades de objetos y no queremos que creen conflictos
// unas con otras eso crean bugs 

//la mas cool de todas arrow function - funcion flecha

// antes
function add(a, b) {
    return a + b;
}

// ahora


const add2 = (a,b) => a + b;

// la bellleza de esta nueva expresion es que podemos hacerle 
// un return y funcionara perfectamente

const add = (a,b) => {
    return a + b;
}



