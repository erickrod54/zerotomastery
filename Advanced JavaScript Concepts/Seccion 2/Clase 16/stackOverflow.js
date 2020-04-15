/**
 * 
 * LOS CONCEPTOS DE STACK OVERFLOW, MEMORY LEAK AND 
 * GARBAGE COLLECTOR  ESTAN RELACIONADOS TIENEN QUE
 * VER CON EL MANEJO DE LA MEMORIA
 * 
 * STACK OVERFLOW
 * 
 * esto generalmente sucede cuando se excede el tamano de la pila
 * y este limitado puesto que depende de la memoria
 * 
 * Un StackOverflow es una condición indeseable en la que un 
 * programa de computadora en particular intenta usar 
 * más espacio de memoria del que tiene disponible el call stack. 
 * En la programación, el callstack es un búfer(espacio de 
 * memoria temporal) que almacena las solicitudes que deben 
 * manejarse.
 * 
 * el codigo que utilizaremos en particular para explicar
 * este concepto es el de una funcion dentro de si misma, 
 * esta tecnica se llama recursion (Data Structures)
 * y es util algunas veces... hay que utilizarla sabiamente
 * para no caer en una condicion de stackoverflow:
 * 
 * function inception(){
 *      inception()
 * }
 * 
 * inception()// al hacer la llamada
 * 
 * // nos resulta este error
 * //el error de call stack maximo excedido
 * Uncaught RangeError: Maximum call stack size exceeded
    at inception (<anonymous>:1:19)
    at inception (<anonymous>:2:5)
    at inception (<anonymous>:2:5)
 */
/**anteriormente el navegador hubiese colapsado
 * en la actualidad previnieron mostrando un mensaje
 * de error
 * 
 * 
 */
