class Publicacion{
    constructor(titulo, precio){
        this._titulo=titulo;
        this._precio=precio;
    }

    set titulo(titulo){
        this._titulo=titulo;
    }
    set precio(precio){
        this._precio=precio;
    }

    get titulo(){
        this._titulo;
    }
    get precio(){
        this._precio;
    }

    DatosPublicacion(){
        return `        Titulo: ${this._titulo}
        Precio: ${this._precio}
        --------------------------------------`
    }
}
const publi=new Publicacion();
console.log(typeof(publi));

class Libro extends Publicacion{
    constructor(titulo, precio, numeropaginas){
        super(titulo, precio);
        this._numeropaginas=numeropaginas;
    }

    set numeropaginas(numeropaginas){
        this._numeropaginas=numeropaginas;
    }

    get numeropaginas(){
        this._numeropaginas;
    }

    DatosLibro(){
        return `        Titulo: ${this._titulo}
        Precio: ${this._precio}
        Numero de paginas: ${this._numeropaginas}
        --------------------------------------`;
    }
}

class ReproductorCD extends Publicacion{
    constructor(titulo, precio, tiemporeproduccion){
        super(titulo, precio, tiemporeproduccion);
        this._tiemporeproduccion=tiemporeproduccion;
    }

    set tiemporeproduccion(tiemporeproduccion){
        this._tiemporeproduccion=tiemporeproduccion;
    }

    get tiemporeproduccion(){
        this._tiemporeproduccion;
    }
    DatosReproductor(){
        return `        Titulo: ${this._titulo}
        Precio: ${this._precio}
        Numero de paginas: ${this._tiemporeproduccion}`;
    }
}
const nuevapublic=new Publicacion ('nose', 10000);
const nuevolibro=new Libro('Luy y Oscuridad', 25000, 250);
const nuevarepro=new ReproductorCD('Luz y Oscuridad', 25000, '02:35:00');
console.log(nuevapublic.DatosPublicacion());
console.log(nuevolibro.DatosLibro());
console.log(nuevarepro.DatosReproductor());