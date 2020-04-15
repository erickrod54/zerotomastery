/* OPERADOR TERNARIO

este establece un control de flujo evaluando sobre 
una condicion logica */

/* function isUservalid(bool) {
    return bool;
}

var answer = isUservalid(true) ? "You may enter " : "Access Denied";

EJEMPLO #1 

function isUservalid(bool) {
    return bool;
}

var answer = isUservalid(true) ? "You may enter " : "Access Denied";

answer
"You may enter "

SI CAMBIAMOS EL VALOR LOGICO..

var answer = isUservalid(false) ? "You may enter " : "Access Denied";

answer
"Access Denied"

EJEMPLO #2 

HACEMOS EL PROCESO MAS AUTOMATICO

var automatedAnswer = "Your account # is" + ( isUservalid(false) ? "1234" : " not avaible");  */

/* EJEMPLO #3 SWITCH CONDITION  */

/* function moveCommand(direction){
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;

        case "back":
            whatHappens = "you arrived home";
            break;

        case "right":
            whatHappens = "you found a river";
            break;

        case "left":
            whatHappens = "you run into a troll";
            break;
    
        default:
            whatHappens = "please enter valid direction";
    }
    return whatHappens;
}

Y EL RESULTADO ES 

moveCommand("forward")
"you encounter a monster"
moveCommand("back")
"you arrived home"
moveCommand("right")
"you found a river"
moveCommand("left")
"you run into a troll"

ESTE CONTROL DE FLUJO FUNCIONA DE MANERA QUE HACE UN CHECK
DEL KEYWORD 'direccion' IN CASE 'forward, back, right, left'
Y AL HACER ESTO DA LA RESPUESTA EN EL CASO QUE CORRESPONDA
HACE EL BREAK Y TERMINA EL FLUJO  */