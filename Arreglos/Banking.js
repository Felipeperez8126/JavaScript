class Banking{
    constructor(nombre, documento, numerodeposito){
        this._nombre=nombre;
        this._documento=documento;
        this._numerodeposito=numerodeposito;
    }

    set nombre (nombre){
        this._nombre=nombre;
    }
    set documento(documento){
        this._documento=documento;
    }
    set numerodeposito(numerodeposito){
        this._numerodeposito=numerodeposito;
    }

    get nombre(){
        return this._nombre;
    }
    get documento(){
        return this._documento;
    }
    get numerodeposito(){
        return this._numerodeposito;
    }

    DatosCuenta(){
        return `Nombre: ${this._nombre} Ndocumet: ${this._documento} Ndeposito: ${this._numerodeposito}`;
    }
}
const cuenta=new Banking();
console.log(typeof(cuenta));

class Ahorros extends Banking{
    constructor(nombre, documento, numerodeposito, ahorro){
        super(nombre, documento, numerodeposito);
        this._ahorro=ahorro;
    }

    set ahorro(ahorro){
        this.ahorro=ahorro;
    }

    get ahorro(){
        return this._ahorro;
    }
}

class Corrientes extends Banking{
    constructor(nombre, documento, numerodeposito, saldo){
        super(nombre, documento, numerodeposito);
        this._saldo=saldo;
    }

    set saldo(saldo){
        this.saldo=saldo;
    }

    get saldo(){
        return this._saldo;
    }
}
const cuen1=new Ahorros('Juan',3145145, 1917345, 100000);
const cuen2=new Corrientes('Maria', 111111, 501, 250000);
console.log(cuen1.DatosCuenta());
console.log(cuen1._ahorro);
console.log(cuen2.DatosCuenta());
console.log(cuen2._saldo);