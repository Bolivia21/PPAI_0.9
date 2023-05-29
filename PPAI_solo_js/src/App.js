import { GestorRespuestaOperador } from "./gestor.js";
import OpcionValidacion from "../models/opcionValidacion.js";
import PantallaRespuestaOperador from "./pantallaRespuestaOperador.js";
import Validacion from "../models/validacion.js";
import { Llamada } from "../models/llamada.js";

const llamada = new Llamada(null, null, null, null, null, null, null, null, null, null, null, null)
console.log(llamada)

//
const gestor = new GestorRespuestaOperador()
gestor.RegistrarRespuestaOperador

// Objeto tabla 
const pantallaNueva = new PantallaRespuestaOperador()
pantallaNueva.mostrarDatosLlamada('Juan Perez', 'Categoria 1', 'Opcion 5', 'Subopcion 769');

// Muestra de validaciones con opciones
const opciones_1 = new OpcionValidacion(true, 'Toto')
const opciones_2 = new OpcionValidacion(false, 'Tobi')
const opciones_3 = new OpcionValidacion(false, 'Benja')
const vector_opciones = []
vector_opciones.push(opciones_1, opciones_2, opciones_3)

const opciones_4 = new OpcionValidacion(true, 'INSL')
const opciones_5 = new OpcionValidacion(false, 'IGSM')
const opciones_6 = new OpcionValidacion(false, 'ESCMB')
const vector_opciones2 = []
vector_opciones2.push(opciones_4, opciones_5, opciones_6)

const opciones_7 = new OpcionValidacion(false, 'Colmenares 178')
const opciones_8 = new OpcionValidacion(true, 'Jujuy 250')
const opciones_9 = new OpcionValidacion(false, 'Salta 110')
const vector_opciones3 = []
vector_opciones3.push(opciones_7, opciones_8, opciones_9)

const validacion1 = new Validacion('101010', 'Nombre de tu primer perro.', vector_opciones)
const validacion2 = new Validacion('100010', 'Colegio de primaria.', vector_opciones2)
const validacion3 = new Validacion('100001', 'Direccion de tu primera casa.', vector_opciones3)

const vector_validaciones = [validacion1, validacion2, validacion3]

pantallaNueva.mostrarValidaciones(vector_validaciones)

// DOM Events

pantallaNueva.tomarSeleccionOpcion('validacion1', 'opcion1', vector_opciones, gestor)
pantallaNueva.tomarSeleccionOpcion('validacion2', 'opcion2', vector_opciones2, gestor)
pantallaNueva.tomarSeleccionOpcion('validacion3', 'opcion3', vector_opciones3, gestor)

pantallaNueva.tomarDescripcionOperador(llamada)
pantallaNueva.cancelar()

