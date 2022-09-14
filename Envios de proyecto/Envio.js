const Cliente = require("./Cliente");

class Envio extends Cliente{
    constructor (nombres,codigoenvio,direccionentraga,fechaenvio,metodos, estado){
        super(nombres);
        this._codigoenvio = codigoenvio;
        this._direccionentraga = direccionentraga;
        this._fechaenvio = fechaenvio;
        this._metodos = metodos;
        this._estado = estado;
    }
    set codigoenvio(codigoenvio){
        this._codigoenvio = codigoenvio;
    }
    set direccionentraga(direccionentraga){
        this._direccionentraga = direccionentraga;
    }
    set fechaenvio(fechaenvio){
        this._fechaenvio = fechaenvio;
    }
    set metodos(metodos){
        this._metodos = metodos;
    }
    set estado(estado){
        this._estado = estado;
    }

    get codigoenvio(){
        return this._codigoenvio;
    }

    get direccionentraga(){
        return this._direccionentraga;
    }

    get fechaenvio(){
        return this._fechaenvio;
    }

    get metodos(){
        return this._metodos;
    }
    get estado(){
        return this._estado;
    }
}

module.exports = Envio;