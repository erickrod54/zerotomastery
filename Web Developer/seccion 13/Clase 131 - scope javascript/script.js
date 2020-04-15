/* scope significa acceso a 
una variable - la traduccion del ingles
es alcance - se relacionan las dos palabras
alcance y acceso relacionado al DOM*/

/* EJEMPLO #1 

se crea una funcion llamada 'aa' en el java
console, y se comprueba su acceso desde el window que 
es la raiz del DOM */

/* function aa(){
	console.log("test")
}

>window

parte de la salida

Iframe: ƒ (a,b,c,d,e,f,g)
IframeBase: ƒ (a,b,c,d,e,f,g,k)
IframeProxy: ƒ (a,b,c,d,e,f,g)
IframeWindow: ƒ (a,b,c,d,e,f,g)
ToolbarApi: ƒ ()
WIZ_global_data: {Yllh3e: "%.@.1559318102236595,173646918,318821006]↵", zChJod: "%.@.]↵", pxO4Zd: "0", GWsdKe: "es-419", SIsrTd: "false", …}
W_jd: {CddzsE: Array(40), CddzsI: Array(49), CddzsM: Array(3)}
a: Location {replace: ƒ, href: "https://www.google.com/", ancestorOrigins: DOMStringList, origin: "https://www.google.com", protocol: "https:", …}

aa: ƒ aa()
... */

/* EJEMPLO #2 */

/* se corre esta funcion y se intenta el acceso a la variable 
a desde afuera de la funcion con la ejecucion de la varibale

de esta primera forma no me da acceso a la variable 'a'

function bb() {
    var a = "hello";
}

bb()

de esta segunda forma si me da acceso a la variable 'a'

function bb() {
    var a = "hello";
    console.log(a);
}

bb()

"hello";

Las funciones pueden alcanzar/acceder a variables 
almacenadas en la raiz puesto que comparten el mismo
parenthObject

EJEMPLO #3

var b = "Can I access this?";

function bb(){
    var a = "hello";
    console.log(b);
}

bb()

"Can I access this?";

Otro caso seria cuando hacemos la asignacion con el mismo 
nombre de variable tanto para la que se encuentra een raiz 
como la que esta dentro de la funcion, tendriamos acceso
a las dos varibles a la interna con 'bb()' y a la variable 
de la raiz por 'console.log(b)' puesto que console.log(b) 
sigue apuntando al value 'var b = "Can I access this?";'
esto sucede al tiempo que 'bb()' sigue apuntando a 
b = "hello";    

var b = "Can I access this?";

function bb(){
    var b = "hello";
    
}

bb()

"hello";

console.log(b);

"Can I access this?"; */


/* Otro Ejemplo mas complejo de acceso a variables

EJEMPLO #4

Bien sabemos que nuestro root Scope es windowObject,
creamos una variable en la raiz 'fun = 5' y tres funciones
distintas con su propio acceso a fun que serian 
'funFunction, funerFunction, funestFunction'
con sus accesos a 'fun = "hello", fun = "Byee", y fun = "AHHHHHH"' 

var fun = 5;

function funFunction(){
    //child scope - alcance al hijo
    var fun = "helloo";
    console.log(1, fun);
} 

function funerFunction(){
    //child scope - alcance al hijo
    var fun = "Byee";
    console.log(2, fun);
} 

function funestFunction(){
    //child scope - alcance al hijo
    fun = "AHHHHHHH";
    console.log(3, fun);
} 

console.log("window", fun);

PRIMER RESULTADO, NINGUNA DE LAS DEMAS FUNCIONES 
SE EJECUTA 

window 5

PERO SI LAS EJECUTAMOS...

var fun = 5;

function funFunction(){
    //child scope - alcance al hijo
    var fun = "helloo";
    console.log(1, fun);
} 

function funerFunction(){
    //child scope - alcance al hijo
    var fun = "Byee";
    console.log(2, fun);
} 

function funestFunction(){
    //child scope - alcance al hijo
    fun = "AHHHHHHH";
    console.log(3, fun);
} 

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();

SEGUNDO RESULTADO EJECUTA El SCOPE DEL PARENTH
Y DE CADA UNO DE LOS CHILD 

window 5
1 "helloo"
2 "Byee"
3 "AHHHHHHH"

Y SI HACEMOSS LA PRUEBA CON 'console.log(fun)' NOS 
DARA COMO RESULTADO 

console.log(fun)
"AHHHHHHH"

ESTO SUCEDE PORQUE LA VARIABLE DE 'funestFunction()'
REEMPLAZA LA VARIABLE DE LA RAIZ, LO QUE SUCEDE ES 
QUE EN ESA FUNCION 'var fun = "AHHHHHHH";' a una 
asignacion como una constante 'fun = "AHHHHHHH";'   */