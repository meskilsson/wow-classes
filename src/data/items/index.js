import { WEAPONS } from "./weapons.js";

export const ALL_ITEMS = [
    ...WEAPONS,
];

export const ITEM_MAP = Object.fromEntries(ALL_ITEMS.map(item => [item.id, item]));