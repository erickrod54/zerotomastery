var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy"
];
/*1er ciclo for*/
/*probaremos anadirle el signo de exclamacion al todo list*/
/*almacenamos el valor length de todos-length nos
dice cuan larga es la lista-*/
/*var todosLength = todos.length;
for (var i=0; i<todosLength; i++){*/
  /*console.log(todos[i] + "!");*//*prueba del
                                recorrido de la lista
                                imprimiendolo mas no asignandolo*/

  /*todos[i] = todos[i] + "!";*//*en esta linea ya se esta asignando*/
  /*todos.pop();*//*En el caso de querer eliminar items de la lista, si es un todolist*/
              /*no se puede colocar todos[i] porque pop()
              no interpreta el indice como un array*/
              /*se terminaron las tareas por hacer o todos
              esta linea 'var todosLength = todos.length;'
              y esta linea 'todos.pop();' hace eso posible*/
/*}*/
/*2do ciclo while*/
/*para comprobar la diferencia entre un ciclo
y otro le colocamos el valor de 10 en la condicion
puesto que solo un ciclo se ejecutara aunque sea una vez
y sera el do while, porque su verificacion es al final*/
/*var todosLength = todos.length;
var counterOne = 10;
while (counterOne > 10) {
  console.log("while",counterOne);
  counterOne--;
}*/
/*3er ciclo do while*/
/*var counterTwo = 10;
do {
  console.log("do while",counterTwo);
  counterTwo--;
} while (counterTwo > 10);
*/
/*Segun andrei el ciclo de mas uso el el ciclo for
y su adopcion de mejor uso es el ciclo for each*/
/*4to ciclo For Each*/

var todosLength = todos.length;
/*for (var i=0; i<todosLength; i++){
  console.log(todos[i], i);
}*/

/*lo que hacemos es lo siguiente
la diferencia clara es que con
forEach no necesitamos acceder
al indice para saber el valor
contenido en el array, lo que
hacemos con este nuevo ciclo
es "indicarle un array, y forEach/cada uno
usar una function con caulquier nombre
que es el parametro por el que
le pasaremos el valor contenido en el array"*/

/*todos.forEach(function(todo, i){
  console.log(todo, i);
})*/

/*En este nuevo ciclo optimiza y dice mas lo que hace
que el for clasico por tal razon es su rapida adopcion--*/
/*ahora como accedemos al indice desde el forEach
con respecto al for antiguo.. nuestro segundo
parametro en en forEach*/

/*otra ventaja es lo extensible que es, se puede usar
con muchas funciones distintas he aqui un ejemplo*/

var todosImportant = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy"
];

function logTodos(todo, i){
  console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);
