var num = [];
var suma;
var ac = 0;
var prom;
var maximo = 0;
var minimo = 0;

for (let i= 0; i <= 19; i++){
    num [i] = Math.round((Math.random())*100);
}
console.log(`El arreglo es: ${num}`);

for (let i = 0; i <= 19; i++){
    suma = num [i];
    ac += suma
}
console.log(`La suma total es: ${ac}`)

for (let i = 0; i <= 19; i++){
    suma = num [i];
    ac += suma;
    prom = ac / 20 / 2;
}
console.log(`El promedio total es: ${prom}`)

for(let i = 0; i < 19; i ++){
    if (num [i] > maximo){
        maximo = num [i];
    }
}
for(let i = 0; i < 19; i ++){
    if (num [i] < minimo){
        minimo = num [i];
    }
}
console.log(`El valor maximo es: ${maximo}, el valor minimo es: ${minimo}`)

