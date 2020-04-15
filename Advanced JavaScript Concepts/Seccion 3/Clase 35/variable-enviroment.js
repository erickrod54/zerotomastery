/**
 * 
 * the variable enviroment (entorno de variables) esta 
 * ubicado justo en el contexto de ejecucion en el scope
 * de las funciones(que andei se refiere a ellas como 
 * pequenos universos), el variable enviroment se crea 
 * en el momento que tenemos el objeto "this" y el objeto
 * arguments, y en ese espacio de memoria se almacenan
 * las variables en stacks separados y alli ellas necesitan
 * saber como relacionarse una con otra, algunas funciones 
 * tienen acceso a ciertas variables y otras no
 * 
 * digamos que creamos 2 funciones (dos pequenos universos)
 * 
 * el compilador da la barrida sobre el codigo:
 * 
 * //1.- las funciones declardas son hoisted y directamente 
 * //llevadas al top y se localiza espacio de memoria 
 * //para ellas
 * 
 * function two(){
 *      var isValid;
 * }
 * 
 * function one(){
 *      var isValid = true;
 *      two();
 * }
 * 
 * //2.- esta es una variable global y es asignada como
 * //undefined cuando es hoisted 
 * 
 * var isValid = false;
 * 
 * one();
 * 
 * -----------------------------------------------------
 * 
 * en excution context el proceso que ocurre en estas funciones:
 * 
 * function two(){ //4.- se abre el nuevo excution context
 *                 //(planeta de dos or two world)
 *      var isValid;//5.- permanece indefinida - undefined      
 * }
 * 
 * function one(){
 *      var isValid = true;// 3.- se determina como un local 
 *                         //ENV(variable enviroment)
 *      two();//nuevo EC(execution context)
 * }                 
 * 
 * //2.- luego comenzamos ejecutar nuetra aplicacion y durante 
 * //la ejecucion es que se le asigna a esta variable global 
 * //isValid el valor de false
 * 
 * var isValid = false;
 * 
 * one();
 * 
 * resultados de las llamadas
 * 
 *    //two() -- undifined
 *    //one() -- true
 *    //global() -- false
 * 
 * //aqui podemos apreciar como cada funcion independientemente 
 * //tiene acceso y sus propios entornos de variables locales 
 * //en sus ec locales sin tener interferencia o realcion con 
 * //el contexto global 
 * 
 */