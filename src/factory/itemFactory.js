import { ITEM_MAP } from "../data/items/index.js";
import { Weapon } from "../classes/equipment/weapon.js";

export function createWeapon(id) {
    const def = ITEM_MAP[id];

    if (!def) {
        throw new Error(`Weapon ID '${id}' not found in ITEM_MAP`);
    }

    return new Weapon(
        def.id,
        def.name,
        def.minDamage,
        def.maxDamage,
        def.attackSpeed,
        def.kind,
        def.rarity,
        def.statBonuses,
        def.icon,
        def.levelRequired,
        def.allowedClasses,
        def.isTwoHanded,
        def.weaponType,
        def.extraEffects
    );
}