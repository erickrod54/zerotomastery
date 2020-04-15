/**
 * 
 * Memory Leak
 * 
 * Es cuando nuestro programa llena la memoria heap
 * suecede mucho con 2.-eventListenners(instrucciones
 * que trabajan en background constantement) y 
 * 1.- arrays que llenan desde el callstack nuestra 
 * heap muy rapido, nuestro garbage collector deja 
 * de funcionar y esto colapsa la aplicacion y 
 * el navegador, y el tercero y mas comun
 * 3.- es Global Variables o variables globales
 * 4.- y el cuarto y tmb mas comun es cuando se hacen
 * setIntervals -es una funcion de JavaScript-
 * sobre objetos.. estos dos ejemplos se explican 
 * a continuacion:
 * 
 * //1.- arrays que llenan desde el callstack nuestra 
 * heap
 * 
 * let array = [];
 * 
 *  for (let i = 5; i > 1; i++){
 *      array.push(i-1)
 * }
 * 
 * //aqui lo que hacemos es un ciclo que hace 
 * //push(ingresa al array de manera infinita i-1,
 * //llenando nuestra heap y provocando nuestro leak)
 * 
 * 
 * //2.-eventListenners(instrucciones
 * que trabajan en background constantement)
 * 
 * //lo que sucede es que se anaden estos eventListeners
 * //y nunca se remueven cuando ya no se necesitan
 * 
 *  var element = document.getElementById('button');
 *  element.addEventListener('click', onClick)
 * 
 * //Variables Globales 
 * 
 * //Que al agregar y agregar
 * //y usar y usar estas variables globales
 * //es muy probable que se exceda nuestra heap
 * //y provoque un leak -tiene que ver con el 
 * //tema de scope-
 * 
 *  var a = 1;
 *  var b = 1;
 *  var c = 1;
 * 
 * 4.- el setIntervals
 * 
 * es cuando se hacen setIntervals -es una funcion 
 * de JavaScript que puede por ejemplo llamar objetos
 * por intervales de tiempo- sobre objetos lo que causa
 * que estos nunca se colecten por el garbage collector
 * y provoque enalgun momento un memory leak
 * 
 * Referencia
 * 
 * et_win_setinterval.asphttps://www.w3schools.com/jsref/m
 * 
 * //setInterval
 * setInterval(() => {
 *      // referencia a objetos y estos nunca se colecten 
 *      //por el garbage collector y provoque enalgun
 *     //momento un memory leak
 * })
 * 
 * EXCELENTE RECURSO PROPORCIONADO POR ANDREI
 * 
 * https://developers.soundcloud.com/blog/garbage-collection-in-redux-applications
 * 
 * "LA SOLUCION DEL EQUIPO DE DEVELOPERS DE SOUNDCLOUD
 * SOBRE SU REPRODUCTOR DE MUSICA EN BACKGROUND
 * LO CUAL LES PROVACABA UN MEMORY LEAK Y EL COLAPSO
 * DE LA APLICACION HASTA QUE LO SOLUCIONARON
 * Y MUY INTERESANTE"
 * 
 * EN CONCLUSION MEMORY LEAKS ES ALGO DE LO QUE TENEMOS TENER
 * MUCHO CUIDADO Y PODEMOS EVITARLO ESCRIBIENDO BIEN
 */
