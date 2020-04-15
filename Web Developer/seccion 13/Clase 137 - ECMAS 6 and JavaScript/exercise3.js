// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// newer Javascript!

let a = 'test';
let b = true;
let c = 789;
a = 'test2';

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// newer Javascript!

const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age, eyeColor} = person;

// const { firstName, lastName, age, eyeColor } = person;

// la solucion de andrei creo que se cambia a const 
// por el hecho de ser propiedades de un objeto


// resultado para ambos {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

// newer Javascript!
let a = 'test';
let b = true;
let c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

// Solucion de andrei

// el mismo caso se cambia a const por ser 
// propiedades de un objeto

// const a = 'test';
// const b = true;
// const c = 789;

// const okObj = {a, b, c};

// Template strings

// la funcion no funciona porque no tiene variables 
// asignadas por defecto

var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// newer Javascript!

// de la nueva forma en javascript se convierte en un arrow function 
// se cambia el uso de var por let y se anaden las variables por defecto
// lo cual soluciona que cuando se invoque message siempre funcione 
// asi no tenga los valores firstName y city

let message = (firstName,city) => "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// Solucion de andrei el tipo lo hace 'const' y 
// hace la asgignacion al template directamente de 
// las variables firstName y city lo cual
// soluciona el problema de undefined, esta da un error 
// por lo cual se deben asignar las variables primero  

// let firstName = "Erick";
// let city = "Medellin";

// const message = `Hello ${firstName} have I met you before? I think we met in ${city}. last summer no???`;


// default arguments
// default age to 10;

function isValidAge(age) {
    return age
}
 
// newer Javascript!

let isValidAge = (age) => age = 10;

// me gusta la solucion de andrei
// logico pues si dice que una constante
// coloca isValidAge como const
// luego hace la asgignacion de age dentro
// del llamado de la funcion, luego solo la llama 

// const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

// newer Javascript!
let sym = Symbol("This is my first Symbol");

// La solucion de andrei, la unica diferencia
// es que declaro la variable como const

// const sym = Symbol('This is my first Symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// newer Javascript!

let whereAmI = (username,location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    } 
}

// La solucion de andrei, la unica diferencia
// es que declaro la funcion como const
