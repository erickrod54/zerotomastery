/**
 * 
 * EL OBJETIVO DE LAS LECCIONES 61 A 63 ES CONOCER COMO 
 * PODEMOS HACER DE JAVASCRIPT UN STRONG TYPING LANGUAGE
 * (MAS ESTRICTO AL MANEJO DE TIPO DE DATOS ESTO SE LOGRA
 * CON TYPESCRIPT)
 * 
 * aqui se analiza la grafica adjunta de derecha a izquierda
 * 
 * en esta clase hablaremos de las diferencias de tipyng(tipo)
 * de javascript con respecto a otros lenguajes, y como
 * debemos pensar en los "pros y contras" de usar un lenguaje 
 * sobre otro deacuerdo a la aplicacion
 * que estemos desarrolando en cuestion para poder tomar
 * decisiones inteligentes:
 * 
 * JAVASCRIPT ES UN LENGUAJE DINAMICO, PERO TAMBIEN PODEMOS
 * HACERLO STATIC HACIENDO TYPESCRIPT
 * 
 * por ejemplo en javaScript una declaracion la hariamos de 
 * esta manera:
 * 
 */

 var a = 100;// el motor de javascript detecta automaticamente 
            //el tipo de dato

//por ejemplo en c++ (static) escribiriamos la misma expresion 
//de distinta manera:
/**
 * 
 * 
         int a;

         a = 100;
 */

/**hoy en dia hay mucha discusion acerca de que lenguajes
 * utilizar o no ... hablemos de los pros
 * 
 * 1. - de lenguajes staticos tenemos es mas facil para 
 * documentarlos, por ejemplo tendriamos la siguiente 
 * funcion:
 * 
 * function sum(a: number, b:number){//sin nisiquiera entrar a 
 *                                  //la operacion de la 
 *                                 //funcion falla en esta 
 *                                //linea de pase de parametros, 
 *                                //lo que gracias al typing del
 *                               // lenguaje c++,
 * //nos ayuda a evitar errores en nuestro codigo
 * //y documentarlo facilmente si suceden
 * //y falla porque esta esperando parametros typeof number
 *      return a + b;
 * }
 * 
 *  sum('hello', null) //1.-llamamos a la funcion
 *                     //con parametros de disinto tipo
 *                     //a los declarados
 */
/**
 * 2.- el segundo pro de los lenguajes stattico es que
 * los editores de codigo como sublime, visual code studio,
 * entre otros .. te ayudan con autocompletition (autocompletan)
 * pudiendote decir inclusive antes de correr el codigo
 * que tienes arriba "oye este deberia ser un numero"
 * 
 * 3.- pero de los mejores pros es que finalmente tendras
 * menos errores al llevar una aplicacion a produccion,
 * porque por el mismo typing language podremos detectar
 * errores mucho mas rapido
 * 
 * pero tambien tiene sus contras:
 * 
 * 1.- hace nuestro codigo mas dificil de leer, mas complejo
 * porque le anadimos otra capa de complejidad solo con la
 * escritura.
 * 
 * 2.- hay un habito muy util cuando trabajamos con lenguajes
 * dinamicos, que es la de escribir buenas unidades de prueba
 * -unit test- que son unidades construidas por los 
 * desarrolladores para darle control de calidad a su codigo
 * y disminuir la tasa de errores (bugs)
 * 
 * 3.- con lenguajes staticos tambien tendras una curva
 * desarrollo mas lenta, porque mientras tu desarrollas
 * hay una persona (Q&A engineer) que esta probando tu codigo
 * para  comprobar que no tenga errores de typing
 * 
 * POR ESO JAVASCRIPT Y POR ESTA RAZON SE VOLVIO TAN POPULAR
 * ES QUE:
 * 
 * TU PASAS MENOS TIEMPO HACIENDO DEBBUGING(DEPURANDO ERRORES
 * DE SINTAXIS-CODIGO ESCRITO-) Y MAS TIEMPO RESOLVIENDO ERRORES
 * DE LOGICA EN TUS APLICACIONES LO QUE TE HACE CRECER REALMENTE
 * COMO DESARROLLADOR
 * 
 *  tener buenas "unit test" (acerca de Q & A)
 * 
 * 3.- 
 */