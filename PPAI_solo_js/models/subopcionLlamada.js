import Validacion from "./validacion.js"

export default class subOpcionLlamada{
    constructor(nombre, nroOrden,validacionesRequeridas){//validaciones requeridas tiene que ser un array de validaciones, cada una con los datos propios
        this.nombre = nombre;
        this.nroOrden = nroOrden;
        this.validacionesRequeridas = validacionesRequeridas

    }
    getValidaciones(){
        const validaciones = []
        for (const validacion of this.validacionesRequeridas){
        validaciones.push(validacion.getDatosValidaciones()) 
        }
        return validaciones // Cada item dentro de validaciones es un objeto con los datos de la validacion, a su vez cada validacione tiene opciones
    }
    esOpcionCorrecta(validacion, seleccionOpcion){
        return validacion.esOpcionCorrecta(seleccionOpcion)
    }

}
