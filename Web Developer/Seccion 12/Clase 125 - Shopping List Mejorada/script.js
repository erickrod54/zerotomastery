// 1er ejercicio - eventos de prueba
//var button = document.getElementsByTagName("button")[0];

//Los botones los coloca como un array
//previamente probado en el java console google chrome

//button.addEventListener("mouseleave", function(){

// toda la referencia de addEventListener
// https://developer.mozilla.org/en-US/docs/Web/Events
// se probo con 3 eventos
// Click - el evento se da cuando se da click el cursor
//sobre el elemento que tiene el oyente
// mouseenter - el evento se da cuando se mueve el cursor
//sobre el elemento que tiene el oyente
// mouseleave - el evento se da cuando se mueve el cursor
//sobre el elemento que tiene el oyente y se aleja del mismo

//  console.log("CLICK!!!");
//})

//2do Ejercicio implementaremos el to do list

//**Muy importante siempre cachar las el dom y su metodo
//**para evitar repetir codigo una y otra vez
var button = document.getElementById("enter");
var input  = document.getElementById("userinput");
//cachamos la seleccion del tag ul para poder
//agregarle el li
var ul = document.querySelector("ul");

function inputLength(){
  return input.value.length;
}

function createListElement(){
  var li = document.createElement("li");
  //se ingresa el valor que el usuario indica en el input
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  //limpia el input despues de agregar la entrada
  input.value = "";
}
//** funciones disparan otras addListAfterClick
//** y addListAfterKeypress disparan
//** 'inputLength' y 'createListElement'
function addListAfterClick(){
  //antes de colocar el codigo siempre es bueno porbar que funciona
  //appendChild desde el input
  //console.log(input.value);
  //antes de colocar el codigo siempre es bueno porbar que funciona
  //console.log("click is working");
  if (inputLength() > 0) {
    createListElement();
  }
}
//** funciones disparan otras addListAfterClick
//** y addListAfterKeypress disparan
//** 'inputLength' y 'createListElement'
function addListAfterKeypress(event){
  if (inputLength() > 0 && event.keyCode === 13) {
    // cuando sean eventos relacionados con
    //keypress
// https://www.cambiaresearch.com/articles/15/javascript-char
//   -codes-key-codes
    createListElement();
  }
}
/* MUY INTERESANTE

Estas funciones debajo se llaman Callback Function

Una función de callback es una
función que se pasa a otra función como
un argumento, que luego se invoca dentro
de la función externa para completar algún
tipo de rutina o acción.

*/
button.addEventListener("click", addListAfterClick);
//** a su vez addListAfterClick y addListAfterKeypress
//** son disparadas por el 'addEventListener'
//** del click y del keypress
input.addEventListener("keypress", addListAfterKeypress);
/*
Cuando se ejecuta esa línea de javascript, no queremos
que se ejecute la función addLisAfterClick porque solo
estamos agregando el detector de eventos ahora para
esperar el clic o la pulsación de la tecla. Sin embargo,
queremos hacerle saber que queremos que esta acción ocurra
cuando se produce un clic. Por lo tanto, la función ahora
se ejecuta automáticamente (se agrega el ()) cada vez que
ocurre el clic. Así que estamos pasando una referencia a la función
sin ejecutarla.

por tal razon no se les agrega el '()' porque el Callback
hace referencia a la función al darse el evento click
o keypress
*/
//** a su vez addListAfterClick y addListAfterKeypress
//** son disparadas por el 'addEventListener'
//** del click y del keypress

//** el evitar repetir codigo de esta manera se llama
//** codigo limpio === codigo sencillo y facil de leer

//recomendaciones marcadas con " ** "
