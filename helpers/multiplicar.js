
const fs = require('fs');

const colors = require('colors');


const crearArchivo = async (num = 5, listar = false, max) => {

    try {


        let salida = '';


        for (let i = 1; i <= max; i++) {
            salida += (`${num} X ${i} = ${num * i}\n`)
        }
        if (listar) {
            console.log(`Tabla del ${num}`.blue);
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida,);

        return (`tabla-${num}.txt`);



    } catch (err) {
        throw err;
    }



}


module.exports = {
    crearArchivo
}
