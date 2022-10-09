import { promesaLenta, promesaRapida, promesaMedia } from './js/promesas';

// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );

//Se intentan ejecutar todas las promesas y la única que se muestra es la más
//rápida. Si alguna da un error, se ignora.
Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then( console.log);