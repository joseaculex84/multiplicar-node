// requireds 
//const fs = require('fs');
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        //console.log('Listar');
        break;
    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:'.blue, `${ archivo }`.yellow))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}

//console.log(argv);

//let argv2 = process.argv;

//console.log('Limite', argv.limite);
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);
//