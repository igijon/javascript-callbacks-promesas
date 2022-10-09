import {buscarHerore} from './js/callbaks';
import './styles.css';

const heroeId = 'capi';

buscarHerore (heroeId, ( heroe ) => {
    console.log( heroe )
})

