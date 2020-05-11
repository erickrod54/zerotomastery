/**EL OBJETIVO DE ESTA CLASE ES MOSTRAR ALGUNOS USOS
 * DE LOS CUALES HAY QUE TENER CUIDADO AL USAR FUNCIONES
 * 
*/

/**1.- cuando se inicializan funciones dentro de loops - ciclos*/

for(let i= 0; i<5; i++){
  function a(){

  }
  a()
}

/**en este caso debemeos tener cuidado porque en vez de 
 * inicializar la funcion 'a' en cada iteracion del ciclo
 * estariamos, estariamos llevandolo a nuestro global
 * variable enviroment (entorno global de variables)
 * lo cual nos traeria muchos problemas relacionados
 * al declarar una funcion con ese nombre en otro
 * lugar de nuestro codigo, entonces, hay que tener
 * cuidado con esto, porque pasa desapercibido
 * 
 * */

 /**2.- el pase de parametros a una funcion*/

 /**cuando el parametro no se encuentra en variable enviroment
  * de nuestra funcion. y empezamos a crear condiciones que nos
  * permitan hallar ese parametro
  */

  function a(){
    return param;
  }

  a()

  /**el resultado de esta funcion sera un reference error
   * porque no encontrara el parametro 'param' en nuestro
   * local y global enviroment por el scope chain
   */

   /**la modificamos: */
   
  function a(param){
    return param;
  }

  a()

  /**me arrojara 'undefined' lo que nos dice que a esta funcion
   * no retornara un valor definido
   */

   /**una buena practica para corregir esta situacion es 
    * darle un valor 
    */

   function a(param=6){
    return param;
  }

  a()

  /**nos retornara el valor de '6' lo que nos puede dar a 
   * interpretar muchas situaciones, como por ejemplo que 
   * la funcion esta trabajando correctamente, o inclusive
   * para restaurar un flujo de control que hayamos perdido
   */