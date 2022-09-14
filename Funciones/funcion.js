function impresora(){
    console.log('Soy un impresora...');
}

impresora();

function suma(a,b){
    return a + b;
}

var rta = suma (87,93);

console.log(rta);

//---------------------------------------------------------
function cudratica(a, b, c){
    r1=(b*-1+Math.sqrt(Math.random()*100));
}

//---------------------------------------------------------
//suma vector...
function sumvec(a, b){
    return a+b;
}
var c= sumvec(3, 4);
console.log(c);

//Buscar....
var ar=[];
function buscar(vector,tam){
    for(let i=0; i < tam; i++){
        vector[i] =Math.round((Math.random())*100);
    }
    console.log(vector)
}
var c = buscar(10, 10);
console.log(c)