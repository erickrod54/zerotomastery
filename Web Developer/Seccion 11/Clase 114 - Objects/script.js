/* Primer Objeto */
/*
var user = {
    name: "john",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
};*/
/* Segundo Objeto*/
var wizard = {
    name: "john",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    speels: ["abrakadabra", "shazaam", "boo"],
    /*como se accederia a un hechizo especifico del mago?

    wizard.speels[1]
    "shazaam"

    */
    /*los objetos tambien pueden hacer uso de funciones,
    llevan el nombre de metodos*/
    shout: function(){
      console.log("AHHHHHHHHH");
    }
    /*como el objeto llamaria al metodo?

    wizard.shout()
    AHHHHHHHHH
    */
};
/*Caso importante: puedo tener un usuario o un mago-wizard
dentro de un array?... si se puede
*/
var list = [
  {
    username: "andy",
    password: "secret"
/*como accederiamos al password en la lista(array)?

    list[0].password
    "secret"
*/
  },
  {
    username: "jess",
    password: "123"
  }
];
/* var list = ["apple", "banana", "orange"]*/
/* las diferencias entre un objeto y una lista (array)

los obtjetos tienen propidades y valores

ejemplo

name: "john"

los array tienen indices y valores

var list = ["apple", "banana", "orange"]
              0          1         2

Para el acceso a los valores:

en el caso del objeto seria objeto.propiedad

ejemplo

user.name
"john"

en el caso del array, seria array[# de indice]

list[0]
"apple"

Algunas operaciones

1. agregar propiedades y valores dinamicamente

user.favouriteFood = "spinach";
"spinach"
user
{name: "john", age: 34, hobby: "Soccer", isMarried: false, favouriteFood: "spinach"}

2. Cambiar valores de las propiedades de objetos dinamicamente

user.isMarried = true;
true

user
{name: "john", age: 34, hobby: "Soccer", isMarried: true, favouriteFood: "spinach"}

Nota importante:

Un arreglo es una muy buena opcion para un shopping list
                                               o
                                           to do list

*/
