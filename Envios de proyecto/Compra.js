const Producto = require("./Producto");

class Compra extends Producto{
    constructor (codigoProducto, codigoCompra, nombre, descripcion, metododepago, precio, cantidad, descuento){
        super(codigoProducto);
        this._codigoCompra = codigoCompra;
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._metododepago = metododepago;
        this._precio = precio;
        this._cantidad = cantidad;
        this._descuento = descuento;
    }
    
    set codigoCompra(codigoCompra){
        this._codigoCompra = codigoCompra;
    }
    set nombre (nombre) {
        this._nombre = nombre;
    }
    set descripcion (descripcion) {
        this._descripcion = descripcion;
    }
    set metododepago (metododepago) {
        this._metododepago = metododepago;
    }
    set precio(precio){
        this._precio = precio;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
    set descuento(descuento){
        this._descuento = descuento;
    }

    get codigoCompra(){
        return this._codigoCompra;
    }
    get nombre () {
        return this._nombre;
    }
    get descripcion () {
        return this._descripcion;
    }
    get metododepago () {
        return this._metododepago;
    }
    get precio(){
        return this._precio;
    }
    get cantidad(){
        return this._cantidad;
    }
    get descuento(){
        return this._descuento;
    }
}
module.exports = Compra; 