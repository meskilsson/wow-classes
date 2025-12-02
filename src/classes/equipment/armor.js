export class Armor {
    constructor(id, slot, armorValue, statBonuses, levelRequired, allowedClasses, armorType) {
        this.id = id;
        this.slot = slot;
        this.armorValue = armorValue;
        this.statBonuses = statBonuses || {};
        this.levelRequired = levelRequired;
        this.allowedClasses = allowedClasses || [];
        this.armorType = armorType;
    }
}
