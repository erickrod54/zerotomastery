// Advanced loop en JavaScript hay maneras de iterar
// mas avazadas a las conocidas que serian 

// for
// while
// do 
// forEach (ECMAScript 5)

// hay dos formas mas de iterar

// 1er ejemplo

//for of (iterating - arrays, strings)

// esta palabra es muy importante "iterating"
// es iterar y solo lo podemos hacer con arrays 
// y con strings

// usamos el siguiente array para recorrerlo 
// con el for of loop  colocariamos for 
// item(seria nuestro indice para recorrer el array)
// of seguido de 'basket' que seria nuestro array

const basket = ['apples','oranges','grapes'];

for (item of basket){
    console.log(item);
}

// dando como resultado lo siguiente 

apples
oranges
grapes

// for in - objects - properties
// este loop no itera porque los objetos no son iterables
// si intercambiamos el objeto de abajo con el array de arriba
// el loop for of no podra recorrer detailedBasket debido
// a que no es iterable

// un objeto es enumarble porque sus propiedades lo son


const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes:1000,
}

for (item in detailedBasket){
    console.log(item)
}

// dandonos como resultado 

apples
oranges
grapes

// recuerdas cuando se mencionaba que los arrays son 
// considerados objetos

const basket = ['apples','oranges','grapes'];

for (item in basket){
    console.log(item)
}

// dandonos como resultado 

0
1
2

// y eso es porque for in toma a basket como un objeto
// y al recorrerlo mira sus propiedades '0 1 2'

const basket = {
    0: 'apples',
    1: 'oranges',
    2: 'grapes'
};
