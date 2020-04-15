
/*Funcion por declaracion - Function Declaration*/
/*function checkDriverAge(){
  var age = prompt("What is your age?");

  if (Number(age) < 18) {
  	alert("Sorry, you are too yound to drive this car. Powering off");
  } else if (Number(age) > 18) {
  	alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
  	alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}*/
/*BONUS - Funcion Expresion - Expression Function*/
/*var checkDriverAge2 = function(){
  var age = prompt("What is your age?");

  if (Number(age) < 18) {
  	alert("Sorry, you are too yound to drive this car. Powering off");
  } else if (Number(age) > 18) {
  	alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
  	alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}*/
/*BONUS - Funcion Expresion - Expression Function -mostrando retorno en console.log-*/
function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}
