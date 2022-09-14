class Poligono{
    constructor(lado, base, altura){
        this._lado=lado;
        this._base=base;
        this._altura=altura;
    }

    set lado (lado){
        this._lado=lado;
    }
    set base(base){
        this._base=base;
    }
    set altura(altura){
        this._altura=altura;
    }

    get lado(){
        return this._lado;
    }
    get base(){
        return this._base;
    }
    get altura(){
        return this._altura;
    }
}
const figura=new Poligono();
console.log(typeof(figura));

class Cuadrado extends Poligono{
    constructor(lado, base, altura, numerofigura, nombre){
        super(lado, base, altura);
        this._numerofigura=numerofigura;
        this._nombre=nombre;
    }

    set numerofigura(numerofigura){
        this._numerofigura=numerofigura;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }

    get numerofigura(){
        return this._numerofigura;
    }
    get nombre(){
        return this._nombre;
    }

    DatosCuadrado(){
        var area = this._lado * this.lado;
        var perimetro = this._lado + this._lado + this._lado + this._lado;
        return `Nombre: ${this._nombre} 
        numerofigura: ${this._numerofigura} 
        Lado: ${this._lado}
        Base: ${this._base}
        Altura: ${this._altura}
        ------------------------
        Area: ${area}
        Perimetro: ${perimetro}
        `
    }
}

class Triangulo extends Poligono{
    constructor(lado, base, altura, numerofigura, nombre){
        super(lado, base,altura);
        this._numerofigura=numerofigura;
        this._nombre=nombre;
    }
    
    set numerofigura(numerofigura){
        this._numerofigura=numerofigura;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }

    get numerofigura(){
        return this._numerofigura;
    }
    get nombre(){
        return this._nombre;
    }

    DatosTriangulo(){
        var area = this._base * this._altura / 2;
        var perimetro = this._lado + this._lado + this._lado;
        return `Nombre: ${this._nombre} 
        numerofigura: ${this._numerofigura} 
        Lado: ${this._lado}
        Base: ${this._base}
        Altura: ${this._altura}
        ------------------------
        Area: ${area}
        Perimetro: ${perimetro}
        `
    }
}

class Rectangulo extends Poligono{
    constructor(lado, base, altura, numerofigura, nombre){
        super(lado, base,altura);
        this._numerofigura=numerofigura;
        this._nombre=nombre;
    }
    
    set numerofigura(numerofigura){
        this._numerofigura=numerofigura;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }

    get numerofigura(){
        return this._numerofigura;
    }
    get nombre(){
        return this._nombre;
    }

    DatosRectangulo(){
        var area = this._base * this.altura;
        var perimetro = (this._base * 2) + (this._altura * 2);
        return `Nombre: ${this._nombre} 
        numerofigura: ${this._numerofigura} 
        Lado: ${this._lado}
        Base: ${this._base}
        Altura: ${this._altura}
        ------------------------
        Area: ${area}
        Perimetro: ${perimetro}`
    }
}
const pol1=new Cuadrado(5, 5, 5, 1, 'Cuadrado');
const pol2=new Triangulo(5, 3, 4, 2, 'Triangulo');
const pol3=new Rectangulo(5, 10, 5, 3, 'Rectangulo');
console.log(pol1.DatosCuadrado());
console.log(pol2.DatosTriangulo());
console.log(pol3.DatosRectangulo());