import {buscarHeroe as buscarHeroeCallbacks} from './js/callbaks';
import {buscarHeroe} from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';


// buscarHeroe( heroeId1 ).then( heroe => {
//     buscarHeroe(heroeId2).then( heroe2 => {
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la misión`);
//     });
// })

//No se ejecuta el código hasta que no se resuelve todo lo que está dentro
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then( ([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    });

console.log('Fin del programa');