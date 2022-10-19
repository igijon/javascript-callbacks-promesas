const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alérgica a las picaduras de araña'
    }
}

export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    return new Promise( ( resolve, reject ) => {
        if( heroe ) {
            setTimeout(()=> resolve( heroe ), 1000);
        } else {
            reject( `No existe un héroe con el id ${id}`);
        }
    }); 
}

//async transforma mi función en una función asíncrona... sin hacer el 
//return promise
export const buscarHeroeAsync = async(id) => {
    const heroe = heroes[id];

    if( heroe ) {
        return heroe; //Se corresponde con el resolve
    } else {
        throw Error(`No existe un héroe con el id ${id}`);
    }
}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa lenta'),2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa media'),1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa rápida'),1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}