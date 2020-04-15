/**
 * EL LEXICAL CONTEXT SE RELACIONA CON EL SCOPE, Y ES
 * LA MANERA EN QUE JAVA RUNTIME UBICA DONDE ESTA ESCRITO
 * QUE CODIGO(FUNCIONES, VARIABLES, DATOS) Y LA UBICACION
 * DEL MISMO EN BASE A SU CONTEXTO
 *
 *
 * citando de referencia:
 *
 *  Scope (es alcance)es simplemente una región donde se
 *  permite que algo opere en un período de tiempo determinado.
 *
 * en ciencia de computadoras puede referirse a una region
 * donde alguna data existe y puede ser accesada. esta data
 * podria ser una variable
 *
 * un scope o region puede ser creada al usar curly braces
 *  "{ }", a esto se le llama bloque scope, significa que
 * las variables o funciones pueden ser accesadas dentro
 * de esta region, como tambien significa que pueden no
 * pueden ser accedidas desde afuera de esta region al
 * hacer esto nos ubica en una region local
 *
 *
 *      let name = "john"; // En el scope global

        function doSomething() {
            name = "James"
            console.log(name); //la funcion puede acceder
                              //a la variable scope
                              //global (padre) 'name'
            }

        doSomething(); // Imprime  "James"
        console.log(name); // Puede acceder a 'name'
 *
 *
 *
 *                  NOTA IMPORTANTE
 *
 * Un scope local o hijo (region) tiene acceso a su scope
 * padre(region padre) pero su scope padre no tiene acceso
 * directo a la data, variables o funciones declaradas en
 * en el scope local
 *
 * AHORA HABLEMOS DE LEXICAL Scope
 *
 * Lexical proviene de --> lexicon ---> lexis(Latin)--
 * --> word(palabra)
 * 
 * ahora sabiendo esto si decimos lexical scope se refiere 
 * a la region en las que las palabras(variables, valores, 
 * funciones) son creadas 
 * 
 * Entiendiendolo mejor el lexical scope no sirve directamente
 * el significado de una palabra a una region fuera de el. Esto
 * es porque las regiones de lexico haces emfasis al origen
 * en donde la palabra fue creada
 * 
 * TAMBIEN EXISTE EL SCOPE DINAMICO(CHEQUEA VARIABLES, 
 * DATA, FUNCIONES) EN TIEMPO DE EJECUCION RUN TIME
 * Y LEXICAL SCOPE(CHEQUEA VARIABLES EN TIEMPO DE 
 * COMPILACION LAS VARIABLES NECESITAN SER CREADAS Y 
 * ACCESIBLES EN EL SCOPE REGION QUE ELLAS USAN)
 * 
 * Segun andrei nagoie:
 * 
 * imagina las funciones unas dentro de otras ejemplo de 
 * anteriores clases cada funcion es un planeta(region)
 * y dentro de el podemos hacer muchas cosas y entre
 * ellos se pueden comicar de muchas maneras 
 * 
 * function printName(){    //Planeta 1
    return 'Andrei Neagoie'// procede a ejecutar printName             
                           //abre un excution context para 
                           //printName() y lo envia a la 
                           //pila call stack al obtener el 
                           //resultado de la llamada 
                           //SayMyName() ... vaciara la  pila
                           //callStack en orden desde printName
                           // > findName() >sayName() y por 
                           //ultimo en irse del callSatck
                           // seria sayMyName()

}
}
                       //Planeta 2  
function findName(){  // procede a ejecutar findmyName
   return printName() // pero al darse cuenta que llama
                     // la funcion printName() 
                     //abre un excution context para printName()
                     // y lo envia a la pila call stack

}
                               //Planeta 3
        function sayMyName(){ // procede a ejecutar sayMyName
    return findName() // pero al darse cuenta que llama
        }                     // la funcion findName() 
                       //abre un excution context para findName
                       // y lo envia a la pila call stack
                //Planeta 4
 sayMyName()   //abre un excution context para sayMyname
             // y lo envia a la pila call stack

y existe el Lexical scope y execution context 


 * LISTA DE CARACTERISTICAS DE LEXICAL Y DINAMIC
 * 
 * 1.- UN SCOPE ES UNA REGION DONDE ALGO EXISTE(POR EJEMPLO
 * VARIABLE)
 * 
 * 2.- UN SCOPE PUEDE ACCEDER A SU PADRE -LLAMADO BLOQUE-
 * 
 * 3.- UN SCOPE PADRE NO PUEDE TENER ACCESO DIRECTO A 
 * LA DATA, VARIABLES, FUNCIONES EN UN SCOPE LOCAL.
 * 
 * 4.- LEXICAL HACE ENFASIS EN ENCONTRAR VARIABLES, FUNCIONES
 * , DATA EN EL LUGAR DONDE FUERON CREADAS/DECLARADAS Y NO
 * EN EL AMBIENTE DONDE CORREN (RUNTIME)
 * 
 * 5.- SCOPE DINAMICO ES LO OPUESTO A LEXICAL SCOPE.
 * 
 * 6.- SCOPE DINAMICO CHEQUEA VARIABLES DONDE ESTAS CORREN.
 * 
 * 
 * 
 * 
 * 
 */


