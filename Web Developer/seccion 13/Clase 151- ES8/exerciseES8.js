// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// y la respuesta es 

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

console.log(startLine);
console.log(turtle.padStart(7));
console.log(rabbit.padStart(7));
VM1631:5      ||<- Start line
VM1631:6      🐢
VM1631:7      🐇

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

"🐢======="

// con .trim remuevo los espacios en blanco, y con .padEnd
// el primer parametro me fija los espacios en que se va a mover
// y el segundo parametro rellena con lo que le colocamos en este 
// caso =

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

// la solucion de andrei

let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  
  Object.entries(obj).map(value => value.join(" ")).join(' ')

//   usa la funcionn Object.entries combinada con map para tomar los values
//   y despues usa la propiedad join join(" ")) para unir los objetos

