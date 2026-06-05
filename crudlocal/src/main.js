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
        objEmpleado.puesto = puestoInput.value;

        agregarEmpleado();
    }
}

function agregarEmpleado(){
    listaEmpleados.push({...objEmpleado});

    mostrarEmpleados();
}

function mostrarEmpleados(){
    const empleados = document.querySelector('#empleados')
    empleados.innerHTML = '';

    listaEmpleados.forEach(empleado =>{
        const {id, nombre, puesto} = empleado;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${puesto}`;
        parrafo.dataset.id = id;

        const editBtn = document.createElement('button');
        // editarBoton.onclick = () => cargarEmpleado();
        editBtn.textContent = 'Editar';
        editBtn.classList.add('btn', 'btn-editar');
        parrafo.append(editBtn);

        const deleteBtn = document.createElement('button');
        // eliminarBoton.onclick = () => eliminarEmpleado();
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.classList.add('btn', 'btn-eliminar');
        parrafo.append(deleteBtn);

        const hr = document.createElement('hr')

        empleados.appendChild(parrafo);
        empleados.appendChild(hr);
    });
}