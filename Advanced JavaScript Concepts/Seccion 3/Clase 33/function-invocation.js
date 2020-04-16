/**
 * RECUERDA QUE LOS ARGUMENTOS ES UN POCO PELIGROSO
 * USARLOS - SE CONECTA CON LA CLASE HIDDEN CLASSES
 * E INLINE CACHE CLASES "writing optimized code clase 13"-
 * 
 * los programas son variables asignadas a memoria 
 * luego funciones que utilizan esas variables para
 * hacer algo -cumplen un proposito- eso son los 
 * programas
 * 
 * tenemos dos tipos de funciones function expression
 * y function declaration
 * 
 * //FUNCTION EXPRESSION
 * 
 * //las funciones expresion no son hoisted(pasadas al tope
 * //del scope en las que se encuentran) por la razon de que
 * //son guardadas en una variable que se declara en cualquier
 * //lugar de nuestro archivo
 * 
 *       var canada =  function(){ //tambien puede ser escrito
 *          console.log('cold') //con arrow function tiene el
 *       }                     //el mismo efecto 
 *                          // var canada = () =>{}
 * 
 * //FUNCTION DECLARATION
 * 
 *       function india(){
 *          console.log('warm')
 *       }
 * // las funciones declaradas son hoisted(pasadas el tope
 * //del scope en las que se encuentran)
 * 
 * //esto es la invocacion/llamada/execution de la funcion
 * 
 *  canada()//recuerdas lo que sucede con los brackets
 *  india()//se abre un execution context(contexto de ejecucion)
 * 

 */


 var canada = () =>{ //el arrow function solo se puede hacer 
                    //crear una function expression, 
                    //y es extremadamente util
                    //para restablecer el scope 
                    //chain de en EC
     console.log('cold')
 }

 function india(){//en cambio esta funcion por la forma en que
                  //esta escrita ya esta allocated
                  //en la memoria(ya esta guardada en memoria)

     console.log('warm')
 }

 //siendo el resultado de estos cold and warm

 /**
 * Ahora entremos en detalle con los argumentos, porque no 
 * recomiendo el uso de argumento 
 *
 * function marry(person1, person2)
 * {
 *  console.log('arguments: ', arguments)//veremos el resultado
 *                       //justo como dijo andrei
 *                       //al invocar la funcion
 *                       //el nos pasara el objeto 
 *                       //arguments
 * 
 *  return `${person1} is now married to ${person2}`
 *         // usaremos este template string para 
 *         // regresar el resultado
 * }
 * 
 * marry(Tim, Tina)
 * 
 * siendo este el resultado
 *  
 *  //este es el objeto arguments dado por el keyword de java
 *  //arguments, esta keyword solo esta disponible cuando
 *  // creamos un nuevo excution context
 * 
 *  arguments [Arguments] { '0': 'Tim', '1': 'Tina' }
    Tim is now married to Tina 

 * //recuerdas la leccion en la que hablamos de ayudar
   //al motor de java a optimizar nuestro codigo
  */

  function marry(person1, person2){
      console.log('arguments', arguments)
      return `${person1} is now married to ${person2} ` 
  }

  marry('Tim','Tina')

  /**
   * otro ejemplo de la creacion del objeto arguments
   * con la invocacion de la funcion.. trabajeremos
   * con la funcion del primer ejemplo
   * 
   *     function india(){
   *        console.log(arguments)
            console.log('warm')
        }
   */

  function india(){
    console.log('arguments', arguments)
    console.log('warm')
}

//como resultado me envia el objeto arguments vacio
//lo que nos indica que este objeto esta listo
//para usarse desde el escution context junto con
//global context, objeto this, y ahora objeto argument