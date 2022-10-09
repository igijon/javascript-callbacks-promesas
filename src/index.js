import {buscarHerore} from './js/callbaks';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spiderman';

//Callback hell
buscarHerore (heroeId1, ( err, heroe ) => {
    if( err ) { return console.error( err );}
    buscarHerore(heroeId2, (err, heroe2) => {
        if (err) { return console.error(err); }
        console.log(`Enviando a ${ heroe.nombre } y ${ heroe2.nombre } a la misión`);
    });
})

