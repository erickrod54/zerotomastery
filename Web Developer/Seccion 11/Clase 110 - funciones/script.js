/*Primer ejercicio*/
/*Primera manera de crear una funcion*/
/*
function sayHello(){
  console.log("Hello");
}

sayHello();*/

/*Segunda manera de crear una funcion -Function Expression-*/
/*Si puedes notar la diferencia con la primera function
esta funcion no tiene nombre, viene asignada con una variable
llamada 'sayBye' y justo despues de function no tiene nombre,
a este tipo de funcion le llamamos 'Anonymous Function'*/

/* si quieres llamarla seria de esta manera
colocandole un nombre:

var sayBye = function byebye(){
  console.log("Bye");
}

sayBye();
*/
/*
var sayBye = function(){
  console.log("Bye");
}

sayBye();*/

/*La tercera forma de usar una funcion es pasarle una variable
como parametro, de esta manera se puede personalizar y cambiar
valores para el caso que se necesite*/

/*function sing(song){
    console.log(song);
}

sing("laaa deee laaa");
sing("hellooooooooooo");
sing("backstreets back alright");
*/

/*La cuarta forma de hacerlo es para verficar su funcionamiento
para eso hacemos uso del console.log*/
/*function multiply(a, b){
    /*console.log(a,b);*/
    /*el proceso de lo que queremos hacer se realiza pero
    el resultado es 'undefined' porque no estamos retornando
    nada con 'return'*/
    /*a * b;*/
    /*return a * b;*/
    /*el return es la manera de dar final a la function
    si por ejemplo tuviese un return antes del que tengo
    , daria salida inmediatamente a la funcion sin ejecutar
    la multiplicacion*/
/*}

multiply(5, 10);*/

/*la quinta forma de hacerlo es haciendo uso de la funcion
para colocar un flujo de control*/
/*Control Flow dentro de una funcion - Importante*/
/*function multiply(a,b){
  if (a > 10 || b > 10) {
    return "thats too hard";
  }else {
    return a * b;
  }
}

multiply(5,10);
*/

/*la sexta forma de hacerlo es haciendo uso de la funcion
es para enviar alertas*/
function multiply(a, b){
  return a*b;
}
/*alert(multiply(3,4));*/
/*y en vez de colocar los valores directamente en la funcion
podemos pasar una variable como parametro*/
var total = multiply(4,5);
alert(total);
/*
Los argumentos son valores
Los parametros son variables
*/
