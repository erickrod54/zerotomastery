//CLASES DE 1 A LA 11

//JavaScript Engine

//Podemos crear nuestro propio motor de javascript

function jsengine(code){
    return code.split(/\s+/)
}

jsengine('var a = 5')

//resultando

/*

(4) ["var", "a", "=", "5"]

0: "var"
1: "a"
2: "="
3: "5"
length: 4__proto__: Array(0)

*/ 

/** y asi creamos nuestro propio motor pero hay un problema... */
/** y es que  es mucho mas complicado que esto ya que 
 * hay motores estandar -estandares- y lo mejor es seguir 
 * los estandares*/

/**COMO FUNCIONA EL MOTOR Y SUS COMPONENTES */

/**
 * 
 * 1.- Parser 
 *  (Tokens -se ensambla el codigo mediante keywords de java 
 *   se divide el codigo para saber que contiene -)
 * 
 * 2.- AST
 * (Abstract Syntax Tree - despues de ser pasado por tokens 
 * queda ensamblado que se llama sintaxis de arbol abstracto -)
 * 
 * Referencia: https://astexplorer.net/ 
 * (en la seccion - tree | JSON se puede 
 * ver el arbol ilustrado del codigo)
 * 
 * 3.- Interpreter (traduce linea por linea nuestro 
 *                  codigo para que la maquina lo entienda 
 *                  y se supone que siempre nos devuelve algo) 
 *                  
 *                  ----> Profiler (Este proceso lo hace V8) > Compiler (Toma todo nuestro codigo, 
 *                                            escribe un programa nuevo 
 *                                            en lenguaje de maquina 
 *                                            -este programa se supone 
 *                                            debe hacer lo mismo que 
 *                                            el nuestro-) ---> Optimized code ---> CPU
 * 4.- Bytecode ----------------------------------------------------->CPU
 */

 /**Por Andrei -Existen dos maneras de interpretar Java
  * con un interprete o con un compilador -este proceso
  * es necesario para que nuestro programa sea entendido 
  * por la maquina (en tres capas -
  *                     code > bytecode > machine code)-- */

  /** y porque escoger el interprete sobre el compilador
   * o el compilador sobre el interprete --- hay varias 
   * razones para eso, las veremos a continuacion:
   * 
   * ¿Has oído hablar de Babel o TypeScript? 
   * Se usan mucho en el ecosistema Javascript 
   * y ahora debería tener una buena idea 
   * de lo que son:
   * Babel es un compilador de Javascript que toma 
   * su código JS moderno y devuelve JS compatible 
   * con el navegador (código JS anterior).
   * 
   * TypeScript es un superconjunto de Javascript 
   * que se compila en Javascript.
   * Ambos hacen exactamente lo que hacen los compiladores: 
   * ¡tomar un idioma y convertirlo en uno diferente!  
   * 
   * 
   * nota: el compilador, demora en arrancar desde el interprete
   * por un proceso llamado "ignicion" pero al enviarse desde el
   * interprete al compilador este hace modificaciones a tu 
   * codigo dichas modificaciones se llaman optimizaciones, 
   * como en el siguiente ejemplo :
   * 
   *    function someCalculation(x, y){
   *         return x + y;
   *    }
   * 
   * for (let i = 0; i < 1000; i++){
   *    someCalculation(5,4); -en vez de realizar todas las
   *                  iteraciones con el proceso de suma 
   *                  de 0 a 1000 veces -(el compilador optimiza 
   *                  el codigo sin hacer la operacion da el 
   *                  resultado de una vez "9)"- -
   * }
   * 
   * - (C)COMPILADOR        VS      (I)INTERPRETE
   * PROS                    Y       CONTRAS    
   * Optimiza el codigo(C)      se tarda en arrancar(C)
   * Es mucho mas rapido(I)     No optimiza el codigo(I)    
   * 
   * 
   * ------------------------------------------------------
   * 
   * El objetivo de esto es escribir codigo ya optimizado
   * para ayudar al interprete y al compilador mejorando
   * notablemente la experiencia en terminos de velocidad
   * 
   * ------------------------------------------------------
   * 
   * Hay una alternativa que surgio debido a que los navegadores
   * buscaban cada vez un estandar mejor, y este es JIT compiler 
   * o "Just in time Compiler"
   *
   * Como funciona esto: (Basado en el motor V8 de Javascript -el mejor a la fecha-)
   * 
   *            1.- Parser 
   *             (Tokens -se ensambla el codigo mediante keywords de java 
   *              se divide el codigo para saber que contiene -)
   *            
   *            2.- AST
   *            (Abstract Syntax Tree - despues de ser pasado por tokens 
   *            queda ensamblado que se llama sintaxis de arbol abstracto -)
   *            
   *            Referencia: https://astexplorer.net/ 
   *            (en la seccion - tree | JSON se puede 
   *            ver el arbol ilustrado del codigo)
   *            
   *            3.- Interpreter (traduce linea por linea nuestro 
   *                             codigo para que la maquina lo entienda 
   *                             y se supone que siempre nos devuelve algo) 
   *                             
   *                             ----> Profiler (Es un monitor que revisa continuamente nuestro codigo
   *                                             , dejando notas al compilador en lugares donde se puedan 
   *                                              hacer mejoras ) 
   *                                             
   *                                                > Compiler (Toma todo nuestro codigo, 
   *                                                       escribe un programa nuevo
   *                                                       tomando en cuenta las notas
   *                                                       del profiler(monitor) 
   *                                                       y reemplaza partes de nuestro
   *                                                       codigo en lenguaje de maquina 
   *                                                       -este programa se supone 
   *                                                       debe hacer lo mismo que 
   *                                                       el nuestro-) ---> Optimized code ---> CPU
   *            4.- Bytecode ----------------------------------------------------->CPU
   * 
   * Nota: todo esto es con la finalidad de hacer el codigo mas rapido, pero el JIT compiler
   * no es perfecto en algunos casos el jit se confunde puede implementar mejoras que hacen mas lento 
   * nuestro codigo este proceso es llamado Deoptimizacion 
   * 
   * ------------------------------------------------------------------------------------------------
   * -------                                        ----                                            ---
   *            POR ESO EL OBJETIVO ES ESCRIBIR CODIGO YA OPTIMIZADO QUE AYUDE AL COMPILADOR 
   *                                  A ENTENDER MEJOR NUESTRO CODIGO 
   * -------                                                                                       ----
   * ------------------------------------------------------------------------------------------------
   *             */

