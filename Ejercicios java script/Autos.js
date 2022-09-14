class Autos{
    constructor(nsm, marca, año, precio){
        this._nsm=nsm;
        this._marca=marca;
        this._año=año;
        this._precio=precio;
    }

    set nsm(nsm){
        this._nsm=nsm;
    }
    set marca(marca){
        this._marca;
    }
    set año(año){
        this._año;
    }
    set precio(precio){
        this._precio=precio;
    }

    get nsm(){
        this._nsm;
    }
    get marca(){
        this._marca;
    }
    get año(){
        this._año
    }
    get precio(){
        this._precio;
    }
}
const vender=new Autos();
console.log(typeof(vender));

class AutoCompacto extends Autos{
    constructor(nsm, marca, año, precio, cantidadpasajero){
        super(nsm, marca, año,precio);
        this._cantidadpasajero=cantidadpasajero;
    }

    set cantidadpasajero(cantidadpasajero){
        this._cantidadpasajero=cantidadpasajero;
    }

    get cantidadpasajero(){
        this._cantidadpasajero;
    }
}
class AutodeLujo extends Autos{
    constructor(nsm, marca, año, precio, cantidadpasajero){
        super(nsm, marca, año,precio);
        this._cantidadpasajero=cantidadpasajero;
    }

    set cantidadpasajero(cantidadpasajero){
        this._cantidadpasajero=cantidadpasajero;
    }

    get cantidadpasajero(){
        this._cantidadpasajero;
    }
}

class Camionetas extends Autos{
    constructor(nsm, marca, año, precio, kgs, ejerodadas){
        super(nsm, marca, año,precio);
        this._kgs=kgs;
        this._ejerodadas=ejerodadas;
    }

    set kgs(kgs){
        this._kgs=kgs;
    }
    set ejerodadas(ejerodadas){
        this._ejerodadas=ejerodadas;
    }

    get kgs(){
        this._kgs;
    }
    get ejerodadas(){
        this._ejerodadas;
    }
}

class Vagonetas extends Autos{
    constructor(nsm, marca, año, precio, kgs){
        super(nsm, marca, año,precio);
        this._cantidadpasajero=cantidadpasajero;
        this._kgs=kgs;
    }

    set kgs(kgs){
        this._kgs=kgs;
    }

    get kgs(){
        this._kgs;
    }
}
const nuevocar1= new Autos('kgs1500', 'Aston Martin', '2021-08-07', 150000000);
console.log(nuevocar1._marca);