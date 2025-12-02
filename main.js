import { renderCharacterCard } from "./src/rendering/card.js";
import { createCharacter } from "./src/characters/starterCharacters.js";

const root = document.getElementById('root');

const myWarrior = createCharacter('Warrior', 'Mattias', 'Human', 'Alliance');
const myPaladin = createCharacter('Paladin', 'Derp', 'Draenei', 'Alliance');



if (typeof myWarrior.recalculateStats === "function") {
    myWarrior.recalculateStats();
}

if (typeof myPaladin.recalculateStats === "function") {
    myPaladin.recalculateStats();
}

console.log('Warrior weapon:', myWarrior.weapon);
console.log('Warrior DPS:', myWarrior.weapon.getDPS());

renderCharacterCard(myWarrior, root);
renderCharacterCard(myPaladin, root);
