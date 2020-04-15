//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

/* se define la funcion que recibe el valor de la batalla
luego de EventSource, para evaluarla, se dispara
la funcion mediante el uso de la variable experiencePoints
en la que esta contenida winBattle()

function winBattle(bool) {
        return bool;
}

var experiencePoints = winBattle(true) ? 10 : 1; */ /* variable called experiencePoints */

//Using this function, answer the questions below:

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break; /* quitando el break y 
                   colocandolo debajo de la 
                   variable undefined ----> you encounter a monster"*/
            whatHappens = "you encounter a monster";
                            /*no esta highlighted por esa raon sale del flujo en undefined*/
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break; /*quitando el break y 
                    colocandolo debajo de la 
                    variable undefined -----> "you run into a troll"*/
            whatHappens = "you run into a troll";
            break;        /*no esta highlighted por esa raon sale del flujo en undefined*/
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward"); undefined          ----> you encounter a monster"

//#3 return value when moveCommand("back"); "you arrived home"    ----> "you arrived home"

//#4 return value when moveCommand("right"); "you found a river"  -----> "you found a river"

//#5 return value when moveCommand("left"); undefined             -----> "you run into a troll"

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

// La pelea del mago / mages fight

function throwSpell(spell){
    var spell;

    switch(spell){
        case "high life":
                spell = "fireball";
                break;
        case "medium life":
                spell = "protectors shell";
                break;
        case "low life":
                spell = "healings lords";
                break;                 
    default:
        spell = "choose well your spell";
    }
    return spell;
}
/* 
throwSpell("high life"); ---> "fireball";
throwSpell("medium life") ---> "protectors shell"
throwSpell("low life")    ---> "healings lords"  */