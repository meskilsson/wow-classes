import { EQUIPMENT_SLOTS } from "../data/equipmentSlots.js";

export function equipItem(character, item) {

    // 1.

    if (character.level < item.levelRequired || item.allowedClasses.length > 0 && !item.allowedClasses.includes(character.classType)) return;






}