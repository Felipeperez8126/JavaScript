/* hacer desviacion estandar de arreglos con funciones(media, etc)
Ordenar de mator stock a menor y el promedio de precio de los productos dentro de un arreglo de acuerdo nuestra pagina web.
Calcular ganacia de producto de acuerdo a la cantidad de hay, cada una es una función ue va dentro de un función más grande que hay que llamar como callbacks.
Leer paginas 349-354(Capitulo callbacks)*/

function dev(arr){
  // Creando la media con Array.reduce
  let mean = arr.reduce((acc, curr)=>{
    return acc + curr
  }, 0) / arr.length;
   
  // Asignación (valor - media) ^ 2 a cada elemento de la matriz
  arr = arr.map((k)=>{
    return (k - mean) ** 2
  })
   
  // Cálculo de la suma de la matriz actualizada
 let sum = arr.reduce((acc, curr)=> acc + curr, 0);
  
 // Cálculo de la varianza
 let variance = sum / arr.length
  
 // Devolviendo la desviación estándar
 return Math.sqrt(sum / arr.length)
}
 
console.log(dev([1, 2, 3, 4, 5]))
console.log(dev([23, 4, 6, 457, 65, 7, 45, 8]))