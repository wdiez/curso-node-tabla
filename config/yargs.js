const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en pantalla'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica la cantidad de elementos de la tabla'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        } 
        if(isNaN(argv.h)){
            throw 'La cantidad de lineas de la tabla tiene que ser un número'
        } 
        return true;
    })
    .argv;

module.exports = argv;
