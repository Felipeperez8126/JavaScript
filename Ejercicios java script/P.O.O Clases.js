//--------------------Objeto ejemplo.
let dog1 = { dogName: "JavaScript",
 weight: 2.4,
 color: "brown",
 breed: "chihuahua"
};

//sintaxis de como crear un clase.
class ClassName {
    constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
    }
}
let obj = new ClassName("arg1", "arg2");

//Objeto con función especial.
function Dog(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
}
let dog2 = new Dog("Jacky", 30, "brown", "labrador");

//Ejemplo del perro en clase.
class Dog {
    constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
    }
}
let dog3 = new Dog("JavaScript", 2.4, "brown", "chihuahua");

console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight,"kg.");

//--------------------Clases.
//Constructor
class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }
}
//--------------------------------
//como crear un nuevo objeto de la clase persona.
let p = new Person("Maaike", "van Putten");

//Declaración de registro muestra la instancia creada que se almaceno en la variable p.
console.log("Hi", p.firstname);

//Esto pasa cuando no creamos la clase con todas las propiedades.
let p1 = new Person("Maaike");

//Simplemente establece las propiedades restantes a Undefined o ( Indefinido ).
console.log("Hi", p1.firstname, p1.lastname);

//Como especificar los valores en constructor.
constructor(firstname, lastname = "Doe") {
    this.firstname = firstname;
    this.lastname = lastname;
    }
/*De esta forma, no habría impreso Hi Maaike indefinido, sino Hi Maaike Doe.
--------------------------------------------------------------
Realice los siguientes pasos para crear una clase de persona e imprimir instancias de amigos.
nombres:

1. Cree una clase para Person que incluya el constructor para firstname y apellido.*/
class Persons{
    constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido; 
    }
}
/* 2. Cree una variable y asigne un valor al nuevo objeto Persona usando su
nombre y apellido de un amigo.*/
let amigo1 = new Persons('Juan','Lopez');

/* 3. Ahora agregue una segunda variable con el nombre de otro amigo usando su primer nombre
Y apellido.*/
let amigo2 = new Persons('Jose','Uttutia')

// 4. Envíe a ambos amigos a la consola con un saludo de hola.
console.log(amigo1.apellido, amigo1.nombre, 'Hola.');
console.log(amigo2.apellido, amigo2.nombre, 'Hola.');

//--------------------Metodos.
class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }
    greet() {
    console.log("Hi there! I'm", this.firstname);
    }
}
let p2 = new Person("Maaike", "van Putten");
p2.greet();

//Al igual que las funciones, los métodos también pueden tomar parámetros y devolver resultados.
class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }
    greet() {
    console.log("Hi there!");
    }
    compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
    }
}
let com = Person.compliment("Harry", "hat");
console.log(com);

//--------------------Propiedades a veces llamadas (campos).
class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }
}
//propiedades de person..
let p3 = new Person("Maaike", "van Putten");
console.log("Hi", p3.firstname);

//haci se agragan propiedades que no son accesiblesdesde el interior.
class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
}
let p4 = new Person("Maria", "Saga");
console.log(p4.firstname);

//Modificación del constructor.
constructor(firstname, lastname) {
    if(firstname.startsWith("M")){
    this.#firstname = firstname;
    } else {
    this.#firstname = "M" + firstname;
    }
    this.#lastname = lastname;
}

//Ahora, cuando intenta crear una persona que tiene un valor de nombre que no comienza
//con una "M", agregará una M al frente.
let p = new Person("kay", "Moon");

//--------------------Getters and setters..
/*Son mas propiedades que funciones, se parecen a las funciones por que tienen de tras de ella 
() pero no lo son.*/
class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
    }
    
    /* El getter se puede asigna un este valor a la propiedad y no devuelve nada, 
    el getter se puede usar fuera del objeto */
    get firstname() {
    return this.#firstname;
    }
    /* El setter se utiliza para obtener la propiedad, por lo tanto no tomo ningun
    parametro.*/
    set firstname(firstname) {
    this.#firstname = firstname;
    }

    
    get lastname() {
    return this.#lastname;
    }
    set lastname(lastname) {
    this.#lastname = lastname;
    }
}
let p5 = new Person("Maria", "Saga");
console.log(p5.firstname);

// Se usa para actualizar el nombre de Maria por Adnade.
p5.firstname = "Adnane";

// Arreglo con setter.
set firstname(firstname) {
    if(firstname.startsWith("M")){
    this.#firstname = firstname;
    } else {
    this.#firstname = "M" + firstname;
    }
}

//--------------------Herencia o (Inheritance)
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
    }
    move() {
    console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
    this.currentSpeed += amount;
    }
}

// Aquí hereda los atributos de la clase Vehicle, usando la palabra clave "extends".
// Con la palabras "Extends" indicamos que la clase Motorcycle es clase hija de Vehicle.
class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
    }
    doWheelie() {
    console.log("Driving on one wheel!");
    }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

//--------------------Prototipos 
/*Prototipo es una propiedad que contiene todas las propiedades
y metodos de un objeto.*/
ClassName.prototype
// Es un objeto base que siempre esta en la rama mas alta de la clase.

// Como crear un prototipo
class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }
    greet() {
    console.log("Hi there!");
    }
}

// Como agregar una funcion ala clase prototipo.
Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
};

// Se puede usar esto para llamar a las propiedades.
Person.prototype.favoriteColor = "green";

// Aqui se llaman desde la instancia de persona.
let p6 = new Person("Maria", "Saga");
console.log(p6.favoriteColor);
p6.introduce();