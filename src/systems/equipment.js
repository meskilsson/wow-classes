import { EQUIPMENT_SLOTS } from "../data/equipmentSlots.js";

export function equipItem(character, item) {
  if (!character || !item) return { success: false, reason: "missing-args" };

  const levelReq = item.levelRequired ?? 0;
  const allowed = Array.isArray(item.allowedClasses) ? item.allowedClasses : [];

  if (character.level < levelReq) return { success: false, reason: "level" };
  if (allowed.length > 0 && !allowed.includes(character.classType)) {
    return { success: false, reason: "class" };
  }

  let candidateSlots = [];
  if (item.slot) {
    candidateSlots = [item.slot];
  } else {
    candidateSlots = EQUIPMENT_SLOTS
      .filter((slotDef) => Array.isArray(slotDef.allowedItemKinds) && slotDef.allowedItemKinds.includes(item.kind))
      .map((slotDef) => slotDef.key);
  }

  if (candidateSlots.length === 0) return { success: false, reason: "no-slot" };

  let chosenSlot = null;

  if (item.isTwoHanded || item.kind === "weapon-2h") {
    chosenSlot = "mainHand";
  } else if (item.kind === "weapon-1h") {
    if (character.equipment?.mainHand == null) chosenSlot = "mainHand";
    else if (character.equipment?.offHand == null) chosenSlot = "offHand";
    else chosenSlot = "mainHand";
  } else if (item.kind === "shield" || item.kind === "offhand-item") {
    const mh = character.equipment?.mainHand;
    if (mh && (mh.isTwoHanded || mh.kind === "weapon-2h")) {
      return { success: false, reason: "two-handed-conflict" };
    }
    chosenSlot = "offHand";
  } else if (item.kind === "ring") {
    if (character.equipment?.finger1 == null) chosenSlot = "finger1";
    else if (character.equipment?.finger2 == null) chosenSlot = "finger2";
    else chosenSlot = "finger1";
  } else if (item.kind === "trinket") {
    if (character.equipment?.trinket1 == null) chosenSlot = "trinket1";
    else if (character.equipment?.trinket2 == null) chosenSlot = "trinket2";
    else chosenSlot = "trinket1";
  } else {
    chosenSlot = candidateSlots.length === 1 ? candidateSlots[0] : candidateSlots[0];
  }

  if (!character.equipment || !(chosenSlot in character.equipment)) {
    return { success: false, reason: "bad-slot" };
  }

  const oldItem = character.equipment[chosenSlot] ?? null;
  character.equipment[chosenSlot] = item;

  if (chosenSlot === "mainHand" && (item.isTwoHanded || item.kind === "weapon-2h")) {
    character.equipment.offHand = null;
  }

  character.weapon = character.equipment.mainHand ?? null;
  character.offhand = character.equipment.offHand ?? null;

  if (typeof character.recalculateStats === "function") {
    character.recalculateStats();
  }

  return { success: true, slot: chosenSlot, replaced: oldItem };
}

