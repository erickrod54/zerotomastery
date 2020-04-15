/**
 * 
 * HDP Calls -- relacionado a fetch - Buscar
 * 
 * Philip Roberts -buscar material donde habla del event loop
 *                            muy bueno-
 * 
 * el navegador nos ayuda a crear aplicaciones
 * web enriquecidas - WEB API -para ver la variedad 
 * de aplicaciones que posee el web API basta con 
 * teclear en la consola de javascript window (que
 * es el objeto ventana) y tiene la variedad de 
 * aplicaciones listas para implementar-
 * 
 * en el siguiente codigo:
 * 
 * console.log('1');
 * setTimeout(() => {console.log('2'), 1000}); //esta instruccion se 
 *                                            //pasa al callstack
 *                                            //el setTimeout
 *                                            //marca un tiempo de 
 *                                           //un segundo para 
 *                                          //devolverlo al 
 *                                          //callstack si y 
 *                                         //solo si el eventloop 
 *                                        //evaluda si hay la 
 *                                       //disponibilidad en 
 *                                      //el callstack, aun 
 *                                  //cuando este tiempo
 *                                // fuese cero esta linea 
 *                               //no se ejecutaria de manera 
 *                            //sincrona como lo haria 
 *                          //normalmente, se vendria 
 *                         //ejecutando despues justo como 
 *                        //esta previsto en este codigo
 * console.log('3');
 * 
 * codigo para la web de validar el modelo
 * 
 * function achieveNirvana(){
 *      console.log('You are enlightened');
 * }
 * 
 * function c(){
 *      setTimeout(achieveNirvana, 3000);
 * }
 * 
 * function b(){
 *      c();
 * }
 * 
 * function a(){
 *      b();
 * }
 * 
 * a()
 */

 /**
  * listo para probar... llama a a() asciende 
  * llamando a las demas funciones pasa a C 
  * para Web API, luego de esto vacia el 
  * callstack, mientras callback queue en 
  * event loop pregunta estas disponible 
  * para regresar a la pila a ejecutarse
  * 
  * 
function achieveNirvana(){
    console.log('You are enlightneded');
 }

 function c(){
     setTimeout(achieveNirvana, 3000);
 }

 function b(){
     c()
 }

 function a(){
     b();
 }

 a();
  */