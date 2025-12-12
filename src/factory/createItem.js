import { ITEM_MAP } from "../data/items/index.js";
import { createWeapon } from "./itemFactory.js";
import { createArmor } from "./armorFactory.js";

export function createItem(id) {
  const def = ITEM_MAP[id];
  if (!def) return null;

  const kind = def.kind || "";

  if (typeof kind === "string" && kind.startsWith("weapon-")) {
    return createWeapon(id);
  }

  if ("slot" in def && "armorValue" in def) {
    return createArmor(id);
  }

  return null;
}
