

export class Weapon {
    constructor(id, name, minDamage, maxDamage, attackSpeed, kind, rarity, statBonuses, icon, levelRequired, allowedClasses, isTwoHanded, weaponType, extraEffects) {
        this.id = id;
        this.name = name;
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
        this.attackSpeed = attackSpeed;
        this.kind = kind;
        this.rarity = rarity;
        this.statBonuses = statBonuses || {};
        this.icon = icon;
        this.levelRequired = levelRequired;
        this.allowedClasses = allowedClasses || [];
        this.isTwoHanded = isTwoHanded;
        this.weaponType = weaponType;
        this.extraEffects = extraEffects || [];
    }

    getRandomDamage() {

        let randomDamage = Math.random() * (this.maxDamage - this.minDamage) + this.minDamage;
        return randomDamage;
    }

    getAverageDamage() {
        let averageDamage = (this.minDamage + this.maxDamage) / 2;
        return averageDamage;
    }

    getDPS() {

        let damagePerSecond = this.getAverageDamage() / this.attackSpeed;
        return damagePerSecond
    }

    canEquipCharacter(character) {
        if (character.level < this.levelRequired) {
            return false;
        }

        if (this.allowedClasses.length > 0 && !this.allowedClasses.includes(character.classType)) {
            return false;
        }

        if (this.isTwoHanded && character.offhand) {
            return false;
        }
        return true;

    }

    applyExtraEffects(target) {
        if (!this.extraEffects || this.extraEffects.length === 0) {
            return;
        }

        this.extraEffects.forEach(effect => {
            if (effect.chance !== undefined) {
                const roll = Math.random();
                if (roll > effect.chance) {
                    return;
                }
            }

            if (effect.type === "flatDamage") {
                target.takeDamage(effect.value, effect.damageType);
            } else if (effect.type === "dot") {
                target.applyStatusEffect(effect);
            } else if (effect.type === "slow") {
                target.applyStatusEffect(effect);
            } else {
                console.log(`Unsupported effect type: ${effect.type}`, effect);
            }

        });

    }
}
