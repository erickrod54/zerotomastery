/**EL OBJETIVO DE ESTA CLASE ES CREAR UN EJERCICIO QUE 
 * NOS AYUDE A PROFUNDIZAR NUESTRO ENTENDIMIENTO SOBRE 
 * HOF (HIGH ORDER FUNCTIONS)
 * 
 */

 /**comenzamos con esta HOF, recordemos que HOF son funciones
  * que retornan otras funciones, o funciones que retornas data
  * a traves de otras funciones, o hacen ambas cosas anteriormente
  * mencionadas
  * 
  * 
  */

 /** 1.- esta es una funcion de multiplicacion generica para
  * usarla en muchos casos:
  */

 const multiplyBy = function(num1){//1.- creamos la funcion 
                                   //simple HOF
   return function(num1){
     return num1*num2;
   }
 }

 const multiplyByTwo = multiplyBy(2);//2.- y aqui creamos la 
 //manera de reusarla, almacenando la funcion generica dentro 
 //de la funcion que se utilizara 'multiplyBy', para hacer 
 //'multiplyByTwo' y 'multiplyByFive'
 const multiplyByFive = multiplyBy(5);

 multiplyByTwo(4)//resultando 8
 multiplyByTwo(10)//resultando 20
 multiplyByFive(6)// resultando 30

 /**2.- la podemos mejorar convirtiendola en arrow functions
  * que es mucho mejor por la legibilidad, y tiene mas 
  * logica
  */

/**es la misma HOF escrita de manera mas limpia por medio
 * del uso de arrow function
 */
  const multiplyBy = (num1) => (num2) => num1 *  num2;
  
  multiplyBy(4)(6)

  /**el resultado de llamar la funcion se hace lexicamente
   * como un high order function, notemos la flexibilidad de
   * hacerlo con los dos brackets '()', lo que nos brinda
   * flexibilidad al usarla con cualquier data (funcion 
   * generica) y reducimos cuantiosamente el numero de 
   * linesas empleadas con respecto al ejercicio # 1
   */

