

export const ARMOR = [
    {
        id: "starter_chest_mail",
        slot: "chest",
        armorValue: 30,
        statBonuses: {},
        levelRequired: 1,
        allowedClasses: ["Warrior", "Paladin"],
        armorType: "mail",
    },
    {
        id: "cloth_head_training",
        slot: "head",
        armorValue: 2,
        statBonuses: { intellect: 1 },
        levelRequired: 1,
        allowedClasses: ["Mage", "Warlock", "Priest"],
        armorType: "cloth",
    },

    {
        id: "leather_chest_training",
        slot: "chest",
        armorValue: 8,
        statBonuses: { agility: 2 },
        levelRequired: 1,
        allowedClasses: ["Rogue", "Druid", "Hunter"],
        armorType: "leather",
    },

    {
        id: "plate_legs_training",
        slot: "legs",
        armorValue: 12,
        statBonuses: { strength: 1, stamina: 2 },
        levelRequired: 40,
        allowedClasses: ["Warrior", "Paladin"],
        armorType: "plate",
    },
];