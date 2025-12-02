import { renderCharacterCard } from "./src/rendering/card.js";
import { createCharacter } from "./src/characters/starterCharacters.js";


const root = document.getElementById('root');

const myWarrior = createCharacter('Warrior', 'Mattias', 'Human', 'Alliance');
const myPaladin = createCharacter('Paladin', 'Derp', 'Draenei', 'Alliance');


renderCharacterCard(myWarrior, root);
renderCharacterCard(myPaladin, root);