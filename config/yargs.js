const argv = require('yargs')
                .option('n',{
                    alias: 'num',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'max',
                    type: 'number',
                    demandOption: true,
                    describe: 'Son los números multiplicados'
                })
                .check((argv, options)=>{
                    if(isNaN(argv.n)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;



                module.exports= argv;