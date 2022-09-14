class Descuento{
    constructor (codigo,descuento,valor_descuento){
        this._codigo=codigo;
        this._descuento=descuento;
        this._valor_descuento=valor_descuento;
    }
    set codigo(codigo){
        this._codigo=codigo;
    }
    set descuento(descuento){
        this._descuento=descuento;
    }
    set valor_descuento(valor_descuento){
        this._valor_descuento=valor_descuento;
    }
    get codigo(){
        return this._codigo;
    }
    get descuento(){
        return this._descuento;
    }
    get valor_descuento(){
        return this._valor_descuento;
    }
}
module.exports = Descuento;