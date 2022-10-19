import { buscarHeroe } from './promesas'

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => {
    const heroesArr = [];
    for (const id of heroesIds) {
        const heroe = await buscarHeroe(id); //Await debe insertarse dentro de una función asíncrona
        //Cuando se resuelve la promesa, el resultado que devuelve lo almacena en heroe. Await espera que la promesa se resuelva. 
        heroesArr.push(heroe); //Ahora tengo un array con promesas
    }

    return heroesArr;
}