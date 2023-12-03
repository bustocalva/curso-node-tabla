
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

require('colors');

   
console.clear();

crearArchivo(argv.n, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.red, 'creado'.red))
    .catch(err => console.log(err));
    


    





