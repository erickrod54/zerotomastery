// en contraste con ES6, ES7 es muy facil de 
// aprender puesto que tuvo dos adiciones en 
// el lenguaje

// la primera caracteristica anadida fue el metodo 
// includes() que fue anadido para strings y arrays
// veamos como funciona

'Hellooooooo'.includes('o')

true

// recorre el string en busca de la concidencia del 
// argumento de la funcion

// tambien podemos usarlo en arrays 

const pets = ['cat', 'dog', 'bat']

pets.includes('dog')

true

// recorre el array en busca de la concidencia del 
// argumento de la funcion

// la segunda caracteristica que fue anadida es square
// que es una funcion que eleva al cuadrado el argumente de 
// la funcion 

const square = (x) => x**2

// un ejemplo 

square(2)
4
square(4)
16
square(8)
64

// y si queremos expandir esto

const cube = (y) => y**3

// un ejemplo 

cube(3)
27
cube(4)
64