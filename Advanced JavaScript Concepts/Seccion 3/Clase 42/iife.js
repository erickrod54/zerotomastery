/**
 * IIFE(Immediatly Invoque Function Expression)
 * 
 * observar muy bien el motivo por el que utiliza function 
 * expression en vez de la function declaration que no
 * puede invocarse inmediato daria error,
 * el motivo es que la primera se puede ejecutar justo
 * despues de escribirse... la declarada no
 * 
 * (function (){ //anonymus function 
 * 
 * }) (); // se invoca inmediato
 * 
 * //lo que hace el motor de javascript es evaluarla de 
 * //la siguiente manera "al evaluar que no empieza
 * //la palabra con function la pasa como function
 * //expression"
 * 
 * se trata de immediatly invocked function expression es
 * un patron comun de diseno, su proposito era manejar
 * todo el codigo de una libreria dentro de los brackets
 * para asi evitar el "variable enviroment collision
 * or name collission"
 */
/**
 * --------------------------------------------------
 * 
 * la segunda funcion se rie de la primera como lo hace?
 * "variable collision" -variables se sobreescriben en EC-
 * 
 * como usamos iife para resolver este porblema ?
 * ("variable collision" -variables se sobreescriben en EC-)
 * 
 * ---- verifica el archivo html index - describe la solucion---
 * 
 * 
 * 
 */