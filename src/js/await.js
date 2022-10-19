import { buscarHeroeAsync } from './promesas'

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = () => {
    const heroesArr = [];
    for (const id of heroesIds) {
        
        buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));
    }

    return heroesArr;
}