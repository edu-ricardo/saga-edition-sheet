import type { Species, Class, Skill, Feat } from '../types';
export * from './talents';
export * from './equipment';

export const SPECIES: Record<string, Species> = {
    "Aleena": {
        "name": "Aleena",
        "abilityMods": {
            "dex": 2,
            "cha": -2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Nimble",
            "Quick Energy",
            "Ability adjustment"
        ]
    },
    "Amanin": {
        "name": "Amanin",
        "abilityMods": {
            "str": 2,
            "int": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Amanese"
        ],
        "traits": [
            "Primitive",
            "Roll",
            "Expert Climber",
            "Reach 2",
            "Able Healer"
        ]
    },
    "Anzati": {
        "name": "Anzati",
        "abilityMods": {},
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Anzat"
        ],
        "traits": [
            "Presence Sense",
            "Mesmerize",
            "Soup Drinking",
            "Hunter's Instincts",
            "Low-Light Vision",
            "Acrobatic Prowess"
        ]
    },
    "Aqualish": {
        "name": "Aqualish",
        "abilityMods": {
            "con": 2,
            "wis": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Toughness"
        ],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Breathe Underwater",
            "Expert Swimmer",
            "Additional arms"
        ]
    },
    "Arcona": {
        "name": "Arcona",
        "abilityMods": {
            "wis": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Arconese"
        ],
        "traits": [
            "Scent",
            "Adept Diplomat"
        ]
    },
    "Arkanian": {
        "name": "Arkanian",
        "abilityMods": {
            "int": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Arkanian"
        ],
        "traits": [
            "Darkvision",
            "Intellectual Reputation",
            "Flash of Genius",
            "Airborne"
        ]
    },
    "ArkanianOffshoot": {
        "name": "Arkanian Offshoot",
        "abilityMods": {
            "con": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Arkanian"
        ],
        "traits": [
            "Determination",
            "Ancient Knowledge"
        ]
    },
    "AstromechDroidChassis": {
        "name": "Astromech Droid Chassis",
        "abilityMods": {
            "int": 2,
            "cha": -2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "2nd Degree",
            "Droid Traits",
            "Hardwired Design (Mechanics)",
            "Animal Handler"
        ]
    },
    "Balosar": {
        "name": "Balosar",
        "abilityMods": {
            "dex": 2,
            "con": -2,
            "wis": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Antennapalps",
            "Poison Resistance",
            "Moral Ambiguity",
            "Antennapalps"
        ]
    },
    "Barabel": {
        "name": "Barabel",
        "abilityMods": {
            "str": 2,
            "dex": -2,
            "wis": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Barabel"
        ],
        "traits": [
            "Radiation Resistance",
            "Darkvision",
            "Primitive",
            "Intimidating",
            "Stun Resistance",
            "Aquatic"
        ]
    },
    "BattleDroidChassis": {
        "name": "Battle Droid Chassis",
        "abilityMods": {
            "dex": 2,
            "int": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "4th Degree",
            "Droid Traits",
            "Bonus Armor Feat",
            "Bonus Weapon Feat",
            "Arctic"
        ]
    },
    "Beast": {
        "name": "Beast",
        "abilityMods": {},
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Armored Scales"
        ]
    },
    "Bith": {
        "name": "Bith",
        "abilityMods": {
            "con": -2,
            "int": 2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Meditative Trance",
            "Scent",
            "Evolved Intellect",
            "Armor Training"
        ]
    },
    "BloodCarver": {
        "name": "Blood Carver",
        "abilityMods": {
            "dex": 2,
            "wis": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Deathstrike",
            "Athletic"
        ]
    },
    "Bothan": {
        "name": "Bothan",
        "abilityMods": {
            "dex": 2,
            "con": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Authority"
        ]
    },
    "Caamasi": {
        "name": "Caamasi",
        "abilityMods": {
            "str": -2,
            "con": -2,
            "wis": 4
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Adept Diplomat",
            "Pacifism",
            "Memory Sharing",
            "Bellow"
        ]
    },
    "Cathar": {
        "name": "Cathar",
        "abilityMods": {
            "dex": 2,
            "int": -2
        },
        "size": "Medium",
        "speed": 8,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Reactive Claw",
            "Cathar Instincts",
            "Biotech augmentation"
        ]
    },
    "Celegian": {
        "name": "Celegian",
        "abilityMods": {
            "dex": -2,
            "int": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic (understand)"
        ],
        "traits": [
            "Cyanogen Breather",
            "Expert Swimmer",
            "Broadcast Telepath",
            "Bonus Feat"
        ]
    },
    "Cerean": {
        "name": "Cerean",
        "abilityMods": {
            "dex": -2,
            "int": 2,
            "wis": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Intuitive Initiative",
            "Bonus Trained Skill"
        ]
    },
    "ChadraFan": {
        "name": "Chadra-Fan",
        "abilityMods": {
            "dex": 2,
            "wis": -2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Heightened Awareness",
            "Tinkerer",
            "Darkvision",
            "Breathe Underwater"
        ]
    },
    "Chagrian": {
        "name": "Chagrian",
        "abilityMods": {
            "str": 2,
            "dex": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Breathe Underwater",
            "Low-Light Vision",
            "Radiation Resistance",
            "Broadcast Telepath"
        ]
    },
    "Chiss": {
        "name": "Chiss",
        "abilityMods": {
            "int": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Cheunh"
        ],
        "traits": [
            "Low-Light Vision",
            "Bonus Trained Skill",
            "Brutal"
        ]
    },
    "Chistori": {
        "name": "Chistori",
        "abilityMods": {
            "str": 2,
            "dex": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Chistori"
        ],
        "traits": [
            "Rage",
            "Cold Blooded",
            "Carapace"
        ]
    },
    "Clawdite": {
        "name": "Clawdite",
        "abilityMods": {
            "str": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Shapeshift",
            "Startle",
            "Careful Worker"
        ]
    },
    "Clone": {
        "name": "Clone",
        "abilityMods": {},
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Bonus Trained Skill",
            "Bonus Feat",
            "Cathar Instincts"
        ]
    },
    "CloneHero": {
        "name": "Clone Hero",
        "abilityMods": {},
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Bonus Trained Skill",
            "Bonus Feat",
            "Climate adaptation"
        ]
    },
    "CodruJi": {
        "name": "Codru-Ji",
        "abilityMods": {},
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Dual Weapon Mastery I"
        ],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Extra Arms",
            "Skilled Grappler",
            "Climber's Heritage"
        ]
    },
    "Dashade": {
        "name": "Dashade",
        "abilityMods": {
            "dex": 2,
            "wis": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Dashadi"
        ],
        "traits": [
            "Environmental Adaptation",
            "Fearsome Reputation",
            "Force Resistance",
            "Cold Blooded"
        ]
    },
    "Defel": {
        "name": "Defel",
        "abilityMods": {
            "str": -2,
            "int": 2
        },
        "size": "Small",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Partial Invisibility",
            "Special Equipment (Defel)",
            "Cold Resistance"
        ]
    },
    "Devaronian": {
        "name": "Devaronian",
        "abilityMods": {
            "dex": -2,
            "int": 2,
            "wis": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Natural Curiosity",
            "Conductive"
        ]
    },
    "Draethos": {
        "name": "Draethos",
        "abilityMods": {
            "con": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Weapon Proficiency (advanced melee)"
        ],
        "languages": [
            "Draethos"
        ],
        "traits": [
            "Natural Telepath",
            "Low-Light Vision",
            "Confusion"
        ]
    },
    "Dug": {
        "name": "Dug",
        "abilityMods": {
            "dex": 2,
            "cha": -2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Dug"
        ],
        "traits": [
            "Athletic",
            "Cooperative"
        ]
    },
    "Duros": {
        "name": "Duros",
        "abilityMods": {
            "dex": 2,
            "con": -2,
            "int": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Expert Pilot",
            "Cooperative Spirit"
        ]
    },
    "Ewok": {
        "name": "Ewok",
        "abilityMods": {
            "str": -2,
            "dex": 2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Ewokese"
        ],
        "traits": [
            "Primitive",
            "Scent",
            "Sneaky",
            "Cultural cybernetics"
        ]
    },
    "Falleen": {
        "name": "Falleen",
        "abilityMods": {
            "wis": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Pheromones",
            "Hold Breath",
            "Pheromone Acclimation",
            "Cyanogen Breather"
        ]
    },
    "Feeorin": {
        "name": "Feeorin",
        "abilityMods": {
            "str": 2,
            "dex": -2,
            "con": 2,
            "wis": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Feeorin"
        ],
        "traits": [
            "Low-Light Vision",
            "Stronger By Age",
            "Brutal",
            "Inborn Resilience",
            "Darkvision"
        ]
    },
    "Felucian": {
        "name": "Felucian",
        "abilityMods": {
            "con": 2,
            "int": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Force Sensitivity"
        ],
        "languages": [
            "Felucianese"
        ],
        "traits": [
            "Breathe Underwater",
            "Low-Light Vision",
            "Natural Camouflage",
            "Force Blast",
            "Primitive",
            "Deathstrike"
        ]
    },
    "Fosh": {
        "name": "Fosh",
        "abilityMods": {
            "dex": 2,
            "con": -2,
            "cha": 2
        },
        "size": "Small",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Deceptive",
            "Healing Glands",
            "Deceptive"
        ]
    },
    "Gamorrean": {
        "name": "Gamorrean",
        "abilityMods": {
            "str": 2,
            "dex": -2,
            "int": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Improved Damage Threshold"
        ],
        "languages": [
            "Basic (Understand)"
        ],
        "traits": [
            "Primitive",
            "Deductive Reasoning"
        ]
    },
    "Gand": {
        "name": "Gand",
        "abilityMods": {
            "wis": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Gand"
        ],
        "traits": [
            "Darkvision",
            "Hardy",
            "Special Equipment (Gand)",
            "Limb Regeneration",
            "Dependable Worker"
        ]
    },
    "GenDai": {
        "name": "Gen'Dai",
        "abilityMods": {
            "con": 4,
            "wis": -2,
            "cha": -2
        },
        "size": "Large",
        "speed": 8,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Gen'Dai Surge",
            "Hibernation",
            "Mental Instability",
            "Resilient Physiology",
            "Desert"
        ]
    },
    "Geonosian": {
        "name": "Geonosian",
        "abilityMods": {
            "str": 2,
            "int": -2,
            "wis": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Weapon Proficiency (advanced melee)"
        ],
        "languages": [
            "Geonosian"
        ],
        "traits": [
            "Radiation Resistance",
            "Low-Light Vision",
            "Fly Speed (8)",
            "Desert Dweller"
        ]
    },
    "Givin": {
        "name": "Givin",
        "abilityMods": {
            "str": -2,
            "int": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Exoskeleton",
            "Deductive Reasoning",
            "Unique Physiology",
            "Determination"
        ]
    },
    "Gotal": {
        "name": "Gotal",
        "abilityMods": {},
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Energy Reading",
            "Low-Light Vision",
            "Sensor Cones",
            "Driven"
        ]
    },
    "Gran": {
        "name": "Gran",
        "abilityMods": {
            "str": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Darkvision",
            "Target Awareness",
            "Triple Vision",
            "Droid Shell"
        ]
    },
    "Gungan": {
        "name": "Gungan",
        "abilityMods": {
            "dex": 2,
            "int": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Expert Swimmer",
            "Hold Breath",
            "Low-Light Vision",
            "Swim Speed (4)",
            "Droid Traits",
            "Weapon Familiarity (Cesta)",
            "Weapon Familiarity (Atlatl)"
        ]
    },
    "Herglic": {
        "name": "Herglic",
        "abilityMods": {
            "str": 4,
            "dex": -4
        },
        "size": "Large",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Sturdy",
            "Duty Bound"
        ]
    },
    "Houk": {
        "name": "Houk",
        "abilityMods": {
            "str": 2,
            "con": 2,
            "wis": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Physically Intimidating",
            "Ecological Awareness"
        ]
    },
    "Human": {
        "name": "Human",
        "abilityMods": {},
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Bonus Trained Skill",
            "Bonus Feat",
            "Empath"
        ]
    },
    "Hutt": {
        "name": "Hutt",
        "abilityMods": {
            "str": 2,
            "dex": -6,
            "con": 2,
            "int": 2
        },
        "size": "Large",
        "speed": 2,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Force Resistance",
            "Supreme Stability",
            "Persuasive",
            "Energy Reading"
        ]
    },
    "Iktotchi": {
        "name": "Iktotchi",
        "abilityMods": {
            "con": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Limited Precognition",
            "Expert Pilot",
            "Environmental Adaptation"
        ]
    },
    "IshiTib": {
        "name": "Ishi Tib",
        "abilityMods": {
            "int": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Breathe Underwater",
            "Ecological Awareness",
            "Expert Swimmer",
            "Swim Speed (4)",
            "Low-Light Vision",
            "Evolved Intellect"
        ]
    },
    "Ithorian": {
        "name": "Ithorian",
        "abilityMods": {
            "dex": -2,
            "wis": 2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Bellow",
            "Survival Instinct",
            "Exoskeleton"
        ]
    },
    "Jawa": {
        "name": "Jawa",
        "abilityMods": {
            "str": -2,
            "dex": 2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Jawa"
        ],
        "traits": [
            "Darkvision",
            "Desert Dweller",
            "Scavenger",
            "Expert Climber"
        ]
    },
    "Kaleesh": {
        "name": "Kaleesh",
        "abilityMods": {
            "dex": -2,
            "con": 2,
            "int": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Darkvision",
            "Driven",
            "Persistant",
            "Expert Pilot"
        ]
    },
    "Kaminoan": {
        "name": "Kaminoan",
        "abilityMods": {
            "int": 2,
            "wis": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Resistant",
            "Expert Swimmer"
        ]
    },
    "KelDor": {
        "name": "Kel Dor",
        "abilityMods": {
            "dex": 2,
            "con": -2,
            "wis": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Keen Force Sense",
            "Low-Light Vision",
            "Special Equipment",
            "Extra Arms"
        ]
    },
    "Kerkoiden": {
        "name": "Kerkoiden",
        "abilityMods": {
            "con": -2,
            "wis": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Predator's Heritage",
            "Social Cunning",
            "Fearsome Reputation"
        ]
    },
    "Khil": {
        "name": "Khil",
        "abilityMods": {
            "con": -2,
            "int": 2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Khilese"
        ],
        "traits": [
            "Hullepi",
            "Dependable Worker",
            "Cooperative Spirit",
            "Flash of Genius"
        ]
    },
    "Kissai": {
        "name": "Kissai",
        "abilityMods": {
            "wis": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Sith"
        ],
        "traits": [
            "Inspired",
            "Warrior's Awareness",
            "Weapon Familiarity",
            "Fly Speed (6)"
        ]
    },
    "Klatooinian": {
        "name": "Klatooinian",
        "abilityMods": {
            "con": 2,
            "int": -2,
            "wis": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Huttese"
        ],
        "traits": [
            "Iron Will",
            "Fly Speed (8)"
        ]
    },
    "Krevaaki": {
        "name": "Krevaaki",
        "abilityMods": {
            "wis": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Carapace",
            "Stoic",
            "Tentacles",
            "Force Blast",
            "Natural Armor (+1 Ref)"
        ]
    },
    "LaborDroidChassis": {
        "name": "Labor Droid Chassis",
        "abilityMods": {
            "str": 2,
            "int": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "5th Degree",
            "Droid Traits",
            "Heavy Lifting",
            "Labor Droid",
            "Force Blind"
        ]
    },
    "Lurmen": {
        "name": "Lurmen",
        "abilityMods": {
            "str": -2,
            "wis": 2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Mender",
            "Primitive",
            "Roller",
            "Expert Climber",
            "Force Immunity"
        ]
    },
    "MantellianSavrip": {
        "name": "Mantellian Savrip",
        "abilityMods": {
            "str": 4,
            "dex": -2,
            "con": 4,
            "int": -4,
            "wis": -4,
            "cha": -4
        },
        "size": "Large",
        "speed": 8,
        "feats": [],
        "languages": [
            "Savrip"
        ],
        "traits": [
            "Rage",
            "Primitive",
            "Poison Claws",
            "Force Resistance"
        ]
    },
    "Massassi": {
        "name": "Massassi",
        "abilityMods": {
            "str": 4,
            "int": -2,
            "wis": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Sith"
        ],
        "traits": [
            "Duty Bound",
            "Primitive",
            "Warrior's Awareness",
            "Weapon Familiarity",
            "Force Sight"
        ]
    },
    "MechanicDroidChassis": {
        "name": "Mechanic Droid Chassis",
        "abilityMods": {
            "int": 2,
            "cha": -2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "2nd Degree",
            "Droid Traits",
            "Hardwired Design (Mechanics)",
            "Mechanically Minded",
            "Gen'Dai Surge"
        ]
    },
    "MedicalDroidChassis": {
        "name": "Medical Droid Chassis",
        "abilityMods": {
            "str": -2,
            "int": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "1st Degree",
            "Droid Traits",
            "Hardwired Design (Treat Injury)",
            "Grasping Tentacles"
        ]
    },
    "Miraluka": {
        "name": "Miraluka",
        "abilityMods": {
            "dex": -2,
            "int": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Force Training"
        ],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Force Sight",
            "Hardy"
        ]
    },
    "MonCalamari": {
        "name": "Mon Calamari",
        "abilityMods": {
            "con": -2,
            "int": 2,
            "wis": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Breathe Underwater",
            "Expert Swimmer",
            "Low-Light Vision",
            "Swim Speed (4)",
            "Healing Glands"
        ]
    },
    "Mrlssi": {
        "name": "Mrlssi",
        "abilityMods": {
            "str": -2,
            "int": 2,
            "cha": 2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Scholarly Inclination",
            "Heavy Lifting"
        ]
    },
    "Nagai": {
        "name": "Nagai",
        "abilityMods": {
            "dex": 2,
            "con": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Soothing Voice",
            "Heightened Awareness",
            "Weapon Familiarity (Tehk'la blade)"
        ]
    },
    "Nautolan": {
        "name": "Nautolan",
        "abilityMods": {
            "con": 2,
            "int": -2,
            "wis": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Breathe Underwater",
            "Pheromonal Sensor",
            "Low-Light Vision",
            "Expert Swimmer",
            "Swim Speed (4)",
            "Hibernation"
        ]
    },
    "Nazren": {
        "name": "Nazren",
        "abilityMods": {
            "str": 2,
            "dex": -2,
            "con": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Nazren Resistance",
            "Hold Breath"
        ]
    },
    "NearHuman": {
        "name": "Near Human",
        "abilityMods": {},
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Bonus Feat",
            "Heightened awareness",
            "Hullepi"
        ]
    },
    "Neimoidian": {
        "name": "Neimoidian",
        "abilityMods": {
            "str": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Inborn Resilience"
        ]
    },
    "Nelvaanian": {
        "name": "Nelvaanian",
        "abilityMods": {
            "int": -2,
            "wis": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Nelvaanese"
        ],
        "traits": [
            "Primitive",
            "Scent",
            "Shadow Swiftness",
            "Inspired"
        ]
    },
    "Nikto": {
        "name": "Nikto",
        "abilityMods": {
            "str": 2,
            "int": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Nikto"
        ],
        "traits": [
            "Great Fortitude",
            "Natural Armor",
            "Survival Instinct",
            "Insulating Fur",
            "Natural Armor (+2 Ref)"
        ]
    },
    "Noghri": {
        "name": "Noghri",
        "abilityMods": {
            "dex": 2,
            "wis": 2,
            "cha": -4
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Honoghran"
        ],
        "traits": [
            "Scent",
            "Primitive",
            "Intellectual Reputation"
        ]
    },
    "Nosaurian": {
        "name": "Nosaurian",
        "abilityMods": {
            "dex": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Climber's Heritage",
            "Survival Instinct",
            "Intimidating"
        ]
    },
    "Pauan": {
        "name": "Pau'an",
        "abilityMods": {
            "str": -2,
            "wis": 2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Authority",
            "Low-Light Vision",
            "Intuitive Initiative"
        ]
    },
    "Phindian": {
        "name": "Phindian",
        "abilityMods": {
            "int": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Phindian"
        ],
        "traits": [
            "Keen Force Sense"
        ]
    },
    "PolisMassan": {
        "name": "Polis Massan",
        "abilityMods": {
            "str": -2,
            "wis": 2
        },
        "size": "Small",
        "speed": 6,
        "feats": [],
        "languages": [
            "Massan"
        ],
        "traits": [
            "Darkvision",
            "Limited Telepathy",
            "Mute",
            "Keen Smell"
        ]
    },
    "ProbeDroidChassis": {
        "name": "Probe Droid Chassis",
        "abilityMods": {
            "wis": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "4th Degree",
            "Droid Traits",
            "Hardwired Design (Perception)",
            "Labor Droid"
        ]
    },
    "ProtocolDroidChassis": {
        "name": "Protocol Droid Chassis",
        "abilityMods": {
            "dex": -2,
            "wis": 2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Skill Training"
        ],
        "languages": [
            "Basic"
        ],
        "traits": [
            "3rd Degree",
            "Droid Traits",
            "Hardwired Design (Persuasion)",
            "Light Sensitivity"
        ]
    },
    "Quarren": {
        "name": "Quarren",
        "abilityMods": {
            "con": 2,
            "wis": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Breathe Underwater",
            "Expert Swimmer",
            "Low-Light Vision",
            "Swim Speed (4)",
            "Limb Regeneration"
        ]
    },
    "Rakata": {
        "name": "Rakata",
        "abilityMods": {
            "int": 2,
            "wis": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Weapon Focus (simple)",
            "Weapon Focus ()",
            "Weapon Focus ()"
        ],
        "languages": [
            "Rakata"
        ],
        "traits": [
            "Ancient Knowledge",
            "Force Blind",
            "Primitive",
            "Rage",
            "Limited Precognition"
        ]
    },
    "ReplicaDroidlarge": {
        "name": "Replica Droid (large)",
        "abilityMods": {
            "str": 2,
            "dex": 2,
            "cha": -2
        },
        "size": "Large",
        "speed": 8,
        "feats": [],
        "languages": [
            "(native language)"
        ],
        "traits": [
            "Droid Traits",
            "4th Degree",
            "Limited Telepathy"
        ]
    },
    "ReplicaDroidmedium": {
        "name": "Replica Droid (medium)",
        "abilityMods": {
            "str": 2,
            "dex": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "(native language)"
        ],
        "traits": [
            "Droid Traits",
            "4th Degree",
            "Low-Light Vision"
        ]
    },
    "ReplicaDroidsmall": {
        "name": "Replica Droid (small)",
        "abilityMods": {
            "str": 2,
            "dex": 2,
            "cha": -2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "(native language)"
        ],
        "traits": [
            "Droid Traits",
            "4th Degree",
            "Mechanical Aptitude"
        ]
    },
    "Rodian": {
        "name": "Rodian",
        "abilityMods": {
            "dex": 2,
            "wis": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Heightened Awareness",
            "Low-Light Vision",
            "Mechanical Savant"
        ]
    },
    "Ryn": {
        "name": "Ryn",
        "abilityMods": {
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Musical Beak",
            "Prehensile Tail",
            "Connections",
            "Mechanically Minded"
        ]
    },
    "Selkath": {
        "name": "Selkath",
        "abilityMods": {
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Selkath"
        ],
        "traits": [
            "Breathe Underwater",
            "Expert Swimmer",
            "Able Healer",
            "Meditative Trance"
        ]
    },
    "ServiceDroidChassis": {
        "name": "Service Droid Chassis",
        "abilityMods": {
            "str": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Skill Training"
        ],
        "languages": [
            "Basic"
        ],
        "traits": [
            "3rd Degree",
            "Droid Traits",
            "Memory Sharing"
        ]
    },
    "ShardDroid": {
        "name": "Shard (Droid)",
        "abilityMods": {
            "dex": -2,
            "wis": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Droid Shell",
            "Mender"
        ]
    },
    "Shistavanen": {
        "name": "Shistavanen",
        "abilityMods": {
            "dex": 2,
            "int": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Shistavanen"
        ],
        "traits": [
            "Natural Weapons",
            "Quick Reflexes",
            "Uncanny Tracker",
            "Low-Light Vision",
            "Mental Instability"
        ]
    },
    "Skakoan": {
        "name": "Skakoan",
        "abilityMods": {
            "dex": -2,
            "int": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Armor Proficiency (light)"
        ],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Special Equipment (Skakoan)",
            "Mechanical Savant",
            "Mesmerize"
        ]
    },
    "Sluissi": {
        "name": "Sluissi",
        "abilityMods": {
            "dex": -2,
            "int": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Careful Worker",
            "Serpentine",
            "Moral Ambiguity"
        ]
    },
    "Snivvian": {
        "name": "Snivvian",
        "abilityMods": {
            "wis": 2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Snivvian"
        ],
        "traits": [
            "Cold Resistance",
            "Observant",
            "Multiple Personalities"
        ]
    },
    "Squib": {
        "name": "Squib",
        "abilityMods": {
            "str": -2,
            "dex": 2
        },
        "size": "Small",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Natural Diplomat",
            "Tech Savvy",
            "Weapon Familiarity",
            "Musical Beak",
            "Weapon Familiarity (Squib tensor rifle)"
        ]
    },
    "SsiRuuk": {
        "name": "Ssi-Ruuk",
        "abilityMods": {
            "str": 2,
            "wis": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Ssi-Ruuvi"
        ],
        "traits": [
            "Force Blind",
            "Keen Smell",
            "Armored Scales",
            "Mute",
            "Natural Armor (+2 Ref)"
        ]
    },
    "Sullustan": {
        "name": "Sullustan",
        "abilityMods": {
            "dex": 2,
            "con": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Darkvision",
            "Expert Climber",
            "Heightened Awareness",
            "Natural Armor"
        ]
    },
    "Talz": {
        "name": "Talz",
        "abilityMods": {
            "con": 2,
            "int": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Talz"
        ],
        "traits": [
            "Darkvision",
            "Natural Camouflage"
        ]
    },
    "Taung": {
        "name": "Taung",
        "abilityMods": {
            "con": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Armor Training",
            "Superior Defenses",
            "Warrior Culture",
            "Natural Curiosity"
        ]
    },
    "Thakwaash": {
        "name": "Thakwaash",
        "abilityMods": {
            "str": 4,
            "dex": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Thakwaashi"
        ],
        "traits": [
            "Multiple Personalities",
            "Natural Armor",
            "Natural Diplomat",
            "Natural Armor (+1 Ref)"
        ]
    },
    "Tofs": {
        "name": "Tofs",
        "abilityMods": {
            "str": 2,
            "dex": -2,
            "wis": -2,
            "cha": 2
        },
        "size": "Large",
        "speed": 6,
        "feats": [],
        "languages": [
            "Tof"
        ],
        "traits": [
            "Natural Telepath"
        ]
    },
    "Togorian": {
        "name": "Togorian",
        "abilityMods": {
            "str": 4,
            "int": -2,
            "wis": -2
        },
        "size": "Large",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Low-Light Vision",
            "Physical Intimidation",
            "Natural weapon"
        ]
    },
    "Togruta": {
        "name": "Togruta",
        "abilityMods": {
            "dex": 2,
            "con": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Pack Hunter",
            "Sneaky",
            "Spatial Awareness",
            "Naturally acrobatic"
        ]
    },
    "Toydarian": {
        "name": "Toydarian",
        "abilityMods": {
            "str": -2,
            "wis": 2
        },
        "size": "Small",
        "speed": 4,
        "feats": [],
        "languages": [
            "Toydarian"
        ],
        "traits": [
            "Force Resistance",
            "Fly Speed (6)",
            "Nazren Resistance"
        ]
    },
    "Trandoshan": {
        "name": "Trandoshan",
        "abilityMods": {
            "str": 2,
            "dex": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Toughness"
        ],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Darkvision",
            "Limb Regeneration",
            "Nomads",
            "Natural Armor (+1 Ref)"
        ]
    },
    "Trianii": {
        "name": "Trianii",
        "abilityMods": {
            "wis": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Trianii"
        ],
        "traits": [
            "Acrobatic Prowess",
            "Prehensile Tail",
            "Observant"
        ]
    },
    "TuskenRaider": {
        "name": "Tusken Raider",
        "abilityMods": {
            "con": 2,
            "int": -2,
            "wis": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Tusken"
        ],
        "traits": [
            "Survival Instinct",
            "Sneaky",
            "Pacifism"
        ]
    },
    "Twilek": {
        "name": "Twi'lek",
        "abilityMods": {
            "wis": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Deceptive",
            "Low-Light Vision",
            "Pack Hunter"
        ]
    },
    "Ubese": {
        "name": "Ubese",
        "abilityMods": {
            "dex": 2,
            "con": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Aggressive",
            "Survival Instinct",
            "Special Equipment (Ubese)",
            "Partial Invisibility"
        ]
    },
    "Umbaran": {
        "name": "Umbaran",
        "abilityMods": {
            "dex": 2,
            "con": -2,
            "wis": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Darkvision",
            "Stealthy",
            "Persistant"
        ]
    },
    "Utai": {
        "name": "Utai",
        "abilityMods": {
            "con": 2,
            "cha": -2
        },
        "size": "Small",
        "speed": 5,
        "feats": [],
        "languages": [
            "Utapese"
        ],
        "traits": [
            "Animal Handler",
            "Cooperative",
            "Low-Light Vision",
            "Persistent"
        ]
    },
    "Verpine": {
        "name": "Verpine",
        "abilityMods": {},
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Heightened Awareness",
            "Verpine Communication",
            "Persuasive",
            "Weapon Familiarity (Verpine shatter gun)",
            "Natural Armor (+1 Ref)"
        ]
    },
    "Vultan": {
        "name": "Vultan",
        "abilityMods": {
            "int": 2,
            "wis": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Bonus Trained Skill",
            "Pheromonal Communication"
        ]
    },
    "Vurk": {
        "name": "Vurk",
        "abilityMods": {
            "dex": -2,
            "con": 2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Breathe Underwater",
            "Expert Swimmer",
            "Placid",
            "Nomads",
            "Swim Speed (4)",
            "Pheromonal Sensor"
        ]
    },
    "Weequay": {
        "name": "Weequay",
        "abilityMods": {
            "con": 2,
            "int": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Sriluurian"
        ],
        "traits": [
            "Pheromonal Communication",
            "Natural Armor",
            "Pheromone Acclimation"
        ]
    },
    "Whiphid": {
        "name": "Whiphid",
        "abilityMods": {
            "str": 4,
            "int": -2,
            "wis": -2
        },
        "size": "Large",
        "speed": 6,
        "feats": [],
        "languages": [
            "Whiphid"
        ],
        "traits": [
            "Insulating Fur",
            "Scent",
            "Pheromones"
        ]
    },
    "Wookiee": {
        "name": "Wookiee",
        "abilityMods": {
            "str": 4,
            "dex": -2,
            "con": 2,
            "wis": -2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Shyriiwook"
        ],
        "traits": [
            "Rage",
            "Expert Climber",
            "Intimidating",
            "Physically Intimidating",
            "Weapon Familiarity (bowcaster)",
            "Weapon Familiarity (Ryyk blade)"
        ]
    },
    "Wroonian": {
        "name": "Wroonian",
        "abilityMods": {
            "dex": 2,
            "con": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Skills",
            "Physically Intimidating"
        ]
    },
    "Yarkora": {
        "name": "Yarkora",
        "abilityMods": {
            "dex": -2,
            "wis": 2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Confusion",
            "Deceptive",
            "Streetwise",
            "Placid"
        ]
    },
    "Yevetha": {
        "name": "Yevetha",
        "abilityMods": {
            "str": 2,
            "cha": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Yevethan"
        ],
        "traits": [
            "Mechanical Aptitude",
            "Xenophobia",
            "Poison Claws"
        ]
    },
    "YuuzhanVong": {
        "name": "Yuuzhan Vong",
        "abilityMods": {
            "str": 2,
            "wis": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Yuuzhan Vong"
        ],
        "traits": [
            "Force Immunity",
            "Technophobic",
            "Poison Resistance",
            "Weapon Familiarity (Amphistaff)"
        ]
    },
    "Yuzzem": {
        "name": "Yuzzem",
        "abilityMods": {
            "str": 4,
            "wis": -2,
            "cha": -2
        },
        "size": "Large",
        "speed": 6,
        "feats": [],
        "languages": [
            "Yuzz"
        ],
        "traits": [
            "Physically Intimidating",
            "Scent",
            "Expert Climber",
            "Predator's Heritage"
        ]
    },
    "Zabrak": {
        "name": "Zabrak",
        "abilityMods": {},
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Heightened Awareness",
            "Superior Defenses",
            "Prehensile Tail"
        ]
    },
    "Zeltron": {
        "name": "Zeltron",
        "abilityMods": {
            "wis": -2,
            "cha": 2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Zeltron Pheromones",
            "Zeltron Empathy",
            "Presence Sense"
        ]
    },
    "Zygerrian": {
        "name": "Zygerrian",
        "abilityMods": {
            "con": 2,
            "wis": -2
        },
        "size": "Medium",
        "speed": 6,
        "feats": [
            "Martial Arts I"
        ],
        "languages": [
            "Basic"
        ],
        "traits": [
            "Iron Will",
            "Strength of Conviction",
            "Primitive"
        ]
    },
    "Droid": {
        "name": "Droid (Custom)",
        "abilityMods": {
            "con": -100
        },
        "size": "Medium",
        "speed": 6,
        "feats": [],
        "languages": [
            "Binary",
            "Basic"
        ],
        "traits": [
            "Droid Immunities",
            "Maintenance",
            "Programming"
        ]
    }
};

export const CLASSES: Record<string, Class> = {
    // Base Classes
    Jedi: {
        name: 'Jedi',
        hpPerLevel: 10,
        startHp: 30,
        startSkills: 2,
        classSkills: ['Acrobatics', 'Endurance', 'Initiative', 'Knowledge (Galactic Lore)', 'Knowledge (Bureaucracy)', 'Knowledge (Life Sciences)', 'Knowledge (Physical Sciences)', 'Knowledge (Social Sciences)', 'Knowledge (Technology)', 'Perception', 'Pilot', 'Use the Force'],
        startFeats: ['Force Sensitivity', 'Weapon Proficiency (Lightsabers)', 'Weapon Proficiency (Simple Weapons)'],
        defenseBonuses: { reflex: 1, fortitude: 1, will: 1 },
        talentTrees: ['Jedi Consular', 'Jedi Guardian', 'Jedi Sentinel', 'Lightsaber Combat']
    },
    Soldier: {
        name: 'Soldier',
        hpPerLevel: 10,
        startHp: 30,
        startSkills: 3,
        classSkills: ['Climb', 'Endurance', 'Initiative', 'Jump', 'Knowledge (Tactics)', 'Mechanics', 'Perception', 'Pilot', 'Swim', 'Treat Injury', 'Use Computer'],
        startFeats: ['Armor Proficiency (Light)', 'Armor Proficiency (Medium)', 'Weapon Proficiency (Pistols)', 'Weapon Proficiency (Rifles)', 'Weapon Proficiency (Simple Weapons)'],
        defenseBonuses: { reflex: 1, fortitude: 2, will: 0 },
        talentTrees: ['Armor Specialist', 'Brawler', 'Commando', 'Weapon Specialist']
    },
    Noble: {
        name: 'Noble',
        hpPerLevel: 6,
        startHp: 18,
        startSkills: 6,
        classSkills: ['Deception', 'Gather Information', 'Initiative', 'Knowledge (Bureaucracy)', 'Knowledge (Galactic Lore)', 'Knowledge (Life Sciences)', 'Knowledge (Social Sciences)', 'Perception', 'Persuasion', 'Pilot', 'Ride', 'Treat Injury', 'Use Computer'],
        startFeats: ['Linguist', 'Weapon Proficiency (Pistols)', 'Weapon Proficiency (Simple Weapons)', 'Defense Perficiency (Light)'],
        defenseBonuses: { reflex: 1, fortitude: 0, will: 2 },
        talentTrees: ['Influence', 'Inspiration', 'Leadership', 'Lineage']
    },
    Scoundrel: {
        name: 'Scoundrel',
        hpPerLevel: 6,
        startHp: 18,
        startSkills: 4,
        classSkills: ['Acrobatics', 'Deception', 'Gather Information', 'Initiative', 'Knowledge (Galactic Lore)', 'Knowledge (Social Sciences)', 'Knowledge (Technology)', 'Mechanics', 'Perception', 'Persuasion', 'Pilot', 'Stealth', 'Swim', 'Use Computer'],
        startFeats: ['Point Blank Shot', 'Weapon Proficiency (Pistols)', 'Weapon Proficiency (Simple Weapons)'],
        defenseBonuses: { reflex: 2, fortitude: 0, will: 1 },
        talentTrees: ['Fortune', 'Misfortune', 'Outlaw', 'Spacer']
    },
    Scout: {
        name: 'Scout',
        hpPerLevel: 8,
        startHp: 24,
        startSkills: 5,
        classSkills: ['Climb', 'Endurance', 'Initiative', 'Jump', 'Knowledge (Galactic Lore)', 'Knowledge (Life Sciences)', 'Knowledge (Physical Sciences)', 'Knowledge (Technology)', 'Mechanics', 'Perception', 'Pilot', 'Ride', 'Stealth', 'Survival', 'Swim'],
        startFeats: ['Shake it Off', 'Weapon Proficiency (Pistols)', 'Weapon Proficiency (Rifles)', 'Weapon Proficiency (Simple Weapons)'],
        defenseBonuses: { reflex: 2, fortitude: 1, will: 0 },
        talentTrees: ['Camouflage', 'Fringer', 'Surveyor', 'Survivor']
    },

    // Prestige Classes (Core)
    AcePilot: {
        name: 'Ace Pilot',
        hpPerLevel: 8,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 2, fortitude: 0, will: 1 },
        talentTrees: ['Expert Pilot', 'Gunner'],
        isPrestige: true,
        prerequisites: {
            feats: ['Vehicular Combat', 'Skill Focus (Pilot)'],
            skills: ['Pilot']
        }
    },
    BountyHunter: {
        name: 'Bounty Hunter',
        hpPerLevel: 10,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 1, fortitude: 1, will: 1 },
        talentTrees: ['Bounty Hunter', 'Jedi Hunter'],
        isPrestige: true,
        prerequisites: {
            skills: ['Survival', 'Perception'],
            talents: ['Awareness', 'Hunter']
        }
    },
    CrimeLord: {
        name: 'Crime Lord',
        hpPerLevel: 6,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 0, fortitude: 0, will: 2 },
        talentTrees: ['Infamy', 'Mastermind'],
        isPrestige: true,
        prerequisites: {
            level: 7,
            feats: ['Skill Focus (Deception)', 'Skill Focus (Persuasion)']
        }
    },
    EliteTrooper: {
        name: 'Elite Trooper',
        hpPerLevel: 12,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 1, fortitude: 2, will: 0 },
        talentTrees: ['Critical Master', 'Weapon Master'],
        isPrestige: true,
        prerequisites: {
            bab: 7,
            feats: ['Armor Proficiency (Heavy)', 'Weapon Proficiency (Rifles)', 'Martial Arts I']
        }
    },
    ForceAdept: {
        name: 'Force Adept',
        hpPerLevel: 8,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 1, fortitude: 1, will: 1 },
        talentTrees: ['Force Item', 'Force Talents', 'Sense', 'Alter', 'Control'],
        isPrestige: true,
        prerequisites: {
            feats: ['Force Sensitivity']
        }
    },
    Gunslinger: {
        name: 'Gunslinger',
        hpPerLevel: 8,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 2, fortitude: 0, will: 0 },
        talentTrees: ['Pistol Expert', 'Rifle Expert'],
        isPrestige: true,
        prerequisites: {
            bab: 6,
            feats: ['Weapon Proficiency (Pistols)', 'Quick Draw']
        }
    },
    JediKnight: {
        name: 'Jedi Knight',
        hpPerLevel: 10,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 1, fortitude: 1, will: 1 },
        talentTrees: ['Jedi Guardian', 'Jedi Sentinel', 'Lightsaber Combat', 'Duelist', 'Force Technique'],
        isPrestige: true,
        prerequisites: {
            level: 7,
            bab: 7,
            feats: ['Force Sensitivity', 'Weapon Proficiency (Lightsabers)']
        }
    },
    JediMaster: {
        name: 'Jedi Master',
        hpPerLevel: 10,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 1, fortitude: 0, will: 2 },
        talentTrees: ['Apprentice', 'Master'],
        isPrestige: true,
        prerequisites: {
            level: 12,
            classes: ['Jedi Knight'],
            feats: ['Skill Focus (Use the Force)']
        }
    },
    Officer: {
        name: 'Officer',
        hpPerLevel: 8,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 1, fortitude: 0, will: 1 },
        talentTrees: ['Command', 'Tactics'],
        isPrestige: true,
        prerequisites: {
            level: 7,
            feats: ['Skill Focus (Knowledge (Tactics))']
        }
    },
    SithApprentice: {
        name: 'Sith Apprentice',
        hpPerLevel: 10,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 1, fortitude: 1, will: 1 },
        talentTrees: ['Sith'],
        isPrestige: true,
        prerequisites: {
            darkSide: true,
            feats: ['Force Sensitivity']
        }
    },
    SithLord: {
        name: 'Sith Lord',
        hpPerLevel: 10,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 1, fortitude: 0, will: 2 },
        talentTrees: ['Sith Master'],
        isPrestige: true,
        prerequisites: {
            level: 12,
            darkSide: true,
            feats: ['Force Sensitivity', 'Weapon Proficiency (Lightsabers)']
        }
    },

    // Prestige Classes (Expansions)
    Gladiator: {
        name: 'Gladiator',
        hpPerLevel: 12,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 1, fortitude: 1, will: 0 },
        talentTrees: ['Gladiator'],
        isPrestige: true,
        prerequisites: {
            bab: 6,
            feats: ['Armor Proficiency (Light)', 'Weapon Proficiency (Simple Weapons)']
        }
    },
    MeleeDuelist: {
        name: 'Melee Duelist',
        hpPerLevel: 10,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 2, fortitude: 0, will: 0 },
        talentTrees: ['Duelist', 'Melee Smash'],
        isPrestige: true,
        prerequisites: {
            bab: 4,
            feats: ['Weapon Proficiency (Advanced Melee Weapons)']
        }
    },
    SithMarauder: {
        name: 'Sith Marauder',
        hpPerLevel: 10,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 1, fortitude: 1, will: 0 },
        talentTrees: ['Sith', 'Weapon Specialist'],
        isPrestige: true,
        prerequisites: {
            darkSide: true,
            feats: ['Weapon Proficiency (Lightsabers)']
        }
    },
    ForceDisciple: {
        name: 'Force Disciple',
        hpPerLevel: 8,
        startHp: 0,
        startSkills: 0,
        classSkills: [],
        startFeats: [],
        defenseBonuses: { reflex: 0, fortitude: 0, will: 2 },
        talentTrees: ['Prophet', 'Mystic'],
        isPrestige: true,
        prerequisites: {
            level: 12,
            feats: ['Force Sensitivity', 'Force Training']
        }
    }
};

export const SKILLS: Skill[] = [
    { name: 'Acrobatics', ability: 'dex', useUntrained: true, armorCheckPenalty: true },
    { name: 'Climb', ability: 'str', useUntrained: true, armorCheckPenalty: true },
    { name: 'Deception', ability: 'cha', useUntrained: true, armorCheckPenalty: false },
    { name: 'Endurance', ability: 'con', useUntrained: true, armorCheckPenalty: true },
    { name: 'Gather Information', ability: 'cha', useUntrained: true, armorCheckPenalty: false },
    { name: 'Initiative', ability: 'dex', useUntrained: true, armorCheckPenalty: true },
    { name: 'Jump', ability: 'str', useUntrained: true, armorCheckPenalty: true },
    { name: 'Knowledge (Bureaucracy)', ability: 'int', useUntrained: true, armorCheckPenalty: false },
    { name: 'Knowledge (Galactic Lore)', ability: 'int', useUntrained: true, armorCheckPenalty: false },
    { name: 'Knowledge (Life Sciences)', ability: 'int', useUntrained: true, armorCheckPenalty: false },
    { name: 'Knowledge (Physical Sciences)', ability: 'int', useUntrained: true, armorCheckPenalty: false },
    { name: 'Knowledge (Social Sciences)', ability: 'int', useUntrained: true, armorCheckPenalty: false },
    { name: 'Knowledge (Tactics)', ability: 'int', useUntrained: true, armorCheckPenalty: false },
    { name: 'Knowledge (Technology)', ability: 'int', useUntrained: true, armorCheckPenalty: false },
    { name: 'Mechanics', ability: 'int', useUntrained: false, armorCheckPenalty: false },
    { name: 'Perception', ability: 'wis', useUntrained: true, armorCheckPenalty: false },
    { name: 'Persuasion', ability: 'cha', useUntrained: true, armorCheckPenalty: false },
    { name: 'Pilot', ability: 'dex', useUntrained: false, armorCheckPenalty: true },
    { name: 'Ride', ability: 'dex', useUntrained: true, armorCheckPenalty: true },
    { name: 'Stealth', ability: 'dex', useUntrained: true, armorCheckPenalty: true },
    { name: 'Survival', ability: 'wis', useUntrained: true, armorCheckPenalty: false },
    { name: 'Swim', ability: 'str', useUntrained: true, armorCheckPenalty: true },
    { name: 'Treat Injury', ability: 'wis', useUntrained: false, armorCheckPenalty: false },
    { name: 'Use Computer', ability: 'int', useUntrained: true, armorCheckPenalty: false },
    { name: 'Use the Force', ability: 'cha', useUntrained: false, armorCheckPenalty: false }
];

export const FEATS: Feat[] = [
    {
        "name": "A Few Maneuvers",
        "description": "Gain +2 to defense of Colossal or smaller vehicles, and projectile attacks which miss your vehicle by 5 or more self-destruct",
        "prerequisites": "Dodge, Vehicular Combat"
    },
    {
        "name": "Accelerated Strike",
        "description": "Once per encounter, take a full attack action with proficient weapons as a standard action",
        "prerequisites": "BAB +6"
    },
    {
        "name": "Acrobatic Ally",
        "description": "Hoist or toss an ally of your size or smal ler up to 2 sq uares.",
        "prerequisites": "Dex 13, Str 13, trained in the Acrobatics skill"
    },
    {
        "name": "Acrobatic Dodge",
        "description": "When a melee attack mi sses you, move into an adjacent squa re without provoking an attack of opportunity.",
        "prerequisites": "Dex 13, Dodge, Mobility, Skill Focus (Acrobatics), trained in the Acrobatics skill"
    },
    {
        "name": "Acrobatic Strike",
        "description": "Gain +2 bonus on next attack against opponent you tumble past",
        "prerequisites": "Trained in Acrobatics"
    },
    {
        "name": "Adaptable Talent",
        "description": "Gain access to an additional talent."
    },
    {
        "name": "Advantageous Attack",
        "description": "Add full heroic level to damage against targets who have not yet acted in combat",
        "prerequisites": "BAB +1"
    },
    {
        "name": "Advantageous Cover",
        "description": "Take no damage from area attacks whilst in cover",
        "prerequisites": "Trained in Stealth"
    },
    {
        "name": "Aiming Accuracy",
        "description": "After aiming as a full-round action, gain +5 on next weapon attack.",
        "prerequisites": "Droid, Point Blank Shot, Precise Shot, proficient with weapon"
    },
    {
        "name": "Angled Throw",
        "description": "You may ignore cover and improved cover when throwing a grenade if your attack roll exceeds a Reflex Defense of 15",
        "prerequisites": "Dex 13"
    },
    {
        "name": "Anointed Hunter",
        "description": "Move 2 or more squares and gain a +1 bonus on attacks with thrown weapons until the end of your turn.",
        "prerequisites": "Nelvaanian species"
    },
    {
        "name": "Armor Proficiency (heavy)",
        "description": "No penalty on attacks and no armor check penalty while wearing heavy armor",
        "prerequisites": "Armor Proficiency (medium)"
    },
    {
        "name": "Armor Proficiency (light)",
        "description": "No penalty on attacks and no armor check penalty while wearing light armor"
    },
    {
        "name": "Armor Proficiency (medium)",
        "description": "No penalty on attacks and no armor check penalty while wearing medium armor",
        "prerequisites": "Armor Proficiency (light)"
    },
    {
        "name": "Artillery Shot",
        "description": "You increase the efficacy of your burst and splash weapon attacks.",
        "prerequisites": "Proficient with weapon used"
    },
    {
        "name": "Assault",
        "description": "You can use Double Attack as a standard action at the cost of a Force Point",
        "prerequisites": "Double Attack or Dual Weapon Mastery, BAB +6"
    },
    {
        "name": "Assured Attack",
        "description": "Reroll the lowest damage die when making a successful attack"
    },
    {
        "name": "Attack Combo (Fire and Strike)",
        "description": "Deal +1 die of damage on melee, unarmed, or ranged attacks until the end of your next turn after hitting an enemy with two consecutive melee, unarmed, or ranged attacks.",
        "prerequisites": "Attack Combo (Melee), Attack Combo (Ranged), BAB +9"
    },
    {
        "name": "Attack Combo (Melee)",
        "description": "Deal +1 die of damage on melee or unarmed attacks until the end of your next turn after hitting an enemy with two consecutive melee or unarmed attacks.",
        "prerequisites": "Base attack bonus +3"
    },
    {
        "name": "Attack Combo (Ranged)",
        "description": "Deal +1 die of damage on ranged attacks until the end ofyour next turn after hitting an enemy with two consecutive ranged attacks.",
        "prerequisites": "Base attack bonus +3"
    },
    {
        "name": "Autofire Assault",
        "description": "Decrease penalty on autofire attack and inflict extra damage when sustaining fire in the same squares in consecutive rounds.",
        "prerequisites": "Weapon Focus (chosen weapon)"
    },
    {
        "name": "Autofire Sweep",
        "description": "Sweep a wide area while using autofire mode.",
        "prerequisites": "Weapon Focus (chosen weapon)"
    },
    {
        "name": "Bad Feeling",
        "description": "You may always move in the surprise round"
    },
    {
        "name": "Bantha Herder",
        "description": "Move a target damaged by your ranged attack.",
        "prerequisites": "Proficient with weapon used, base attack bonus +1"
    },
    {
        "name": "Bantha Rush",
        "description": "Push opponent 1 square after making a successful melee attack",
        "prerequisites": "Str 13, BAB + 1"
    },
    {
        "name": "Battering Attack",
        "description": "Knock a target prone when you use Bantha Rush.",
        "prerequisites": "Bantha Rush, Trip"
    },
    {
        "name": "Biotech Specialist",
        "description": "Make custom modifications to Yuuzhan Vong biotech.",
        "prerequisites": "Trained in Mechanics skill"
    },
    {
        "name": "Biotech Surgery",
        "description": "Install a biotech prosthesis onto a living being.",
        "prerequisites": "Trained in Treat Injury Skill"
    },
    {
        "name": "Blaster Barrage",
        "description": "If you deal damage with an autofire attack, your allies gain a +2 bonus to autofire attacks against the same target",
        "prerequisites": "Coordinated Attack"
    },
    {
        "name": "Bone Crusher",
        "description": "Move damaged grappled opponent -1 step on the condition track.",
        "prerequisites": "Crush, Pin"
    },
    {
        "name": "Brilliant Defense",
        "description": "Add your Intelligence bonus to your Reflex Defense as a reaction.",
        "prerequisites": "Int 13"
    },
    {
        "name": "Brink of Death",
        "description": "Attacks that would kill your enemy reduces them to O hit points instead."
    },
    {
        "name": "Burst Fire",
        "description": "Take a -5 penalty on an autofire attack to gain +2 dice damage",
        "prerequisites": "Weapon Proficiency (heavy)"
    },
    {
        "name": "Burst of Speed",
        "description": "Move speed twice as a move action",
        "prerequisites": "Trained in the Endurance skill"
    },
    {
        "name": "Careful Shot",
        "description": "If you aim, gain +1 bonus on the attack roll",
        "prerequisites": "Point Blank Shot, BAB +2"
    },
    {
        "name": "Channel Rage",
        "description": "Instead of raging, gain +5 to Will Defense.",
        "prerequisites": "Rage species trait"
    },
    {
        "name": "Charging Fire",
        "description": "Make ranged attack at the end of a charge",
        "prerequisites": "BAB +4"
    },
    {
        "name": "Cleave",
        "description": "Extra melee attack after dropping target",
        "prerequisites": "Power Attack"
    },
    {
        "name": "Close Combat Escape",
        "description": "Escape grapple and attack",
        "prerequisites": "Trained in the Acrobatics skill"
    },
    {
        "name": "Collateral Damage",
        "description": "Gain extra attack upon hitting the first target",
        "prerequisites": "Rapid Shot, BAB +6"
    },
    {
        "name": "Combat Reflexes",
        "description": "Gain additional attacks of opportunity"
    },
    {
        "name": "Combat Trickery",
        "description": "Spend two swift actions to make Deception check to make enemy flat-footed.",
        "prerequisites": "Trained in the Deception skill"
    },
    {
        "name": "Conditioning",
        "description": "Reroll any Strength or Constitution based skill checks and add Strength bonus to Fortitude Defense for a turn once per encounter",
        "prerequisites": "Str 13, Con 13"
    },
    {
        "name": "Controlled Rage",
        "description": "You may enter rage as a swift action, and end it a round after you declare it finished",
        "prerequisites": "Rage"
    },
    {
        "name": "Coordinated Attack",
        "description": "Automatic success with aid another action at point blank range",
        "prerequisites": "BAB +2"
    },
    {
        "name": "Coordinated Barrage",
        "description": "Allow an ally to deal more damage when you aid his attack.",
        "prerequisites": "Coordinated Attack, BAB +5"
    },
    {
        "name": "Cornered",
        "description": "When unable to withdraw, +2 on attacks"
    },
    {
        "name": "Critical Strike",
        "description": "Take two consecutive swift actions to increase the critical range of your next melee attack by 1",
        "prerequisites": "BAB +9, Weapon Focus"
    },
    {
        "name": "Crossfire",
        "description": "If you miss against a target with soft cover, once per round you may immediately make an attack roll against the target providing the soft cover.",
        "prerequisites": "Point Blank shot, Precise Shot, BAB +6"
    },
    {
        "name": "Crush",
        "description": "Deal unarmed or claw damage to a pinned opponent",
        "prerequisites": "Pin"
    },
    {
        "name": "Cunning Attack",
        "description": "+2 to attack rolls against flat-footed enemies"
    },
    {
        "name": "Cut the Red Tape",
        "description": "Use Knowledge (bureaucracy) in place of Gather Information.",
        "prerequisites": "Trained in Knowledge (bureaucracy)"
    },
    {
        "name": "Cybernetic Surgery",
        "description": "Install a cybernetic prosthesis onto a living being",
        "prerequisites": "Trained in Treat Injury"
    },
    {
        "name": "Damage Conversion",
        "description": "Take additional hit point damage instead of moving down the condition track.",
        "prerequisites": "Droid, Dex 13"
    },
    {
        "name": "Deadeye",
        "description": "If you aim, deal extra damage",
        "prerequisites": "Precise Shot, BAB +4"
    },
    {
        "name": "Deadly Sniper",
        "description": "When you make a ranged attack against a target that is unaware of you, you get +2 bonus on your attack roll and deal +1 die of damage on the first attack each turn",
        "prerequisites": "Sniper, trained in the Stealth skill, BAB +9"
    },
    {
        "name": "Deceptive Drop",
        "description": "Flat-footed targets knocked prone on surprise round",
        "prerequisites": "Trained in the Initiative skill"
    },
    {
        "name": "Deft Charge",
        "description": "Take swift actions, reactions, and free actions after you charge before your turn ends."
    },
    {
        "name": "Demoralizing Strike",
        "description": "Make an intimidation check when you deal damage with an attack of opportunity.",
        "prerequisites": "Cha 13"
    },
    {
        "name": "Desperate Gambit",
        "description": "Reroll missed attack by taking a penalty to Reflex Defense"
    },
    {
        "name": "Destructive Force",
        "description": "Deal damage to adjacent targets when you damage objects and vehicles.",
        "prerequisites": "-"
    },
    {
        "name": "Disabler",
        "description": "Gain benefits when using certain ion weapons.",
        "prerequisites": "Proficient with weapon used"
    },
    {
        "name": "Distracting Droid",
        "description": "Attempt to deny enemies within 6 squares their next move action, with a chance to make enemies flat-footed.",
        "prerequisites": "Droid"
    },
    {
        "name": "Disturbing Presence",
        "description": "Make a Deception check to move through threatened area without provoking attack of opportunity.",
        "prerequisites": "Trained in Deception"
    },
    {
        "name": "Dive for Cover",
        "description": "Jump for cover is a reaction.",
        "prerequisites": "Trained in Jump"
    },
    {
        "name": "Dodge",
        "description": "Gain a +1 dodge bonus to Reflex Defense against a selected target",
        "prerequisites": "Dex 13"
    },
    {
        "name": "Double Attack",
        "description": "Make extra attack during full attack, -5 penalty to all attacks",
        "prerequisites": "BAB +6, proficient with weapon"
    },
    {
        "name": "Dreadful Countenance",
        "description": "Reroll Use the Force and Persuasion checks to activate fear effects",
        "prerequisites": "Cha 13, member of Sith tradition"
    },
    {
        "name": "Dreadful Rage",
        "description": "Rage bonus to attacks and damage increases to +4",
        "prerequisites": "Ability to Rage, BAB +1"
    },
    {
        "name": "Droid Focus",
        "description": "+1 bonus to certain skills and defenses when dealing with a selected class of droid.",
        "prerequisites": "Trained in Mechanics and Use Computer"
    },
    {
        "name": "Droid Hunter",
        "description": "Deal +2 damage to droid enemies, or +4 when using an ion weapon.",
        "prerequisites": "Proficient with weapon used"
    },
    {
        "name": "Droid Shield Mastery",
        "description": "Automatically restore shields in two swift actions.",
        "prerequisites": "Droid, equipped with shield generator"
    },
    {
        "name": "Droidcraft",
        "description": "Repair a droid in 10 minutes instead of 1 hour",
        "prerequisites": "Trained in Mechanics"
    },
    {
        "name": "Dual Weapon Mastery I",
        "description": "Take a -5 penalty on attacks when attacking with two weapons or both ends of a double weapon",
        "prerequisites": "Dex 13, BAB +1"
    },
    {
        "name": "Dual Weapon Mastery II",
        "description": "Take a -2 penalty on attacks when attacking with two weapons or both ends of a double weapon",
        "prerequisites": "Dex 15, BAB +6, Dual Weapon Mastery I"
    },
    {
        "name": "Dual Weapon Mastery III",
        "description": "Take a no penalty on attacks when attacking with two weapons or both ends of a double weapon",
        "prerequisites": "Dex 17, BAB +11, Dual Weapon Mastery II"
    },
    {
        "name": "Duck and Cover",
        "description": "You dive for cover when you avoid area attacks",
        "prerequisites": "Trained in the Stealth skill"
    },
    {
        "name": "Echani Training",
        "description": "Double Strength bonus to damage. Once per encounter upon dealing unarmed damage, make an unarmed attack against Fortitude defense to knock opponent prone",
        "prerequisites": "Dex 13, Martial Arts I"
    },
    {
        "name": "Elder's Knowledge",
        "description": "Substitute a Knowledge (social sciences) or (galactic lore) skill check for a Wisdom-related skill check.",
        "prerequisites": "Skill Focus (Knowledge [social sciences]) or (Knowledge [galactic lore])"
    },
    {
        "name": "Erratic Target",
        "description": "Reduce speed by up to 2 squares to increase dodge bonus by up to 2 squares.",
        "prerequisites": "Droid, equipped with hovering or flying locomotion, Dex 13, Dodge"
    },
    {
        "name": "Exotic Weapon Proficiency",
        "description": "Wield an exotic weapon without penalty",
        "prerequisites": "BAB +1, choose a weapon"
    },
    {
        "name": "Experienced Medic",
        "description": "Perform surgery on multiple creatures simultaneously.",
        "prerequisites": "Trained in Treat Injury"
    },
    {
        "name": "Expert Briber",
        "description": "Reduce the time and cost of bribery attempts.",
        "prerequisites": "Cha 13"
    },
    {
        "name": "Expert Droid Repair",
        "description": "Repair multiple droids simultaneously",
        "prerequisites": "Trained in Mechanics"
    },
    {
        "name": "Extra Rage",
        "description": "Rage one additional time per day\r\n\r\n(Enter number of times taken)",
        "prerequisites": "Ability to Rage"
    },
    {
        "name": "Extra Second Wind",
        "description": "Gain an additional second wind per day\r\n\r\n(Enter number of times taken)",
        "prerequisites": "Trained in Endurance"
    },
    {
        "name": "Far Shot",
        "description": "Range penalties for short-, medium-, and long-ranged attacks are reduced",
        "prerequisites": "Point Blank Shot"
    },
    {
        "name": "Fast Surge",
        "description": "Catch second wind as a free action on your turn."
    },
    {
        "name": "Fatal Hit",
        "description": "You automatically kill an enemy that you reduce to 0 hit points, and you can perform a coup de grace as a standard action",
        "prerequisites": "Str 13, Dex 13"
    },
    {
        "name": "Feat of Strength",
        "description": "Take 10 or 20 on one Strength check or related skill check per encounter",
        "prerequisites": "Str 15"
    },
    {
        "name": "Fight Through Pain",
        "description": "Use your Will Defense to determine your damage threshold.",
        "prerequisites": "-"
    },
    {
        "name": "Flash and Clear",
        "description": "Gain concealment against a target you damage with a burst or splash weapon."
    },
    {
        "name": "Fleche",
        "description": "When charging, turn any natural attack roll of 17+ into a critical hit.",
        "prerequisites": "Base attack bonus +1"
    },
    {
        "name": "Fleet-Footed",
        "description": "+2 speed when making a running attack",
        "prerequisites": "Running Attack"
    },
    {
        "name": "Flood of Fire",
        "description": "Ignore enimies' dodge and deflection bonuses to Reflex Defense when making area attacks with a weapon set on autofire.",
        "prerequisites": "Proficient with weapon used"
    },
    {
        "name": "Flurry",
        "description": "Take -5 penalty to Reflex Defense to gain +2 bonus to melee attack rolls",
        "prerequisites": "Dex 13"
    },
    {
        "name": "Focused Rage",
        "description": "You may use all skills during a rage",
        "prerequisites": "Controlled Rage"
    },
    {
        "name": "Follow Through",
        "description": "Move immediately up to your speed after reducing an enemy to 0 hit points"
    },
    {
        "name": "Force Boon",
        "description": "Gain three additional Force Points at each level",
        "prerequisites": "Force Sensitive"
    },
    {
        "name": "Force of Personality",
        "description": "Use Wisdom or Charisma to determine Will Defense.",
        "prerequisites": "Charisma 13"
    },
    {
        "name": "Force Readiness",
        "description": "May spend Force Points as a free action even if it is not your turn"
    },
    {
        "name": "Force Regimen Mastery",
        "description": "Learn a number of Force Regimens equal to 1 + your Wis modifier (minimum 1)\r\n\r\n(Enter number of times taken)",
        "prerequisites": "Force Sensitive, Trained in Use The Force"
    },
    {
        "name": "Force Sensitivity",
        "description": "You can make Use the Force checks and gain access to Force talents",
        "prerequisites": "Not a droid"
    },
    {
        "name": "Force Training",
        "description": "Learn a number of Force powers equal to 1 + your Wis modifier (minimum 1)\r\n\r\n(Enter number of times taken)",
        "prerequisites": "Force Sensitive, Trained in Use The Force"
    },
    {
        "name": "Forceful Blast",
        "description": "Move a target damaged by your grenade attack.",
        "prerequisites": "Proficient with weapon used, base attack bonus +1"
    },
    {
        "name": "Forceful Recovery",
        "description": "Regain one Force power when you catch a second wind.",
        "prerequisites": "Force Sensitivity, Force Training"
    },
    {
        "name": "Fortifying Recovery",
        "description": "Gain bonus hit points when you recover.",
        "prerequisites": "Constitution 13"
    },
    {
        "name": "Friends in Low Places",
        "description": "Reduce black-market cost multiplier for licensed and restricted objects by 1",
        "prerequisites": "Trained in the Gather Information skill"
    },
    {
        "name": "Frightening Cleave",
        "description": "When you use the cleave feat, each enemy within 6 squares and line of sig ht takes a penalty to Reflex Defense, skill checks, and attack rolls against you.",
        "prerequisites": "Str 13, Cleave, Power Attack, base attack bonus +4"
    },
    {
        "name": "Galactic Alliance Military Training",
        "description": "You do not move down the condition track the first time an attack exceeds your damage threshold, and you gain access to the Brawler talent tree."
    },
    {
        "name": "Gearhead",
        "description": "Make Mechanics and Use Computer checks faster than usual once per encounter"
    },
    {
        "name": "Grab Back",
        "description": "As a reaction, make a grab or grapple attack following a failed grab or grapple attack made against yo u.",
        "prerequisites": "Dex 13"
    },
    {
        "name": "Grand Army of the Republic Training",
        "description": "Apply your armor's equipment bonus to your Will Defense.",
        "prerequisites": "Proficient with armor worn"
    },
    {
        "name": "Grapple Resistance",
        "description": "Gain a +5 bonus to resist grab and grapple attacks."
    },
    {
        "name": "Grazing Shot",
        "description": "Strike two targets in direct line of sight, dealing half damage to each.",
        "prerequisites": "Point Blank Shot"
    },
    {
        "name": "Great Cleave",
        "description": "No limit to cleave attacks each round",
        "prerequisites": "Cleave, BAB +4"
    },
    {
        "name": "Gunnery Specialist",
        "description": "Reroll an attack made with a vehicle weapon.",
        "prerequisites": "BAB +1"
    },
    {
        "name": "Halt",
        "description": "Knock an enemy prone after a successful attack of opportunity, immediately end target's rema ining actions when also exceeding its damage threshold .",
        "prerequisites": "Trip, Weapon Focus in selected weapon, Weapon Proficiency in selected weapon, base attack bonus +8"
    },
    {
        "name": "Hasty Modification",
        "description": "Swap one trait for another trait",
        "prerequisites": "Tech Specialist"
    },
    {
        "name": "Heavy Hitter",
        "description": "Add 1 point of damage for every 5 points rolled above the target's Refl ex Defense, plus additional benefits when you exceed the target's damage threshold.",
        "prerequisites": "Weapon Focus (heavy weapons), Weapon Proficiency (heavy weapons)"
    },
    {
        "name": "Hidious Visage",
        "description": "Deception check to push opponent away",
        "prerequisites": "Shapeshift species trait"
    },
    {
        "name": "Hobbling Strike",
        "description": "Reduce the target's speed instead of dealing extra damage.",
        "prerequisites": "Sneak Attack, Rapid Shot, or Rapid Strike"
    },
    {
        "name": "Hold Together",
        "description": "Delay the damage caused to a vehicle until the end of the round.",
        "prerequisites": "Trained in the Mechanics skill"
    },
    {
        "name": "Hyperblazer",
        "description": "Cut all calculation time and Use Computer penalties by half when making Use Computer checks for astrogation in the hyperspace tangle. Reduce hyperspace mapping time by half.",
        "prerequisites": "Trained in the Use Computer skill"
    },
    {
        "name": "Imperial Military Training",
        "description": "Negate one mind-affecting effect per encounter."
    },
    {
        "name": "Impersonate",
        "description": "Shapeshift to impersonate a specific person",
        "prerequisites": "Shapeshift species trait"
    },
    {
        "name": "Impetuous Move",
        "description": "Move when you catch a second wind",
        "prerequisites": "Con 13"
    },
    {
        "name": "Implant Training",
        "description": "You are not moved down the condition track an extra step by your implant",
        "prerequisites": "Must possess a cybernetic implant"
    },
    {
        "name": "Improved Bantha Rush",
        "description": "You may move your opponent a number of squares from 2 to half your Strength modifier",
        "prerequisites": "Str 15, Bantha Rush, BAB +1"
    },
    {
        "name": "Improved Charge",
        "description": "You can charge without moving in a straight line",
        "prerequisites": "Mobility"
    },
    {
        "name": "Improved Damage Threshold",
        "description": "Damage threshold increases by 5\r\n\r\n(Enter number of times taken)"
    },
    {
        "name": "Improved Defenses",
        "description": "Gain +1 bonus to all defenses"
    },
    {
        "name": "Improved Disarm",
        "description": "Gain +5 bonus on melee attacks to disarm an opponent",
        "prerequisites": "Melee Defense"
    },
    {
        "name": "Improved Opportunistic Trickery",
        "description": "Sacrifice attack of opportunity to reduce target's Reflex Defense by 5.",
        "prerequisites": "Combat Reflexes, Opportunistic Trickery"
    },
    {
        "name": "Improved Rapid Strike",
        "description": "Take -5 to attack to gain +2 dice of damage with a light melee weapon or lightsaber",
        "prerequisites": "Rapid Strike"
    },
    {
        "name": "Improved Sleight of Hand",
        "description": "Use Deception to aid your Stealth check to use Sleight of Hand; use Stealth to draw and palm a weapon si multaneously.",
        "prerequisites": "Dex 15, Skill Focus (Deception), trained in the Deception and Stealth skills"
    },
    {
        "name": "Improvised Weapon Mastery",
        "description": "Treat improvised wea ponsas simple weapons, deal +1d 6 points of damage.",
        "prerequisites": "Weapon Proficiency (simple weapons)"
    },
    {
        "name": "Impulsive Flight",
        "description": "Withdraw faster when damaged"
    },
    {
        "name": "Increased Agility",
        "description": "Increase Climb and Swim speeds and Jump distance by 2 squares and do not lose Dexterity bonus to Reflex Defense when climbing",
        "prerequisites": "Conditioning"
    },
    {
        "name": "Informer",
        "description": "You can use your Perception modifier to make Gather Information checks, and can make Gather Information checks with favorable circumstances in half the time",
        "prerequisites": "Trained in Perception"
    },
    {
        "name": "Instinctive Attack",
        "description": "Spend a Force Point to reroll an attack and take the better result.",
        "prerequisites": "Proficient in weapon used, living character (not a droid)"
    },
    {
        "name": "Instinctive Defense",
        "description": "Spend a Force Point to increase all defenses by 2 for 1 round.",
        "prerequisites": "Living character (not a droid)"
    },
    {
        "name": "Intimidator",
        "description": "When you successfully intimidate, enemy takes -5 to skill checks and -2 to attacks for one round.",
        "prerequisites": "Trained in the Persuasion skill"
    },
    {
        "name": "Indomitable Personality",
        "description": "Add your Charisma bonus to your Will Defense as a reaction.",
        "prerequisites": "Cha 13"
    },
    {
        "name": "Ion Shielding",
        "description": "Move only -1 step on condition track when ion damage exceeds damage threshold.",
        "prerequisites": "Droid with Str 13, or cyborg with Con 13"
    },
    {
        "name": "Jedi Familiarity",
        "description": "Gain one temporary Force Point when targeted by an ally's Force power or Force talent."
    },
    {
        "name": "Knife Trick",
        "description": "Attack of opportunity with concealed weapon to greater effect",
        "prerequisites": "Lightning Draw, trained in the Stealth skill"
    },
    {
        "name": "Knock Heads",
        "description": "You may knock two opponents' heads together after a successful multi-grab.",
        "prerequisites": "Dex 13, Str 13, Multi-Grab"
    },
    {
        "name": "Leader of Droids",
        "description": "Allied droids benefit from your beneficial mind-affecting effects."
    },
    {
        "name": "Lightning Draw",
        "description": "Draw and fire as a standard action",
        "prerequisites": "Quick Draw"
    },
    {
        "name": "Linguist",
        "description": "Gain bonus languages equal to 1 + your Int modifier (minimum 1)\r\n\r\n(Enter number of times taken)",
        "prerequisites": "Int 13"
    },
    {
        "name": "Logic Upgrade: Self-Defense",
        "description": "Once per encounter as a reaction, gain a +2 morale bonus to a defense score until your next turn",
        "prerequisites": "Droid"
    },
    {
        "name": "Logic Upgrade: Skill Swap",
        "description": "Swap a trained skill for an untrained skill on the fly.",
        "prerequisites": "Droid, equipped with basic processor"
    },
    {
        "name": "Logic Upgrade: Tactician",
        "description": "Once per encounter, use aid another action to grant an ally +5 to attack",
        "prerequisites": "Droid, BAB +4"
    },
    {
        "name": "Long Haft Strike",
        "description": "When you use a lightsaber pike or long-handled lightsaber you can treat it as a double weapon"
    },
    {
        "name": "Mandalorian Training",
        "description": "Gain a +2 bonus to ranged attack and Will Defense when using Charging Fire",
        "prerequisites": "Charging Fire"
    },
    {
        "name": "Maniacal Charge",
        "description": "Intimidate your enemies when charg ing, preventing adjacent characters from making attacks of opportunity and denying your target its Dexterity bonus."
    },
    {
        "name": "Martial Arts I",
        "description": "Increase damage from unarmed attacks by one die step; gain +1 dodge bonus to Reflex Defense"
    },
    {
        "name": "Martial Arts II",
        "description": "Increase damage from unarmed attacks by one die step; gain +1 dodge bonus to Reflex Defense",
        "prerequisites": "Martial Arts I, BAB +3"
    },
    {
        "name": "Martial Arts III",
        "description": "Increase damage from unarmed attacks by one die step; gain +1 dodge bonus to Reflex Defense",
        "prerequisites": "Martial Arts II, BAB +6"
    },
    {
        "name": "Master of Disguise",
        "description": "Gain +5 to creating a deceptive appearance or a forged document and reduce the penalty for rushing.",
        "prerequisites": "Trained in Deception, Cha 13"
    },
    {
        "name": "Meat Shield",
        "description": "Gain cover bonus equal to opponent's cover bonus.",
        "prerequisites": "Point Blank Shot, Precise Shot, base attack bonus +4"
    },
    {
        "name": "Mechanical Martial Arts",
        "description": "Give an enemy a -5 penalty on attack rolls and damage rolls for one round after striking it in unarmed combat.",
        "prerequisites": "Droid, Martial Arts I, base attack bonus +1"
    },
    {
        "name": "Melee Defense",
        "description": "Trade attack bonus on melee attacks for a dodge bonus to Reflex Defense",
        "prerequisites": "Int 13"
    },
    {
        "name": "Metamorph",
        "description": "Change your size",
        "prerequisites": "Con 13, shapeshift species trait, trained in Deception skill"
    },
    {
        "name": "Mighty Swing",
        "description": "Spend two swift actions to deal extra damage in melee",
        "prerequisites": "Str 13"
    },
    {
        "name": "Mighty Throw",
        "description": "Add your Strength as well as your Dexterity bonus to attack rolls with thrown weapons, and increase each range category by your Strength modifier",
        "prerequisites": "Str 13"
    },
    {
        "name": "Mission Specialist (Acrobatics)",
        "description": "Grant bonus to allies' untrained skill checks with Acrobatics.",
        "prerequisites": "Trained in Acrobatics"
    },
    {
        "name": "Mission Specialist (Climb)",
        "description": "Grant bonus to allies' untrained skill checks with Climb.",
        "prerequisites": "Trained in Climb"
    },
    {
        "name": "Mission Specialist (Deception)",
        "description": "Grant bonus to allies' untrained skill checks with Deception.",
        "prerequisites": "Trained in Deception"
    },
    {
        "name": "Mission Specialist (Endurance)",
        "description": "Grant bonus to allies' untrained skill checks with Endurance.",
        "prerequisites": "Trained in Endurance"
    },
    {
        "name": "Mission Specialist (Gather Information)",
        "description": "Grant bonus to allies' untrained skill checks with Gather Information.",
        "prerequisites": "Trained in Gather Information"
    },
    {
        "name": "Mission Specialist (Initiative)",
        "description": "Grant bonus to allies' untrained skill checks with Initiative.",
        "prerequisites": "Trained in Initiative"
    },
    {
        "name": "Mission Specialist (Jump)",
        "description": "Grant bonus to allies' untrained skill checks with Jump.",
        "prerequisites": "Trained in Jump"
    },
    {
        "name": "Mission Specialist (Knowledge (Bureaucracy))",
        "description": "Grant bonus to allies' untrained skill checks with Knowledge (Bureaucracy).",
        "prerequisites": "Trained in Knowledge (Bureaucracy)"
    },
    {
        "name": "Mission Specialist (Knowledge (Galactic Lore))",
        "description": "Grant bonus to allies' untrained skill checks with Knowledge (Galactic Lore).",
        "prerequisites": "Trained in Knowledge (Galactic Lore)"
    },
    {
        "name": "Mission Specialist (Knowledge (Life Sciences))",
        "description": "Grant bonus to allies' untrained skill checks with Knowledge (Life Sciences).",
        "prerequisites": "Trained in Knowledge (Life Sciences)"
    },
    {
        "name": "Mission Specialist (Knowledge (Physical Sciences))",
        "description": "Grant bonus to allies' untrained skill checks with Knowledge (Physical Sciences).",
        "prerequisites": "Trained in Knowledge (Physical Sciences)"
    },
    {
        "name": "Mission Specialist (Knowledge (Social Sciences))",
        "description": "Grant bonus to allies' untrained skill checks with Knowledge (Social Sciences).",
        "prerequisites": "Trained in Knowledge (Social Sciences)"
    },
    {
        "name": "Mission Specialist (Knowledge (Tactics))",
        "description": "Grant bonus to allies' untrained skill checks with Knowledge (Tactics).",
        "prerequisites": "Trained in Knowledge (Tactics)"
    },
    {
        "name": "Mission Specialist (Knowledge (Technology))",
        "description": "Grant bonus to allies' untrained skill checks with Knowledge (Technology).",
        "prerequisites": "Trained in Knowledge (Technology)"
    },
    {
        "name": "Mission Specialist (Mechanics)",
        "description": "Grant bonus to allies' untrained skill checks with Mechanics.",
        "prerequisites": "Trained in Mechanics"
    },
    {
        "name": "Mission Specialist (Perception)",
        "description": "Grant bonus to allies' untrained skill checks with Perception.",
        "prerequisites": "Trained in Perception"
    },
    {
        "name": "Mission Specialist (Persuasion)",
        "description": "Grant bonus to allies' untrained skill checks with Persuasion.",
        "prerequisites": "Trained in Persuasion"
    },
    {
        "name": "Mission Specialist (Pilot)",
        "description": "Grant bonus to allies' untrained skill checks with Pilot.",
        "prerequisites": "Trained in Pilot"
    },
    {
        "name": "Mission Specialist (Ride)",
        "description": "Grant bonus to allies' untrained skill checks with Ride.",
        "prerequisites": "Trained in Ride"
    },
    {
        "name": "Mission Specialist (Stealth)",
        "description": "Grant bonus to allies' untrained skill checks with Stealth.",
        "prerequisites": "Trained in Stealth"
    },
    {
        "name": "Mission Specialist (Survival)",
        "description": "Grant bonus to allies' untrained skill checks with Survival.",
        "prerequisites": "Trained in Survival"
    },
    {
        "name": "Mission Specialist (Swim)",
        "description": "Grant bonus to allies' untrained skill checks with Swim.",
        "prerequisites": "Trained in Swim"
    },
    {
        "name": "Mission Specialist (Treat Injury)",
        "description": "Grant bonus to allies' untrained skill checks with Treat Injury.",
        "prerequisites": "Trained in Treat Injury"
    },
    {
        "name": "Mission Specialist (Use Computer)",
        "description": "Grant bonus to allies' untrained skill checks with Use Computer.",
        "prerequisites": "Trained in Use Computer"
    },
    {
        "name": "Mission Specialist (Use the Force)",
        "description": "Grant bonus to allies' untrained skill checks with Use the Force.",
        "prerequisites": "Trained in Use the Force"
    },
    {
        "name": "Mobility",
        "description": "Gain +5 dodge bonus to Reflex Defense against some attacks of opportunity",
        "prerequisites": "Dodge"
    },
    {
        "name": "Momentum Strike",
        "description": "Gain one die of damage on mounted melee attacks if your mount or vehicle has moved its speed",
        "prerequisites": "Trained in Pilot or Ride"
    },
    {
        "name": "Mounted Combat",
        "description": "Increase speed and avoid attacks when riding a mount.",
        "prerequisites": "Trained in the Ride skill"
    },
    {
        "name": "Mounted Defense",
        "description": "Redirect successful attacks against you to hit your mount or vehicle instead once per encounter",
        "prerequisites": "Trained in Pilot or Ride"
    },
    {
        "name": "Moving Target",
        "description": "Gain a bonus to Reflex Defense when you remain mobile.",
        "prerequisites": "Dodge"
    },
    {
        "name": "Multi-Grab",
        "description": "You may grab two opponents as a standard action.",
        "prerequisites": "Dex 13"
    },
    {
        "name": "Multi-Targeting",
        "description": "You can spread your aim action across multiple consecutive rounds.",
        "prerequisites": "Droid, Int 13, proficient with weapon"
    },
    {
        "name": "Natural Leader",
        "description": "You lead an organization of a scale equal to half your heroic level plus your Charisma bonus, with a +10 to your organization score",
        "prerequisites": "Cha 13"
    },
    {
        "name": "Never Surrender",
        "description": "Make an Endurance check to prevent falling to 0 hit points.",
        "prerequisites": "Trained in Endurance"
    },
    {
        "name": "Nikto Survival",
        "description": "Reroll Survival checks in native enviro nment.",
        "prerequisites": "Member of Nikto subspecies"
    },
    {
        "name": "Officer Candidacy Training",
        "description": "Gain a bonus to your Rank and Privilege Score.",
        "prerequisites": "-"
    },
    {
        "name": "Opportunistic Retreat",
        "description": "Sacrifice attack of opportunity to move at half speed",
        "prerequisites": "Combat Reflexes"
    },
    {
        "name": "Opportunistic Shooter",
        "description": "Gain a bonus to attacks of opportunity with ranged weapons.",
        "prerequisites": "-"
    },
    {
        "name": "Opportunistic Trickery",
        "description": "Sacrifice attack of opportunity to reduce target's Reflex Defense by 2.",
        "prerequisites": "Combat Reflexes, Sneak Attack"
    },
    {
        "name": "Overwhelming Attack",
        "description": "Any attempt to negate your attack takes a -5 penaity on the attack roll or skill check."
    },
    {
        "name": "Pall of the Dark Side",
        "description": "Add half your Dark Side Score to Use the Force checks to resist detection.",
        "prerequisites": "Dark Side Score 1+"
    },
    {
        "name": "Pin",
        "description": "Grappled opponent is pinned for 1 round, can't move, and loses its Dexterity bonus to Reflex Defense",
        "prerequisites": "BAB +1"
    },
    {
        "name": "Pincer",
        "description": "Maintain Pin feat and make subsequent grapple checks as a swift action. Apply Crush to each check.",
        "prerequisites": "Droid, equipped with claw or hand appendage, base attack bonus +1, Pin, Crush"
    },
    {
        "name": "Pinpoint Accuracy",
        "description": "Move target -1 step on the condition track when you hit with Aiming Accuracy.",
        "prerequisites": "Droid, Aiming Accuracy, Point Blank Shot, Precise Shot, proficient with weapon"
    },
    {
        "name": "Pistoleer",
        "description": "Gain benefits when using certain pistols.",
        "prerequisites": "Proficient with weapon used"
    },
    {
        "name": "Point Blank Shot",
        "description": "+1 bonus on ranged attacks and damage against point blank foes"
    },
    {
        "name": "Poison Resistance",
        "description": "Gain +5 to Fortitude Defense against poison, and only take half damage from poisons",
        "prerequisites": "Con 13"
    },
    {
        "name": "Power Attack",
        "description": "Trade attack bonus for damage on melee attacks (up to your base attack bonus)",
        "prerequisites": "Str 13"
    },
    {
        "name": "Power Blast",
        "description": "Trade attack bonus for damage on ranged attacks (up to your base attack bonus)"
    },
    {
        "name": "Powerful Charge",
        "description": "Gain +2 bonus on your attack roll while charging and deal extra damage",
        "prerequisites": "Medium or larger, BAB+1"
    },
    {
        "name": "Powerful Rage",
        "description": "+4 to Strength checks and Strength-based skill checks whilst raging",
        "prerequisites": "Rage"
    },
    {
        "name": "Precise Shot",
        "description": "No -5 penalty for shooting into melee",
        "prerequisites": "Point Blank Shot"
    },
    {
        "name": "Predictive Defense",
        "description": "Use Dexterity or Intelligence to determine Reflex Defense.",
        "prerequisites": "Intelligence 13"
    },
    {
        "name": "Prime Shot",
        "description": "Gain a bonus to attack rolls when none of your allies are near the target.",
        "prerequisites": "Point Blank Shot"
    },
    {
        "name": "Quick Draw",
        "description": "Draw weapon as a swift action",
        "prerequisites": "BAB +1"
    },
    {
        "name": "Quick Skill",
        "description": "Once per encounter, take 10 on any trained skill check when rushed, or take 20 in half the time"
    },
    {
        "name": "Rancor Crush",
        "description": "Move an enemy -1 step down the condition track when using the Crush feat",
        "prerequisites": "Str 15, Crush, Pin, base attack bonus +1"
    },
    {
        "name": "Resilient Strength",
        "description": "Use Strength or Constitution to determine Fortitude Defence.",
        "prerequisites": "Strength 13"
    },
    {
        "name": "Return Fire",
        "description": "You may make a single ranged attack as a reaction to a ranged attack against you that misses.",
        "prerequisites": "Dex 15, Quick Draw, Weapon Focus (chosen ranged weapon)"
    },
    {
        "name": "Returning Bug",
        "description": "Thrown razor bugs and thud bugs return to your hand immediately.",
        "prerequisites": "Proficient with weapon used"
    },
    {
        "name": "Rapid Reaction",
        "description": "React twice to the same trigger once per encounter"
    },
    {
        "name": "Rapid Shot",
        "description": "Take a -2 penalty on a ranged attack roll to deal +1 die of damage",
        "prerequisites": "BAB + 1, proficient with weapon"
    },
    {
        "name": "Rapid Strike",
        "description": "Take a -2 penalty on a melee attack roll to deal +1 die of damage",
        "prerequisites": "BAB +1, proficient with weapon"
    },
    {
        "name": "Rapport",
        "description": "Grant an additional +2 bonus to a character you are helping with aid another"
    },
    {
        "name": "Rebel Military Training",
        "description": "Gain a dodge bonus to Reflex Defense when using Running Attack.",
        "prerequisites": "Running Attack"
    },
    {
        "name": "Recall",
        "description": "You may reroll a check for a Knowledge skill with which you are trained once per day and keep the better result",
        "prerequisites": "Trained in a Knowledge skill"
    },
    {
        "name": "Recovering Surge",
        "description": "Move up the condition track when you catch a second wind."
    },
    {
        "name": "Recurring Success",
        "description": "Gain extra use of a 1/encounter talent or feat."
    },
    {
        "name": "Relentless Attack",
        "description": "Whenever you miss a target with proficient weapon, gain a +2 competence bonus on your next attack against that target until the end of your next turn",
        "prerequisites": "Double Attack"
    },
    {
        "name": "Republic Military Training",
        "description": "Once per encounter gain DR 10 against an incoming attack from which you have cover"
    },
    {
        "name": "Resolute Stance",
        "description": "Gain +2 or +5 to Will Defense when you fight defensively.",
        "prerequisites": "Base attack bonus +1"
    },
    {
        "name": "Resurgance",
        "description": "Gain bonus swift action when you catch your second wind",
        "prerequisites": "Trained in the Endurance skill"
    },
    {
        "name": "Riflemaster",
        "description": "Gain benefits when using certain rifles.",
        "prerequisites": "Proficient with weapon used"
    },
    {
        "name": "Risk Taker",
        "description": "Improve your chances of success with Climb or Jump checks.",
        "prerequisites": "Trained in Climb or Jump"
    },
    {
        "name": "Running Attack",
        "description": "Move before and after making an attack",
        "prerequisites": "Dex 13"
    },
    {
        "name": "Sadistic Strike",
        "description": "Move opponents -1 step on the condition track when you deliver a coup de grace."
    },
    {
        "name": "Savage Attack",
        "description": "If you hit your target with the first attack from a full attack, then you deal +1 die of damage for each other successful attack",
        "prerequisites": "Double Attack"
    },
    {
        "name": "Scavenger",
        "description": "Make a Perception check to retrieve 30 x your result's worth in raw materials from a vehicle or object for use in building an object with the build object application of Mechanics"
    },
    {
        "name": "Sensor Link",
        "description": "Share sensor data instantly with an ally.",
        "prerequisites": "Droid or cyborg with associated hardware"
    },
    {
        "name": "Separatist Military Training",
        "description": "Gain a +1 bonus on an attack roll while adjacent to an ally."
    },
    {
        "name": "Shake it Off",
        "description": "Spend two swift actions to move +1 step along the condition track",
        "prerequisites": "Con 13, Trained in Endurance"
    },
    {
        "name": "Shield Surge",
        "description": "Trade vehicle's SR for damage taken.",
        "prerequisites": "Droid or cyborg with scomp link or similar direct data link with the vehicle, trained in Mechanics"
    },
    {
        "name": "Signature Device",
        "description": "Install two traits",
        "prerequisites": "Tech Specialist"
    },
    {
        "name": "Silver Tongue",
        "description": "Intimidate a creature or change its attitude as a standard action.",
        "prerequisites": "Trained in Persuasion"
    },
    {
        "name": "Sith Military Training",
        "description": "Once per encounter upon reducing an opponent to 0 hit points or deal damage exceeding their damage threshold, all enemies within six squares take a -2 to defenses until your next turn"
    },
    {
        "name": "Skill Challenge: Catastrophic Avoidance",
        "description": "Catastrophic failures in a skill challenge occur less frequently and with milder results."
    },
    {
        "name": "Skill Challenge: Last Resort",
        "description": "Reroll a third failed skill check during a sk ill challenge and take the better result."
    },
    {
        "name": "Skill Challenge: Recovery",
        "description": "Treat a skill challenge as if it had the recovery effect."
    },
    {
        "name": "Skill Focus",
        "description": "Gain +5 competence bonus on skill checks with one trained skill\r\n\r\n(Enter number of times taken)"
    },
    {
        "name": "Skill Training",
        "description": "You become trained in one class skill\r\n\r\n(Enter number of times taken)"
    },
    {
        "name": "Slammer",
        "description": "Triple Strength bonus to damage rolls on this special melee attack.",
        "prerequisites": "Small or larger droid, equipped with at least two suitable appendages, Str 13"
    },
    {
        "name": "Slippery Maneuver",
        "description": "Dodge two targets, withdraw at full speed",
        "prerequisites": "Dodge"
    },
    {
        "name": "Sport Hunter",
        "description": "Gain benefits with certain slugthrowers and sporting weapons.",
        "prerequisites": "Proficient with weapon used"
    },
    {
        "name": "Spray Shot",
        "description": "When using a weapon set on autofire, you can reduce the area to 1 square."
    },
    {
        "name": "Sniper",
        "description": "You ignore soft cover when making a ranged attack",
        "prerequisites": "Precise Shot, BAB +4"
    },
    {
        "name": "Sniper Shot",
        "description": "Take -5 penalty to Reflex Defense until your next turn to gain a +2 to ranged attack"
    },
    {
        "name": "Staggering Attack",
        "description": "Any time you deal additional damage from a Feat or Talent that grants one or more extra dice of damage, you can forgo the extra damage to move the target 2 squares per extra die sacrificed. This movement does not provoke Attacks of Opportunity.",
        "prerequisites": "Sneak Attack talent or Rapid Shot or Rapid Strike"
    },
    {
        "name": "Staggering Attack (GAW)",
        "description": "You take a either -2 or -5 penalty on your attack roll, and if your attack deals damage, the target takes a -2 or -5 penalty to Skill Checks respectively until the end of your next turn.",
        "prerequisites": "Proficient with melee weapon used, base attack bonus +1"
    },
    {
        "name": "Stand Tall",
        "description": "When you take damage, nearby allies attack your attacker."
    },
    {
        "name": "Starship Designer",
        "description": "You are trained to design (and redesign) starships",
        "prerequisites": "Tech Specialist, Trained in Mechanics"
    },
    {
        "name": "Starship Tactics",
        "description": "Learn a number of starship maneuvers equal to 1 + your Wis modifier (minumum 1)\r\n\r\n(Enter number of times taken)",
        "prerequisites": "Vehicular Combat, Trained in Pilot"
    },
    {
        "name": "Stay Up",
        "description": "Move 1 step down the condition track to reduce damage",
        "prerequisites": "Trained in the Endurance skill"
    },
    {
        "name": "Steadying Position",
        "description": "Deny target's Dexterity bonus to Reflex Defense when you are prone and aiming.",
        "prerequisites": "Careful Shot"
    },
    {
        "name": "Strafe",
        "description": "You may attack a four square line with an autofire attack, or all of the squares you fly over with a jetpack",
        "prerequisites": "BAB +1"
    },
    {
        "name": "Strong in the Force",
        "description": "Roll d8s instead of d6s when you spend a Force Point"
    },
    {
        "name": "Superior Tech",
        "description": "Install superior equipment upgrades",
        "prerequisites": "Tech Specialist, Int 17, Level 9"
    },
    {
        "name": "Suppression Fire",
        "description": "Targets lower level than you must end their next turn in cover if you use aid another to impose a penalty on an their attack roll and exceed their Will Defense",
        "prerequisites": "Str 13, Burst Fire, Weapon Proficiency (heavy)"
    },
    {
        "name": "Surgical Expertise",
        "description": "You can perform surgery in 10 minutes instead of 1 hour",
        "prerequisites": "Trained in Treat Injury"
    },
    {
        "name": "Swarm",
        "description": "+1 to melee attack rolls for each adjacent ally",
        "prerequisites": "Coordinated Attack"
    },
    {
        "name": "Tactical Advantage",
        "description": "Make an attack of opportunity and move 1 square",
        "prerequisites": "Combat Reflexes"
    },
    {
        "name": "Tactical Genius",
        "description": "You regain all starship maneuvers at the end of any round you roll a natural 20 on an attack roll",
        "prerequisites": "Starship Tactics, Vehicular Combat"
    },
    {
        "name": "Targeted Area",
        "description": "Deal an additional 5 po ints of damage against one target within a successful area attack.",
        "prerequisites": "Weapon Proficiency in selected weapon, base attack bonus +5"
    },
    {
        "name": "Tech Specialist",
        "description": "You can make custom modifications to armor, weapons, vehicles, droids, and devices",
        "prerequisites": "Trained in Mechanics"
    },
    {
        "name": "Throw",
        "description": "Throw a grappled opponent up to 1 square beyond your reach and deal damage",
        "prerequisites": "Trip"
    },
    {
        "name": "Tool Frenzy",
        "description": "Gain +2 to attack rolls and damage rolls with nonweapon appendages in exchange for -2 penalty to Reflex Defense.",
        "prerequisites": "Small or larger droid, equipped with at least two appendages with tools"
    },
    {
        "name": "Toughness",
        "description": "Gain +1 hit point per character level"
    },
    {
        "name": "Trample",
        "description": "When using the mounted charge action, attack enemies between you and your target.",
        "prerequisites": "Trained in the Ride skill"
    },
    {
        "name": "Trench Warrior",
        "description": "When you have cover against a enemy's ranged attacks, gain a + 1 bonus on attack rolls against that enemy."
    },
    {
        "name": "Trip",
        "description": "Trip an opponent that you've grappled, knocking it prone",
        "prerequisites": "BAB +1"
    },
    {
        "name": "Triple Attack",
        "description": "Make second extra attack during full attack, additional -5 penalty to all attacks",
        "prerequisites": "BAB +9, Double Attack"
    },
    {
        "name": "Triple Critical",
        "description": "Deal triple damage on a critical hit",
        "prerequisites": "BAB +8, choose a weapon"
    },
    {
        "name": "Tumble Defense",
        "description": "Add your base attack bonus to the acrobatics DC to tumble through your threatened squares"
    },
    {
        "name": "Turn and Burn",
        "description": "Withdraw by clearing threatened squares in up to 2 squares of movement, move your speed when using the withdraw action. Withdraw as a reaction by spending a Force Point.",
        "prerequisites": "Droid, equipped with hovering, flying, wheeled, or tracked locomotion, Dex 13"
    },
    {
        "name": "Unleashed",
        "description": "You may use Unleashed abilities",
        "prerequisites": "Destiny"
    },
    {
        "name": "Unstoppable Combatant",
        "description": "Catch more than one second wind in an encounter.",
        "prerequisites": "Extra Second Wind"
    },
    {
        "name": "Unstoppable Force",
        "description": "Gain a +5 bonus to Fortitude Defense and Will Defense against any effect requiring a Use the Force check."
    },
    {
        "name": "Unswerving Resolve",
        "description": "Whenever you are target by a fear effect or mind-affecting effect that fails to affect you, you gain a temporary Force Point that lasts to the end of you next turn. If you negate the continget effect in any way, you do not gain the benefit of this feat",
        "prerequisites": "BAB +2"
    },
    {
        "name": "Unwavering Resolve",
        "description": "Gain a +5 bonus to Will Defense against Deception and Persuasion checks.",
        "prerequisites": "Trained in Perception"
    },
    {
        "name": "Vechicle Systems Expertise",
        "description": "Recharge shields or reroute power on a vehide faster than normal.",
        "prerequisites": "Tech Specialist, trained in Mechanics"
    },
    {
        "name": "Vehicular Combat",
        "description": "Negate one attack per round against the vehicle you're piloting",
        "prerequisites": "Trained in Pilot"
    },
    {
        "name": "Vehicular Surge",
        "description": "Once per day, gain bonus hit points for a vehicle you pilot.",
        "prerequisites": "Trained in Pilot"
    },
    {
        "name": "Vitality Surge",
        "description": "Catch a second wind even when not at or below half hit points.",
        "prerequisites": "Extra Second Wind"
    },
    {
        "name": "Wary Defender",
        "description": "Gain a +2 bonus to Fortitude Defense and Will Defense while fighting defensively."
    },
    {
        "name": "Weapon Finesse",
        "description": "Use Dex modifier instead of Str modifier on attack rolls with light melee weapons and lightsabers",
        "prerequisites": "BAB +1"
    },
    {
        "name": "Weapon Focus",
        "description": "+1 bonus on attack rolls with selected weapon",
        "prerequisites": "Choose a weapon"
    },
    {
        "name": "Weapon Proficiency",
        "description": "Ignore -5 penalty on attack rolls with weapons of a particular type"
    },
    {
        "name": "Whirlwind Attack",
        "description": "Make one melee attack against each opponent within reach",
        "prerequisites": "Dex 13, Int 13, Melee Defense, BAB +4"
    },
    {
        "name": "Wicked Strike",
        "description": "Gain extra attack on a second target upon damaging the first target",
        "prerequisites": "Rapid Strike"
    },
    {
        "name": "Wilderness First Aid",
        "description": "Use Basic Survival skill as if you have a medpac for Treat Injury checks.",
        "prerequisites": "Trained in the Survival skill"
    },
    {
        "name": "Withdrawal Strike",
        "description": "Adjacent opponents cannot withdraw from squares which you threaten",
        "prerequisites": "BAB +5"
    },
    {
        "name": "Wookiee Grip",
        "description": "Wield two-handed weapons in a single hand.",
        "prerequisites": "Str 13"
    },
    {
        "name": "Zero Range",
        "description": "Gain a +1 bonus on your attack roll and deal +1 die damage when making a ranged attack against an adjacent target or a target in your fighting space.",
        "prerequisites": "Point Blank shot"
    },
    {
        "name": "Species Feat",
        "description": "Description",
        "prerequisites": "Prerequisites"
    },
    {
        "name": "Ample Foraging",
        "description": "Grant a bonus to allies' Fortitude Defenses by foraging.",
        "prerequisites": "Ewok"
    },
    {
        "name": "Binary Mind",
        "description": "Enemies must roll twice, keeping the lower result, on mind-affecting effects.",
        "prerequisites": "Cerean"
    },
    {
        "name": "Bothan Will",
        "description": "Gain a bonus to Will Defense when an enemy fails to overcome your iron will.",
        "prerequisites": "Bothan"
    },
    {
        "name": "Bowcaster Marksman",
        "description": "Gain a bonus to damage rolls when you spend a Force point on a bowcaster attack.",
        "prerequisites": "Wookiee"
    },
    {
        "name": "Clawed Subspecies",
        "description": "Deal damage with sharp claws on unarmed attacks.",
        "prerequisites": "Quarren"
    },
    {
        "name": "Confident Success",
        "description": "Gain a Force point when you successfully learn secret information.",
        "prerequisites": "Bothan"
    },
    {
        "name": "Darkness Dweller",
        "description": "Impose a penalty to SteaIth checks made when close to you.",
        "prerequisites": "Sullustan"
    },
    {
        "name": "Deep Sight",
        "description": "Gain darkvision ant ignore concealment from darkness.",
        "prerequisites": "Quarren"
    },
    {
        "name": "Devastating Bellow",
        "description": "Deal more damage with your bellow attacks.",
        "prerequisites": "Ithorian"
    },
    {
        "name": "Disarming Charm",
        "description": "Gain a bonus to skill checks on targets whose attitude you have improved.",
        "prerequisites": "Sullustan"
    },
    {
        "name": "Fast Swimmer",
        "description": "Gain a bonus to your swim speed.",
        "prerequisites": "Mon Calamari"
    },
    {
        "name": "Flawless Pilot",
        "description": "Reroll Pilot checks, always keeping the better result.",
        "prerequisites": "Duros"
    },
    {
        "name": "Forest Stalker",
        "description": "Reroll Stealth checks, always keeping the better result.",
        "prerequisites": "Ewok"
    },
    {
        "name": "Fringe Benefits",
        "description": "Reduce the cost multiplier of items bought on the black market.",
        "prerequisites": "Rodian"
    },
    {
        "name": "Gungan Weapon Master",
        "description": "Increase the die type when adding to attacks with an atlatl or cesta.",
        "prerequisites": "Gungan"
    },
    {
        "name": "Hunter's Instincts",
        "description": "Reroll Perception checks, always keeping the better result.",
        "prerequisites": "Rodian"
    },
    {
        "name": "Imperceptible Liar",
        "description": "Increase the die type when adding to a Deception check.",
        "prerequisites": "Twi'lek"
    },
    {
        "name": "Inborn Resilience",
        "description": "Reduce one defense bonus but increase another.",
        "prerequisites": "Zabrak"
    },
    {
        "name": "Increased Resistance",
        "description": "Gain a bonus to Fortitude Defense when an enemy fails to affect you.",
        "prerequisites": "Gamorrean"
    },
    {
        "name": "Instinctive Perception",
        "description": "Gain a temporary Force point when your Perception reroll is lower.",
        "prerequisites": "Zabrak"
    },
    {
        "name": "Jedi Heritage",
        "description": "Gain extra Force powers when you take the Force training feat.",
        "prerequisites": "Twi'lek, Force Sensitivity"
    },
    {
        "name": "Justice Seeker",
        "description": "Gain a bonus to damage rolls against those who harm your allies.",
        "prerequisites": "Kel Dor"
    },
    {
        "name": "Keen Scent",
        "description": "Increase the range of your Scent ability to 20 squares.",
        "prerequisites": "Ewok"
    },
    {
        "name": "Lasting Influence",
        "description": "After a successful Persuasion check, gain a bonus to future Persuasion checks.",
        "prerequisites": "Bothan"
    },
    {
        "name": "Master Tracker",
        "description": "Increase the die type when adding to a Survival check.",
        "prerequisites": "Rodian"
    },
    {
        "name": "Mind of Reason",
        "description": "Use Wisdom instead of Intelligence for Intelligence-based skill checks.",
        "prerequisites": "Cerean"
    },
    {
        "name": "Mon Calamari Shipwright",
        "description": "Reroute power more quickly and without the risk of failure.",
        "prerequisites": "Mon Calamari"
    },
    {
        "name": "Nature Specialist",
        "description": "Increase the die type when adding to a Knowledge (life sciences) check.",
        "prerequisites": "Ithorian"
    },
    {
        "name": "Perfect Intuition",
        "description": "Reroll Initiative checks, always keeping the better result.",
        "prerequisites": "Cerean"
    },
    {
        "name": "Perfect Swimmer",
        "description": "Reroll Swim checks, always keeping the better result.",
        "prerequisites": "Gungan"
    },
    {
        "name": "Pitiless Warrior",
        "description": "Gain bonus hit points whenever you take down a foe.",
        "prerequisites": "Trandoshan"
    },
    {
        "name": "Primitive Warrior",
        "description": "Deal +1 die of damage with simple melee weapons.",
        "prerequisites": "Gamorrean"
    },
    {
        "name": "Quick Comeback",
        "description": "Recover quickly after being moved down the condition track by damage.",
        "prerequisites": "Gamorrean"
    },
    {
        "name": "Read the Winds",
        "description": "Detect hidden enemies within 10 squares of you.",
        "prerequisites": "Kel Dor"
    },
    {
        "name": "Regenerative Healing",
        "description": "Regain more hit points (but more slowly) when you catch a second wind.",
        "prerequisites": "Trandoshan"
    },
    {
        "name": "Resurgent Vitality",
        "description": "Gain additional hit points when catching a second wind.",
        "prerequisites": "Wookiee"
    },
    {
        "name": "Scion of Dorin",
        "description": "Gain a bonus to Fortitude Defense against atmospheric hazards.",
        "prerequisites": "Kel Dor"
    },
    {
        "name": "Sharp Senses",
        "description": "Increase the die type when adding to a perception check.",
        "prerequisites": "Mon Calamari"
    },
    {
        "name": "Shrewd Bargainer",
        "description": "Suppress opponents insight and morale bonuses to Will Defense.",
        "prerequisites": "Quarren"
    },
    {
        "name": "Spacer's Surge",
        "description": "Gain a temporary Force point when you roll a natural 20 on a Pilot check.",
        "prerequisites": "Duros"
    },
    {
        "name": "Strong Bellow",
        "description": "Use your bellow ability without moving down the condition track.",
        "prerequisites": "Ithorian"
    },
    {
        "name": "Sure Climber",
        "description": "Gain a climb speed of 4 squares.",
        "prerequisites": "Sullustan"
    },
    {
        "name": "Survivor of Ryloth",
        "description": "Make Survival checks to resist extreme heat and cold.",
        "prerequisites": "Twi'lek"
    },
    {
        "name": "Thick Skin",
        "description": "Gain a +2 species bonus to your Fortitude Defense.",
        "prerequisites": "Trandoshan"
    },
    {
        "name": "Unwavering Focus",
        "description": "Impose a penalty to skill checks for mind-affecting effects that target you.",
        "prerequisites": "Zabrak"
    },
    {
        "name": "Veteran Spacer",
        "description": "Gain a bonus to Use Computer checks made to astrogate",
        "prerequisites": "Duros"
    },
    {
        "name": "Warrior Heritage",
        "description": "Gain a bonus to Will Defense when using an atlatl or a cesta.",
        "prerequisites": "Gungan"
    },
    {
        "name": "Wroshyr Rage",
        "description": "Gain bonus hit points when raging.",
        "prerequisites": "Wookiee"
    },
    {
        "name": "Martial Arts Feats",
        "description": "Description",
        "prerequisites": "Prerequisites"
    },
    {
        "name": "Hijkata Training",
        "description": "Make counterattack; impose penalties to enemy attacks.",
        "prerequisites": "Combat Reflexes, Martial Arts I"
    },
    {
        "name": "K'tara Training",
        "description": "Deal extra damage against flat-footed enemy; render target mute.",
        "prerequisites": "Martial Arts I, trained in Stealth"
    },
    {
        "name": "K'thri Training",
        "description": "Make swift unarmed attacks; deal half damage on misses.",
        "prerequisites": "Dual Weapon Mastery I, Martial Arts I"
    },
    {
        "name": "Stava Training",
        "description": "Grab and grapple as a larger creature; grab after charging.",
        "prerequisites": "Martial Arts I, Running Attack"
    },
    {
        "name": "Tae-Jitsu Training",
        "description": "Deal more damage on Critical hits; use Dodge against enemies.",
        "prerequisites": "Dodge, Martial Arts I, trained in Initiative"
    },
    {
        "name": "Teräs Käsi Training",
        "description": "Treat target's damage threshold as lower.",
        "prerequisites": "Strength 13, Martial Arts I"
    },
    {
        "name": "Wrruushi Training",
        "description": "Gain bonus hit points on unarmed attacks; deny target equipment bonus.",
        "prerequisites": "Constitution 13, Martial Arts I, Wookiee"
    },
    {
        "name": "Team Feat",
        "description": "Description",
        "prerequisites": "Prerequisites"
    },
    {
        "name": "Aquatic Specialists",
        "description": "Gain bonuses to Swim checks when near allies.",
        "prerequisites": "Trained in Swim"
    },
    {
        "name": "Ascension Specialists",
        "description": "Gain bonuses to Climb checks when near allies.",
        "prerequisites": "Trained in Climb"
    },
    {
        "name": "Covert Operatives",
        "description": "Gain bonuses to Stealth checks when near allies.",
        "prerequisites": "Trained in Stealth"
    },
    {
        "name": "Medical Team",
        "description": "Gain bonuses to Treat Injury checks when near allies.",
        "prerequisites": "Trained in Treat Injury"
    },
    {
        "name": "Mounted Regiment",
        "description": "Gain bonuses to Ride checks when near allies.",
        "prerequisites": "Trained in Ride"
    },
    {
        "name": "Nimble Team",
        "description": "Gain bonuses to Acrobatics checks when near allies.",
        "prerequisites": "Trained in Acrobatics"
    },
    {
        "name": "Slicer Team",
        "description": "Gain bonuses to Use Computer checks when near allies.",
        "prerequisites": "Trained in Use Computer"
    },
    {
        "name": "Technical Experts",
        "description": "Gain bonuses to Mechanics checks when near allies.",
        "prerequisites": "Trained in Mechanics"
    },
    {
        "name": "Tireless Squad",
        "description": "Gain bonuses to Endurance checks when near allies.",
        "prerequisites": "Trained in Endurance"
    },
    {
        "name": "Unhindered Approach",
        "description": "Gain bonuses to Jump checks sheen near allies.",
        "prerequisites": "Trained in Jump"
    },
    {
        "name": "Unified Squadron",
        "description": "Gain bonuses to Pilot checks when near allies.",
        "prerequisites": "Trained in Pilot"
    },
    {
        "name": "Wary Sentries",
        "description": "Gain bonuses to Perception checks when near allies.",
        "prerequisites": "Trained in Perception"
    },
    {
        "name": "Wilderness Specialists",
        "description": "Gain bonuses to Survival checks when near allies.",
        "prerequisites": "Trained in Survival"
    }
]
