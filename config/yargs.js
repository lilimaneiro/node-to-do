const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    demand: true,
    alias: 'd'
};

const argv = require('yargs')
    .command('actualizar', 'actualiza el estado completado de una tarea', { descripcion, completado })
    .command('crear', 'crear un elemento por hacer', { descripcion })
    .command('borrar', 'elimina un elemento por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}