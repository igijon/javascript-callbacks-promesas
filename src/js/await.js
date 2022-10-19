import { buscarHeroe, buscarHeroeAsync } from './promesas'

const heroesIds = ['capi', 'iron', 'spider'];
// ⁄const heroesPromesas = heroesIds.map( id => buscarHeroe(id));
const heroesPromesas = heroesIds.map( buscarHeroe ); //Array de promesas


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

export const obtenerHeroesAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;
    }catch(err){
        //Si aquí pongo un return, irá al then de la función que llama a esta
        throw err;
    }       
}

export const heroesCiclo = async() => {
    console.time('HeroesCiclo');

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach( heroe => console.log(heroe) );

    for await (const heroe of heroesPromesas ) {
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async(id) => {
    if ( (await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('Nada');
    }
}