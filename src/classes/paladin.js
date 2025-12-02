import { BaseCharacter } from "./baseCharacter.js";
import { paladinDefaultAbilities } from "../data/abilities/paladinAbilities.js";

export class Paladin extends BaseCharacter {
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
        abilities = paladinDefaultAbilities
    ) {
        super(
            stats,
            name,
            race,
            faction,
            "Paladin",
            "Mana",
            level,
            exp,
            expToNextLevel,
            weapon,
            offhand,
            armorSet,
            accessories,
            abilities
        );
        this.equipment.mainHand = this.weapon
    }
}
