import { getCharacterData } from "./characterData.js";


export function getCharacterSummary(character) {
    let fullData = getCharacterData(character);

    let summary = {};

    summary.title = `${fullData.name} - Level ${fullData.level} ${fullData.race} ${fullData.classType}`;
    summary.faction = fullData.faction;
    summary.healthText = `${fullData.health.current} / ${fullData.health.max}`;
    summary.resourceText = `${fullData.resource.type}: ${fullData.resource.current} / ${fullData.resource.max}`;

    if (fullData.weapon) {
        summary.weaponText = `${fullData.weapon.name} 
        (${fullData.weapon.minDamage}-${fullData.weapon.maxDamage} 
        @ ${fullData.weapon.attackSpeed}s, 
        ${fullData.weapon.dps.toFixed(1)} DPS)`;
    } else {
        summary.weaponText = "No weapon equipped";
    }

    summary.keyStats = {
        strength: fullData.stats.strength,
        stamina: fullData.stats.stamina,
        attackPower: fullData.stats.attackPower,
        armor: fullData.stats.armor
    };

    return summary;
}