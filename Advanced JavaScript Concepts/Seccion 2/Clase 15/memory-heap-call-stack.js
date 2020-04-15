/**
 * 
 * VAMOS A HABLAR DE CALL STACK Y MEMORY HEAP
 * 
 * MEMORY HEAP - es el lugar donde se guardaran Y escribiran 
 * nuestras variables, y data (se localiza -memory allocation- 
 * memoria para guardar, se usa memoria o se libera memoria)-
 * 
 * Al funcionar junto con el CallStack nos da la oportunidad
 * de correr nuestro codigo en orden
 * 
 * 
 * CALL STACK -es el lugar de memoria donde el motor de java
 * le hace seguimiento a la ejecucion, se hace seguimiento 
 * para saber que esta pasando linea por linea en nuestro 
 * codigo en el orden de una pila desde la llamada () 
 * hasta cada una de nuestras instrucciones-
 * 
 * 
 * PARA COPIAR ESTA PARTE QUE SIGUE DE CODIGO
 * 
 * COMO ANDREI DESCRIBE EL PROCESO DE "MEMORY ALLOCATION"
 * CUANDO ESCRIBIMOS UNA VARIABLE LE ESTAMOS DICIENDO
 * AL MOTOR .. POR FAVOR LOCALIZA MEMORIA PARA EL NUMERO
 * (VALOR) QUE CONTIENE LA VARIABLE
 * 
 * //todo lo que esta en comentario es lo que le decimos a 
 * //la maquina
 * 
 * //Call Stack + Memory Heap
 * const number = 610; // allocate memory for number
 * const string = 'some text';//allocate memory for a string
 * 
 * const human = { //allocate memory for an object
 *      first: 'Andrei'.
 *      last: 'Nagoie'
 * }
 *  
 *    con esta funcion probamos el callstack
 *    para eso nos vamos a sources snippets
 *    y alli colocamos nuestro codigo
 * 
 * //debajo de esto todo lo que esta en esta seccion
 * //es paso por paso el callstack de las funciones
 * //antes de que el llamado se complete ()
 * //en chrome la flecha hacia abajo hace el recorrido
 * //en el callsatck
 * 
 * 1.-  anonymous -contexto de ejecucion global 
 *                o "Global Execution Context"-
 *      -es la primera linea indica que no hay 
 *      nombre para este archivo-
 * 
 *    function subtractTwo(num){ // num = 9 
 * 5.-         return num -2 //la quinta linea aca 
 *                          //pasa el valor como 
 *                          //argumento proveniente 
 *                          //de la funcion calculate
 *    }                     //y hace la operacion 
 * 
 *   function calculate(){
 * 3.-         const sumTotal = 4 + 5;// la tercera linea
 *                                   //al llamar a calculate
 *                                   //en linea 2 ingresa a 
 *                                   //la operacion
 * 
 * 4.-         return subtractTwo(sumTotal);//la cuarta linea
 *                                          //continua la 
 *                                          //operacion
 *                                          //para retornar 
 *                                          //sumtotal
 *                                          //a subtractTwo
 *                                         //llamando asi  
 *                                         //a substractTwo
 *  }
 * 
 * debbugger; // es necesario para parar la ejecucion
 *            //y asi poder ver el callstack
 * 2.- calculate() //la segunda linea que se ejecuta
 * 
 * 6.- sexta linea despues de volver a calculate
 *     (en el que calculate se remueve de la pila y se vacia 
 *     la memoria porque ya no estara en uso)
 *     regresa a anonymus que arroja el valor de la funcion
 *     7
 * 
 * 
 * 
 * .. CUANDO USEMOS LA VARIABLE LE DECIMOS AL MOTOR QUE BUSQUE
 * EL VALOR EN LA UBICACION DE LA MEMORIA ""MEMORY ALLOCATION
 * 
 * EN EL MOMENTO DE EXPLICAR EL CALL STACK .. MUY BUENO SEGUIRLO 
 * PASO A PASO COMO ANDREI LO HACE EN EL VIDEO 11:02 DEL VIDEO
 *  */