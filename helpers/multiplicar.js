const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async(b, l, h) => {

    try {

        let salida = '';

        for(let i=1; i <= h; i++){
            salida += `${b} x ${i} = ${b * i}\n`
        }

        if (l) {
            console.log(colors.rainbow('========================='));
            console.log('      Tabla del:', b);
            console.log(colors.rainbow('========================='));
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${b}.txt`, salida);
        return `tabla-${b}.txt`;

    } catch (err){
        throw err;
    }
    
    
}

module.exports = {
    crearArchivo
}