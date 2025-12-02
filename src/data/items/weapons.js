

export const WEAPONS = [
    {
        id: "god_sword",
        name: "Eskil",
        kind: "weapon-2h",
        rarity: "legendary",
        levelRequired: 1,
        allowedClasses: ["Warrior", "Paladin"],
        statBonuses: { strength: 1000, agility: 1000, stamina: 1000, intellect: 1000, spirit: 1000 },
        icon: "",

        minDamage: 10000,
        maxDamage: 15000,
        attackSpeed: 3.6,
        isTwoHanded: true,
        weaponType: "sword",
        extraEffects: [],
    },
    {
        id: "starter_sword",
        name: "training_sword",
        kind: "",
        rarity: "",
        levelRequired: 1,
        allowedClasses: [],
        statBonuses: {},
        icon: "",

        minDamage: 0,
        maxDamage: 0,
        attackSpeed: 0,
        isTwoHanded: false,
        weaponType: "",
        extraEffects: [],
    },

]