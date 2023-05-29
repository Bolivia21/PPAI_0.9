export default class CambioEstado {
    constructor(fechaHoraInicio, estado){
        this.fechaHoraInicio = fechaHoraInicio;
        this.estado = estado
    }
    esIniciada(){
        return this.estado.nombre === "Iniciada"
    }
    
    getFechaHoraInicio(){
        return this.fechaHoraInicio
    }
    getNombreEstado(){
        return this.estado.nombre
    }
}