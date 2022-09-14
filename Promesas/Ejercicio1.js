const promise = new Promise((resolve, reject) => {
    resolve('Star Counting');
   })
   .then(value => {
    console.log(value);
    return "une";
    })
    .then(value => {
    console.log(value);
    return "two";
    })
    .then(value => {
    console.log(value);
    return "three";
    })
    .then(value => {
    console.log(value);
    return "for";
    })
    .catch(value => { 
    console.log(value);
    })
//Promesa con numeros

const promise1 = new Promise((resolve, reject) => {
    var contador = 1
    resolve(contador);
   })
   .then(setTimeout(contador => {
    console.log(contador);
    return contador;
    }, 1000))
    .then(contador => {
    console.log(contador);
    return ++contador;
    })
    .then(contador => {
    console.log(contador);
    return ++contador;
    })
    .then(contador => {
    console.log(contador);
    return ++contador;
    })
    .catch(contador => {
    console.log(contador);
})

//segunda opción

const promise2 = new Promise((resolve, reject) => {
    var contar = 1;
    setTimeout(() => {
        console.log(contar);
    }, 1000)
    resolve();
   })
   .then(contar => {
    console.log(contar);
    return  ++contar;
    })
    .then(contador => {
    console.log(contador);
    return ++contar;
    })
    .then(contador => {
    console.log(contador);
    return ++contar;
    })
    .then(contar => {
    console.log(contar);
    return ++contar;
    })
    .catch(contar => {
    console.log(contar);
    })

//tercera opción
const promise3 = new Promise((resolve, reject) => {
    var contador = 1
    resolve(contador);
})
    .then(contador => {(setTimeout(){
    console.log(contador);
    }, 1000)
    })
    .then(setTimeout(contador => {
    console.log(contador);
    return contador;
    }, 1000))
    .then(setTimeout(contador => {
    console.log(contador);
    return contador;
    }, 1000))
    .catch(contador => {
        console.log(contador);
    })
 
