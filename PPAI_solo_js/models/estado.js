export default class Estado{
    constructor(nombre){
        this.nombre = nombre;
    }
    esEnCurso() {
        return this.nombre === "EnCurso";
    }

    esFinalizado(estados){
        return this.nombre === "Finalizada"
    }
}