import { renderCharacterCard } from "./src/rendering/card.js";
import { createCharacter } from "./src/characters/starterCharacters.js";
import { renderInventory } from "./src/rendering/inventory.js";


const root = document.getElementById('root');

const myWarrior = createCharacter('Warrior', 'Mattias', 'Human', 'Alliance');
const myPaladin = createCharacter('Paladin', 'Random', 'Draenei', 'Alliance');


myWarrior.inventory.push("god_sword");



if (typeof myWarrior.recalculateStats === "function") {
    myWarrior.recalculateStats();
}

if (typeof myPaladin.recalculateStats === "function") {
    myPaladin.recalculateStats();
}

console.log('Warrior weapon:', myWarrior.weapon);
console.log('Warrior DPS:', myWarrior.weapon.getDPS());



function renderAll() {
  root.innerHTML = "";

  const warriorBlock = document.createElement("div");
  warriorBlock.className = "character-block";
  renderCharacterCard(myWarrior, warriorBlock);
  renderInventory(myWarrior, warriorBlock, renderAll);
  root.appendChild(warriorBlock);

  const paladinBlock = document.createElement("div");
  paladinBlock.className = "character-block";
  renderCharacterCard(myPaladin, paladinBlock);
  renderInventory(myPaladin, paladinBlock, renderAll);
  root.appendChild(paladinBlock);
}


renderAll();
