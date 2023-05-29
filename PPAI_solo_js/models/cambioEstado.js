export default class CambioEstado {
    constructor(fechaHoraInicio, estado){
        this.fechaHoraInicio = fechaHoraInicio;
        this.estado = estado
    }
    esIniciada(){
        return this.estado === "iniciada"
    }
    
    getFechaHoraInicio(){
        return this.fechaHoraInicio
    }
    getNombreEstado(){
        return this.estado.nombre
    }
}