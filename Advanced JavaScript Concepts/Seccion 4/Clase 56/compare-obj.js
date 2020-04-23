/**tenemos el siguiente ejercicio */

var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = JSON.stringify(user1) === JSON.stringify(user2);
alert(eq); // gives false

/** objects without methods and DOM nodes inside y el orden
 * de las propiedades del objeto tienen que estar exactamente
 * igual una de otra... la forma generica es hacerlo con 
 * prototype
 */