//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

// RETORNA 13 addTo toma x que seria 3 y despues vendria la funcion y => x + y
// el la que y seria addToTen que seria 10

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

// retorna 31 descompone sum en curried sum y este lo que hace es sumar dos valores

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

// retorna 17 descompone a en la funcion (b) => a + b y se crea una funcion nueva add5 
// que suma 5 al valor que ingrese el usuario

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

// retorna 16 porque compone la primera funcion mas interna 'g' de la funcion add5
// que suma 5 y la funcion mas externa 'f' add1 que suma 1 

//What are the two elements of a pure function?

// AVOIDING SIDE EFFECTS
// FUCNTIONAL PURITY

// TO DETERMINISM

// RESPUESTA DE ANDREI

// //What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.