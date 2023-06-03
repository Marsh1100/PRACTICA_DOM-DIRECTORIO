
//Elementos del document
document.addEventListener('dblclick',volver);
function volver(){
    document.getElementById('nuevo-empleado').style.display='none';
    document.getElementById('eliminar-empleado').style.display='none';
    document.getElementById('botones').style.display='block';

    document.getElementById('inicio').style.filter='';
}


// Capturar el formulario 
let nombreCompleto = document.getElementById('nombre');
let email = document.getElementById('correo');
let telefono = document.getElementById('telefono');


// Funciones de los botones AGREGAR y ELIMINAR
const botonAgregar = document.getElementById('agregar');
const botonELiminar = document.getElementById('eliminar');

botonAgregar.addEventListener('click', agregarBoton);
botonELiminar.addEventListener('click', eliminarBoton);

function agregarBoton(){
    document.getElementById('inicio').style.filter='blur(5px)';
    document.getElementById('nuevo-empleado').style.display='block';
}
function eliminarBoton(){
    document.getElementById('botones').style.display='none';
    document.getElementById('eliminar-empleado').style.display="flex"
}

//Formulario
let contador=4; //Contador para los "ID"
let form = document.getElementById('empleado-form')
// Escuchar el evento 'submit' del formulario
form.addEventListener('submit', function(e){
    e.preventDefault(); // Evitar el envío del formulario
    e.stopPropagation()

    let numTelefono = Number(telefono.value)
    console.log(numTelefono)
    // Validar númerpo de teléfono del formulario
    if (telefono.value.length != 10 || numTelefono<0 ){
        alert("El teléfono es inválido. Por favor ingresar correctamente el número.");
        return 
    }

    //Crear elemento HTML y asignarle un ID
    let contenedor = document.getElementById('template-empleados')
    let nuevoEmpleado = document.createElement("tr");
    nuevoEmpleado.setAttribute("id",contador);
    
    contenedor.appendChild(nuevoEmpleado);

    // Después de que exista hacemos un template 
    document.getElementById(`${contador}`).innerHTML=`
    <tr>
            <th scope="row">${contador}</th>
            <td>${nombreCompleto.value}</td>
            <td>${email.value}</td>
            <td>${telefono.value}</td>
          </tr>`;
    contador +=1;

    //Inicializamos los placeholder
    /* nombreCompleto.value='';
    email.value='';
    telefono.value=''; */

    form.reset();
    
    document.getElementById('nuevo-empleado').style.display='none';
    document.getElementById('inicio').style.filter='';
    
});

// Capturar ID para eliminar
const botonId = document.getElementById('eliminar-empleado');
let id = document.getElementById('id-borrar');

botonId.addEventListener('click', function(e){
    e.preventDefault(); // Evitar el envío del formulario
    e.stopPropagation();
    let numId =  Number(id.value);
    
    if( numId!=''){
        var eliminar = document.getElementById(numId);
        if (eliminar == null || eliminar== undefined){
            alert("El número de ID no se encuentra en la lista. Por favor verificar!")
            id.value='';
            return
        }
        eliminar.parentNode.removeChild(eliminar)
        id.value='';

        document.getElementById('botones').style.display='block';
        document.getElementById('eliminar-empleado').style.display='none';

    }
    
});





