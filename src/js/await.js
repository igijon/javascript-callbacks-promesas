import { buscarHeroeAsync } from './promesas'

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = () => {
    const heroesArr = [];
    for (const id of heroesIds) {
        const heroe = buscarHeroeAsync(id);
        heroesArr.push(heroe); //Ahora tengo un array con promesas
    }

    return heroesArr;
}