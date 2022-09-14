const Cliente = require("./Cliente");

class Pago extends Cliente{
    constructor (nombres, codigopago, fechapago, precioapagar, ciudad, iva, metododepago){
        super(nombres);
        this._codigopago = codigopago;
        this._fechapago = fechapago;
        this._precioapagar = precioapagar;
        this._ciudad = ciudad;
        this._iva = iva;
        this._metododepago = metododepago;
    }

    set codigopago(codigopago){
        this._codigopago = codigopago;
    }
    set fechapago(fechapago){
        this._fechapago = fechapago;
    }
    set precioapagar(precioapagar){
        this._precioapagar = precioapagar;
    }
    set ciudad(ciudad){
        this._ciudad = ciudad;
    }
    set iva(iva){
        this._iva = iva;
    }
    set metododepago(metododepago){
        this._metododepago = metododepago;
    }

    get codigopago(){
        return this._codigopago;
    }
    get fechapago(){
        return this._fechapago;
    }
    get precioapagar(){
        return this._precioapagar;
    }
    get ciudad(){
        return this._ciudad;
    }
    get iva(){
        return this._iva;
    }
    get metododepago(){
        return this._metododepago;
    }
}

module.exports = Pago;