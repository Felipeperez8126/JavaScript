class especificaciones{
    constructor(codigo,infbasica,ctecnicas,detalles,cfisicas){
    this._codigo=codigo;
    this._infbasica=infbasica;
    this._ctecnicas=ctecnicas;
    this._detalles=detalles;
    this.c_fisicas=cfisicas;
    }
    set codigo(codigo){
        this._codigo=codigo;
    }
    set infbasica(infbasica){
        this._infbasica=infbasica;
    }
    set ctecnicas(ctecnicas){
        this._ctecnicas=ctecnicas;
        }
     set detalles(detalles){
        this._detalles=detalles;
        }
    set cfisicas(cfisicas){
       this.cfisicas=cfisicas;
        }
        get codigo(){
            return this._codigo;
        }
        get infbasica(){
            return this._infbasica;
        }
        get ctecnicas(){
            return this._ctecnicas;
        }
        get detalles(){
            return this._detalles;
        }
        get cfisicas(){
            return this.cfisicas;
        }
    }

    module.exports=especificaciones;