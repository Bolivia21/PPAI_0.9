import OpcionValidacion from "./opcionValidacion.js";
export default class Validacion{
    constructor(audioMensajeValidacion,nombre,nroOrden,opcionesValidacion){
        this.audioMensajeValidacion = audioMensajeValidacion;
        this.nombre = nombre;
        this.nroOrden = nroOrden;
        this.opcionesValidacion = opcionesValidacion;
    }
    getDatosValidaciones(){
        const datosValidacion = {
            nombre: this.nombre,
            audioMensajeValidacion: this.audioMensajeValidacion,
            nroOrden: this.nroOrden,
            opciones: []
        }
        for (const opcion of this.opcionesValidacion) {
            datosValidacion.opciones.push({
                descripcion: opcion.getDescripcion()
            })
        }
        
        return datosValidacion
    }
    esOpcionCorrecta(seleccionOpcion){
        const opcion = this.opcionesValidacion.map((op) => {
            if (op.descripcion == seleccionOpcion) {
                return op
            }
        })
        return opcion.esCorrecta()
}
}