import { WEAPONS } from "./weapons.js";
import { ARMOR } from "./armor.js";

export const ALL_ITEMS = [
    ...WEAPONS,
    ...ARMOR
];

export const ITEM_MAP = Object.fromEntries(ALL_ITEMS.map(item => [item.id, item]));