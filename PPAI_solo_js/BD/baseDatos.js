import  GestorRespuestaOperador  from "../src/gestor.js";
import Llamada from "../models/llamada.js";
import subOpcionLlamada from "../models/subopcionLlamada.js";
import Cliente from "../models/cliente.js";
import Validacion from "../models/validacion.js";
import OpcionValidacion from "../models/opcionValidacion.js";
//import PantallaRespuestaOperador from "../models/pantallaRespuestaOperador.js";
import Estado from "../models/estado.js";
import CambioEstado from "../models/cambioEstado.js";
import PantallaRespuestaOperador from "../src/pantallaRespuestaOperador.js";

//onst pantallaOperador = new PantallaRespuestaOperador()

const estado1 = new Estado("Iniciada")
const estado2 = new Estado("EnCurso")
const estado3 = new Estado("Finalizada")
const estados = [estado1, estado2, estado3]
export default estados;

const cambioEstado1 = new CambioEstado(new Date(2023, 4, 29, 17, 23), estado1)
const opcion1_val1 = new OpcionValidacion(false, "Tobi")
const opcion2_val1 = new OpcionValidacion(true, "Blocky")
const opcion3_val1 = new OpcionValidacion(false, "Floppy")
const opciones = [opcion1_val1, opcion2_val1, opcion3_val1]

const validacion_1 = new Validacion("100110", "Seleccione el nombre de su primer perro", 1, opciones)

const opcion1_val2 = new OpcionValidacion(false, "ISMC")
const opcion2_val2 = new OpcionValidacion(false, "ISMM")
const opcion3_val2 = new OpcionValidacion(true, "ESCMB")
const opciones2 = [opcion1_val2, opcion2_val2, opcion3_val2]

const validacion_2 = new Validacion("110100", "Seleccione el nombre de su escuela secundaria", 2, opciones2)

const opcion1_val3 = new OpcionValidacion(false, "Salta 1155")
const opcion2_val3 = new OpcionValidacion(true, "Jujuy 3975")
const opcion3_val3 = new OpcionValidacion(false, "Mendoza 180")

const opciones3 = [opcion1_val3, opcion2_val3, opcion3_val3]

const validacion_3 = new Validacion("101110", "Seleccione la direccion de su primera casa", 3, opciones3)

const validaciones = [validacion_1, validacion_2, validacion_3]

const subOpcion_selecc = new subOpcionLlamada("SubOpcion 3", "5", validaciones)


const cliente_llamada = new Cliente("20255987", "Juan Perez", "3518888888")


const llamada_actual = new Llamada(null, null, cliente_llamada,subOpcion_selecc, "Opcion 1", [cambioEstado1], "Categoria 3")

const pantalla = new PantallaRespuestaOperador()

const gestor = new GestorRespuestaOperador(llamada_actual)

// Ejecucion del C.U (sin considerar la pantalla)
console.log(gestor.getFechaActual())
const fecha = gestor.getFechaActual()

console.log(gestor.buscarEstadoEnCurso(estados))
const estadoCurso = gestor.buscarEstadoEnCurso(estados)

llamada_actual.actualizarEstado(estadoCurso, fecha)
console.log(llamada_actual.cambioEstado)

gestor.buscarValidaciones()
console.log(gestor.validaciones)



llamada_actual.getNombreCliente()
console.log(llamada_actual.cliente)