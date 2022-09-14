const Producto = require("./Envios de proyecto/Producto");
var arr = [];
const Producto1 = new Producto(1234, 0001, 4500000, 'Hp Pavilion 256GB','Procesador: RYZEN 5 5800h RAM: 16GB Pantalla: 15,6 Pulgadas Resolución de pantalla: FHD Targeta de video: Nvidia GeForce GTX 1650 Ti 4GB','Bob Esponja','img/hp-pavilion.jkieg/kydahn.','Portatil, carga rapida, lector de huella digitales, garantia, teclado retroiluminado','Hp pavillion llego con un procesador de alta frecuencia para que puedas jugar y hacer tus trabajos.');
const Producto2 = new Producto(1234, 0002, 2500000, 'Hp Victus','Procesador: RYZEN 5 4800 RAM: 8GB Pantalla: 15,6 Pulgadas Resolución de pantalla: FHD Targeta de video: Nvidia GeForce GTX 1650 4GB','Bob Esponja','img/hp-pavilion.jkieg/kydahn.','Portatil, carga rapida, lector de huella digitales, garantia, teclado retroiluminado','Hp Victus llego con un procesador de alta frecuencia para que puedas jugar y hacer tus trabajos.');
const Producto3 = new Producto(1234, 003, 3500000, );

arr.push(Producto1.precio, Producto2.precio, /*Producto3.precio*/);
var Presupuesto = 10000000;

sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

// return Total;
// const carritocompras = new Promise((resolve, reject)=>{
//     if (Producto < Presupuesto){
//         Resta = Presupuesto - Producto;
//         console.log(`Su presupuesto actual es: ` + Resta);
//     }else{
//         if (Producto > Presupuesto){
//             console.log('El presupuesto no alcanza para este producto...')
//         }
//     }
//     Suma = Producto + Resta;
//     //console.log(Suma);
// })
// function carritocompras(Resta, Presupuesto){
//     return new Promise((resolve, reject) =>{
//         resolve(Total);
//         if (Total < Presupuesto){
//             Resta = Presupuesto - Total;
//             console.log('Su presupuesto actual es: ' + Resta);
//         }else{
//             if (Total > Presupuesto){
//                 console.log('El presupuesto no alcanza para este producto(s)...')
//                 Resta = Presupuesto - Total;
//                 console.log('Excede por: ' + Resta);
//             }
//         }
//     })
// }
// console.log(carritocompras);

const promise = new Promise((resolve, reject) => {
    // sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    resolve(sum);
   })
   .then(value => {
    function carritocompras(Resta,){
        return new Promise((resolve, reject) =>{
            resolve();
            if (sum < Presupuesto){
                Resta = Presupuesto - sum;
                console.log('Su presupuesto actual es: ' + Resta);
            }else{
                if (sum > Presupuesto){
                    console.log('El presupuesto no alcanza para este producto(s)...')
                    Resta = Presupuesto - sum;
                    console.log('Excede por: ' + Resta);
                }
            }
        })
    }
    carritocompras();
})