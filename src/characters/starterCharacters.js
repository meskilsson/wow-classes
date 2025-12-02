import { Warrior } from "../classes/warrior.js";
import { Paladin } from "../classes/paladin.js";
import { warriorBaseStats, paladinBaseStats } from "../data/classBaseStats.js";
import { warriorDefaultAbilities } from "../data/abilities/warriorAbilities.js";
import { paladinDefaultAbilities } from "../data/abilities/paladinAbilities.js";
import { createWeapon } from "../factory/itemFactory.js";
import { createArmor } from "../factory/armorFactory.js";

export function createCharacter(classType, name, race, faction) {
    if (classType === "Warrior") {
        const starterSword = createWeapon("starter_sword");
        const starterChest = createArmor("starter_chest_mail");

        const warrior = new Warrior(
            warriorBaseStats,
            name,
            race,
            faction,
            1,
            0,
            100,
            starterSword,
            null,
            [],
            [],
            warriorDefaultAbilities
        );

        warrior.equipment.chest = starterChest;
        warrior.recalculateStats();
        return warrior;

    }

    if (classType === "Paladin") {
        const starterSword = createWeapon("starter_sword");
        const starterChest = createArmor("starter_chest_mail");

        const paladin = new Paladin(
            paladinBaseStats,
            name,
            race,
            faction,
            1,
            0,
            100,
            starterSword,
            null,
            [],
            [],
            paladinDefaultAbilities
        );
        paladin.equipment.chest = starterChest;
        paladin.recalculateStats();

        return paladin;
    }
}
