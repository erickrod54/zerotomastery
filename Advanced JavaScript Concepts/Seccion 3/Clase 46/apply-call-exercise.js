/**
 * 
 * consiste en determinar el maximo valor usando apply()
 */

const array = [1,2,3];
 
function getMaxNumber(arr){
  //code here  
 return Math.max.apply(null, arr);//Math.max aplica un procedimiento matematico
                                  //para saber cual es el mas alto
                                  // valor de un arreglo
}
getMaxNumber(array) // should return 3