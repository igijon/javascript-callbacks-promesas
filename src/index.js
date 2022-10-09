import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

buscarHeroe('capi2')
    .then(console.log)
    .catch(console.warn);
buscarHeroeAsync('capi2')
    .then(console.log)
    .catch(console.warn);
