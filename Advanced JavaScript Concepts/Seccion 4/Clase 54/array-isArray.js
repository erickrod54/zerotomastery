/**
 * 
 */

 /**como sabemos que esto primero: */

 var array = ['1','2','3']

 /**no es igual a esto segundo: */

 var array = {
     0:1,
     1:2,
     2:3
 } 

 /**como sabemos precisamente que algo que creamos es un array */
/**en las nuevas versiones de java ES6 tenemos un objeto built-in
 * llammado "Array.isArray" cuya parte antes del punto "Array" es
 * un objeto cuyo proposito es construir arrays, vamos a probarlo
 * de la siguiente manera:
 * 
 */

 Array.isArray(['1','2','3'])

 /**
  * dando como resultado
  */
 
  true

  /**ahora validaremos con lo que consideramos un objeto */

  Array.isArray({})

  /**dando como resultado */

  false

  /**asi es como validamos arrays en javaScript */

  /**DE OTRA FORMA SERIA MUY DIFICIL DETERMINAR EN JAVASCRIPT
   * SI UN ARRAY ES UN ARRAY, PORQUE EN JAVASCRIPT LOS ARRAYS 
   * SON OBJETOS
   */