/**
 * 
 * vamos a analizar unos comportamiento extrano e impredecible
 * de javaScript y como evitarlos
 * 
 * 
 * 1.- "leakage of global variables"
 * 
 * function weird(){
 *      height = 50;// no hay variable declarada 
 *                 //aun asi la ejecuta -pero 
 *                 //donde esta esta variable realmente?
 *                 //cuando no le precede la declaracion 
 *                //con "var","let" o "const" la variable 
 * no es creada en el variable enviroment de "weird" este 
 * comportamiento se llama "leakage of global variables" 
 * lo que hace javaScript es que busca height y dice 
 * "nada ha sido declarado porque no veo las palabras var, let 
 * o const" entonces ira hacia arriba a traves del scope chain 
 * al global enviroment y le preguntara "hey tienes esta 
 * variable height? el le dira que no" sin embargo despues 
 * de esto no arrojara error alguno en cambio lo que hara 
 * sera es crear la variable.. esto trae muchisimos problemas, 
 * lo que podemos hacer para evitar este comportamiento 
 * impredecible es usar 'use strict' que al usarlo al 
 * tope del documento evita que suceda este tipo de 
 * comportamientos que no deberian pasar y nos arrojara 
 * el error para poder detectar el error y optimizar 
 * nuestro codigo-
 * 
 *      return height
 * }
 * 
 * weird()
 * 
 * solucion-----------------
 * 
 * 'use strict'
 * function weird(){
 *      height = 50;
 *      return height;
 * }
 * 
 * weird()
 */

 function weird(){
     height = 50;
     return height;
 }

 weird()

 /**resultado de esta funcion */

 Hint: hit control+c anytime to enter REPL.

 50

 /**cuando no deberia hacerlo, pero esto es un leakage of 
  * global variables */


  /**y al usar 'use strict' nos arroja el error indicandonos
   * lo que debemos corregir
   */

  'use strict'
  function weird(){
    height = 50;
    return height;
}

weird()
/**
 * 
 * Hint: hit control+c anytime to enter REPL.
ReferenceError: height is not defined
    at weird (/home/runner/FastLinearBackup/index.js:3:13)
    at /home/runner/FastLinearBackup/index.js:7:2
    at Script.runInContext (vm.js:133:20)
    at Object.<anonymous> (/run_dir/interp.js:156:20)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/m
 */
/**
 * 2.- el segundo comportamiento extrano es el contexto adjunto
 * or enclosed context
 * 
 * este se define cuando la invocacion de una funcion se puede
 * hacer solo dentro de su propio contexto
 * 
 * var heyhey = function doodle(){
 * //do something
 * return 'heyhey';
 * 
 * }
 * 
 * heyhey()
 * 
 * dando como resultado 'heyhey' tal como se espera
 * pero que tal si en vez de llamar heyhey llamamos
 * a doodle?..
 * 
 * 
 * 
 */

var heyhey = function doodle(){
    //do something
    return 'heyhey';
}

//heyhey()
doodle()

/**me arroja como resultado un reference error diciendome
 * que no encuentra la funcion
 */

 /**
  * ReferenceError: doodle is not defined
    at /home/runner/FastLinearBackup/index.js:7:1
    at Script.runInContext (vm.js:133:20)
    at Object.<anonymous> (/run_dir/interp.js:156:20)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831
  */
 /**
  * probamos llamandola desde si misma y miren lo que pasa
  * 
  */

 var heyhey = function doodle(){
    //do something
    doodle()
    return 'heyhey';
}

//heyhey()

/**no me arroja resultado pero tampoco error.. alli podermos
 * ver que en este caso doodle se adjunta a si mismo
 */


