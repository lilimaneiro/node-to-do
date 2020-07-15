// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
// const { crear } = require('./por-hacer/por-hacer');
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

// console.log(argv);

let command = argv._[0];

switch (command) {
    case 'crear':
        crear(argv.descripcion);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=======Por hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);

        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('comando no reconocido');
        break;
}