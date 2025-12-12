import { EQUIPMENT_SLOTS } from "../data/equipmentSlots.js";


export class BaseCharacter {
    constructor(
        stats,
        name,
        race,
        faction,
        classType,
        resourceType,
        level,
        exp,
        expToNextLevel,
        weapon,
        offhand,
        armorSet,
        accessories,
        abilities = [],
        inventory,
    ) {
        this.baseHealth = stats.health ?? stats.maxHealth ?? 100;
        this.maxHealth = this.baseHealth;
        this.currentHealth = this.baseHealth;

        this.resourceType = resourceType;
        this.baseResource = 100;
        this.maxResource = 100;
        this.currentResource = 0;

        this.strength = stats.strength;
        this.agility = stats.agility;
        this.stamina = stats.stamina;
        this.intellect = stats.intellect;
        this.spirit = stats.spirit;

        this.baseStrength = stats.strength;
        this.baseAgility = stats.agility;
        this.baseStamina = stats.stamina;
        this.baseIntellect = stats.intellect;
        this.baseSpirit = stats.spirit;
        this.baseArmor = stats.armor;
        this.baseAttackPower = stats.attackPower;
        this.baseCritChance = stats.critChance;
        this.baseBlockChance = stats.blockChance;
        this.baseParryChance = stats.parryChance;
        this.baseDodgeChance = stats.dodgeChance;
        this.baseResistances = stats.resistances || {
            fire: 0,
            frost: 0,
            arcane: 0,
            shadow: 0,
            nature: 0
        };

        this.armor = stats.armor;
        this.attackPower = stats.attackPower;
        this.critChance = stats.critChance;
        this.blockChance = stats.blockChance;
        this.parryChance = stats.parryChance;
        this.dodgeChance = stats.dodgeChance;
        this.resistances = { ...this.baseResistances };

        this.name = name;
        this.classType = classType;
        this.race = race;
        this.faction = faction || "Alliance";

        this.level = level;
        this.exp = exp;
        this.expToNextLevel = expToNextLevel;

        this.weapon = weapon;
        this.offhand = offhand;
        this.armorSet = armorSet;
        this.accessories = accessories;

        this.abilities = abilities;


        this.equipment = {};

        EQUIPMENT_SLOTS.forEach(slot => {
            this.equipment[slot.key] = null;
        });
        this.inventory = [];



        //ALWAYS KEEP LAST!
        this.recalculateStats();
    }

    equipWeapon(weapon) {
        const canEquip = weapon.canEquipCharacter(this);
        if (!canEquip) {
            console.log(`Cannot equip weapon: ${weapon.name}`);
            return false;
        }

        if (weapon.isTwoHanded) {
            this.weapon = weapon;
            this.offhand = null;
        } else {
            this.weapon = weapon;
        }

        this.recalculateStats();
        return true;
    }

    recalculateStats() {
        const totals = {
            strength: this.baseStrength ?? 0,
            agility: this.baseAgility ?? 0,
            stamina: this.baseStamina ?? 0,
            intellect: this.baseIntellect ?? 0,
            spirit: this.baseSpirit ?? 0,

            armor: this.baseArmor ?? 0,
            attackPower: this.baseAttackPower ?? 0,
            critChance: this.baseCritChance ?? 0,
            blockChance: this.baseBlockChance ?? 0,
            parryChance: this.baseParryChance ?? 0,
            dodgeChance: this.baseDodgeChance ?? 0,

            resistances: {
                ...(this.baseResistances || {
                    fire: 0,
                    frost: 0,
                    arcane: 0,
                    shadow: 0,
                    nature: 0
                })
            }
        };

        this.applyItemBonuses(this.weapon, totals);
        this.applyItemBonuses(this.offhand, totals);

        Object.values(this.equipment).forEach(item => {
            if (!item) return;

            if (item.armorValue) {
                totals.armor += item.armorValue;
            }

            this.applyItemBonuses(item, totals);
        });


        if (Array.isArray(this.accessories)) {
            this.accessories.forEach(accessory => {
                this.applyItemBonuses(accessory, totals);
            });
        }

        this.strength = totals.strength;
        this.agility = totals.agility;
        this.stamina = totals.stamina;
        this.intellect = totals.intellect;
        this.spirit = totals.spirit;

        this.armor = totals.armor;
        this.attackPower = totals.attackPower;
        this.critChance = totals.critChance;
        this.blockChance = totals.blockChance;
        this.parryChance = totals.parryChance;
        this.dodgeChance = totals.dodgeChance;
        this.resistances = totals.resistances;

        const HEALTH_PER_STAMINA = 10;
        this.maxHealth = this.baseHealth + (totals.stamina * HEALTH_PER_STAMINA);

        const RESOURCE_PER_INT = 1;
        if (this.resourceType === "Rage") {
            this.maxResource = this.baseResource;
        } else if (this.resourceType === "Mana") {
            this.maxResource = this.baseResource + (totals.intellect * RESOURCE_PER_INT);
        } else {
            this.maxResource = this.baseResource;
        }

        if (this.currentHealth > this.maxHealth) {
            this.currentHealth = this.maxHealth;
        }

        if (this.currentResource > this.maxResource) {
            this.currentResource = this.maxResource;
        }
    }

    applyItemBonuses(item, totals) {
        if (!item || !item.statBonuses) return;

        Object.entries(item.statBonuses).forEach(([statName, bonusValue]) => {
            if (statName === "strength") {
                totals.strength += bonusValue;
            } else if (statName === "agility") {
                totals.agility += bonusValue;
            } else if (statName === "stamina") {
                totals.stamina += bonusValue;
            } else if (statName === "intellect") {
                totals.intellect += bonusValue;
            } else if (statName === "spirit") {
                totals.spirit += bonusValue;
            } else if (statName === "armor") {
                totals.armor += bonusValue;
            } else if (statName === "attackPower") {
                totals.attackPower += bonusValue;
            } else if (statName === "critChance") {
                totals.critChance += bonusValue;
            } else if (statName === "blockChance") {
                totals.blockChance += bonusValue;
            } else if (statName === "parryChance") {
                totals.parryChance += bonusValue;
            } else if (statName === "dodgeChance") {
                totals.dodgeChance += bonusValue;
            } else if (statName === "resistances") {
                Object.entries(bonusValue).forEach(([type, amount]) => {
                    totals.resistances[type] = (totals.resistances[type] || 0) + amount;
                });
            }
        });
    }
}
