/**
 * aqui se analiza la grafica adjunta de abajo hacia arriba
 * 
 * desde los lenguajes mas fuertes o estrictos(tanto dinamicos 
 * como estaticos ) en cuanto a evaluar tipos de datos 
 * 
 */

 /**por ejemplo tenemos un tratamiento debil de tipo
  * de datos, vamos a ver este jemplo con java:
  * 
  */

var a = "boyaaaa"

a + 17; /**en esta linea el motor de javascript evalua..
        "oh son dos tipos de sdatos distintos, mm creo 
        que se que estas intentando hacer.. quieres 
        sumar a + 17 que 17 es un numero.. lo convertire 
        en una cadena y lo sumare resultando:" */


'boyaaaaaa17'
 
/**esto tiene mucho que ver con type coercion, y da 
 * muchos dolores de cabeza en javaScript
 */

 /**por ejemplo en phyton que es un lenguaje dinamico
  * pero es fuerte en cuanto al manejo de tipo de datos
  * 
  */
 /**
  * 
  * 
  var = "boyaaaaaa"

  a + 17 

  te arrojara un error porque al phyton evaluar los tipos
  de datos distintos con los que estas intentando realizar
  la operacion "va a decir oye son datos de distinto tipo
  y arrojara un error impidiendo la operacion"
  */