import { ITEM_MAP } from "../data/items/index.js";
import { Armor } from "../classes/equipment/armor.js";

export function createArmor(id) {
    const def = ITEM_MAP[id];

    if (!def) {
        console.error(`Armor: '${id}' not found in ITEM_MAP`);
        return null;
    }

    return new Armor(
        def.id,
        def.slot,
        def.armorValue,
        def.statBonuses,
        def.levelRequired,
        def.allowedClasses,
        def.armorType
    );
}