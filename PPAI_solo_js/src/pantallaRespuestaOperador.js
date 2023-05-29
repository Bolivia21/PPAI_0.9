class PantallaRespuestaOperador {
  constructor(gestor) {
    this.gestor = gestor
   }

  mostrarDatosLlamada(nombre, datos) {
    const tabla = document.getElementById("contTabla")
    const element = document.createElement("div");
    element.innerHTML = `
        <div id="tabla-llamadas">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">NombreCliente</th>
                <th scope="col">Categoria</th>
                <th scope="col">Opcion</th>
                <th scope="col">SubOpcion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${nombre}</td>
                <td>${datos.categoria}</td>
                <td>${datos.opcion}</td>
                <td>${datos.subopcion}</td>
              </tr>
            </tbody>
          </table>
        </div>
        `;
    tabla.appendChild(element);
  }

  mostrarValidacion(validacion, num) {
    const seccion_val = document.getElementById(`seccion_val` + num);
    let opcionesHTML = '';

    for (var i = 0; i < validacion.opciones.length; i++) {
      opcionesHTML += `
        <div class="form-group">
          <input class="form-check-input" type="radio" name="opcion${num}" id="opcion${i + 1}" value="${validacion.opciones[i].descripcion}">
          <label class="form-check-label" for="opcion1">
            ${validacion.opciones[i].descripcion}
          </label>
        </div>
      `;
    }
    

    const element = document.createElement("div");
    element.innerHTML = `
      <div class="card-header">
        <h4>${validacion.nombre}</h4>
      </div>
      <form id="validacion${num}" class="card-body">
        <div class="col" id="seccion_val${num}">
          ${opcionesHTML}
        </div>
        <input type="submit" value="Confirmar" class="btn btn-primary btn-block" />
      </form>
    `;

    seccion_val.appendChild(element);
  }

  mostrarOpcionesPorValidacion(opciones, num) {
    const seccion_opc = document.getElementById('seccion_val' + num);
    for (var i = 0; i < opciones.length; i++) {
      const element = document.createElement('div');
      element.innerHTML = `
        <div class="form-group" style="margin-left: 40px;">
          <input class="form-check-input" type="radio" name="opcion${num}" id="opcion${i + 1}" value="${opciones[i].descripcion}">
          <label class="form-check-label" for="opcion1">
            ${opciones[i].descripcion}
          </label>
        </div>
      `;
      seccion_opc.appendChild(element);
    }
  }

  solicitarSeleccionOpcion(validacion, opcion, gestor){
    this.tomarSeleccionOpcion(validacion, opcion, gestor)
  }

  tomarSeleccionOpcion(validacion, opcion, gestor) {
    document.getElementById(validacion)
      .addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que se envíe el formulario por defecto
        var opciones = document.getElementsByName(opcion);
        var opcionSeleccionada;

        for (var i = 0; i < opciones.length; i++) {
          if (opciones[i].checked) {
            opcionSeleccionada = opciones[i].value;
            break;
          }
        }

        if (gestor.verificarSeleccionOpcion(validacion, opcionSeleccionada)) {
          alert('La opcion seleccionada es correcta.');
        } else {
          alert('La opcion seleccionada es incorrecta.');
        }
      });
  }

  solicitarDescripcionOperador() {
    this.tomarDescripcionOperador(this.gestor)
  }

  tomarDescripcionOperador(gestor) {
    document.getElementById('campo-respuesta').addEventListener('submit', function (event) {
      event.preventDefault();
      const rta_str = document.getElementById('respuesta').value;
      gestor.tomarDescripcionOperador(rta_str)
      alert('La descripcion se asigno correctamente.')
    })
  }

  solicitarConfirmacionOperacion() {
    this.tomarConfirmacionOperacion(this.gestor)
  }

  tomarConfirmacionOperacion(gestor) {
    document.getElementById('campo-respuesta').addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Presione OK para confirmar.')
      gestor.tomarConfirmacionOperacion()
    })
  }

  informarExitoRegistroAccion() {
    document.getElementById('campo-respuesta').addEventListener('submit', function (event) {
      event.preventDefault();
      alert('El registro se realizo con exito.')
    })
  }


  cancelar() {
    document.getElementById('cancelar').addEventListener('click', function (event) {
      event.preventDefault();
      location.reload()
    })
  }
}

export default PantallaRespuestaOperador;