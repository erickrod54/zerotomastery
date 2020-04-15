/*Contenido visto desde la clase 100 a la 107*/
/*
Tipos en Javascript

1.Number
2.String
3.Undifined
4.Null
5.Symbol (Nuevo en ECMAScript 6)
6.Object

Comparaciones en Javascript

1. !==  --> lo opuesto
2. ===  --> igual a
3. >=   --> mayor o igual
4. <=   --> menor o igual
5. >    --> mayor
6. <    --> menor

Variables Javascript

1. var
(Nuevo en ECMAScript 6)
( const (Nuevo en ECMAScript 6))

Condicionales JavaScript

1. if      ---> condicional si
2. else    ---> condicional de lo contrario
3. else if ---> condional de lo contrario si
(Es un operador ternario como un switch)

Operadores Logicos en JavaScript

1. && ---> Operador si uno y lo otro
2. || ---> Operador 'o esto o lo otro'
3. !  ----> Operador de negacion 'lo opuesto' 
*/

/*todos estos ejercicios fueron probados y hechos en javaconsole google chrome*/
/*Corresponde a la seccion mas relevante llamada Control Flow - Control de Flujo*/

search-suggestions.js:1 Failed to load resource: net::ERR_FAILED

if (name === "Billy"){}
undefined
if (name === "Billy"){	}
undefined
var name = "Billy";
if (name === "Billy"){
	alert("Hi Billy");
}
undefined

name = "Susy";
"Susy"

if (name === "Billy"){
	alert("Hi Billy");
}
undefined
if (name === "Billy"){
	alert("hi Billy")
}else{
	alert("mmm i dont know you");
}
undefined
name = "Billy";
"Billy"
if (name === "Billy"){
	alert("hi Billy")
}else{
	alert("mmm i dont know you");
}
undefined
if (name === "Billy"){
	alert("hi Billy")
}else if (name ==="Susy"){
	alert("Hi Susy")}else{
	alert("mmm i dont know you");
}
undefined

name = "Susy";
"Susy"
if (name === "Billy"){
	alert("hi Billy")
}else if (name ==="Susy"){
	alert("Hi Susy")}else{
	alert("mmm i dont know you");
}
undefined

if (name === "Billy" || name === "Ann"){
	alert("Hi Billy or Ann!");
}
undefined

name = "Billy";
"Billy"
if (name === "Billy" || name === "Ann"){
	alert("Hi Billy or Ann!");
}
undefined

name = "Ann";
"Ann"
if (name === "Billy" || name === "Ann"){
	alert("Hi Billy or Ann!");
}
undefined
if (name === "Billy" && name === "Ann"){
	alert("Hi Billy or Ann!");
}
undefined

name = "Ann";
"Ann"
if (name === "Billy" && name === "Ann"){
	alert("Hi Billy or Ann!");
}
undefined

if (firstName === "Bob" && lastName === "Smith"){
	alert("Hi Bob Smith");
}
VM825:1 Uncaught ReferenceError: firstName is not defined
    at <anonymous>:1:1
(anonymous) @ VM825:1

var firstName = "Bob";
undefined
var lastname = "Smith";
undefined
if (firstName === "Bob" && lastName === "Smith"){
	alert("Hi Bob Smith");
}
VM894:1 Uncaught ReferenceError: lastName is not defined
    at <anonymous>:1:28
(anonymous) @ VM894:1

var lastName = "Smith";
undefined

if (firstName === "Bob" && lastName === "Smith"){
	alert("Hi Bob Smith");
}
undefined

if (!(name === "Bob")){
	alert("hi Bob")
}
undefined
name
"Ann"
!true
false
!false
true
