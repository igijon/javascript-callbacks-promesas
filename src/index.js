import { obtenerHeroesAwait } from "./js/await";

console.time('await')
obtenerHeroesAwait('capi2').then( heroe => {
    console.log(heroe);
    console.timeEnd('await');
}).catch(console.warn);
