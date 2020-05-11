/** EL OBJETIVO DE ESTA LECCION ES HACER ENTENDER COMO
 * LAS FUNCIONES 'ARE THE FIRST CLASS CITIZENS IN JS'
 * Y QUE NO SOLO SIRVEN PARA LLEVAR A CABO ALGUNA ACCION
 * SINO QUE EXTIENDE SU FUNCIONALIDAD MUCHO MAS DE ESO
 * (PUEDEN SERVIR PARA PASAR DATA), Y DE ESTO SE DERIVA 
 * UNA COMPLETA RAMA DE JAVASCRIPT QUE SE LLAMA 'FUNCTIONAL 
 * PROGRAMMING' 
 * 
*/
/**el siguiente ejemplo es para mostrar como pasamos data 
 * a traves de una funcion: */

 /**la primera es que funciones pueden ser asignadsas 
  * a variables y propiedades de objetos
  */

  var stuff = function(){}

  /**la segunda es pasar funciones como argumentos de funciones
   * 
   */

   function a(fn){//1.-creamos la funcion a la que le vamos a 
                    //pasar el argumento, que es otra 
                    //funcion 'fn'
     fn()
   }

   a(function() {console.log('hi there')})//2.- llamamos la 
                             //funcion 'a', dentro de 
                             //los brackets le pasamos 
                             //la funcion fn

/**la tercera forma es que podemos retornar funciones 
 * como si fuesen valores
 * 
*/
function b(){//1.- creamos la funcion 'b', para retornar la
             //la funcion c
  return function c(){console.log('bye')}
}

b()()//2.- llamamos la funcion b, que en la primera llamada
//nos retorna la funcion c(), y en la segunda llamada nos
//retorna la data contenida en c()