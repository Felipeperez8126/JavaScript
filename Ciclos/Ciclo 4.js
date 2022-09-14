var n = 1000;
var s = 0;
var c = 0;
for(let i = 1; i <= n; i+=1){
    for(let n = 1; n < i; n+=1){
        if(i % n == 0){
            s += n;
        }
    }
    if(s === i) {
        console.log(`${i} es un numero perfecto`)
        c += 1;
    }
    s = 0
}
console.log(`Hay ${c} numeros prefectos`);