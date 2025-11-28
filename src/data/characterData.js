export function getCharacterData(character) {
    return {
        name: character.name,
        classType: character.classType,
        race: character.race,
        level: character.level,
        faction: character.faction,

        health: {
            current: character.currentHealth,
            max: character.maxHealth,
        },

        resource: {
            type: character.resourceType,
            current: character.currentResource,
            max: character.maxResource
        },

        stats: {
            strength: character.strength,
            agility: character.agility,
            stamina: character.stamina,
            intellect: character.intellect,
            spirit: character.spirit,
            armor: character.armor,
            attackPower: character.attackPower,
            critChance: character.critChance,
            blockChance: character.blockChance,
            parryChance: character.parryChance,
            dodgeChance: character.dodgeChance,
            resistances: character.resistances
        },

        weapon: character.weapon
            ? {
                name: character.weapon.name,
                type: character.weapon.weaponType,
                minDamage: character.weapon.minDamage,
                maxDamage: character.weapon.maxDamage,
                attackSpeed: character.weapon.attackSpeed,
                dps: character.weapon.getDPS(),
            }
            : null,

    };
}