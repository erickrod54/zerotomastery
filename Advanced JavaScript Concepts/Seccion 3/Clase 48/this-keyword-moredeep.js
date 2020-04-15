/**
 * tenemos 3 objetos escritos de manera un poco diferente, todos
 * estos objetos utilizan el objteto "this", analizaremos segun
 * como estan escritos dinamicamente mediante el uso de "this"
 * que objeto nos trae:
 * 
 */

 var b = {
     name: 'Jay', 
     say(){console.log(this)
    }
}

/**
 * { name: 'Jay', say: [Function] }
 * 
 * el objeto "this" en este 1er ejercicio devuelve aquello
 *  que lo llama en este caso la funcion say()
 */

var c = {
    name: 'Jay', 
    say(){
        return function(){
            console.log(this)}}
        }
 
c.say() /** con la primera llamada el objeto "this" nos devuelve
     //la funcion que lo esta llamando que es la interna desde 
     dentro de la funcion say() */

c.say()() /**al hacer la segunda llamada salta nuestro scope 
          //chain y en vez de dinamicamente mediante el uso 
          //de "this mostrarnos el objeto c .. nos muestra 
          //el objeto global que en este caso seria window 
          //probandolo desde el navegador" */

/**
 *  [Function]
 * 
 * el objeto "this" en este 2do ejercicio devuelve aquello
 *  que lo llama en este caso dentro de la funcion say() lo
 * esta llamando otra funcion (de manera lexica y sin arrow
 * function para poder resolver este comportamiento) aun siendo
 * esta funcion retornada dentro de say(), por la manera en 
 * que esta escrita, no devuelve el contexto que la llama que
 * seria say()
 * 
 */

var d = {
    name:'Jay', 
    say(){
        return ()=> console.log(this)}
    }

/** el objeto this en este ejercicio se llama desde dentro
 * de otra funcion interna de la funcion say() al igual que 
 * se hace en el segundo ejercicio pero en este caso la 
 * funcion dentro de la cual se encuentra el objeto "this"
 * esta escrita como un arrow function " () => " y esto 
 * hace que dinamicamente podamos usar todo el contexto
 * de manera independiente 
 * 
 */

 d.say() // primera llamada de la funcion del objeto "d"
 //me da el primer scope en el scope chain que lo llama
 //que seria la funcion interna

 /**
  * Resultando asi
  * 
  * [Function]
  * 
  */

  /**y que sucede cuando hacemos la segunda llamada de la 
   * funcion say(), nos devuelve lo que esta a la izquierda
   * del punto " . " que seria el objeto d manejando 
   * correctamente el scope de manera dinamicamente.
   * 
   */
d.say()()/**esta implementacion del segundo llamado cuando 
           //utilizamos sandboxes como repl nos puede 
           //arrojar un aviso de error puesto que este 
           //tipo de llamadas no son consideradas algo 
           //estandar de JavaScript */

/**resultando :)
 * 
 * { name: 'Jay', say: [Function] }
 */

 /**-----------------FUNCION DE PRUEBA COMPLETA------------ */

 var b = {
     name: 'Jay', 
     say(){console.log(this)
    }
}

var c = {
    name: 'Jay', 
    say(){
        return function(){
            console.log(this)
        }
    }}

var d = {
    name: 'Jay', 
    say(){
        return () => console.log(this)
    }}

/**para entender el mejor uso de la implementacion del objeto
 *  "this" debes probar todas las llamadas para a, b y c 
 * respectivamente la llamada del primer scope "()" y la llamada
 * del segundo scope "()()" 
 * 
*/