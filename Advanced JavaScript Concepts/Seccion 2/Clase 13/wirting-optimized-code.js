/** La respuesta a porque se explico como funciona el modelo del
 * motor de javaScript en detalle es porque necesitabamos saber 
 * una parte critica de JavaScript, el rol importante que juega
 * el compilador y como el escribir codigo ya optimizado nos da 
 * una ventaja importante en todos los aspectos
 * 
 * ALGUNAS DE LAS CARACTERISTICAS PROPIAS DE JAVASCRIPT
 * QUE COMPLICAN (TENER CUIDADO AL USARLAS Y EVITARLAS 
 * EN MUCHOS CASOS) NUESTRO OBJETIVO DE "ESCRIBIR CODIGO 
 * OPTIMIZADO" SON LAS SIGUIENTES
 * 
 * 1.- eval() -Esta funcion se encarga de evaluar patrones 
 *             de nuestro codigo, pero lo hace inoptimizable
 *              (bueno para validar nuestro codigo en pruebas
 *               - pero killer de optimizacion en produccion)-
 * 
 * 2.- arguments -los armgumentos tienen dos malos usos
 *                como son los siguientes
 *                
 *                1er caso
 * 
 *                Reasignar un parámetro definido al mismo 
 *                tiempo que se mencionan argumentos en el 
 *                cuerpo (solo en modo descuidado "in 
 *                sloppy mode only").-
 * 
 *              Ejemplo 1:
 *              
 *              function defaultArgsReassign(a, b) {
 *                  //en esta linea se reasignan
                     if (arguments.length < 2) b = 5;
                                        }

                 Ejemplo 2:
 *              
 *              function reAssignParam(a, b_) {
                var b = b_;

                //unlike b_, b can safely be reassigned
                if (arguments.length < 2) b = 5;
                }
 * 
 * 3.- for in -los argumentos si no se usan bn tambien 
 *             pueden causar problemas cuando iteramos 
 *              objetos con los ciclos for-
 * 
 * 4.- delete -Tambien puede ser problematica porque al
 *             trabajar con Hidden classes puede borrar
 *             tambien los argumentos de la clase-
 * 
 * Las dos tecnicas que vamos a utilizar para optimizar 
 * nuestro codigo son las siguientes:
 * 
 *  1.- Hidden Classes
 *  2.- Inline Caching
 * 
 * Primero vamos a hablar:
 * 
 *      2.-Inline Caching
 *      
 *      function finUser(user){
 *         return `found ${user.firstName} ${user.lastName}`       
 * 
 *       }
 *      
 *      const userData {
 *          firstName: 'Johnson'
 *          lastName: 'Junior'
 *      }
 *  
 * 

el Compiler and profiler optimizan el codigo sobre inline cache 
La principal motivación detrás de las formas es el concepto de 
cachés en línea o circuitos integrados.  ¡Los circuitos integrados s
on el ingrediente clave para hacer que JavaScript se ejecute rápido!  
Los motores de JavaScript usan circuitos integrados para memorizar 
información sobre dónde encontrar propiedades en los objetos, 
para reducir la cantidad de búsquedas costosas.


------------

The main motivation behind shapes is the concept of Inline Caches or ICs. ICs are the key ingredient to making JavaScript run fast! JavaScript engines use ICs to memorize information on where to find properties on objects, to reduce the number of expensive lookups.

----------------

HIDDEN CLASES 

"Recuerdas las lecciones se freecodecamp donde se agregaban y quitaban propiedades de los objetos ? " (Colocar link de freecodecamp)

En este ejemplo se agrega la propiedad de año de manera dinamica

var car = function(make,model) { 	this.make = make; 	this.model = model; } var myCar = new car(honda,accord); myCar.year = 2005;

Referencia
 (https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html)

La mayoría de los intérpretes de Javascript usan objetos similares a diccionarios (basados ​​en funciones hash) para almacenar la ubicación de los valores de las propiedades de los objetos en la memoria.  Esta estructura hace que recuperar el valor de una propiedad en Javascript sea más costoso computacionalmente de lo que sería en un lenguaje de programación no dinámico como Java.  En Java, todas las propiedades de un objeto están determinadas por un diseño de objeto fijo antes de la compilación y no se pueden agregar / eliminar dinámicamente en tiempo de ejecución.  Como resultado, los valores de las propiedades (o punteros a esas propiedades) se pueden almacenar como un búfer contiguo en la memoria con un desplazamiento fijo entre cada uno.

En base al punto de vista de Andrei:

El orden en que asignamos Las propiedades que creamos dinamicamente marca la diferencia en terminos de optimizacion, 

Tenemos obj1 y obj2

//HIDDEN CLASSES

function Animal(x, y){
    this.x = x;
   this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

Creamos

Obj1 .a = 30;
Obj1.b = 100;
Obj2.b = 30 ;
obj2.a = 100;

// Aqui sucede un conflicto de desopmizaxion por que el compilador tiene que volver a verificar que b existe en los dos objetos


El mismo caso con la palabra delete 

Borra Las propiedades y los valores creados dinaminacmente 

EL OBJETIVO ES CREAR CODIGO PREDICTIBLE PARA EL COMPILADOR

 */