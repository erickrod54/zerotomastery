var array = ["Banana", "Apples", "Oranges", "Blueberries"];

/* 1. Remove the Banana from the array -shift-*/
/*como elimino un item especifico del array?*/

/* SOLUCION

array.shift()
"Banana"
(3) ["Apples", "Oranges", "Blueberries"]
*/

/*// 2. Sort the array in order -sort-.*/
/* SOLUCION

array.sort()
(3) ["Apples", "Blueberries", "Oranges"]
*/

/*// 3. Put "Kiwi" at the end of the array -push-.*/
/* SOLUCION

array.push("Kiwi")
4
array
(4) ["Apples", "Blueberries", "Oranges", "Kiwi"]

*/
/*// 4. Remove "Apples" from the array. -shift-*/

/* SOLUCION


array.shift()
"Apples"
array
(3) ["Blueberries", "Oranges", "Kiwi"]

*/
/*// 5. Sort the array in reverse order. (Not alphabetical, but reverse -reverse()-*/
/*// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])*/

/* SOLUCION

array.reverse()
(3) ["Kiwi", "Oranges", "Blueberries"]
*/

/*you should have at the end:*/
/*["Kiwi", "Oranges", "Blueberries"]*/
/*// using this array,*/
/*// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];*/
/*// access "Oranges".*/
/* SOLUCION

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1])
*/
