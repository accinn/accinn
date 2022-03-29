// requerir modulo F5
const fs = require('fs'); //'fs' contiene funciones
const { get } = require('http');
const { traceDeprecation } = require('process');
const { isNullOrUndefined } = require('util');
const filePath = './tareas.json'; // pasa como un arch cualquiera y se diferencia del require
const fileEncoding = 'utf-8';

// consumir/leer el archivo tareas.json
const fileTextContent= fs.readFileSync(filePath, fileEncoding); //'fileEncoding' para saber que tipo de (str, num, etc)
//console.log(fileTextContent) => muestra el archivo tareas.json tal cual esta

// decido parsea el contenido y convertirlo en datos javascript, los datos van a ser un array de tareas
const tasks = JSON.parse(fileTextContent);
//console.log(tasks); => muestra a los arrays ordenados

// listar las tareas por terminal
    //recorrer el array de tares => por c/ tarea imprimo el mensaje

// for (let i = 0; i < tasks.length; i++){
//     const currentTask = tasks[i]; // es la posicion actual
//     console.log(currentTask.titulo + " [" + currentTask.estado + "]");
// } // => copila de forma de listar.

function getTasks(){
    const fileTextContent= fs.readFileSync(filePath, fileEncoding);
    const tasks = JSON.parse(fileTextContent);
    return tasks
}

function listar(){
    const tasks = getTasks();
    for (let i = 0; i < tasks.length; i++){
    const currentTask = tasks[i]; 
    console.log(currentTask.titulo + " [" + currentTask.estado + "]");}
}

const action = process.argv[2]; // el '2' es el argumento siguiente a archivo.js

console.log('Mi accion es: ' + action) // => poniendo en terminal node apps.js *palabra* y devuelve>> *palabra* => para que devuelvea una oracion, la misma debe escribirse con '*oracion*'

switch (action){
    case 'listar':
        console.log('Listado de tareas');
        console-log('------------')
        let tareas = archivoTareas.leerArchivo();
        tareas.array.forEach(element => {
            
        });
    break;
    //crear un nuevo case llamado crear
    // obtengo el titulo así node app.js crear 'una nueva tarea'
    case 'crear':
        //nueva variable nuevaTarea = { titulo: 'una nueva tarea', estado : "pendiente"}
        //invocar a la funcion 
        //archivoTareas.guardarTarea(nuevaTarea)
        let tituloTareaNueva = process.argv[3];
        let nuevaTarea ={
            titulo : tareaIngresada,
            estado: "Pendiente"
        }
        funcionesTareas.guardarTarea(nuevaTarea)
    break;
    case undefined: 
    console.log('Atención - tienes que pasar una acción')
    break;
    default: 
    console.log('No entiendo que quieres hacer');
    break;
    //crear un caso 'filtrar' q verifique que haya ingresado o terminado o en progreso o en pendiente
    //retornar las tareas q cumplkan con la condicion de busqueda
}
// shift -> saca un elem del inicio
//let otroHeroeEliminado = heroes.shift();

//console.log('Lista completa de heroes', heroes);

//unshift -> insertar un elemento al ppio
// indexOf -> posicion de un elem en el array o -1 si no lo encuentra
// console.log(heroes.superhero)
