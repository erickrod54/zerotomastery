/**
 * Hoisting (para muchos desarrolladores) es un comportamiento 
 * desconocido o pasado por alto de JavaScript. Si un
 * desarrolador no entiende hoisting, sus programas pueden 
 * contener errores. para evitar los bugs(errores), siempre 
 * declara las variables al principio del scope(region). 
 * Dado que esta es la manera en que JavasScript interpreta 
 * el codigo, siempre es una buena practica hacerlo como
 * se debe
 * 
 * Algunas caracteristicas de este comportamiento:
 * 
 * 1.- En JavaScript, una variable puede ser declarada
 *     despues de haber sido usada.
 * 
 * 2.-
 * 
 * Para entender esto, tienes que entender el termino "hoisting"
 *  y este es un comportamiento por defecto el cual mueve todas
 * las declaraciones al tope del actual scope(region) 
 * 
 * extraido de la lecccion de andrei nagoie:
 * 
 * MUY IMPORTANTE LEER ESTO ABAJO:
 * 
 * //tenemos estas 2 funciones ( "littleBrother()" ) declaradas
 * // dentro del scope de la del parent scope bigbrother, como
 * //se observa las dos llevan el mismo nombre .. cual crees 
 * //que sera el resultado??... segun el comportamiento de 
 * //hoisting llevara al tope la declaracion de las variables
 * //dado que estas tienen un orden en el que se escribieron
 * //llevara la funcion con el valor 'no me' siendo este 
 * //el unico valor para "littleBrother" (el comportamiento
 * // de hoisting sobreescribe el valor de la primera funcion) 
 * 
     function bigBrother(){
          function littleBrother() {
            return 'it is me!';
          }
          return littleBrother();
          function littleBrother() {
            return 'no me!';
          }
     }
        bigBrother();
 */ 
/**
 * Pero ese comportamiento de mover al tope variables, funciones
 * , data no es algo que JavaScript haga fisicamente(como ps
 * mkover la linea) el compilador barre en el codigo diciendo
 * "reserva memoria "  o "asigna memoria a este espacio"
 * 
 * 
 * Este comportamiento del hoisting se da en Execution Context
 * (contexto de ejecucion), se dice que en el proceso de 
 * creacion estamos parcialmente hoisted (izar, levatar, alzar)
 * porque en el caso de las variables puede localizar (allocate)
 * memoria para sus identificadores aun cuando no tengan un valor
 * asignado... a diferencia de las funciones que son totalmente
 * hoisted
 * 
 *        console.log('1.-------------')
 *        var teddy = undifined;
 *          function sing() {
 *             console.log('ohhh la la la') //en este ejemplo
 *          }                            //muestra el resultado
 *        console.log(teddy)            //de sing porque esta  
 *        console.log(sing())          //dentro del scope de 
 *        var teddy = 'bear';          //una funcion la cual 
 *                                    //es totalmento cargada   
 *                                    //hoisted a la memoria
 */