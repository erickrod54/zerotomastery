/**
 * 
 * tenemos dos tipos de scope
 * 
 * 1.- SCOPE ESTATICO
 * 
 * el scope statico mediante una caracteristica llamada 
 * scope chain permite que los contextos lexicos de las
 * funciones o o regiones de scope locales hagan link
 * o se conecten con los global lexical scopes para buscar
 * data o variables o fuciones que les son solicitadas
 * o no se encuentran dentro de ellas
 * 
        var x = 'x'

        function findName(){
            console.log('link scope chain estatico desde findName:', x);
            var b = 'b';
            return printName();
        }

        function printName(){
            console.log('link scope chain estatico desde printName', x);
            var c = 'c'
            return 'Andrei Neagoie'
        }

        function sayMyName(){
            console.log('link chain scope estatico desde sayName', x);
            var a = 'a';
            return findName()
        }

        sayMyName()

/**
 * 
 * Arrojando el resultado de:
 * 
 *      link chain scope estatico desde sayName: x
        link scope chain estatico desde findName: x
        link scope chain estatico desde printName: x
        Andrei Neagoie

*lo que prueba el acceso de scope chain estatico desde sus 
*los contextos de ejecucion locales hacia el global 
*
 */

 /**
  * 
  * 2.- SCOPE DINAMICO
  * 
  * en javascript lexical scope (data disponible + variables
  * donde la funcion es definida-escrita-) determina solo 
  * nuestras variables disponibles. No donde nuestra funcion
  * es llamada (Scope Dinamico)
  * 
  * 
  * 
  * --------------------------------------------------------
  * 
  * Y esto es lo que hace javascript el reconoce primero todas
  * estas cadenas de scope antes inclusive de ejecutar el codigo
  * dado que nosotros tenemos el lexical scope sabemos que data 
  * hace link a que data y cuales funciones tienen acceso a 
  * variables y data
  * 
  */
 
 

var x = 'x'

function findName(){
    console.log('link scope chain estatico desde findName:', x);
    var b = 'b';
    return printName();
}

function printName(){
    console.log('link scope chain estatico desde printName:', x);
    var c = 'c'
    return 'Andrei Neagoie'
}

function sayMyName(){
    console.log('link chain scope estatico desde sayName:', x);
    var a = 'a';
    return findName()
}

sayMyName()

/**digamos que tenemos esta funcion que hace lo mismo 
 * que la anterior, pero esta escrita lexicamente distinta
 * 
 */

 function sayMyName(){
     var a = 'a';
     return function findName(){
         var b = 'b';
         return function printName(){
             var c = 'c';
             return 'Andrei Neagoie' 
         }
     }
 }

 sayMyName()

 // [Function: findName]
 //la salida sera la funcion finName()

 /**
  * sayMyName()() //si la invocamos con los dos brackets
  * //me dara acceso a printName
  */

 /**
  * 
  * 
 function sayMyName(){//
     var a = 'a';
     return function findName(){
         var b = 'b';
         return function printName(){
             var c = 'c';
             return 'Andrei Neagoie' 
         }
     }
 }

 sayMyName()//1.- me va a llamar la parte del codigo donde esta
            //findName pero sin tener accesso a printName
            //que es la funcion dentro de finName()

si aumento el numero de brackets va a darme acceso a los
scope de las funciones internas

sayMyName() --> findName() -- resultando --> [Function: findName]

sayMyName()() --> findName() ---> printName() --resultando--> [Function: printName]

sayMyName()() --> findName() ---> printName() --resultando--> 'Andrei Neagoie'
  */

/**
 * deacuerdo a los accesos otorgados por el scope chain, 
 * tendriamos acceso desde las funciones internas(scope internos) 
 * a los parent scope.. podemos testear los accesos con el 
 * console.log hacia sus variables
 * 
 */
/**esta aplicacion nos dara el resultado 
 * correcto con el flujo del scope chain: */

function sayMyName(){
    var a = 'a';
    console.log('desde el scope chain de sayName() solo accedo al valor -->:', a)
    return function findName(){
        var b = 'b';
        console.log('acceso del scope chain desde finName() -->:', b)
        console.log('acceso del scope chain desde finName() -->:', a)
        return function printName(){
            var c = 'c';
          console.log('acceso desde el scope chain de printName() --->:', a)
          console.log('acceso desde el scope chain de printName()---->:', b)
          console.log('acceso desde el scope chain de printName()---->:', c)
            return 'Andrei Neagoie' 
        }
    }
}

sayMyName()()()

/**dandonos como resultado: */

/**
 *  desde el scope chain de sayName() solo accedo al valor -->: a
    acceso del scope chain desde finName() -->: b
    acceso del scope chain desde finName() -->: a
    acceso desde el scope chain de printName() --->: a
    acceso desde el scope chain de printName()---->: b
    acceso desde el scope chain de printName()---->: c
A   ndrei Neagoie
 */


/**------------------------------------------------------------- */
function sayMyName(){
    var a = 'a';
    console.log('desde el scope chain de sayName() solo accedo al valor -->:', a)
    console.log('al intentar acceder a los scope internos me va arrojar el error de que no estan definidas las variables, lo mismo pasaria desde finName() a printName -->:', a)
    console.log(c)
    return function findName(){
        var b = 'b';
        console.log('acceso del scope chain desde finName() -->:', b)
        console.log('acceso del scope chain desde finName() -->:', a)
        return function printName(){
            var c = 'c';
          console.log('acceso desde el scope chain de printName() --->:', a)
          console.log('acceso desde el scope chain de printName()---->:', b)
          console.log('acceso desde el scope chain de printName()---->:', c)
            return 'Andrei Neagoie' 
        }
    }
}

sayMyName()()() // nos proporciona acceso a los scope locales

/**esta aplicacion nos dara el siguiente resultado:
 * 
 * desde el scope chain de sayName() solo accedo al valor -->: a
al intentar acceder a los scope internos me va arrojar el error 
de que no estan definidas las variables, lo mismo pasaria desde
 finName() a printName -->: a

 ReferenceError: c is not defined

    at sayMyName (/home/runner/DefinitiveDotingInstance/index.js:5:18)
    at /home/runner/DefinitiveDotingInstance/index.js:20:2
    at Script.runInContext (vm.js:133:20)
    at Object.<anonymous> (/run_dir/interp.js:156:20)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
 */