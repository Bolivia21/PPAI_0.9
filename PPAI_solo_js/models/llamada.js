import CambioEstado from "./cambioEstado.js";
import Cliente from "./cliente.js";
import subOpcionLlamada from "./subopcionLlamada.js";
export default class Llamada {
    constructor(encuestaEnviada,observacionAuditor,cliente,subOpcion,opcion,cambiosEstados,categoriaSeleccionada){
            this.descripcionOperador = null;
            this.detalleAccionRequerida = null;
            this.duracion = null;
            this.encuestaEnviada = encuestaEnviada;
            this.observacionAuditor = observacionAuditor;
            this.cliente = cliente //cambiar en el diag de clases
            this.subOpcion= subOpcion
            this.opcion= opcion 
            this.cambiosEstados= cambiosEstados
            this.categoriaSeleccionada = categoriaSeleccionada
        }

    actualizarEstado(estado, fechaI){
            this.crearCambioEstado(estado, fechaI)
        }

    crearCambioEstado(estado,fechaI){
        const cambioEstado = new CambioEstado(fechaI,estado)
        this.cambiosEstados.push(cambioEstado)
    }

    getEstadoActual(){
            const actual= this.cambioEstado.pop()
            return actual
    }

    obtenerDuracionLlamada(fechaFinLlamada){
        let fechaIniLlamada = null
        for (let cambioEstado of this.cambiosEstados) {
            if (cambioEstado.esIniciada()) {
                fechaIniLlamada = cambioEstado.fechaHoraInicio
            }
        }

        this.duracion = this.calcularDuracion(fechaIniLlamada, fechaFinLlamada)
    }

    getValidaciones(){
        return this.subOpcion.getValidaciones()
    }

    getNombreCliente(){
            return this.cliente.getNombre()
    }

    getDatosLlamada(){
        return {
            opcion: this.opcion,
            subOpcion: this.subOpcion,
            categoriaSeleccionada: this.categoriaSeleccionada
        }
    }
    esOpcionCorrecta(validacion, seleccionOpcion){
        return this.subOpcion.esOpcionCorrecta(validacion, seleccionOpcion)
    }
    setDescripcionOperador(descrip){
        this.descripcionOperador = descrip
    }
    calcularDuracion(fechaIni, fechaFin) {
        this.duracion = (fechaFin.getTime() - fechaIni.getTime()) / 1000 //divido por 1000 porque se calcula en milisegundos
    }
}

