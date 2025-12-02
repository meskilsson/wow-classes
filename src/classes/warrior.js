import { BaseCharacter } from "./baseCharacter.js";
import { warriorDefaultAbilities } from "../data/abilities/warriorAbilities.js";

export class Warrior extends BaseCharacter {
    constructor(
        stats,
        name,
        race,
        faction,
        level,
        exp,
        expToNextLevel,
        weapon,
        offhand,
        armorSet,
        accessories,
        abilities = warriorDefaultAbilities
    ) {
        super(
            stats,
            name,
            race,
            faction,
            "Warrior",
            "Rage",
            level,
            exp,
            expToNextLevel,
            weapon,
            offhand,
            armorSet,
            accessories,
            abilities,
        );

        this.equipment.mainHand = this.weapon
    }
}
