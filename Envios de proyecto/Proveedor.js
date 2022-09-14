class Proveedor{
    constructor(id,nombre,apellido,direccion,telefono,email,N_empresa,NIT){
        this._id=id;
        this._nombre=nombre;
        this._apellido=apellido;
        this._direccion=direccion;
        this._telefono=telefono;
        this._email=email;
        this._N_empresa=N_empresa;
        this._NIT=NIT;
    }
    set id(id){
        this._id=id;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    set direccion(direccion){
        this._direccion=direccion;
    }
    set telefono(telefono){
        this._telefono=telefono;
    }
    set email(email){
        this._email=email;
    }
    set N_empresa(N_empresa){
        this._N_empresa=N_empresa;
    }
    set NIT(NIT){
        this._NIT=NIT;
    }
    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get direccion(){
        return this._direccion;
    }
    get telefono(){
        return this._telefono;
    }
    get email(){
        return this._email;
    }
    get N_empresa(){
        return this._N_empresa;
    }
    get NIT(){
        return this._NIT;
    }
}
module.exports = Proveedor;
