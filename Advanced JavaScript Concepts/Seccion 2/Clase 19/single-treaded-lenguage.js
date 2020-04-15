/**
 * 
 * Javascript es un lenguaje de single threaded
 * (de un solo hilo). Esto significa que tiene 
 *  un callstack y un memory heap. Como se esperaba, 
 *  ejecutal código en orden y debe terminar de ejecutar 
 * una pieza de codigo antes de pasar al siguiente. 
 * Es sincrono, pero a veces eso puede ser dañino.
 *  Por ejemplo, si una función tarda un tiempo en 
 * ejecutarse o tiene que esperar algo, se congela 
 * todo la aplicacion y la interaccion mientras tanto.
 * 
 * Un buen ejemplo de esto es la función de alerta de ventana. 
 * alerta ("Hola mundo")
 * 
 * No puede interactuar con la página web hasta que pulse 
 * Aceptar y descarte la alerta. Estas atorado.
 * 
 * referencia:
 * 
 * https://dev.to/steelvoltage/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd
 * 
 * 
 */

 //fill array with 60000 elements

 //Problema:

const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        removeItemsFromList();
    }
};
 
removeItemsFromList();

//Solucion:

/** la solucion fue colocarle un setTimeout enviando
 * de manera asincrona el codigo al WEB API dado 
 * que el callStack hara Overflow, de repente es la
 * manera que con el event loop pueda enviar por
 * lotes preguntando al call stack a medida que 
 * este libre, manejando el paso de datos hasta 
 * finalizar el trabajo
*/

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item) {
      setTimeout(removeItemsFromList, 0);
    }
};

removeItemsFromList();

list