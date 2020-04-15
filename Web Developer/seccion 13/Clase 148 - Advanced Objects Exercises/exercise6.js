//Evaluate these:
//#1
[2] === [2]  //false 


{} === {} //false 

//#2 what is the value of property a for each object.
const object1 = { a: 5 };  //{a: 4}
const object2 = object1;   //{a: 4}
const object3 = object2;  //{a: 4}
const object4 = { a: 5};  //{a: 5}
object1.a = 4; //{a: 4}


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color 
// and has a sound method that moo's her name, type and color. 

class Animal{
    constructor(name){
        this.name = name;
    }

}

class Mamal extends Animal{
        constructor(type,color){
        super(name)

        }
        moos(){
            console.log(`im ${this.type} my naame is ${this.name} and I'm ${this.color}`);
        }
}

const cow = new Mamal('Cooow','Shelly', 'Brooown');

// La solucion de andrei, coloca todas las propiedades del animal 
// y las extiende a la clase mamal, de alli construye e invoca con 
// super crea el metodo solo para mamal el del sound que seria moo's
// y de alli crea el cow

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const cow = new Mamal('Shelly', 'cow', 'brown');