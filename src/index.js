import { obtenerHeroesArr } from "./js/await";

const heroes = obtenerHeroesArr().then(console.table);
