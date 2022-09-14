var n = 11;
var m = true;
for(var i = 2; i < n / 2; i++){
    if(n % i === 0){
      m = false;  
    }
}
if(m){
    console.log(`${n} El numero es primo`);
}
else{
    console.log(`${n}  El numero no es primo`);
}
