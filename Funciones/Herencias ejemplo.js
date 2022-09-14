class Usuario{
    constructor(id, nombre, edad){
        this._id=id;
        this._nombre=nombre;
        this._edad=edad;
    }
}
class Estudiante extends Usuario{
    constructor(id, nombre, edad, ficha, programa){
        super(id, nombre, edad);
        this._ficha=ficha;
        this._programa=programa;
    }
}
var e1 = new Estudiante(111,'Juan Perez', 18,2237756, 'adsi');
var e2 = new Estudiante(112,'Ana Herrera', 18,2237756, 'adsi');

class Moto{
    constructor(placa, estudiante){
        this._placa=placa;
        this._estudiante=estudiante;
        //const objetoIntermedio=new Estudiante();
    }
}
//realcion TIENE - UN formato sencillo
var m1=new Moto('se-123', e1);
console.log(m1);

//relacion TIENE - UN formato compuesto
class Grupo{
    constructor(codGrupo, estudiantes){
        this._codGrupo=codGrupo;
        this._estudiantes=estudiantes;
    }
    incorporar(estudiantes){
        this._estudiantes=estudiantes;
    }
}
var g1=[];
var grupo1=new Grupo(909,g1);
console.log(grupo1);
grupo1.incorporar(e1);
grupo1.incorporar(e2);
console.log(grupo1);
