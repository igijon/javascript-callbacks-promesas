import {buscarHerore} from './js/callbaks';
import './styles.css';

const heroeId = 'capi';

buscarHerore (heroeId, ( err, heroe ) => {
    if( err ) {
        console.error( err );
    } else {
        console.info( heroe );
    }
})

