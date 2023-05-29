export default class Cliente{ //cliente terminado
    constructor(dni, nombreCompleto, nroCelular){
        this.dni = dni;
        this.nombreCompleto = nombreCompleto;
        this.nroCelular = nroCelular;
    }
    getNombre(){
        return this.nombreCompleto
    }
}