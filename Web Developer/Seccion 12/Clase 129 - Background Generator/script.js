// cacheamos el h3 para -texto de fondo para css-
var css = document.querySelector("h3");
// cacheamos la clase color1 y color2 para nuestro fondo
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

/* cacheamos la en una variable el body 
con ayuda de un id llamado 'gradient' 
para despues con una funcion 'setgradient' colocar de fondo
el color que ingresemos */
var body = document.getElementById("gradient");

/* funcion 'setgradient' colocar de fondo
el color que ingresemos  */

/*  codigo con con error revisar

-ver de nuevo como andrei hace la funcion-

function setGradient() {
    body.style.background =
    "linear gradient(to rigth, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
} */

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

/* para probar que cacheamos el body correctamente */
/* console.log(body); */

// prueba del cacheo de variables para verificar
// que los selectores funcionan
// console.log(css);
// console.log(color1);
// console.log(color2);

// AHORA NECESITAMOS UN METODO PARA TOMAR(GRAB) NUESTRA ENTRADA
// QUE ES EL COLOR DE FONDO, APRENDIMOS METODOS COMO CLICK
// MOUSEENTER KEYPRESS... PERO NINGUNO DE ESTOS METODOS IMPRIME
// NUESTRA ENTRADA ESTE METODO SE LLAMA "INPUT"

/* Estas funciones realizan toman la entrada y la fijan en el input
y a su vez se puede verificar la entrada en el java console */

color1.addEventListener("input", setGradient);
/* recuerda que setGradient es un callback
disparado por la funcion addEventListener
por eso no lleva los parentesis */
color2.addEventListener("input", setGradient);



