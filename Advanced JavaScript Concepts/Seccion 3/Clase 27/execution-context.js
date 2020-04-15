/**
 * 
 * el runtime de javascript cada vez que detecta brackets " ( ) ",
 * "el motor de javascript mirara estos brackets y dira aja
 * aca hay una tarea para mi"
 * 
 * nosotros asignamos variables y corremos funciones
 * crea un execution context y es la manera en que se corre el
 * codigo en javascript, tomemos el siguiente ejemplo ( para 
 * entenderlo totalmente mira la imagen adjunta ):
 * 
 * 
        function printName(){
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
    
        function findName(){  // procede a ejecutar findmyName
           return printName() // pero al darse cuenta que llama
                             // la funcion printName() 
                             //abre un excution context para printName()
                             // y lo envia a la pila call stack

        }
    
                function sayMyName(){ // procede a ejecutar sayMyName
            return findName() // pero al darse cuenta que llama
                }                     // la funcion findName() 
                               //abre un excution context para findName
                               // y lo envia a la pila call stack
        
         sayMyName()   //abre un excution context para sayMyname
                     // y lo envia a la pila call stack
        */
/**PERO ESTE CONTEXTO ARRIBA LE FALTA UNA COSA... PORQUE EL CONEXTO DE EJECUCION BASE 
 * ES CONTEXTO DE EJECUCION GLOBAL OR GLOBAL EXECUTION CONTEXT, Y ESTE CREA DOS OBJETOS
 * OBJETO WINDOW(CASO DE NAVEGADORES, EN EL CASO DE NODE POR EJEMPLO SERIA "GLOBAL"), Y 
 * THIS (EL FAVORITO DE TODOS EN JAVASCRIPT JEJE )
 * 
 * 
  */

                