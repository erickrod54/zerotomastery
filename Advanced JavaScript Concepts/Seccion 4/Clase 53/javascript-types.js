/**
 * 
 * en esta clase utilizaremos un operador de JavaScript que 
 * determina el tipo de dato que tenemos a la derecha, ese
 * operador se llama 'typeof' con el haremos las sigientes
 * pruebas:
 * 
 */

  /**Operacion -----------------------Resultado */

  /**-------(Primitive Types) Datos Primitivos------------- */
  /**-----es data que solo representa un solo valor------- */
  /**---contiene directamente el valor de las variables---- */
  /**-----------------no hay ambiguedad--------------------*/
  /**--no es data que pueda ser descompuesta en partes---- */

      typeof 5                        'number'
     typeof true                     'boolean'
  typeof 'to be or not to be'         'string'
    typeof undefined                'undefined'/**este tipo de
                                                dato es un valor 
                                                especial en 
                                                JavaScript 
                                                y denota la 
                                                ausencia 
                                                de definicion */

      typeof null                     'object' /**la verdad esto
                                               es un error-bug,
                                              el resultado de esta 
                                               operacion deberia ser 
                                              'null' y ser un 
                                              valor especial de 
                                              javaScript al igual 
                                              que 'undefined' 
                                              inclusive el 
                                              creador del 
                                              lenguaje Brendan 
                                              Eich lo sabia,
      recuerda ningun lenguaje de programacion es perfecto, todos
      corremos programas y estos nunca pueden ser bug-free
      actualmente hay una propuesta para arreglarlo, la cuestion 
      es que hay mucho legacy code(codigo antiguo) que depende 
      de que null siga teniendo este valor, por ahora no lo 
      han podido cambiar porque dejarian de funcionar muchos
       programas, y creeme hay muchas mas cosas raras en 
       javaScript*/

/**-----------------------MUY IMPORTANTE--------------------- */


       /**la diferencia entre 'undefined' y 'null', undefined
        * es la ausencia de definicion .. javaScript dice
        * "alli hay una variable, pero aun no tiene valor
        * definido, en cambio 'null' es la ausencia de valor
        * significa que no hay ningun valor alli"
        */

    typeof Symbol('just me')          'symbol' /**symbol es nuevo 
                                                 en javaScript 
                                                 creado es6 es 
                                                 muy util para 
                                                 identificar 
                                                 objetos
                                              y sus propiedades*/
    
/**-------(Non Primitive Types) Datos no Primitivos---------- */
/**--no contienen los valores directamente, usan por ejemplo--- */
/**referencias (propiedades de un objeto o funciones con objetos
 * que apuntan al lugar de memoria donde se encuentra el 
 *                      valor real) */

        typeof {}                     'object' /**es un objeto  */

        typeof []                      'object' /**es un objeto  */


        typeof function()            'function' /** tecnicamente 
                                                este no es un 
                                                tipo de dato en 
                                                javaScript,
                                                funciones y arrays
                                                son objetos, 
                                                VER IMAGEN ADJUNTA
                                                */

/** la manera de demostrar que una funcion es un objeto es
 * tratandola como un objeto, por ejemplo a un objeto podemos
 * anadirles propiedades dinamicamente, tenemos la siguiente 
 * funcion
 */

 function a() {
     return 5;
 }

 a.hi = "hihihihihihi";

 console.log(a.hi)

 /**resultando hihihihihihi lo que nos valida una funcion como
  * un objeto
  */

  /**hay tambien objetos pre construidos (built in objects) */

  /**no tiene nada que ver con los objetos en el global context
   * sino mas bien tiene que ver con objetos estandar que vienen
   * con javaScript
   * 
   * referencia 
   * https://developer.mozilla.org
   * /en-US/docs/Web/JavaScript/Reference/Global_Objects
  */

/**alguna vez habras escuchado "todo en javaScript es un objeto"
 * casi todo es un objeto y hay metodos que estos objetos nos
 * built in nos ofrecen que nos da la posibilidad de manejar
 * casi todo como un objeto
 */


