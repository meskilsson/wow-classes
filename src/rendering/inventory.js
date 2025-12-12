import { ITEM_MAP } from "../data/items/index.js";
import { createItem } from "../factory/createItem.js";
import { equipItem } from "../systems/equipment.js";

export function renderInventory(character, parentElement, onChange) {
  if (!parentElement) return;

  const containerElement = document.createElement("div");
  containerElement.className = "inventory-panel";

  const titleElement = document.createElement("h2");
  titleElement.textContent = "Inventory";
  containerElement.appendChild(titleElement);

  if (!character) {
    const msg = document.createElement("p");
    msg.className = "inventory-empty";
    msg.textContent = "No character";
    containerElement.appendChild(msg);
    parentElement.appendChild(containerElement);
    return;
  }

  const inv = Array.isArray(character.inventory) ? character.inventory : [];

  if (inv.length === 0) {
    const empty = document.createElement("p");
    empty.className = "inventory-empty";
    empty.textContent = "Empty";
    containerElement.appendChild(empty);
    parentElement.appendChild(containerElement);
    return;
  }

  inv.forEach((itemId) => {
    const def = ITEM_MAP[itemId];
    const label = def ? def.name : itemId;

    const button = document.createElement("button");
    button.className = "inventory-item";
    button.textContent = label;

    button.addEventListener("click", () => {
      const itemObj = createItem(itemId);
      const result = equipItem(character, itemObj);

      console.log("Clicked:", itemId, "itemObj:", itemObj, "result:", result);

      if (result && result.success) {
        character.inventory = inv.filter((id) => id !== itemId);

        if (result.replaced && result.replaced.id) {
          character.inventory.push(result.replaced.id);
        }

        if (typeof onChange === "function") onChange();
      }
    });

    containerElement.appendChild(button);
  });

  parentElement.appendChild(containerElement);
}
