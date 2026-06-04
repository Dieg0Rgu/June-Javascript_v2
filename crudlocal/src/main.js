let listaEmpleados = [];

const objEmpleado = {
    id : "",
    nombre: "",
    puesto : ""
}

let editando = false;

const formulario = document.querySelector('#formulario')
const nombreInput = document.querySelector('#nombre');
const puestoInput = document.querySelector('#puesto');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    if(nombreInput.value === "" || puestoInput. value === "") {
        alert("Todos los campos son obligatorios.")
        return;
    }

    if(editando){
        // editarEmpleando();
        editando = false;
    } else {
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreInput.value;
        objEmpleado.value = puestoInput.value;

        agregarEmpleado();
    }
}

function agregarEmpleado(){
    listaEmpleados.push((...objEmpleado));
    
    mostrarEmpleados();
}

function mostrarEmpleados(){
    const empleados = document.querySelector('.empleados')

    listaEmpleados.forEach(empleado => {
        const (id, nombre, puesto) = empleado;
    })
}