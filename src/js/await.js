import { buscarHeroe } from './promesas'

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => {
    // const heroesArr = [];
    // //Si quiero hacer promesas consecutivamente no se recomienda hacerlo así dentro de un ciclo for
    // for (const id of heroesIds) {
    //      heroesArr.push(buscarHeroe(id)); //Esto es un array de promesas
    // }

    // return await Promise.all(heroesArr); //Evitamos usar await fuera del ciclo for

    //Vamos a hacerlo más elegante
    //Se resuelve desdel el parénteis más interno hacia fuera
    return await Promise.all(heroesIds.map( buscarHeroe ));
}