class Cliente {
    constructor(id, nombres, apellidos, telefono, email, direccion){
        this._id = id;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._telefono = telefono;
        this._email = email;
        this._direccion = direccion;
    }

    set id(id){
        this._id = id;
    }
    set nombres(nombres){
        this._nombres = nombres;
    }
    set apellidos(apellidos){
        this._apellidos = apellidos;
    }
    set telefono(telefono){
        this._telefono = telefono;
    }
    set email(email){
        this._email = email;
    }
    set direccion(direccion){
        this._direccion = direccion;
    }

    get id(){
        return this._id;
    }
    get nombres(){
        return this._nombres;
    }
    get apellidos(){
        return this._apellidos;
    }
    get telefono(){
        return this._telefono;
    }
    get email(){
        return this._email;
    }
    get direccion(){
        return this._direccion;
    }
}
module.exports = Cliente;