const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures - una funcion que corrio.
// una funcion que se ejecuto. nunca se 
// ejectura de nuevo, pero va a recordar 
// que hay referencias a esas variables
// entonces los scope de hijos siempre 
// tendran acceso al scope de los padres

//Currying

// Es el proceso de convertir una funcion de 
// multiples entradas en una funcion que toma 
// una entrada a la vez


const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);

// ahora porque es buena esta practica, porque es mas extensible
// a partir de la funcion curriedMultiply podemos crear otra
// funcion multiplyBy5

const multiplyBy5 = curriedMultiply(5);

//Compose
// es el proceso de convertir el output (salida) de una funcion 
// en el input (entrada) de otra funcion  

const compose = (f,g) => (a) => f(g(a));

// el output de compose se convierte en el input de sum

const sum = (num) => num + 1;

compose(sum,sum)(5);

// y se invoca con compose

// como se desgloza

// const compose = (f,g) => (a) => f(g(5));

// y con la primera invocacion de compose, recordar que se invoca 
// sum 

// const compose = (f,g) => (a) => f(6);

// y con la segunda invocacion de compose, recordar que se invoca 
// sum de nuevo

// const compose = (f,g) => (a) => 7;


// ES IMPORTANE RECORDAR ESTAS TRES PRACTICAS
// COLSURES, CURRYING Y COMPOSE PORQUE HALLARAS
// MUCHAS HERRAMIENTAS Y LIBRERIAS QUE LO USAN 
// MUY SEGUIDO

// Y LA IDEA DE USAR ES ES AVOIDING SIDE EFFECTS Y HACER 
// FUNCTIONAL PURITY (EVITAR EFECTOS COLATERALES Y LOGRAR 
// LA PUREZA FUNCIONAL)

// QUE SIGNIFICA ESTO ? ... 

// ACERCA DE SIDE EFFECTS.. SON TODAS AQUELLAS ACCIONES 
// QUE OCURREN DENTRO DE NUESTRAS FUNCIONES QUE NO SABEMOS
// SI INTERACTUA, O LEEN, O ESCRIBEN A UNA VARIABLE EXTERNA
// COMO POR EJEMPLO EL Console.LOG 

// Y EL PODER DE ESTO RADICA EN QUE EVITANDO SIDE EFFECTS
// Y LOGRANDO FUNCIONAL PURITY (QUE UNA FUNCION SIEMPRE 
// ARROJE UN VALOR DISTINTO A UNDEFINED) ALCANZAREMOS 
// QUE SE LLAMA DETERMINISNIC

// ACERCA DE DETERMINISNIC.. NO IMPORTA CUALES SEAN NUESTRAS 
// ENTRADAS(HABLAMOS DE ENTRADAS REFERENTES AL PROPOSITO
// DE LA FUNCION) NUESTRA SALIDA DEBE SER SIEMPRE LA MISMA 
// ESTO NOS AYUDA A EVITAR LA CANTIDAD DE BUGS EN NUESTRO CODEBASE