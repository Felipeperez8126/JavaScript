const Producto = require("./Envios de proyecto/Producto");
var arr = [];
const Producto1 = new Producto(1234, 0001, 4500000, 'Hp Pavilion 256GB','Procesador: RYZEN 5 5800h RAM: 16GB Pantalla: 15,6 Pulgadas Resolución de pantalla: FHD Targeta de video: Nvidia GeForce GTX 1650 Ti 4GB','Bob Esponja','img/hp-pavilion.jkieg/kydahn.','Portatil, carga rapida, lector de huella digitales, garantia, teclado retroiluminado','Hp pavillion llego con un procesador de alta frecuencia para que puedas jugar y hacer tus trabajos.');
const Producto2 = new Producto(1234, 0002, 2500000, 'Hp Victus','Procesador: RYZEN 5 4800 RAM: 8GB Pantalla: 15,6 Pulgadas Resolución de pantalla: FHD Targeta de video: Nvidia GeForce GTX 1650 4GB','Bob Esponja','img/hp-pavilion.jkieg/kydahn.','Portatil, carga rapida, lector de huella digitales, garantia, teclado retroiluminado','Hp Victus llego con un procesador de alta frecuencia para que puedas jugar y hacer tus trabajos.');
const Producto3 = new Producto(1234, 0003, 3500000, );

arr.push(Producto1.precio, Producto2.precio, Producto3.precio);
var Presupuesto = 10000000;
var Resta = 0;
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

function carritocompras(){
    return new Promise(() =>{
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

async function c1() {
    try{
    var x = await carritocompras();
    console.log(x); 
    }catch(err){
        console.log(err);
    }
  }
c1();