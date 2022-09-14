class Categoria{
    constructor (codigocategoria, nombre){
        this._codigocategoria = codigocategoria;
        this._nombre = nombre;
    }
    set codigocategoria (codigocategoria) {
        this._codigocategoria = codigocategoria;
    }
    set nombre (nombre) {
        this._nombre = nombre;
    }

    get codigocategoria () {
        return this._codigocategoria;
    }
    get nombre () {
        return this._nombre;
    }
}
module.exports = Categoria;