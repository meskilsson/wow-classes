import { getCharacterData } from "./characterData.js";

export function getCharacterStatsPanels(character) {

    const data = getCharacterData(character);

    const panels = {};

    panels.primaryStats = {
        strength: data.stats.strength,
        agility: data.stats.agility,
        stamina: data.stats.stamina,
        intellect: data.stats.intellect,
        spirit: data.stats.spirit
    };

    panels.combatStats = {
        attackPower: data.stats.attackPower,
        critChance: `${data.stats.critChance}%`,
        dodgeChance: `${data.stats.dodgeChance}%`,
        parryChance: `${data.stats.parryChance}%`,
        blockChance: `${data.stats.blockChance}%`,
        armor: data.stats.armor
    };

    return panels;

}