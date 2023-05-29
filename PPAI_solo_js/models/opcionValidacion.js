export default class OpcionValidacion{
    constructor(correcta, descripcion){
        this.correcta = correcta;
        this.descripcion = descripcion;
    }

    getDescripcion(){
        return this.descripcion
    }

    esCorrecta(){
        return this.correcta
    }
    setDescripcion(desc){
        this.descripcion = desc
    }
    
}
