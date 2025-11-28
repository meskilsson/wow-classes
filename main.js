import { Warrior, warriorDefaultAbilities } from "./src/classes/warrior.js";
import { renderCharacterCard } from "./src/rendering/card.js";
import { starterSword } from "./src/weapons/onehandswords.js";
import { warriorBaseStats } from "./src/data/classBaseStats.js";


const root = document.getElementById('root');



const myWarrior = new Warrior(
    warriorBaseStats,
    'Retard',
    'Human',
    'Alliance',
    1,
    0,
    100,
    starterSword,
    null,
    [],
    [],
    warriorDefaultAbilities
);

renderCharacterCard(myWarrior, root);