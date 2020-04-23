const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number); 
console.log(string);
console.log(obj1.value);

/**ninguna de las operaciones de change se ejecutan
 * porque no se usa el objeto "this" para activar
 * el scope chain hacia el global
 */