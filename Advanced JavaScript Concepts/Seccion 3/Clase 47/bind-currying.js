/**
 * recordemos lo que vimos en la clase 45:
 * 
 * el bind es como una curita.. el nos guarda cierto tipo
 * de contexto o function o scope jeje eso arruina un poco
 * toda la discucion sobre el scope chain pero puede ser
 * util para casos donde necesitemos almacenar un contexto
 * para un uso porterior
 * 
 * currying es una tecnica que la podemos usar con bind
 * permitiendonos hacer lo suiguiente:
 * 
 * supongamos que tenemos una funcion:
 * 
 */

 //function currying
 function multiply(a,b){
     return a*b; //esta funcion retorna a por b - a times b
 }

 //ahora la llamamos pero porque seria mas utlil hacer una
 //llamada multiply por ejemplo "multiply(2)" con un solo
 //parametro..

 multiply(2, 4)

 /** porque podriamos convertir lo que tenemos arriba que
  * seria una funcion simplemente para multiplicar dos numeros
  * en otra funcion con otro proposito por ejemplo:
  */

let multiplyByTwo = multiply.bind(this, 2)//aqui this apunta al 
                                      //window object, pero la 
                                     //verdadera razon por 
                                     //la que lo hacemos es 
                                    //para que nos conserve 
                                  //un parametro que en este 
                            //caso seria "2" y nos devuelva 
                            //una funcion que es la que 
                            //utilizariamos mas adelante

/**y la funcion que queremos conservar al anadirle el parametro
 * "2" es multiplicar cualquiera que sea el parametro que le 
 * coloquemos en multiplyByTwo(2) o multiplyByTwo(4), o
 * multiplyByTwo(6), cualquiera que sea por el parametro que 
 * estamos pasando en execution context 
 */

 /**asi como cree esta funcion puedo crear a partir de esta
  * otra funcion como la siguiente:
  */
 let multiplyByTen = multiply.bind(this, 10)

 /**y todo esto se logra rehusando codigo ya existente */

 /**-----------FUNCION DE PREUBA --------------------- */

 function multiply(a,b){
     return a*b;
 }

//primera funcion creada
let multiplyByTwo = multiply.bind(this, 2)


//segunda funcion bien creada
let multiplyByTen = multiply.bind(this, 10)

//da como resultado 8
console.log(multiplyByTwo(4))

//da como resultado 40
console.log(multiplyByTen(4))

/**esta tecnica es extremadamente poderosa porque nos permite
 * resuar una pieza de codigo existente dandole parametros 
 * parciales caso de lineas 64 y 68, y crear estas funciones
 *multiplyByTwo() y multiplyByTen() que son mas especificas 
 que solo multiplicar dos parametros.
 */

 