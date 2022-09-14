//1. Determinar los divisores de un numero...
var c = 1;
function divisores(n){
    while (c <= n){
        if(n%c==0){
            console.log( c );
        }
        c++;
    }
}
divisores(20);

//2. Determinar si un numero es o no primo...
var valor = true;
function primo(n){
    for(var i = 2; i < n / 2; i++){
        if(n % i === 0){
            valor = false;
        }
    }
    
    if(valor){
        console.log(`${n} El numero es primo`);
    } else {
        console.log(`${n} El numero no es primo`);
    }
}
primo(11);

//3. ¿Cuales y cuantos son los numeros primos comprendidos entre 1 y 1000?...
var valor = true;
var contador = 1;
function primo(n){
    while(contador <= n){
        for(var i = 2; i < contador / 2; i++){
            if(contador % i === 0){
                valor = false;
            }
        }
        if(valor){
            console.log(n);
        }
        contador++;
    }
}
primo(1000);
//----------------------
var c = 2, d;
function divisores(n){
    d = c / 2;
    while (c <= n){
        if(c % n === 0){
            console.log( c );
        }
        c++;
    }
}
divisores(1000);
//4. Calcular la operecio X elevado a la n sin utilizar la funcion pow...
function potencia(n){
    c = n * n;
}
potencia( 18 );
console.log(c);
//-----------------------
var p = (n) => c = n*n;
p(18);
console.log(c)
/*5. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el
valor del medio es 11. No use operadores lógicos*/
function medio(a, b, c){
    if(a != b && a != c && b != c ){
        if((a > b && a < c)||(a < b && a > c)){
            console.log(`El numero del medio es ${a}`);
        }else{
            if((b > a && b < c)||(b < a && b > c)){
                console.log(`El numero del medio es ${b}`);
            }else{
                if(c >a && c < b){
                    console.log(`El numero del medio es ${c}`);
                }
            }
        }
    }else{
        console.log('Los numeros no son diferentes porfavor ingrese numero diferentes...')
    }
}
medio(11, 2, 1000);
/*6. Escribe un programa que pida tres números y que escriba si son los tres
iguales, si hay dos iguales o si son los tres distintos*/
function igual(a, b, c){
    if((a && b && c)){
        if(a == b && a == c && b == c){
            console.log(`Hay 3 numero iguales`);
        }else{
            if((a ==b)||(b == c)||(a == c)){
                console.log(`Hay 2 numero iguales`);
            }
        }
    }
}
igual(2, 1, 2);
/*7. Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número
exceda los límites emita un mensaje y finalice el programa*/