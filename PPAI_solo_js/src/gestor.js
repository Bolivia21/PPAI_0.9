import Llamada from "../models/llamada.js";
import Estado from "../models/estado.js";
import PantallaRespuestaOperador from "./pantallaRespuestaOperador.js";
import Estado from "../models/estado.js"
import estados from "../BD/baseDatos.js"

    export default class GestorRespuestaOperador {
        constructor(llamadaActual){
                this.llamadaActual = llamadaActual;
                this.nombreCliente = null;
                this.fechaHoraActual = null;
                this.estadoLlamada = null;
                this.validaciones = null;
                this.datosLlamadaAMostrar = null;
                this.pantalla = null
    
        }
    
        RegistrarRespuestaOperador(estados){ // En teoria todos los metodos del gestor estan aca adentro en orden de ejecucion
            this.pantalla.mostrarPantalla();//le invoco el metodo a la Pantalla
            
            this.buscarEstadoEnCurso(estados);
            this.getFechaActual();
    
            this.llamadaActual.actualizarEstado(this.estadoLlamada, this.fechaHoraActual);
    
            this.validaciones = this.buscarValidaciones(this.llamadaActual);
            this.validaciones = this.ordenarValidaciones(this.validaciones); //chequear que ordene
    
            this.nombreCliente = this.buscarNombreCliente();
    
            this.datosLlamadaAMostrar = this.llamadaActual.getDatosLlamada(); //hasta aca controlado perfecto
            this.mostrarDatosLlamada(this.nombreCliente, this.datosLlamadaAMostrar);//aca tengo dudas de donde haria el loop de validaciones
            
            this.mostrarValidaciones(this.validaciones)
            this.pantalla.solicitarDescripcionOperador()
            this.pantalla.solicitarConfirmacionOperacion()

            this.finalizar();
            this.finCasoDeUso();
        }
    
        buscarEstadoEnCurso(estados) {
            // meto en una constante el array estados, luego buso el esEncurso y si lo encuentra
            //asigna al atributo estadoEnCurso el nombre. sino lo encuentra devuelve null
            for (const estado of estados) {
            if (estado.esEnCurso()) {
                this.estadoLlamada= estado
                return estado;
            }
            }
            return null;
        }
        
        //asigno fecha y hora al atributo
        getFechaActual() {
            const fechaActual = new Date(); 
            this.fechaHoraActual = fechaActual
            return fechaActual; //retorno la fecha para ser comparada
        }
    
        buscarValidaciones(validaciones) {  
            return this.llamadaActual.getValidaciones();

        }
    
        ordenarValidaciones(validaciones) {
            this.validaciones.sort((a, b) => a.nroOrden - b.nroOrden);
          }
    
        buscarNombreCliente() {
            return this.llamadaActual.getNombreCliente()
        }
    
        mostrarDatosLlamada(nombreCliente, datosLlamada) {
            this.pantalla.mostrarDatosLlamada(nombreCliente, datosLlamada)
        }    
        
        mostrarValidaciones(validaciones) {
            for (let validacion of validaciones) {
                this.pantalla.mostrarValidacion(validacion, validacion.nroOrden)
                this.pantalla.solicitarSeleccionOpcion(validacion.nombre)
            }
        }

        verificarSeleccionOpcion(validacion, seleccionOpcion) { // verificar metodo porque me parece que esta mal
            return this.llamadaActual.esOpcionCorrecta(validacion, seleccionOpcion)
        }
    
        tomarDescripcionOperador(descripcion) {
            this.llamadaActual.setDescripcionOperador(descripcion)
        }
    
        // tomarAccionRequerida() {
    
        // }
        tomarConfirmacionOperacion() {
            this.pantalla.informarExitoRegistroAccion()
        }
        
        finalizar() {
            this.buscarEstadoFinalizado(estados);
    
            const fechaFinLlamada = this.getFechaActual();
    
            this.llamadaActual.actualizarEstado(this.estadoLlamada, fechaFinLlamada)
    
            this.obtenerDuracionLlamada(fechaFinLlamada);
        }
    
        buscarEstadoFinalizado(estados) {
            //lo mismo que esEnCurso
            for (const estado of estados) {
                if (estado.esFinalizado()) {
                    this.estadoLlamada = estado
                }
            }
        }
    
        obtenerDuracionLlamada(fechaFin) {
            this.llamadaActual.obtenerDuracionLlamada(fechaFin)
        }
    
        finCasoDeUso() {
        }
    }