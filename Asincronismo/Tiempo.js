console.log('Hola');
//lo que hace setTimeout es retrasar un poco la ejecucion de una instancia por milisegundos (1 segundo son ='1000' milisegundos).
//settimeout con funcion flecha.
setTimeout(() => {
    console.log('interrupción por timeout');
}, 2000);
//settimeout sin funcion flecha.
setTimeout(function() {
    console.log('settimeout con funcion clasica');
}, 1000);

function externa(){
    console.log('soy externa al settimeout');
}
setTimeout(externa, 1000);

console.log('Mundo')

function saludos(){
    console.log('Hola mundo');
}
setTimeout(saludos);
console.log('debo ejecutarme antes del timeout');
function saludos(nombre, rol){
    console.log(`Hola, mi nombre es ${nombre}`);
    console.log(`Yo soy ${rol}`);
}
saludos('Juan', 'Medico');

setTimeout(saludos, 3000, 'Nathan','Programador');

/*escriba un settimeout dentro de un for que se repitan n veces
imprima la variable dentro del ciclo luego de otra ejecucion fuera de set y explique el comportamiento.
alterne el ejercisio usando let y var dentro de la variable del ciclo*/
var n = 10;

for (let i = 1; i < n + 1; i++) {  
    if(i < n){
        setTimeout(function() {
        }, 2000);  
        console.log(`${i}`);
    }
}

/* llenar un arreglo con n numeros.  */
console.log(Math.round((Math.random())*100));

/* hacer una funcion para llenar un arreglo con numeros aleatorios, esa funcion se la van a pasar a un settimeout que dure 3 segundos
miestras transcurren esos 3 segundos llenar un vector de numeros '1' a travez de un funcion*/
var vector = [];
function aleatorio(){
    setTimeout(() => {
        for(let i = 0; i < 10; i++){
            vector [i] = Math.round((Math.random())*100);           
        }
        console.log(vector);
    }, 3000);
}
function arreglo(){
    for(let i = 0; i < 10; i ++){
        vector [i] = 1;
    }
    console.log(vector);
}
aleatorio();
arreglo();

//Misión: porque cambia el let y el var.
for(let j = 0; j < 10; j++){
    setTimeout(() => {
        console.log(j);
    }, (1000*j));
}
setInterval(() => {
    console.log('Amo el SENA');
}, 1000);

// Repetir con el intervalo de 2 segundos.
let timerId= setInterval(() => console.log('tick'), 2000);

// Después de 5 segundos parar.
setTimeout(() => {
    clearInterval(timerId);
    //console.log('stop');
}, 5000);
/* Hacer que un arreglo se llene aleatoriamente de 15 elementos se imprima infinitamente, poner eso en un setinterval que valla imprimiendo uno por uno, y cuando llegue al ultimo reinicie*/
var vector = [];
function aleatorio(){
    setTimeout(() => {
        for(let i = 0; i < 10; i++){
        vector [i] = Math.round((Math.random())*100);           
        }
    }, 1000);

    let timerId= setInterval(() => console.log(vector), 2000);
}
aleatorio(); 

// Ejercicio resuelto por el profesor.
var vec=[];
for (let i = 0; i < 10 + 1; i++) {
    vec [i]=Math.round((Math.random())*100);
}

var k=0;
    setInterval(() => {
       console.log(vec[k]);
       k++;
       k==10?k=0:k=k;
    }, (1000));

for (let i = 0; i < vec.length; i++) {
    setTimeout(() => {
        console.log(vec[k]);
    }, timeout);
}
//callbacks-------
function pruebacallback(callback1, callback2, name){
    callback1(name);
    setTimeout(() => {
       console.log('dentro de pruebacallback'); 
    }, 3000);
    callback2(name);
}
function saludo(nombre){
    console.log(`Hola ${nombre}`);
}

function cuentaletras(nombre){
    console.log(nombre.length);
}
pruebacallback(saludo,'Ana');

/*--Plato de comida--*/
console.log('Vamos hacer arroz con papa');
console.log('Por cada 2 vasos de agua es 1 de arroz');
function Arrozconpapa(arroz, papa, agua, cebolla, aceite, sal){
    setTimeout(() => {
        console.log('Colocamos 2 vasos de agua.');
        
    }, 1000);
    setTimeout(() => {
        console.log('Agregamos una cucharada de aceite.');
        
    }, 5000);
    setTimeout(() => {
        console.log('Agregamos una cucharada de sal.');
        
    }, 5000);
    setTimeout(() => {
        console.log('Pelamos una cebolla .');
       
    }, 5000);
}
Arrozconpapa();
