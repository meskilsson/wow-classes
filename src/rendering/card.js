import { getCharacterSummary } from "../data/characterSummary.js";
import { getCharacterStatsPanels } from "../data/characterStatsPanels.js";
import { formatLabel } from "../utils/formatter.js";

export function renderCharacterCard(character, parentElement) {

    const summary = getCharacterSummary(character);
    const panels = getCharacterStatsPanels(character);

    const card = document.createElement("div");
    card.className = "character-card";

    const titleElement = document.createElement("h2");
    titleElement.textContent = summary.title;
    card.appendChild(titleElement);

    const factionElement = document.createElement("p");
    factionElement.textContent = `Faction: ${summary.faction}`;
    card.appendChild(factionElement);

    const healthElement = document.createElement("p");
    healthElement.textContent = `HP: ${summary.healthText}`;
    card.appendChild(healthElement);

    const resourceElement = document.createElement("p");
    resourceElement.textContent = summary.resourceText;
    card.appendChild(resourceElement);

    const weaponElement = document.createElement("p");
    weaponElement.textContent = `Weapon: ${summary.weaponText}`;
    card.appendChild(weaponElement);

    const panelsCont = document.createElement("div");
    panelsCont.className = "stats-panels";
    card.appendChild(panelsCont);

    const primaryPanel = document.createElement("div");
    primaryPanel.className = "stats-panel primary-stats";

    const primaryTitle = document.createElement("h3");
    primaryTitle.textContent = "Primary Stats";
    primaryPanel.appendChild(primaryTitle);

    const primaryList = document.createElement("ul");
    primaryPanel.appendChild(primaryList);

    const combatPanel = document.createElement("div");
    combatPanel.className = "stats-panel combat-stats";

    const combatTitle = document.createElement("h3");
    combatTitle.textContent = "Combat Stats";
    combatPanel.appendChild(combatTitle);

    const combatList = document.createElement("ul");
    combatPanel.appendChild(combatList);

    // Primary Stats
    Object.entries(panels.primaryStats).forEach(([name, value]) => {
        const li = document.createElement("li");
        const labelSpan = document.createElement("span");
        const valueSpan = document.createElement("span");

        labelSpan.className = "label";
        valueSpan.className = "value";

        labelSpan.textContent = formatLabel(name);
        valueSpan.textContent = value;

        li.appendChild(labelSpan);
        li.appendChild(valueSpan);
        primaryList.appendChild(li);
    });

    // Combat Stats
    Object.entries(panels.combatStats).forEach(([name, value]) => {
        const li = document.createElement("li");
        const labelSpan = document.createElement("span");
        const valueSpan = document.createElement("span");

        labelSpan.className = "label";
        valueSpan.className = "value";

        labelSpan.textContent = formatLabel(name);
        valueSpan.textContent = value;

        li.appendChild(labelSpan);
        li.appendChild(valueSpan);
        combatList.appendChild(li);
    });

    panelsCont.appendChild(primaryPanel);
    panelsCont.appendChild(combatPanel);

    parentElement.appendChild(card);
}
