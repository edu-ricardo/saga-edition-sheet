import type { Talent } from '../types';

export const TALENTS: Talent[] = [
    {
        "name": "Adept Negotiator",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "As a Standard Action, you can weaken the resolve of one opponent with your words. The target must have an Intelligence of 3 or higher, and it must be able to see, hear, and understand you. Make a Persuasion check; if the result equals or exceeds the target's Will Defense, it moves -1 step along the Condition Track. The target gets a +5 bonus to its Will Defense if it is higher level than you. If the target reaches the end of its Condition Track, it does not fall unconscious, instead, it cannot attack you or your allies for the remainder of the encounter unless you or one of your allies attacks it or one of its allies first. This is a Mind-Affecting effect.",
        "prerequisites": "",
        "source": "39"
    },
    {
        "name": "Aggressive Negotiator",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Whenever you damage an opponent with a Lightsaber attack, you can Take 10 on any Persuasion checks you make before the end of your turn, even if you would not normally be able to.",
        "prerequisites": "",
        "source": "LE 26"
    },
    {
        "name": "Consular's Wisdom",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Once/encounter as swift add Wisdom bonus to ally's Will Defense",
        "prerequisites": "",
        "source": "LE 26"
    },
    {
        "name": "Force Persuasion",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Persuasion checks can be made with Use the Force, and Persuasion is considered a trained skill",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "Master Negotiator",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Move your enemy a further step down the condition track when successful with Adept Negotiator",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "Adversary Lore",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Make a Use the Force check against a target's Will Defense as a standard action give that enemy a -2 Reflex Defense penalty against attacks from all your allies within 12 squares, line of sight, and that understand you",
        "prerequisites": "",
        "source": "JATM 14"
    },
    {
        "name": "Know Weakness",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Whenever you use Adversary Lore, the target also takes an additional 1d6 points of damage from your allies who gain the benefits of the talent",
        "prerequisites": "",
        "source": "JATM 14"
    },
    {
        "name": "Cleanse Mind",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Once per turn, as a swift action, remove a mind-affecting effect from a single ally in line of sight",
        "prerequisites": "",
        "source": "TFU 24"
    },
    {
        "name": "Collective Visions",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Other Force-users with farseeing within 6-squares can aid another on your Use the Force check to use farseeing or farseeing-based Force powers and talents",
        "prerequisites": "",
        "source": "KotOR 24"
    },
    {
        "name": "Consular's Vitality",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Once per round as a swift action, you grant one ally within 12 squares of you (and in your line of sight) bonus hit points equal to 5 + your Charisma modifier. You take a -5 penaity on all Use the Force checks until the beginning of your next turn.",
        "prerequisites": "",
        "source": "CW 22"
    },
    {
        "name": "Improved Consular's Vitality",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Whenever you damage a target with a successful lightsaber attack, you may use the Consular's Vitality talent as a free action instead of a swift action until the start of your next turn.",
        "prerequisites": "",
        "source": "CW 22"
    },
    {
        "name": "Entreat Aid",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Once per turn as a Swift Action, you can spend a Force Point to let one adjacent ally use the Aid Another Action (As a Reaction) to assist you with a Skill Check. You must make the Skill Check before the end of your turn, or the benefit of the Aid Another Action is lost. An ally that has already used the Aid Another Action to assist you since the end of your last turn may not be targeted by this Talent.",
        "prerequisites": "",
        "source": "LE 26"
    },
    {
        "name": "Force of Will",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "You gain a +2 insight bonus to your Will Defense. Also, as a Swift Action, you can spend a Force Point to give all allies within 6 squares of you a +2 insight bonus to their Will Defense that lasts for the remainder of the encounter. This bonus does not extend to allies outside the range of the effect, even if they move within 6 squares of you later on. Allies who benefit from this Talent must remain within 6 squares of you to retain the insight bonus, and they lose it if you are knocked unconscious or killed. This is a Mind-Affecting effect.",
        "prerequisites": "",
        "source": "TFU 24"
    },
    {
        "name": "Guiding Strikes",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "When you deal damage to a target by making a Lightsaber attack on your turn, you can use a Swift Action before the end of your turn to activate this Talent. If you do so, allies adjacent to the target at the time you make the attack gain a +2 circumstance bonus to melee attack rolls against the target until the start of your next turn.",
        "prerequisites": "",
        "source": "RE 23"
    },
    {
        "name": "Renew Vision",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Regain all expended uses of farseeing once per encounter as a swift action",
        "prerequisites": "",
        "source": "KotOR 25"
    },
    {
        "name": "Recall",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Whenever you spend a Force Point to return a Force power to your suite, you regain two Force powers instead of one",
        "prerequisites": "",
        "source": "RE 23"
    },
    {
        "name": "Skilled Advisor",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Spend a full-round action to grant an ally +5 to a skill check (or +10 with a Force Point). Mind-Affecting",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "WatchCircle Initiate",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "Make a Use the Force check to use farseeing to transfer a Force Point to an ally within line of sight",
        "prerequisites": "",
        "source": "KotOR 25"
    },
    {
        "name": "Visionary Attack",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "As a Reaction, you can make a Use the Force check after you or an ally within 12 squares misses with a melee or ranged attack, removing one use of the Farseeing Force Power from your active Force Power Suite (As though you had activated the Force Power). If your check result equals or exceeds the Will Defense of the target of that missed attack, the attacker can reroll the missed attack roll. This counts as using the Farseeing Force Power against the target, but this Talent replaces the normal rules and effects of Farseeing. Any attack can only be affected by this Talent once (Thus, multiple characters cannot use this Talent on the same attack to allow multiple rerolls). You take a cumulative -5 penalty on Use the Force checks until the beginning of your next turn when you use this Talent.",
        "prerequisites": "",
        "source": "KotOR 24"
    },
    {
        "name": "Visionary Defense",
        "tree": "Jedi Consular",
        "class": "Jedi",
        "description": "As a Reaction, you can make a Use the Force check after you or an ally within 12 squares is the target of a melee or ranged attack (But before the results of the attack roll are known), removing one use of the Farseeing Force Power from your active Force Power Suite (As though you had activated the Force Power). If your check result equals or exceeds the Will Defense of the attacker, you grant the target of that attack a +5 Force bonus to their Reflex Defense against that attack. This counts as using the Farseeing Force Power against the attacker, but this Talent replaces the normal rules and effects of Farseeing. Any attack can only be affected by this Talent once (Thus, multiple characters cannot use this Talent on the same attack to allow multiple rerolls). You take a cumulative -5 penalty on Use the Force checks until the beginning of your next turn when you use this Talent.",
        "prerequisites": "",
        "source": "KotOR 25"
    },
    {
        "name": "Acrobatic Recovery",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "Make a DC 20 Acrobatics check to negate falling prone",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "Battle Meditation",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "Spend a full-round action to grant yourself and allies within 6 squares +1 to attack rolls",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "Improved Battle Meditation",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "Battle Meditation is a swift action, extends to 12 squares and inflicts a -1 penalty on enemy attack rolls",
        "prerequisites": "",
        "source": "KotOR 25"
    },
    {
        "name": "Close Maneuvering",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "Once per turn, you can use a swift action to designate a target. Until the start of your next turn, your movement does not provoke attacks of opportun ity from that target, provided that you end your movement adjacent to that target",
        "prerequisites": "",
        "source": "RE 23"
    },
    {
        "name": "Cover Escape",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "When you successfully spend a Force Point to negate a melee attack against an adjacent ally with the Block or Deflect talents, that ally can move up to 2 squares as a free action. This movement does not provoke an attack of opportunity.",
        "prerequisites": "",
        "source": "GAW 18"
    },
    {
        "name": "Defensive Acuity",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "When you fight defensively you deal +1 die on lightsaber attacks and gain a +2 bonus with Block and Deflect",
        "prerequisites": "",
        "source": "LE 27"
    },
    {
        "name": "Elusive Target",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "Additional -5 penalty for ranged attacks against you whilst fighting in melee",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "Exposing Strike",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "When you use a lightsaber to deal damage to a target, you can spend a Force Point to make that target flat-footed until the end of your next turn.",
        "prerequisites": "",
        "source": "CW 22"
    },
    {
        "name": "Grenade Defense",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "You can use the Move Light Object application of Use the Force as a reaction when you are attacked by a grenade of any kind, but take a -5 penalty to Use the Force check until the start of your next turn",
        "prerequisites": "",
        "source": "JATM 14"
    },
    {
        "name": "Guardian Strike",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "Whenever you use a lightsaber to deal damage to a target, that target takes a -2 penaity on attack rolls against any target other than you until the beginning of your next turn.",
        "prerequisites": "",
        "source": "CW 22"
    },
    {
        "name": "Force Intuition",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "Initiative checks can be made with Use the Force, and Initiative is considered a trained skill",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "Forceful Warrior",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "Upon scoring a critical hit with a lightsaber, gain a temporary Force Point",
        "prerequisites": "",
        "source": "TFU 24"
    },
    {
        "name": "Hold the Line",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "When you make a successful attack of opportunity against a moving opponent, you end the target's move action",
        "prerequisites": "",
        "source": "JATM 14"
    },
    {
        "name": "Immovable",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "You can activate this talent as a swift action. Until the start of your next turn, anyone attempting to move you involuntarily (such as with a bantha rush or the move object Force power) takes a -5 penalty to attack rolls or skill checks made to use the effect that would move you. An enemy can only take the penalty from this talent once per attempt, regardless of How many targets have used this talent",
        "prerequisites": "",
        "source": "RE 23"
    },
    {
        "name": "Mobile Combatant",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "Spend a swift action upon ending movement adjacent to an enemy to move with them up to your speed, whilst still benefiting from attacks of opportunity",
        "prerequisites": "",
        "source": "TFU 24"
    },
    {
        "name": "Resilience",
        "tree": "Jedi Guardian",
        "class": "Jedi",
        "description": "Spend a full-round action to move +2 steps along the condition track",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "Clear Mind",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "May reroll any Use the Force check made to avoid being detected by other Force-users, but must accept the result of the reroll even if it is worse",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "Force Haze",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "Spend a Force Point as a standard action to grant a number of creatures up to your class level total concealment from an opponent if your Use the Force check beats their Will Defense",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "Dampen Presence",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "Use the Force against a target's Will Defense as a swift action to cause them to forget your interaction",
        "prerequisites": "",
        "source": "TFU 24"
    },
    {
        "name": "Dark Side Sense",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "May reroll any Use the Force check made to sense the presence and relative location of characters with a Dark Side score, but must accept the result of the reroll even if it is worse",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "Dark Side Bane",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "Deal Charisma bonus extra damage using Force powers against dark siders",
        "prerequisites": "",
        "source": "LE 27"
    },
    {
        "name": "Dark Side Scourge",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "Deal extra damage equal to your Charisma modifier (minimum +1) against creatures with a Dark Side Score",
        "prerequisites": "",
        "source": "40"
    },
    {
        "name": "Resist the Dark Side",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "+5 to all Defense scores against Dark Side Force powers and any Force power from a dark Force-user",
        "prerequisites": "",
        "source": "41"
    },
    {
        "name": "Gradual Resistance",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "If you take damage from the use of a Force power, until the end of the encounter you gain a +2 Force bonus to all defenses against that Force power.",
        "prerequisites": "",
        "source": "RE 23"
    },
    {
        "name": "Master of the Great Hunt",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "Gain +1 to attack and deal +1 die of damage against beasts with a dark side score of 1 or more",
        "prerequisites": "",
        "source": "JATM 14"
    },
    {
        "name": "Prime Targets",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "When you hit a target with a lightsaber attack, if the target has not been attacked since the end of your last turn, you deal +1 die of damage.",
        "prerequisites": "",
        "source": "GAW 18"
    },
    {
        "name": "Reap Retribution",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "If you take damage from the use of a Force power, until the end of the encounter you deal an extra 2 points of damage against the creature that used the Force power against you.",
        "prerequisites": "",
        "source": "RE 23"
    },
    {
        "name": "Sense Primal Force",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "can use Sense Surroundings to detect targets 30sq radius, regardless of LOS",
        "prerequisites": "",
        "source": "UR 19"
    },
    {
        "name": "Sentinel Strike",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "Deal 1d6 extra damage to flat-footed opponents with Force powers or lightsaber attacks\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "KotOR 25"
    },
    {
        "name": "Dark Retaliation",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "Spend a Force Point once per encounter upon being targeted by a dark side power to activate a Force power as a reaction",
        "prerequisites": "",
        "source": "KotOR 25"
    },
    {
        "name": "Sentinel's Gambit",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "As a swift action once per encounter, designate an adjacent opponent with a Dark Side score to deny them their Dexterity bonus to Reflex Defense until your next turn",
        "prerequisites": "",
        "source": "KotOR 25"
    },
    {
        "name": "Sentinel's Observation",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "If you have concealment against a target, you gain a +2 circumstance bonus on attack rolls against that target.",
        "prerequisites": "",
        "source": "CW 22"
    },
    {
        "name": "Steel Resolve",
        "tree": "Jedi Sentinel",
        "class": "Jedi",
        "description": "Take a penalty to your melee attack roll to gain twice that as a bonus to your Will Defense",
        "prerequisites": "",
        "source": "TFU 24"
    },
    {
        "name": "Block",
        "tree": "Lightsaber Combat",
        "class": "Jedi",
        "description": "Make a Use the Force check as a reaction to negate a melee attack roll against you, or provide you with cover against Whirlwind Attack, with a cumulative penalty of -5 each time Block or Deflect has been used since your last turn",
        "prerequisites": "",
        "source": "41"
    },
    {
        "name": "Riposte",
        "tree": "Lightsaber Combat",
        "class": "Jedi",
        "description": "Once per encounter, gain a free lightsaber attack against an opponent whose attack you have negated using Block",
        "prerequisites": "",
        "source": "KotOR 25"
    },
    {
        "name": "Cortosis Gauntlet Block",
        "tree": "Lightsaber Combat",
        "class": "Jedi",
        "description": "Use Block with cortosis gauntlet, attacking lightsaber deactivated",
        "prerequisites": "",
        "source": "LE 27"
    },
    {
        "name": "Deflect",
        "tree": "Lightsaber Combat",
        "class": "Jedi",
        "description": "Make a Use the Force check as a reaction to negate a ranged attack roll against you, or provide you with cover against autofire or Force Lightning, with a cumulative penalty of -5 each time Block or Deflect has been used since your last turn",
        "prerequisites": "",
        "source": "41"
    },
    {
        "name": "Redirect Shot",
        "tree": "Lightsaber Combat",
        "class": "Jedi",
        "description": "Once per round on a successful use of Deflect on a single blaster bolt, make a ranged attack against a target using the blaster weapon's damage",
        "prerequisites": "",
        "source": "41"
    },
    {
        "name": "Lightsaber Defense",
        "tree": "Lightsaber Combat",
        "class": "Jedi",
        "description": "Gain +1 to Reflex Defense as a swift action until your next turn\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "41"
    },
    {
        "name": "Precision",
        "tree": "Lightsaber Combat",
        "class": "Jedi",
        "description": "As standard action make melee attack with lightsaber, reduces target's speed to 2 squares until end of your next turn",
        "prerequisites": "",
        "source": "LE 27"
    },
    {
        "name": "Shoto Focus",
        "tree": "Lightsaber Combat",
        "class": "Jedi",
        "description": "Whenever you wield a one-handed lightsaber and a shoto or guard shoto, you gain a +2 competence bonus to attacks made with the shoto",
        "prerequisites": "",
        "source": "JATM 14"
    },
    {
        "name": "Weapon Specialization (lightsabers)",
        "tree": "Lightsaber Combat",
        "class": "Jedi",
        "description": "Gain +2 bonus to damage rolls with lightsabers",
        "prerequisites": "",
        "source": "53"
    },
    {
        "name": "Lightsaber Throw",
        "tree": "Lightsaber Combat",
        "class": "Jedi",
        "description": "A lightsaber is no longer considered an improvised thrown weapon, and can be recalled after a thrown attack within 6 squares with a DC 20 Use the Force check",
        "prerequisites": "",
        "source": "41"
    },
    {
        "name": "Aversion",
        "tree": "Alter",
        "class": "The Force",
        "description": "As a swift action, spend a Force point to make creatures want to avoid you, making all squares in a 2-square radius count as difficult terrain for your enemies",
        "prerequisites": "",
        "source": "CW 53"
    },
    {
        "name": "Disciplined Strike",
        "tree": "Alter",
        "class": "The Force",
        "description": "Exclude a number of targets equal to your Wisdom modifier (minimum 1) from cone effect Force powers",
        "prerequisites": "",
        "source": "100"
    },
    {
        "name": "Force Flow",
        "tree": "Alter",
        "class": "The Force",
        "description": "Gain a temporary Force Point upon rolling a natural 1 on an attack roll or Use the Force check",
        "prerequisites": "",
        "source": "KotOR 52"
    },
    {
        "name": "Illusion",
        "tree": "Alter",
        "class": "The Force",
        "description": "Spend a Force Point as a standard action to create illusions which appear real to those whose Will Defense is exceeded by your Use the Force check",
        "prerequisites": "",
        "source": "KotOR 52"
    },
    {
        "name": "Illusion bond",
        "tree": "Alter",
        "class": "The Force",
        "description": "Can see or hear as if you were standing in the space of your illusion if humanoid",
        "prerequisites": "",
        "source": "JATM 15"
    },
    {
        "name": "Masquerade",
        "tree": "Alter",
        "class": "The Force",
        "description": "You can use the Use the Force skill in place of Deception for the purposes of creating a deceptive appearance",
        "prerequisites": "",
        "source": "JATM 15"
    },
    {
        "name": "Influence Savant",
        "tree": "Alter",
        "class": "The Force",
        "description": "1/encounter can return one mind-affecting Force power as a Swift action without costing a Force point",
        "prerequisites": "",
        "source": "JATM 15"
    },
    {
        "name": "Suppress Force",
        "tree": "Alter",
        "class": "The Force",
        "description": "Use mind trick to convince a target they can't use the Force",
        "prerequisites": "",
        "source": "JATM 15"
    },
    {
        "name": "Link",
        "tree": "Alter",
        "class": "The Force",
        "description": "One ally trained in Use the Force can aid another to another within 12 squares and line of sight as a reaction, but takes a penalty on Use the Force checks",
        "prerequisites": "",
        "source": "JATM 15"
    },
    {
        "name": "Telekinetic Power",
        "tree": "Alter",
        "class": "The Force",
        "description": "Free extra use of of telekinetic Force power on a natural 20",
        "prerequisites": "",
        "source": "100"
    },
    {
        "name": "Move Massive Object",
        "tree": "Alter",
        "class": "The Force",
        "description": "Spend a Force point to have targets of Move Object bigger than Large deal area damage",
        "prerequisites": "",
        "source": "LE 55"
    },
    {
        "name": "Telekinetic Savant",
        "tree": "Alter",
        "class": "The Force",
        "description": "Return a telekinetic Force power to your suite as a swift action once per encounter\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "100"
    },
    {
        "name": "Telekinetic Prodigy",
        "tree": "Alter",
        "class": "The Force",
        "description": "Gain a free telekinetic power when you select move object as one of the powers from Force Training",
        "prerequisites": "",
        "source": "TFU 88"
    },
    {
        "name": "Telepathic Link",
        "tree": "Alter",
        "class": "The Force",
        "description": "Form a telepathic link with another Force Sensitive ally which allows instant communication within one kilometer, and once per encounter use of a Force power from their Force suite",
        "prerequisites": "",
        "source": "KotOR 53"
    },
    {
        "name": "Telepathic Influence",
        "tree": "Alter",
        "class": "The Force",
        "description": "Upon rolling a natural 20 on an attack roll or Use the Force check, you may grant an ally within 12 squares a temporary Force Point instead of regaining all spent Force powers",
        "prerequisites": "",
        "source": "KotOR 53"
    },
    {
        "name": "Beast Trick",
        "tree": "Control",
        "class": "The Force",
        "description": "You can use mind trick on creatures of Intelligence 2 or lower",
        "prerequisites": "",
        "source": "KotOR 53"
    },
    {
        "name": "Channel Energy",
        "tree": "Control",
        "class": "The Force",
        "description": "Whenever you use the negate energy Force power to successfully negate the damage from an energy weapon attack, you can spend a Force Point as a reaction to immediately activate any Force Power currently in your Force suite",
        "prerequisites": "",
        "source": "JATM 16"
    },
    {
        "name": "Damage Reduction 10",
        "tree": "Control",
        "class": "The Force",
        "description": "Spend a Force Point to gain DR 10 for 1 minute as a standard action",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Equilibrium",
        "tree": "Control",
        "class": "The Force",
        "description": "Spend a Force Point to remove all debilitating conditions as a swift action",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Force Recovery",
        "tree": "Control",
        "class": "The Force",
        "description": "Gain an extra 1d6 hit points per Force Point (maximum 10d6)  when using second wind",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Force Exertion",
        "tree": "Control",
        "class": "The Force",
        "description": "Move -1 persistent step along the condition track to choose a Force power which can be used an extra time at the expense of any other power\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "TFU 88"
    },
    {
        "name": "Force Focus",
        "tree": "Control",
        "class": "The Force",
        "description": "Make a DC 15 Use the Force check to regain a spent Force power as a full round action",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Force Harmony",
        "tree": "Control",
        "class": "The Force",
        "description": "Once per encounter, you can activate one Force talent that requires a Force Point to use without spending a Force Point",
        "prerequisites": "",
        "source": "JATM 16"
    },
    {
        "name": "Force Suppression",
        "tree": "Control",
        "class": "The Force",
        "description": "Upon failing to successfully negate or redirect a Force power with rebuke, you may instead lessen the effect of the Force power one step",
        "prerequisites": "",
        "source": "KotOR 53"
    },
    {
        "name": "Indomitable Will",
        "tree": "Control",
        "class": "The Force",
        "description": "Spend a Force Point as a standard action to become immune to all mind-affecting effects for 1 minute",
        "prerequisites": "",
        "source": "TFU 88"
    },
    {
        "name": "Telekinetic Stability",
        "tree": "Control",
        "class": "The Force",
        "description": "You are immune to effects that move you against your will",
        "prerequisites": "",
        "source": "LE 55"
    },
    {
        "name": "The Will to Resist",
        "tree": "Control",
        "class": "The Force",
        "description": "Once per turn, as a reaction, when defending against a Force power that targets your Will Defense, you can roll a Use the Force check and use the result instead, but the next round your Use the Force checks are -5",
        "prerequisites": "",
        "source": "CW 53"
    },
    {
        "name": "Consumed by Darkness",
        "tree": "Dark Side",
        "class": "The Force",
        "description": "As a swift action, take a -5 penalty to Will Defense to gain a +2 bonus to attack until your next round",
        "prerequisites": "",
        "source": "CW 53"
    },
    {
        "name": "Dark Side Savant",
        "tree": "Dark Side",
        "class": "The Force",
        "description": "Once per encounter as a swift action, you can return one Force power with the [dark side] descriptor to your Force suite without spending a Force Point",
        "prerequisites": "",
        "source": "JATM 16"
    },
    {
        "name": "Drain Knowledge",
        "tree": "Dark Side",
        "class": "The Force",
        "description": "Gain Skill Training or Focus in a skill from a touched target with a Use the Force check against their Will Defense or learn information with a Perception check",
        "prerequisites": "",
        "source": "TotG 30"
    },
    {
        "name": "Power of the Dark Side",
        "tree": "Dark Side",
        "class": "The Force",
        "description": "Choose the best of two rolls on the bonus die for spending a Force Point to modify an attack roll, increasing Dark Side Score by 1",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Dark Presence",
        "tree": "Dark Side",
        "class": "The Force",
        "description": "You and allies within 6 squares gain +1 bonus to all defenses until the end of the encounter as a standard action",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Dark Preservation",
        "tree": "Dark Side",
        "class": "The Force",
        "description": "Negate moving down the condition track by increasing your Dark Side score",
        "prerequisites": "",
        "source": "LE 55"
    },
    {
        "name": "Swift Power",
        "tree": "Dark Side",
        "class": "The Force",
        "description": "Use a Force power of standard or move action duration as a swift action once per day",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Wrath of the Dark Side",
        "tree": "Dark Side",
        "class": "The Force",
        "description": "Upon rolling a natural 20 to activate a damaging Force Power, you may deal half the damage again at the beginning of the target's next turn instead of replenishing your Force suite",
        "prerequisites": "",
        "source": "TFU 88"
    },
    {
        "name": "Transfer Essence",
        "tree": "Dark Side",
        "class": "The Force",
        "description": "When you die become a dark side spirit and can possess others or enter an object",
        "prerequisites": "",
        "source": "JATM 16"
    },
    {
        "name": "Guardian Spirit",
        "tree": "Guardian Spirit",
        "class": "The Force",
        "description": "Your guardian spirit can tell you the immediate consequences of your actions, and you gain a bonus Force point per day after a 6-hour rest that can be only used to enhance Force powers, or activate techniques and secrets",
        "prerequisites": "",
        "source": "JATM 16"
    },
    {
        "name": "Crucial Advice",
        "tree": "Guardian Spirit",
        "class": "The Force",
        "description": "1/encounter reroll failed skill check with +2 bonus",
        "prerequisites": "",
        "source": "JATM17"
    },
    {
        "name": "Manifest Guardian Spirit",
        "tree": "Guardian Spirit",
        "class": "The Force",
        "description": "Your guardian spirit appears for the encounter within 6 squares of you, and as long as it remains within 12 squares from you, you receive +1 on attack rolls, +2 on Use the Force checks, and +2 Will Defense; you can move the spirit up to six squares once per round as a Swift action",
        "prerequisites": "",
        "source": "JATM17"
    },
    {
        "name": "Vital Encouragement",
        "tree": "Guardian Spirit",
        "class": "The Force",
        "description": "1/encounter you gain temporary hit points equal to 10 + 1/2 your heroic level",
        "prerequisites": "",
        "source": "JATM17"
    },
    {
        "name": "At Peace",
        "tree": "Light Side",
        "class": "The Force",
        "description": "Spend a Force point to gain a +2 bonus to all Defenses until the end of the encounter, or when you attack, whichever comes first",
        "prerequisites": "",
        "source": "CW 53"
    },
    {
        "name": "Focused Attack",
        "tree": "Light Side",
        "class": "The Force",
        "description": "You can spend a Force point to reroll an attack against a target with a Dark Side score of 1 or more and take the better of the results",
        "prerequisites": "",
        "source": "CW 53"
    },
    {
        "name": "Attuned",
        "tree": "Light Side",
        "class": "The Force",
        "description": "When you roll a natural 20 against a target with a Dark Side score of 1 or more, you may activate a Force power with the [Light Side] descriptor immediately as a free action",
        "prerequisites": "",
        "source": "CW 53"
    },
    {
        "name": "Surge of Light",
        "tree": "Light Side",
        "class": "The Force",
        "description": "Once per encoutner, as a swift action, you can return any Force power with the [light side] descriptor without spending a Force point",
        "prerequisites": "",
        "source": "CW 53"
    },
    {
        "name": "Feel the Force",
        "tree": "Sense",
        "class": "The Force",
        "description": "Spend a Force Point as a standard to ignore all concealment for 1 minute",
        "prerequisites": "",
        "source": "TFU 88"
    },
    {
        "name": "Force Perception",
        "tree": "Sense",
        "class": "The Force",
        "description": "Perception checks can be made with Use the Force, and Perception is considered a trained skill",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Foresight",
        "tree": "Sense",
        "class": "The Force",
        "description": "Spend a Force point to reroll an Initiative check, keeping the better result, regaining the Force point in the case of a natual 20",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Gauge Force Potential",
        "tree": "Sense",
        "class": "The Force",
        "description": "Make a Use the Force check against a target's Will Defense as a standard action to ascertain whether it is Force Sensitive, and how many Force powers and Force Points it has",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Motion of the Future",
        "tree": "Sense",
        "class": "The Force",
        "description": "Use a use of the farseeing power from your suite, and before end of your next turn force attacker to reroll their attack roll and keep the second result",
        "prerequisites": "",
        "source": "JATM 17"
    },
    {
        "name": "Psychometry",
        "tree": "Sense",
        "class": "The Force",
        "description": "When you use Farseeing you can choose to target an object you hold and look into its past up to 5 years per level",
        "prerequisites": "",
        "source": "CW 53"
    },
    {
        "name": "Visions",
        "tree": "Sense",
        "class": "The Force",
        "description": "Farseeing can be used to see the past or future of the target at the cost of a Force Point",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Force Pilot",
        "tree": "Sense",
        "class": "The Force",
        "description": "Pilot checks can be made with Use the Force, and Pilot is considered a trained skill",
        "prerequisites": "",
        "source": "101"
    },
    {
        "name": "Force Reflexes",
        "tree": "Sense",
        "class": "The Force",
        "description": "Spend a Force Point to reroll a Pilot check to activate a Starship Maneuver and keep the better result",
        "prerequisites": "",
        "source": "SotG 16"
    },
    {
        "name": "Instinctive Navigation",
        "tree": "Sense",
        "class": "The Force",
        "description": "Use the Force replaces Use Computer for astrogation",
        "prerequisites": "",
        "source": "JATM 17"
    },
    {
        "name": "Heightened Awareness",
        "tree": "Sense",
        "class": "The Force",
        "description": "You can spend a Force point to add your Charisma bonus to your Perception check",
        "prerequisites": "",
        "source": "CW 53"
    },
    {
        "name": "Shift Sense",
        "tree": "Sense",
        "class": "The Force",
        "description": "You can spend a Force Point to gain low-light vision for 1 minute or until the end of the encounter, whichever is longer",
        "prerequisites": "",
        "source": "CW 53"
    },
    {
        "name": "Anticipate Movement",
        "tree": "Anticipation",
        "class": "Noble",
        "description": "Once per round, as a reaction to an enemy in your line of sight moving, you can enable one ally within your line of sight to move up to his or her speed as a free action.",
        "prerequisites": "",
        "source": "GAW 18"
    },
    {
        "name": "Forewarn Allies",
        "tree": "Anticipation",
        "class": "Noble",
        "description": "All allies within 12 squares of you gain a +2 insight bonus on attack rolls and damage rolls for attacks of opportunity.",
        "prerequisites": "",
        "source": "GAW 18"
    },
    {
        "name": "Heavy Fire Zone",
        "tree": "Anticipation",
        "class": "Noble",
        "description": "Once per turn, as a swift action, destinate a 3×3 square area within your line of sight. Until the end of your next turn, if a target moves into that area you can enable one ally within your line of sight to make an attack of opportunity against that target. The ally you choose must be armed with a weapon capable of making attacks of opportunity, and this counts toward the ally's normal limitations for attacks of opportunity made in a round. Prerequisite: Forewarn Allies.",
        "prerequisites": "Forewarn Allies",
        "source": "GAW 18"
    },
    {
        "name": "Get Down",
        "tree": "Anticipation",
        "class": "Noble",
        "description": "As a reaction, when an ally is targeted by a ranged attack, you can enable that ally to drop prone immediately (imposing the normal -2 penalty for a ranged attack against a prone target to the triggered attack roll) as a free action.",
        "prerequisites": "",
        "source": "GAW 18"
    },
    {
        "name": "Summon Aid",
        "tree": "Anticipation",
        "class": "Noble",
        "description": "Once per round, as a reaction, when an enemy moves adjacent to you, you can enable one ally within your line of sight to immediately make a charge attack against the triggering enemy. The ally you choose must be able to charge the enemy from his or her current square under normal charge rules. Prerequisite: Get Down.",
        "prerequisites": "Get Down",
        "source": "GAW 19"
    },
    {
        "name": "Double Agent",
        "tree": "Collaborator",
        "class": "Noble",
        "description": "When you roll Initiative at the beginning of combat, also roll a Deception check, comparing the result to the Will Defense of all enemies in line of sight. If your Deception check is successful, that target cannot attack you while this effect is active.",
        "prerequisites": "",
        "source": "CW 22"
    },
    {
        "name": "Protection",
        "tree": "Collaborator",
        "class": "Noble",
        "description": "As a standard action, you designate one ally and make a Persuasion check against the Will Defense of all enemies in line of sight. Successful checks mean they cannot attack the ally you designated until the beginning of your next turn.",
        "prerequisites": "",
        "source": "CW 23"
    },
    {
        "name": "Enemy Tactics",
        "tree": "Collaborator",
        "class": "Noble",
        "description": "Whenever an enemy within 12 squares of you and in your line of sight receives an insight or morale bonus from any source, you can also gain that bonus, subject to all the same limitations as the bonus provided to that enemy.",
        "prerequisites": "",
        "source": "CW 23"
    },
    {
        "name": "Friendly Fire",
        "tree": "Collaborator",
        "class": "Noble",
        "description": "If you are in melee combat with an adjacent enemy and are the target of a ranged attack that misses you, if the attack equals or exceeds the enemy's Reflex Defense, that enemy becomes the new target of the attack, which is resolved as normal.",
        "prerequisites": "",
        "source": "CW 23"
    },
    {
        "name": "Feed Information",
        "tree": "Collaborator",
        "class": "Noble",
        "description": "As a swift action, you can grant one enemya +1 bonus on its next attack roll made before the beginning of your next turn. Additionally, until the beginning of your next turn, you can designate one ally who receives a +2 bonus on its next attack roll.",
        "prerequisites": "",
        "source": "CW 23"
    },
    {
        "name": "Castigate",
        "tree": "Disgrace",
        "class": "Noble",
        "description": "Make Persuasion check as standard action against target's Will Defense. If successful, you impose a -2 penalty to all the target's Defenses until the end of your net turn.",
        "prerequisites": "",
        "source": "SaV 14"
    },
    {
        "name": "Dirty Tactics",
        "tree": "Disgrace",
        "class": "Noble",
        "description": "Once per encounter, as a standard action, you grant tactical advantage to all allies within your line of sight. When an ally flanks an opponent, that ally gains a +4 flanking bonus on melee attack rolls instead of the normal +2 bonus.",
        "prerequisites": "",
        "source": "SaV 14"
    },
    {
        "name": "Ambush",
        "tree": "Disgrace",
        "class": "Noble",
        "description": "During a surprise round, before combat begins, if you are not surprised, you can give up your standard action to allow all nonsurprised allies within line of sight to take an extra move action during the surprise round or reroll their Initiative check.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Misplaced Loyalty",
        "tree": "Disgrace",
        "class": "Noble",
        "description": "As swift action, make Persuasion check against Will Defense of all opponents within line of sight. If successful, targets cannot attack you if one of your allies is within 6 squares of you.",
        "prerequisites": "",
        "source": "SaV 14"
    },
    {
        "name": "Unreadable",
        "tree": "Disgrace",
        "class": "Noble",
        "description": "Gain +5 bonus to your Will Defense against skill checks made to read your emotions and influence your attitude. Additionally, when you feint a target in combat, that target is flat-footed against all your attacks until the end of your next turn.",
        "prerequisites": "",
        "source": "SaV 14"
    },
    {
        "name": "Arrogant Bluster",
        "tree": "Exile",
        "class": "Noble",
        "description": "Persuasion to change enemy's attitude for -5 enemy's Will Def until next turn, FP for end of enc",
        "prerequisites": "",
        "source": "UR 19"
    },
    {
        "name": "Galactic Guidance",
        "tree": "Exile",
        "class": "Noble",
        "description": "1/enc as reac if succeed on Know (galactic lore) enable 1 ally w/in 6sq & LOS to reroll failed Int or Wis based skill check (other than Perception)",
        "prerequisites": "",
        "source": "UR 20"
    },
    {
        "name": "Rant",
        "tree": "Exile",
        "class": "Noble",
        "description": "if succeed on Persuasion to intimidate enemy w/in 6sq deny enemy move instead, grant 1 ally to use move immediately",
        "prerequisites": "",
        "source": "UR 20"
    },
    {
        "name": "Self-Reliant",
        "tree": "Exile",
        "class": "Noble",
        "description": "1/enc use 1 talent from Inspiration tree on yourself",
        "prerequisites": "",
        "source": "UR 20"
    },
    {
        "name": "Noble Fencing Style",
        "tree": "Fencing",
        "class": "Noble",
        "description": "When using a light melee weapon or lightsaber with which you are proficient, you may use your Charisma modifier instead of your Strength modifier on attack rolls",
        "prerequisites": "",
        "source": "KotOR 27"
    },
    {
        "name": "Demoralizing Defense",
        "tree": "Fencing",
        "class": "Noble",
        "description": "Halve damage from a melee attack on an opponent to instead inflict a -5 penalty on attacks made against you until your next turn",
        "prerequisites": "",
        "source": "KotOR 26"
    },
    {
        "name": "Leading Feint",
        "tree": "Fencing",
        "class": "Noble",
        "description": "Upon damaging an opponent with a melee attack, make a Deception check against them to leave them flat-footed against an ally within six squares until your next turn",
        "prerequisites": "",
        "source": "KotOR 26"
    },
    {
        "name": "Personal Affront",
        "tree": "Fencing",
        "class": "Noble",
        "description": "Upon being damaged by an adjacent enemy once per encounter, make a free single melee attack against them",
        "prerequisites": "",
        "source": "KotOR 27"
    },
    {
        "name": "Transposing Strike",
        "tree": "Fencing",
        "class": "Noble",
        "description": "Deal half damage to an enemy to switch places with them",
        "prerequisites": "",
        "source": "KotOR 27"
    },
    {
        "name": "Idealist",
        "tree": "Idealogue",
        "class": "Noble",
        "description": "You may use your Charisma bonus instead of Wisdom bonus for Will Defense",
        "prerequisites": "",
        "source": "TFU 25"
    },
    {
        "name": "Instruction",
        "tree": "Idealogue",
        "class": "Noble",
        "description": "As a standard action, once per encounter for each time taken, grant an ally within 6 squares use of your skill modifier (except for Use the Force)\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "TFU 25"
    },
    {
        "name": "Know Your Enemy",
        "tree": "Idealogue",
        "class": "Noble",
        "description": "As a swift action make a Knowledge (galactic lore) check against DC 15 + target's CL to learn two of: base attack bonus, particular attack bonus, defense score, skill modifier, taken talent or taken feat",
        "prerequisites": "",
        "source": "TFU 25"
    },
    {
        "name": "Known Dissident",
        "tree": "Idealogue",
        "class": "Noble",
        "description": "Make a Persuasion check against the Will Defense of a single opponent within line of sight as a standard action to keep them from attacking you until your next turn",
        "prerequisites": "",
        "source": "TFU 25"
    },
    {
        "name": "Lead by Example",
        "tree": "Idealogue",
        "class": "Noble",
        "description": "Once per encounter, upon dealing damage to an enemy, grant all allies +1 attack and +1 die damage against the same target",
        "prerequisites": "",
        "source": "TFU 25"
    },
    {
        "name": "Assault Gambit",
        "tree": "Gambling Leader",
        "class": "Noble",
        "description": "Once per turn, as a standard action, you can designate one ally and one enemy that have line of effect to each other. The ally and the enemy make opposed Initiative checks, and the winner can make a single immediate melee or ranged attack against the loser. No character can benefit from this talent more than once per round.",
        "prerequisites": "",
        "source": "RE 24"
    },
    {
        "name": "Direct Fire",
        "tree": "Gambling Leader",
        "class": "Noble",
        "description": "Once per turn, as a swift action, you can designate one ally and one target that does not have cover from you. Until the start of your next tum, the ally you designate ignores that target's cover bonuses to Reflex Defense.\r\nPrerequisite: Assault Gambit.",
        "prerequisites": "Assault Gambit",
        "source": "RE 24"
    },
    {
        "name": "Face the Foe",
        "tree": "Gambling Leader",
        "class": "Noble",
        "description": "If you do not have cover from a target, you gain a +1 morale bonus to attack rolls against that target.",
        "prerequisites": "",
        "source": "RE 24"
    },
    {
        "name": "Lead From the Front",
        "tree": "Gambling Leader",
        "class": "Noble",
        "description": "If you do not have cover from a target that you damage with a ranged attack, all your allies gain a +2 morale bonus to attack rolls against that target and a +5 circumstance bonus to opposed Initiative checks against that target until the start of your next turn.\r\nPrerequisite: Face the Foe.",
        "prerequisites": "Face the Foe",
        "source": "RE 24"
    },
    {
        "name": "Luck Favors the Bold",
        "tree": "Gambling Leader",
        "class": "Noble",
        "description": "If at least one enemy in your line of sight is aware of you and you do not have cover against that enemy, at the start of your tum if you are conscious you gain a number of bonus hit points equal to 5 + one-half your level. Damage is subtracted from bonus hit points first, and any bonus hit points remaining at the end of the encounter are lost. Bonus hit points do not stack.\r\nPrerequisite: Face the Foe.",
        "prerequisites": "Face the Foe",
        "source": "RE 24"
    },
    {
        "name": "Presence",
        "tree": "Influence",
        "class": "Noble",
        "description": "Persuasion checks to intimidate are standard actions, not full-round actions",
        "prerequisites": "",
        "source": "43"
    },
    {
        "name": "Demand Surrender",
        "tree": "Influence",
        "class": "Noble",
        "description": "Make a Persuasion check once per encounter against the Will Defense of a target reduced to less than half hit-points to enforce their surrender",
        "prerequisites": "",
        "source": "43"
    },
    {
        "name": "Fluster",
        "tree": "Influence",
        "class": "Noble",
        "description": "Once per encounter as a standard action, use Persuasion to intimidate an opponent within line of sight to allow them only a swift action for their turn",
        "prerequisites": "",
        "source": "KotOR 26"
    },
    {
        "name": "Intimidating Defense",
        "tree": "Influence",
        "class": "Noble",
        "description": "Once per encounter as a reaction, make a Persuasion check to intimidate an opponent within line of sight to apply a -5 penalty to their attack roll",
        "prerequisites": "",
        "source": "KotOR 26"
    },
    {
        "name": "Weaken Resolve",
        "tree": "Influence",
        "class": "Noble",
        "description": "Make a Persuasion check against a target's Will Defense upon dealing damage greater than their damage threshold to enforce their flight",
        "prerequisites": "",
        "source": "43"
    },
    {
        "name": "Bolster Ally",
        "tree": "Inspiration",
        "class": "Noble",
        "description": "Move an ally +1 step along the condition track once per encounter and impart bonus hit points equal to his character level if he is below half hit points",
        "prerequisites": "",
        "source": "43"
    },
    {
        "name": "Inspire Confidence",
        "tree": "Inspiration",
        "class": "Noble",
        "description": "All allies within line of sight gain a +1 bonus to attack rolls and skill checks until the end of the encounter as a standard action",
        "prerequisites": "",
        "source": "44"
    },
    {
        "name": "Beloved",
        "tree": "Inspiration",
        "class": "Noble",
        "description": "You can use each of the following actions once per encounter:\r\n- Guardian\r\n- Reprisal\r\n- To me!\r\nSee p.14 of Scum and Villainy.",
        "prerequisites": "",
        "source": "SaV 14"
    },
    {
        "name": "Ignite Fervor",
        "tree": "Inspiration",
        "class": "Noble",
        "description": "Grant an ally a bonus to damage on his next attack roll equal to his character level upon hitting an opponent with a ranged or melee attack",
        "prerequisites": "",
        "source": "43"
    },
    {
        "name": "Willpower",
        "tree": "Inspiration",
        "class": "Noble",
        "description": "Once per encounter as a swift action, grant allies within line of sight +2 Will Defense",
        "prerequisites": "",
        "source": "TFU 25"
    },
    {
        "name": "Inspire Haste",
        "tree": "Inspiration",
        "class": "Noble",
        "description": "As a swift action, an ally within line of sight can make a skill check requiring a standard action as a move action on his next turn",
        "prerequisites": "",
        "source": "44"
    },
    {
        "name": "Born Leader",
        "tree": "Leadership",
        "class": "Noble",
        "description": "Allies within line of sight gain a +1 bonus to attack rolls whilst remaining in line of sight, activated as a swift action once per encounter",
        "prerequisites": "",
        "source": "44"
    },
    {
        "name": "Coordinated Leadership",
        "tree": "Leadership",
        "class": "Noble",
        "description": "1 talent from Leadership tree stacks w/bonuses from others",
        "prerequisites": "",
        "source": "UR 20"
    },
    {
        "name": "Distant Command",
        "tree": "Leadership",
        "class": "Noble",
        "description": "The bonus from Born Leader applies even if line of sight is disrupted",
        "prerequisites": "",
        "source": "44"
    },
    {
        "name": "Fearless Leader",
        "tree": "Leadership",
        "class": "Noble",
        "description": "Allies gain +5 to Will Defense against fear effects for the rest of the encounter, activated as a swift action",
        "prerequisites": "",
        "source": "44"
    },
    {
        "name": "Reactionary Attack",
        "tree": "Leadership",
        "class": "Noble",
        "description": "Once per encounter, upon you or an ally being attacked, grant an ally within 6 squares a free attack against the attacking enemy",
        "prerequisites": "",
        "source": "KotOR 26"
    },
    {
        "name": "Tactical Savvy",
        "tree": "Leadership",
        "class": "Noble",
        "description": "When an ally whom you can see spends a Force point to enhance an attack roll, the ally gains a bonus to the Force point roll equal to your Intelligence modifier. Prerequisite: Born Leader.",
        "prerequisites": "Born Leader",
        "source": "GAW 19"
    },
    {
        "name": "Coordinate",
        "tree": "Leadership",
        "class": "Noble",
        "description": "Allies within line of sight grant an additional +1 bonus when using aid another until the start of your next turn, activated as a standard action\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "44"
    },
    {
        "name": "Trust",
        "tree": "Leadership",
        "class": "Noble",
        "description": "Give up a standard action to grant an ally within line of sight an extra standard or move action on their next turn",
        "prerequisites": "",
        "source": "44"
    },
    {
        "name": "Unwavering Ally",
        "tree": "Leadership",
        "class": "Noble",
        "description": "Once per turn, as a swift action, you can designate one ally within your line of sight who can hear and understand you. Until the start of your next turn, that ally becomes immune to all effects that render the ally flat-footed or that deny the ally a Dexterity bonus to his or her Reflex Defense.",
        "prerequisites": "",
        "source": "RE 25"
    },
    {
        "name": "Connections",
        "tree": "Lineage",
        "class": "Noble",
        "description": "Avoid paying license fees on equipment less than your character level x 1000 credits, and reduce the black market cost multiplier by 1",
        "prerequisites": "",
        "source": "44"
    },
    {
        "name": "Influential Friends",
        "tree": "Lineage",
        "class": "Noble",
        "description": "Once per day, receive a skill check at 25 + half your heroic level over the course of 10 x skill check result minutes",
        "prerequisites": "",
        "source": "TFU 25"
    },
    {
        "name": "Educated",
        "tree": "Lineage",
        "class": "Noble",
        "description": "Knowledge checks can be made untrained",
        "prerequisites": "",
        "source": "44"
    },
    {
        "name": "Engineer",
        "tree": "Lineage",
        "class": "Noble",
        "description": "Trained in Mechanics. Time taken to install new systems into a vehicle is reduced by 25%",
        "prerequisites": "",
        "source": "SotG 16"
    },
    {
        "name": "Spontaneous Skill",
        "tree": "Lineage",
        "class": "Noble",
        "description": "Make a skill check once per day as if trained in a skill you are untrained in (except Use the Force)\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "44"
    },
    {
        "name": "Wealth",
        "tree": "Lineage",
        "class": "Noble",
        "description": "Gain 5000 credits for each level of Noble every time you gain a level",
        "prerequisites": "",
        "source": "44"
    },
    {
        "name": "Inspire Loyalty",
        "tree": "Loyal Protector",
        "class": "Noble",
        "description": "You gain a single follower. Choose either the aggressive, defensive, or utility follower template for your follower. This follower gains one Armor Proficiency feat of your choice and becomes trained in the Perception skill.",
        "prerequisites": "",
        "source": "CW 23"
    },
    {
        "name": "Protector Actions",
        "tree": "Loyal Protector",
        "class": "Noble",
        "description": "You can use any of the following actions on your turn. \r\n- Bodyguard\r\n- Diversion Attack\r\n- The Best Defense",
        "prerequisites": "",
        "source": "CW 23"
    },
    {
        "name": "Punishing Protection",
        "tree": "Loyal Protector",
        "class": "Noble",
        "description": "As a reaction to you being damaged by an attack or a Force power, one of your followers can make an immediate melee or ranged attack against the target that attacked you.",
        "prerequisites": "",
        "source": "CW 23"
    },
    {
        "name": "Undying Loyalty",
        "tree": "Loyal Protector",
        "class": "Noble",
        "description": "Each of your followers gains the Toughness feat.",
        "prerequisites": "",
        "source": "CW 23"
    },
    {
        "name": "Blend In",
        "tree": "Master of Intrigue",
        "class": "Noble",
        "description": "As a Swift Action, you gain Total Concealment when adjacent to at least two other creatures. This benefit does not apply to attacks from adjacent creatures.",
        "prerequisites": "",
        "source": "GoI 20"
    },
    {
        "name": "Done It All",
        "tree": "Master of Intrigue",
        "class": "Noble",
        "description": "Choose two talents you meet reqs. Spend FP to gain access 1/turn until the end of your next turn",
        "prerequisites": "",
        "source": "GoI 20"
    },
    {
        "name": "Get into Position",
        "tree": "Master of Intrigue",
        "class": "Noble",
        "description": "1/enc at the start of your first turn two allies in LOS and 12 sq move their speed as reac",
        "prerequisites": "",
        "source": "GoI 20"
    },
    {
        "name": "Advanced Planning",
        "tree": "Master of Intrigue",
        "class": "Noble",
        "description": "When you roll Initiative for combat, choose one willing ally within your line of sight. You and that ally swap Initiative results.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Retaliation",
        "tree": "Master of Intrigue",
        "class": "Noble",
        "description": "When you move down track from dam exceeding thresh, next atk before end of next turn moves target -1 down track if it takes damage",
        "prerequisites": "",
        "source": "GoI 20"
    },
    {
        "name": "Cast Suspicion",
        "tree": "Provocateur",
        "class": "Noble",
        "description": "Prevent one enemy from receiving morale and insight bonuses for  round",
        "prerequisites": "",
        "source": "LE 27"
    },
    {
        "name": "Friend or Foe",
        "tree": "Provocateur",
        "class": "Noble",
        "description": "Redirect a missed attack against an ally to an adjacent enemy",
        "prerequisites": "",
        "source": "LE 27"
    },
    {
        "name": "Stolen Advantage",
        "tree": "Provocateur",
        "class": "Noble",
        "description": "You usurp an enemy's attempt to Aid Another and give the bonus to an ally",
        "prerequisites": "",
        "source": "LE 28"
    },
    {
        "name": "Distress to Discord",
        "tree": "Provocateur",
        "class": "Noble",
        "description": "When your allies take a Second Wind, your enemies lose their Dexterity bonus to Reflex Defense",
        "prerequisites": "",
        "source": "LE 27"
    },
    {
        "name": "Seize the Moment",
        "tree": "Provocateur",
        "class": "Noble",
        "description": "When an enemy is reduced to 0 hit points, you grant a Second Wind to any ally for free with bonus hit points equal to your level",
        "prerequisites": "",
        "source": "LE 27"
    },
    {
        "name": "Guaranteed Boon",
        "tree": "Skill Challenge",
        "class": "Noble",
        "description": "If you spend FP on skill roll and fail regain FP",
        "prerequisites": "",
        "source": "GoI 20"
    },
    {
        "name": "Leading Skill",
        "tree": "Skill Challenge",
        "class": "Noble",
        "description": "When you succeed with skill in skill challenge, gain +2 on different skill roll in same challenge",
        "prerequisites": "",
        "source": "GoI 20"
    },
    {
        "name": "Learn from Mistakes",
        "tree": "Skill Challenge",
        "class": "Noble",
        "description": "When you fail check in skill challenge, next ally gains +2 with different skill",
        "prerequisites": "",
        "source": "GoI 20"
    },
    {
        "name": "Try Your Luck",
        "tree": "Skill Challenge",
        "class": "Noble",
        "description": "When you fail check in skill challenge choose ally. Next use of same skill roll 2 dice & keep better",
        "prerequisites": "",
        "source": "GoI 20"
    },
    {
        "name": "Assured Skill (Acrobatics)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Climb)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Deception)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Endurance)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Gather Information)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Initiative)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Jump)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Knowledge [Bureaucracy])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Knowledge [Galactic Lore])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Knowledge [Life Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Knowledge [Physical Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Knowledge [Social Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Knowledge [Tactics])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Knowledge [Technology])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Mechanics)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Perception)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Persuasion)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Pilot)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Ride)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Stealth)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Survival)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Swim)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Treat Injury)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Use Computer)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Assured Skill (Use the Force)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Lose competence bonuses on 1 skill to roll 2 dice keep better",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Critical Skill Success",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When you roll nat 20 on a skill, choose different skill. Gain +5 before end of next turn as free",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Acrobatics)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Climb)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Deception)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Endurance)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Gather Information)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Initiative)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Jump)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Knowledge [Bureaucracy])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Knowledge [Galactic Lore])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Knowledge [Life Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Knowledge [Physical Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Knowledge [Social Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Knowledge [Tactics])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Knowledge [Technology])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Mechanics)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Perception)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Persuasion)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Pilot)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Ride)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Stealth)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Survival)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Swim)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Treat Injury)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Use Computer)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Confidence (Use the Force)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "nat 19 or 20 gain benefit of Critical Skill Success and bonus hp = Cha mod",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Acrobatics)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Climb)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Deception)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Endurance)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Gather Information)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Initiative)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Jump)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Knowledge [Bureaucracy])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Knowledge [Galactic Lore])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Knowledge [Life Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Knowledge [Physical Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Knowledge [Social Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Knowledge [Tactics])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Knowledge [Technology])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Mechanics)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Perception)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Persuasion)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Pilot)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Ride)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Stealth)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Survival)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Swim)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Treat Injury)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Use Computer)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Exceptional Skill (Use the Force)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "when you roll a nat 2-7, treat as 8.",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Reliable Boon",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "Reroll FP dice that show 1 on a skill check & reroll until it is 2 or higher",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Acrobatics)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Climb)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Deception)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Endurance)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Gather Information)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Initiative)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Jump)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Knowledge [Bureaucracy])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Knowledge [Galactic Lore])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Knowledge [Life Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Knowledge [Physical Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Knowledge [Social Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Knowledge [Tactics])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Knowledge [Technology])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Mechanics)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Perception)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Persuasion)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Pilot)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Ride)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Stealth)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Survival)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Swim)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Treat Injury)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Use Computer)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skill Boon (Use the Force)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "increase FP dice to next higher on 1 skill (d6 to d8, d8 to d10, d10 to d12)",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Acrobatics)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Climb)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Deception)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Endurance)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Gather Information)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Initiative)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Jump)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Knowledge [Bureaucracy])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Knowledge [Galactic Lore])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Knowledge [Life Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Knowledge [Physical Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Knowledge [Social Sciences])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Knowledge [Tactics])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Knowledge [Technology])",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Mechanics)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Perception)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Persuasion)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Pilot)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Ride)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Stealth)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Survival)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Swim)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Treat Injury)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Use Computer)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Skillful Recovery (Use the Force)",
        "tree": "Superior Skills",
        "class": "Noble",
        "description": "When failing to get min result of check of 1 skill, gain FP only usable on that skill before end of enc",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Cheap Trick",
        "tree": "Brigand Talent Tree",
        "class": "Scoundrel",
        "description": "When you make a Deception check to feint (see page 66 of the Saga Edition core Rulebook) against an enemy within 6 squares of you, you can roll twice, keeping the better of the two results. Prerequisite: Trained in Deception.",
        "prerequisites": "Trained in Deception",
        "source": "GAW 19"
    },
    {
        "name": "Easy Prey",
        "tree": "Brigand Talent Tree",
        "class": "Scoundrel",
        "description": "When you make an attack as a standard action and successfully hit an enemy, you can choose to reduce the damage you deal by half. That target is then denied its Dexterity bonus to Reflex Defense against your attacks until the end of your next turn. Prerequisite: Cheap Trick.",
        "prerequisites": "Cheap Trick",
        "source": "GAW 19"
    },
    {
        "name": "Quick Strike",
        "tree": "Brigand Talent Tree",
        "class": "Scoundrel",
        "description": "During the initial round of combat, if will successfully damage an enemy who has not yet acted in the combat. you can make an immediate attack as a free action against a different target within 6 squares of the first target. Prerequisite: Cheap Trick.",
        "prerequisites": "Cheap Trick",
        "source": "GAW 19"
    },
    {
        "name": "Fool's Luck",
        "tree": "Fortune",
        "class": "Scoundrel",
        "description": "Spend a Force Point to gain a +1 bonus to attack rolls, +1 to all defenses, or +5 to skill checks for the rest of the encounter as a standard action",
        "prerequisites": "",
        "source": "46"
    },
    {
        "name": "Avert Disaster",
        "tree": "Fortune",
        "class": "Scoundrel",
        "description": "Once per encounter, turn a critical hit against you into a normal hit.",
        "prerequisites": "",
        "source": "SaV 14"
    },
    {
        "name": "Better Lucky Than Dead",
        "tree": "Fortune",
        "class": "Scoundrel",
        "description": "Once per encounter, as a reaction, you gain a +5 luck bonus to any one defense until the start of your next turn.",
        "prerequisites": "",
        "source": "SaV 14"
    },
    {
        "name": "Fortune's Favor",
        "tree": "Fortune",
        "class": "Scoundrel",
        "description": "Gain a free standard action upon scoring a critical hit on an attack roll",
        "prerequisites": "",
        "source": "46"
    },
    {
        "name": "Gambler",
        "tree": "Fortune",
        "class": "Scoundrel",
        "description": "Gain a +2 bonus to Wisdom checks for gambling\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "46"
    },
    {
        "name": "Knack",
        "tree": "Fortune",
        "class": "Scoundrel",
        "description": "Reroll a skill check and take the better result once per day\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "46"
    },
    {
        "name": "Lucky Shot",
        "tree": "Fortune",
        "class": "Scoundrel",
        "description": "Reroll an attack roll and take the better result once per day\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "46"
    },
    {
        "name": "Lucky Stop",
        "tree": "Fortune",
        "class": "Scoundrel",
        "description": "Once per encounter as a reaction, negate the damage from an attack which would reduce you to 0 hit points",
        "prerequisites": "",
        "source": "KotOR 27"
    },
    {
        "name": "Labrynthine Mind",
        "tree": "Fortune",
        "class": "Scoundrel",
        "description": "Once per encounter, as a reaction, you become immune to all mind-affecting effects until the end of your next turn. You can choose to retain beneficial effects.",
        "prerequisites": "",
        "source": "SaV 15"
    },
    {
        "name": "Malkite Techniques",
        "tree": "Malkite Poisoner",
        "class": "Scoundrel",
        "description": "Once per encounter, apply a toxin to a weapon as a standard action to poison any enemy whose Fortitude Defense is lower than your successful attack roll. The poison makes attack rolls to damage the target and move them down the conditon track",
        "prerequisites": "",
        "source": "TotG 13"
    },
    {
        "name": "Modify Poison",
        "tree": "Malkite Poisoner",
        "class": "Scoundrel",
        "description": "Make a Knowledge (life sciences) check at the Treat Injury DC of a poison to change the deliver method of a poison",
        "prerequisites": "",
        "source": "TotG 13"
    },
    {
        "name": "Numbing Poison",
        "tree": "Malkite Poisoner",
        "class": "Scoundrel",
        "description": "Any target poisoned by you is denied its Dexterity bonus to Reflex Defense whilst afflicted",
        "prerequisites": "",
        "source": "TotG 13"
    },
    {
        "name": "Undetectable Poison",
        "tree": "Malkite Poisoner",
        "class": "Scoundrel",
        "description": "The Treat Injury DC to cure your poison increases by 5",
        "prerequisites": "",
        "source": "TotG 13"
    },
    {
        "name": "Vicious Poison",
        "tree": "Malkite Poisoner",
        "class": "Scoundrel",
        "description": "Your poisons gain +2 to their attack rolls to beat their target's Fortitude defense",
        "prerequisites": "",
        "source": "TotG 13"
    },
    {
        "name": "Befuddle",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "As swift action make Deception check against a target's Will Defense. If you succeed, until the start of your next turn, you can move through the threatened area of the target as part of your move action without provoking an attack of opportunity.",
        "prerequisites": "",
        "source": "SaV 15"
    },
    {
        "name": "Dastardly Strike",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "Successful attacks against opponents denied their Dexterity bonus to Reflex Defense move them -1 step down the condition track",
        "prerequisites": "",
        "source": "46"
    },
    {
        "name": "Weakening Strike",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "Whenever you deal damage to opponent denied its Dex bonus to Reflex Defense, you can choose not to move the target down the condition track and instead impose a -5 penalty to all of your opponent's attacks and melee damage until the end of your next turn.",
        "prerequisites": "",
        "source": "SaV 15"
    },
    {
        "name": "Disruptive",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "Enemies within line of sight are denied morale and insight bonuses until the start of your next turn",
        "prerequisites": "",
        "source": "46"
    },
    {
        "name": "Walk the Line",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "Opponents within line of sight and six squares take a -2 penalty to their defenses until the start of your next turn, activated as a standard action",
        "prerequisites": "",
        "source": "46"
    },
    {
        "name": "Hesitate",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "Make a Persuasion check as a standard action against a target within 12 squares. If the check beats the target's Will Defense, the target takes a -2 penalty to its base speed and must spend a swift action to make a standard action.",
        "prerequisites": "",
        "source": "SaV 15"
    },
    {
        "name": "Sow Confusion",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "Once per encounter as a standard action, make a Deception check against Will defense of all enemies in line of sight, on a success, they have to spend a swift action in addition to a standard action to attack until the start of your next turn",
        "prerequisites": "",
        "source": "SaV 15"
    },
    {
        "name": "Seducer",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "If you fail a Persuasion check to change a target's attitude you can reroll with your Deception",
        "prerequisites": "",
        "source": "LE 29"
    },
    {
        "name": "Seize Object",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "Once per encounter as a move action you can seize a held, carried or worn object on an adjacent target by making a Disarm attack with a +10 bonus",
        "prerequisites": "",
        "source": "LE 29"
    },
    {
        "name": "Skirmisher",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "+1 bonus to attack rolls until the start of your next turn if you move at least 2 squares before attacking and end your move in a different square from the starting square",
        "prerequisites": "",
        "source": "46"
    },
    {
        "name": "Improved Skirmisher",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "When you move at least 2 squares before your attack and end your move in a different square from where you started, you gain a +1 bonus to all your defenses until the start of your next turn.",
        "prerequisites": "",
        "source": "SaV 15"
    },
    {
        "name": "Sneak Attack",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "Gain 1d6 points of damage on attacks on targets within 6 squares denied their Dexterity bonus to Reflex Defense\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "46"
    },
    {
        "name": "Backstabber",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "You can take advantage of your adversary's distractions, no matter how momentary or   fleeting. Once per turn, when you flank a target, you can treat him or her as flat-footed for one of your attacks. Prerequisite: Sneak Attack.",
        "prerequisites": "Sneak Attack",
        "source": "GAW 20"
    },
    {
        "name": "Improved Sneak Attack",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "You can use the Sneak Attack talent against a target within 12 squares, instead of within 6 squares. Prerequisites: Point Blank Shot feat, Sneak Attack.",
        "prerequisites": "Point Blank Shot feat, Sneak Attack",
        "source": "GAW 20"
    },
    {
        "name": "Sudden Strike",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "Whenever you would gain the benefi of the Skirmisher talent and you successfully hit your opponent, you deal sneak attack damage in addition to normal damage dealt by the attack.",
        "prerequisites": "",
        "source": "SaV 15"
    },
    {
        "name": "Stymie",
        "tree": "Misfortune",
        "class": "Scoundrel",
        "description": "Once per round, as a swift action, you designate a target within 12 squares and in line of sight as the target of this talent. Until the beginning of your turn, you can cause that target to take a -5 penaity on all checks made with a single skill.",
        "prerequisites": "",
        "source": "CW 24"
    },
    {
        "name": "Advantageous Opening",
        "tree": "Opportunist",
        "class": "Scoundrel",
        "description": "When an enemy or ally in your line of sight rolls a natural 1 on an attack roll, you can make a melee or ranged attack against a single target with in range.",
        "prerequisites": "",
        "source": "CW 24"
    },
    {
        "name": "Thrive on Chaos",
        "tree": "Opportunist",
        "class": "Scoundrel",
        "description": "When an enemy or ally within 20 squares of you is reduced to 0 hit points, you gain bonus hit points equal to 5 + one-half your character level.",
        "prerequisites": "",
        "source": "CW 24"
    },
    {
        "name": "Retribution",
        "tree": "Opportunist",
        "class": "Scoundrel",
        "description": "When a target moves one of your allies in your line of sight down the condition track by any means, you gain a +2 insight bonus to your attack rolls against that target until the end of your next turn.",
        "prerequisites": "",
        "source": "CW 24"
    },
    {
        "name": "Vindication",
        "tree": "Opportunist",
        "class": "Scoundrel",
        "description": "When an enemyyou have damaged is reduced to 0 hit points or moved to the bottom of the condition track, your next attack made before the end of the encounter deals + 1 die of damage.",
        "prerequisites": "",
        "source": "CW 24"
    },
    {
        "name": "Slip By",
        "tree": "Opportunist",
        "class": "Scoundrel",
        "description": "When you damage a target, until the beginning of your next turn, you can move through that target's space. Moving through the target's space might still provoke attacks of opportunity as normal, and you must end your movement in a legalspace.",
        "prerequisites": "",
        "source": "CW 24"
    },
    {
        "name": "Fast Repairs",
        "tree": "Outlaw Tech",
        "class": "Scoundrel",
        "description": "Jury-rigged objects and vehicles gain temporary hit points equal to the result of your Mechanics check",
        "prerequisites": "",
        "source": "SotG 16"
    },
    {
        "name": "Hotwire",
        "tree": "Outlaw Tech",
        "class": "Scoundrel",
        "description": "Use Computer checks to improve access to a computer system can be made with Mechanics, and Use Computer is considered a trained skill",
        "prerequisites": "",
        "source": "SotG 16"
    },
    {
        "name": "Quick Fix",
        "tree": "Outlaw Tech",
        "class": "Scoundrel",
        "description": "You may jury-rig objects or vehicles that aren't disabled once per encounter",
        "prerequisites": "",
        "source": "SotG 17"
    },
    {
        "name": "Personalized Modifications",
        "tree": "Outlaw Tech",
        "class": "Scoundrel",
        "description": "+1 bonus to attack rolls and +2 bonus to damage rolls with powered weapons for the remainder of an encounter, activated as a standard action",
        "prerequisites": "",
        "source": "SotG 17"
    },
    {
        "name": "Oafish",
        "tree": "Outsider",
        "class": "Scoundrel",
        "description": "1/enc when fail Deception or Persuasion check add +1d6 + Wis mod to check",
        "prerequisites": "",
        "source": "UR 20"
    },
    {
        "name": "Outsider's Eye",
        "tree": "Outsider",
        "class": "Scoundrel",
        "description": "1/enc DC 20 Perception as stan gain 1 piece of info: 1 Def score of 1 character or vehicle in LOS or identify same with either lowest or highest hp or on highest or lowest on track",
        "prerequisites": "",
        "source": "UR 20"
    },
    {
        "name": "Wary",
        "tree": "Outsider",
        "class": "Scoundrel",
        "description": "if enemy fails Stealth or Deception v. your Perception you can take move as reac, if multiple fail, your moves cannot exceed Dex mod",
        "prerequisites": "",
        "source": "UR 21"
    },
    {
        "name": "Outsider's Query",
        "tree": "Outsider",
        "class": "Scoundrel",
        "description": "if fail Persuasion to change attitude, attitude does not change & can attempt to change attitude one additional time per enc",
        "prerequisites": "",
        "source": "UR 21"
    },
    {
        "name": "Find Openings",
        "tree": "Recklessness",
        "class": "Scoundrel",
        "description": "Whenever you are missed by an attack, you gain a +2 morale bonus to your next attack roll before the end of your next turn.",
        "prerequisites": "",
        "source": "RE 25"
    },
    {
        "name": "Risk for Reward",
        "tree": "Recklessness",
        "class": "Scoundrel",
        "description": "Once per turn, when an enemy damages you with an attack of opportunity, you can make a single melee or ranged attack against a target in range as areaction.\r\nPrerequisite: Find Openings.",
        "prerequisites": "Find Openings",
        "source": "RE 25"
    },
    {
        "name": "Hit the Deck",
        "tree": "Recklessness",
        "class": "Scoundrel",
        "description": "Whenever you make an area attack, each ally in the area takes no damage if your attack roll fails to overcome his or her Reflex Defense, and takes half damage if the attack hits.",
        "prerequisites": "",
        "source": "RE 25"
    },
    {
        "name": "Trick Step",
        "tree": "Recklessness",
        "class": "Scoundrel",
        "description": "As a swift action, make an Initiative check, opposed by the Initiative check of an enemy within your line of sight. If your check result equals or exceeds the target's check, the target is considered flat-footed against the next attack you make before the end of your turn.lfthe target's check result is higher, you are considered flat-footed against the next attack made by the target before the start of your next turn.",
        "prerequisites": "",
        "source": "RE 26"
    },
    {
        "name": "Lure Closer",
        "tree": "Recklessness",
        "class": "Scoundrel",
        "description": "Once per tum, as a move action, you can make a Deception check against the Will Defense of one enemy with in 12 squares and with in your line of sight. If your check result equals or exceeds the target's Will Defense, the target must move a number of squares equal to half its speed, and each square of movement must bring the target doser to you (though the target does avoid hazards and obstades). If the target cannot avoid a hazard (such as a pit), it stops moving in the ne3rest safe square. This move¬ment is considered involuntary and does not provoke attacks of opportunity. This is a mind-affecting effect.\r\nPrerequisite: Trick Step.",
        "prerequisites": "Trick Step",
        "source": "RE 25"
    },
    {
        "name": "Bomb Thrower",
        "tree": "Revolutionary",
        "class": "Scoundrel",
        "description": "+5 to Mechanics checks for handling explosives & create frag grenade from spare parts",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Make an Example",
        "tree": "Revolutionary",
        "class": "Scoundrel",
        "description": "when you hit with attack and damage exceeds thresh target takes -5 to hit you until end of your turn",
        "prerequisites": "",
        "source": "GoI 22"
    },
    {
        "name": "For the Cause",
        "tree": "Revolutionary",
        "class": "Scoundrel",
        "description": "If you or ally w/in 6sq takes dam over thresh you & all allies in 6 sq +2 attack 7 dam until next turn",
        "prerequisites": "",
        "source": "GoI 21"
    },
    {
        "name": "Revolutionary Rhetoric",
        "tree": "Revolutionary",
        "class": "Scoundrel",
        "description": "target w/in 12 sq & LOS Persuasion vs Will or target can't take stan actions until your next turn",
        "prerequisites": "",
        "source": "GoI 22"
    },
    {
        "name": "Opportunistic Strike",
        "tree": "Run and Gun",
        "class": "Scoundrel",
        "description": "Once per encounter, make an attack of opportunity against an opponent within point-blank range against an opponent provoking an attack of opportunity against an ally",
        "prerequisites": "",
        "source": "KotOR 27"
    },
    {
        "name": "Cheap Shot",
        "tree": "Run and Gun",
        "class": "Scoundrel",
        "description": "Once per encounter, make an attack of opportunity against an enemy using withdraw within point-blank range",
        "prerequisites": "",
        "source": "KotOR 27"
    },
    {
        "name": "No Escape",
        "tree": "Run and Gun",
        "class": "Scoundrel",
        "description": "An enemy using withdraw from your threatened space is considered flat-footed until your next turn",
        "prerequisites": "",
        "source": "KotOR 27"
    },
    {
        "name": "Strike and Run",
        "tree": "Run and Gun",
        "class": "Scoundrel",
        "description": "Once per encounter, upon damaging an opponent, you may move your speed",
        "prerequisites": "",
        "source": "KotOR 28"
    },
    {
        "name": "Slippery Strike",
        "tree": "Run and Gun",
        "class": "Scoundrel",
        "description": "Once per encounter, upon damaging an opponent, you may deny them attacks of opportunity until your next turn",
        "prerequisites": "",
        "source": "KotOR 27"
    },
    {
        "name": "Electronic Forgery",
        "tree": "Slicer",
        "class": "Scoundrel",
        "description": "You may use Use Computer instead of Deception to forge electronic documents",
        "prerequisites": "",
        "source": "TFU 27"
    },
    {
        "name": "Electronic Sabotage",
        "tree": "Slicer",
        "class": "Scoundrel",
        "description": "Make a Use Computer check to replace the Will Defense of a computer and make it unfriendly to anyone but you",
        "prerequisites": "",
        "source": "TFU 27"
    },
    {
        "name": "Virus",
        "tree": "Slicer",
        "class": "Scoundrel",
        "description": "You can substitute Use Computer check for Mechanics check when disabling a computerized device.",
        "prerequisites": "",
        "source": "SaV 16"
    },
    {
        "name": "Gimmick",
        "tree": "Slicer",
        "class": "Scoundrel",
        "description": "Issuing routine commands to a computer is a swift action, not a standard action",
        "prerequisites": "",
        "source": "47"
    },
    {
        "name": "Master Slicer",
        "tree": "Slicer",
        "class": "Scoundrel",
        "description": "Reroll any Use Computer checks to improve access to improve access on a computer and keep the better result",
        "prerequisites": "",
        "source": "47"
    },
    {
        "name": "Security Slicer",
        "tree": "Slicer",
        "class": "Scoundrel",
        "description": "You do not require a security kit to disable a security system, and can fail by up to 10 with no repercussions",
        "prerequisites": "",
        "source": "TFU 27"
    },
    {
        "name": "Trace",
        "tree": "Slicer",
        "class": "Scoundrel",
        "description": "Use Computer can be used to make Gather Information checks, provided a computer network",
        "prerequisites": "",
        "source": "47"
    },
    {
        "name": "Art of Concealment",
        "tree": "Smuggler",
        "class": "Scoundrel",
        "description": "You may take 10 on Stealth checks to conceal items, even under pressure, and as a swift action",
        "prerequisites": "",
        "source": "TFU 27"
    },
    {
        "name": "Fast Talker",
        "tree": "Smuggler",
        "class": "Scoundrel",
        "description": "Once per day as a standard action, you may take 20 on a Deception check to deceive",
        "prerequisites": "",
        "source": "TFU 27"
    },
    {
        "name": "Hidden Weapons",
        "tree": "Smuggler",
        "class": "Scoundrel",
        "description": "If you draw a concealed item and attack a target in the same round, the target is flat-footed if they failed to notice. If you have the Quick Draw, your drawing is a swift action",
        "prerequisites": "",
        "source": "TFU 27"
    },
    {
        "name": "Illicit Dealings",
        "tree": "Smuggler",
        "class": "Scoundrel",
        "description": "You may reroll Persuasion checks to haggle for restriced, military or illegal goods and keep the better result",
        "prerequisites": "",
        "source": "TFU 27"
    },
    {
        "name": "Surprise Strike",
        "tree": "Smuggler",
        "class": "Scoundrel",
        "description": "Upon failing a Deception check to convey deceptive information, you can initiate combat and make a single attack as a free action, with all other combatants considered surprised",
        "prerequisites": "",
        "source": "TFU 27"
    },
    {
        "name": "Hyperdriven",
        "tree": "Spacer",
        "class": "Scoundrel",
        "description": "Add your class level once per day to an attack roll, skill check or ability check whilst on a starship",
        "prerequisites": "",
        "source": "47"
    },
    {
        "name": "Spacehound",
        "tree": "Spacer",
        "class": "Scoundrel",
        "description": "Proficient with any starship weapon, and take no penalty on attack rolls in low- or zero-gravity environments nor suffer space sickness",
        "prerequisites": "",
        "source": "47"
    },
    {
        "name": "Starship Raider",
        "tree": "Spacer",
        "class": "Scoundrel",
        "description": "Gain +1 bonus to attack rolls on a starship",
        "prerequisites": "",
        "source": "47"
    },
    {
        "name": "Stellar Warrior",
        "tree": "Spacer",
        "class": "Scoundrel",
        "description": "Gain a temporary Force Point upon rolling a natural 20 on an attack roll made aboard a starship",
        "prerequisites": "",
        "source": "47"
    },
    {
        "name": "Biotech Adept",
        "tree": "Yuuzhan Vong Biotech",
        "class": "Scoundrel",
        "description": "Reroll Knowledge (life sciences) or Treat Injury checks to use or repair biotech",
        "prerequisites": "",
        "source": "LE 29"
    },
    {
        "name": "Bugbite",
        "tree": "Yuuzhan Vong Biotech",
        "class": "Scoundrel",
        "description": "Deal +1 die of damage with razor bugs and thud bugs",
        "prerequisites": "",
        "source": "LE 29"
    },
    {
        "name": "Curved Throw",
        "tree": "Yuuzhan Vong Biotech",
        "class": "Scoundrel",
        "description": "Spend a swift action to ignore cover with a razor bug or thud bug",
        "prerequisites": "",
        "source": "LE 29"
    },
    {
        "name": "Surprising Weapons",
        "tree": "Yuuzhan Vong Biotech",
        "class": "Scoundrel",
        "description": "Whenever you succeed with Vong weapons and the attack roll exceeds Will Defense, the target is considered flat-footed until end of next turn",
        "prerequisites": "",
        "source": "LE 29"
    },
    {
        "name": "Veiled Biotech",
        "tree": "Yuuzhan Vong Biotech",
        "class": "Scoundrel",
        "description": "Gain +10 bonus to Deception and Stealth checks to conceal biotech and draw biotech weapons as swift action and opponent denied Dexterity bonus to Reflex Defense",
        "prerequisites": "",
        "source": "LE 29"
    },
    {
        "name": "Mobile Combatant",
        "tree": "Advance Patrol Talent Tree",
        "class": "Scout",
        "description": "You know that the key to winning a fight is keeping your enemies from pinning you down. You can use each of the following actions once per encounter: \r\n* Evasive Assault: As a standard action, make a single melee or ranged attack. If the attack successfully deals damage, you gain a +5 dodge bonus to your Reflex Defense until the end of your next turn. \r\n* Expeditious Attack: As a standard action, make a jingle melee or fanged attack, then move up to half your speed as a free action. This movement does not provoke an attack of opportunity. \r\n* Yielding Assault: When you are damaged by an enemy's melee or ranged attack, you can move up to one-half your speed as a reaction. This movement does not provoke an attack of opportunity. On your next turn, you gain a favorable circumstance bonus to your first attack roll against the same enemy that damaged you. \r\nPrerequisites: Forward Patrol, Watchful Step.",
        "prerequisites": "Forward Patrol, Watchful Step",
        "source": "GAW 20"
    },
    {
        "name": "Trailblazer",
        "tree": "Advance Patrol Talent Tree",
        "class": "Scout",
        "description": "During your turn, you can spend a swift action to allow all allies within 6 squares of you and within your line of sight to count the first square of difficult terrain as normal terrain each time they move. Prerequisite: Trained in Survival.",
        "prerequisites": "Trained in Survival",
        "source": "GAW 21"
    },
    {
        "name": "Watchful Step",
        "tree": "Advance Patrol Talent Tree",
        "class": "Scout",
        "description": "You can use your Perception check modifier instead of your Initiative modifier when making Initiative checks. If you are entitled to an Initiative check reroll, you can reroll your Perception check instead (subject to the same circumstances and limitations). You are considered to be trained in Initiative.",
        "prerequisites": "",
        "source": "GAW 21"
    },
    {
        "name": "Forward Patrol",
        "tree": "Advance Patrol Talent Tree",
        "class": "Scout",
        "description": "At the start of a surprise round in which you are not caught by surprise, you can designate one ally within 6 squares of you as able to retain his or her Dexterity bonus to Reflex Defense during the surprise round. Prerequisite: Watchful Step.",
        "prerequisites": "Watchful Step",
        "source": "GAW 20"
    },
    {
        "name": "Acute Senses",
        "tree": "Awareness",
        "class": "Scout",
        "description": "You can reroll Perception checks, but must accept the result of the reroll even if worse",
        "prerequisites": "",
        "source": "49"
    },
    {
        "name": "Expert Tracker",
        "tree": "Awareness",
        "class": "Scout",
        "description": "You can move at normal speed whilst using Survival to track without penalty",
        "prerequisites": "",
        "source": "49"
    },
    {
        "name": "Improved Initiative",
        "tree": "Awareness",
        "class": "Scout",
        "description": "You can reroll Initiative checks, but must accept the result of the reroll even if worse",
        "prerequisites": "",
        "source": "49"
    },
    {
        "name": "Keen Shot",
        "tree": "Awareness",
        "class": "Scout",
        "description": "No penalty to attack rolls against targets with concealment",
        "prerequisites": "",
        "source": "49"
    },
    {
        "name": "Hunker Down",
        "tree": "Camouflage",
        "class": "Scout",
        "description": "When benefiting from cover, spend a standard action to increase the cover value by one step.",
        "prerequisites": "",
        "source": "SaV 16"
    },
    {
        "name": "Dig In",
        "tree": "Camouflage",
        "class": "Scout",
        "description": "When prone, you can spend a swift action to gain concealment until the start of your next turn. If you stand up or move, you lose this benefit.",
        "prerequisites": "",
        "source": "GAW 20"
    },
    {
        "name": "Ghost Assailant",
        "tree": "Camouflage",
        "class": "Scout",
        "description": "If you start your turn with total concealment or total cover from a target, during that turn you can make a Stealth check as a swift action, opposed by the target's Perception check. If you succeed, the target is considered flat-footed against you until the end of your turn.",
        "prerequisites": "",
        "source": "GAW 20"
    },
    {
        "name": "Improved Stealth",
        "tree": "Camouflage",
        "class": "Scout",
        "description": "You can reroll Stealth checks, but must accept the result of the reroll even if worse",
        "prerequisites": "",
        "source": "49"
    },
    {
        "name": "Extended Ambush",
        "tree": "Camouflage",
        "class": "Scout",
        "description": "during surprise rnd if make ranged atk v. surprised aim as free",
        "prerequisites": "",
        "source": "UR 21"
    },
    {
        "name": "Hidden Movement",
        "tree": "Camouflage",
        "class": "Scout",
        "description": "You can move at your normal speed whilst using Stealth to hide at no penalty",
        "prerequisites": "",
        "source": "49"
    },
    {
        "name": "Slip By",
        "tree": "Camouflage",
        "class": "Scout",
        "description": "When you would normally provoke an attack of opportunity by moving out of a threatened space, you can roll a Stealth checks replacing your Reflex Defense with the results or your Stealth check if it is higher.",
        "prerequisites": "",
        "source": "GAW 20"
    },
    {
        "name": "Fade Out",
        "tree": "Espionage",
        "class": "Scout",
        "description": "Stealth replaces Deception to create diversion to hide, +5 if trained in Deception",
        "prerequisites": "",
        "source": "GoI 22"
    },
    {
        "name": "Keep Together",
        "tree": "Espionage",
        "class": "Scout",
        "description": "when hit or missed by attack move speed as reac & must end adjacent to ally, no AoO",
        "prerequisites": "",
        "source": "GoI 22"
    },
    {
        "name": "Prudent Escape",
        "tree": "Espionage",
        "class": "Scout",
        "description": "When you reduce enemy to 0 hp/uncon you & 2 allies w/in 6 sq & LOS move spd as reac, no AoO",
        "prerequisites": "",
        "source": "GoI 22"
    },
    {
        "name": "Reactive Stealth",
        "tree": "Espionage",
        "class": "Scout",
        "description": "when missed by ranged atk & have cover/conceal move half spd & make Stealth check if still conceal",
        "prerequisites": "",
        "source": "GoI 22"
    },
    {
        "name": "Sizing Up",
        "tree": "Espionage",
        "class": "Scout",
        "description": "1/enc Perception vs Will of target within 6 sq & LOS for +2 bonus to skill & attacks for enc",
        "prerequisites": "",
        "source": "GoI 23"
    },
    {
        "name": "Barter",
        "tree": "Fringer",
        "class": "Scout",
        "description": "You can reroll Persuasion checks made to haggle, but must accept the result of the reroll even if worse",
        "prerequisites": "",
        "source": "49"
    },
    {
        "name": "Fringe Savant",
        "tree": "Fringer",
        "class": "Scout",
        "description": "Gain a temporary Force Point upon rolling a natural 20 on a skill check during an encounter",
        "prerequisites": "",
        "source": "50"
    },
    {
        "name": "Long Stride",
        "tree": "Fringer",
        "class": "Scout",
        "description": "Increase speed by 2 squares in no armor or light armor",
        "prerequisites": "",
        "source": "50"
    },
    {
        "name": "Flee",
        "tree": "Fringer",
        "class": "Scout",
        "description": "As a standard action,your speed increases by 2, designate a single opponent and move up to your speed away from them without provoking attacks of opportunity.",
        "prerequisites": "",
        "source": "SaV 17"
    },
    {
        "name": "Sidestep",
        "tree": "Fringer",
        "class": "Scout",
        "description": "Use a swift action to reduce cost of each move into a diagonal space to 1 until the end of your turn if you are wearing light or no armour.",
        "prerequisites": "",
        "source": "SaV 17"
    },
    {
        "name": "Surge",
        "tree": "Fringer",
        "class": "Scout",
        "description": "Once per encounter you may use a swift action to move up to your speed.",
        "prerequisites": "",
        "source": "SaV 17"
    },
    {
        "name": "Jury Rigger",
        "tree": "Fringer",
        "class": "Scout",
        "description": "You can reroll Mechanics checks to jury-rig, but must accept the result of the reroll even if worse",
        "prerequisites": "",
        "source": "50"
    },
    {
        "name": "Keep it Together",
        "tree": "Fringer",
        "class": "Scout",
        "description": "Whenever you successfully jury-rig a device or vehicle, it does not move -5 steps along the condition track at the end of the encounter, though it does move -2 persistant steps down the condition track.",
        "prerequisites": "",
        "source": "207"
    },
    {
        "name": "Deep-Space Gambit",
        "tree": "Hyperspace Explorer",
        "class": "Scout",
        "description": "Once per encounter, force your opponent to reroll an attack against you or your vehicle and take the worse result",
        "prerequisites": "",
        "source": "KotOR 28"
    },
    {
        "name": "Guidance",
        "tree": "Hyperspace Explorer",
        "class": "Scout",
        "description": "Use a swift action to grant an ally within line of sight the ability to ignore difficult terrain on its next turn",
        "prerequisites": "",
        "source": "KotOR 28"
    },
    {
        "name": "Hidden Attacker",
        "tree": "Hyperspace Explorer",
        "class": "Scout",
        "description": "Using the snipe application of Stealth is a swift action",
        "prerequisites": "",
        "source": "KotOR 29"
    },
    {
        "name": "Hyperspace Savant",
        "tree": "Hyperspace Explorer",
        "class": "Scout",
        "description": "Substitute Pilot skill for Use Computer checks made to operate sensors or astrogate whilst piloting",
        "prerequisites": "",
        "source": "KotOR 29"
    },
    {
        "name": "Silent Movement",
        "tree": "Hyperspace Explorer",
        "class": "Scout",
        "description": "Never suffer from unfavorable circumstances from environment w/Stealth, 1/rnd w/Stealth auto aid another 1 ally",
        "prerequisites": "",
        "source": "UR 21"
    },
    {
        "name": "Vehicle Sneak",
        "tree": "Hyperspace Explorer",
        "class": "Scout",
        "description": "Treat your ship as two sizes smaller when using Stealth as pilot",
        "prerequisites": "",
        "source": "KotOR 29"
    },
    {
        "name": "Piercing Hit",
        "tree": "Master Scout",
        "class": "Scout",
        "description": "1/enc each w/melee or ranged as stan if hit & dam: 1. target loses its armor bonus to Ref Def & is flat-footed, target must spend stan to adjust armor, 2. target -2 atk until end next turn & all creatures etc have concealment from target, 3. target's spd -2 until end next turn",
        "prerequisites": "",
        "source": "UR 21"
    },
    {
        "name": "Speedclimber",
        "tree": "Master Scout",
        "class": "Scout",
        "description": "No penalty when using Accelerated Climbing of Climb",
        "prerequisites": "",
        "source": "UR 22"
    },
    {
        "name": "Surprisingly Quick",
        "tree": "Master Scout",
        "class": "Scout",
        "description": "in surprise rnd if not surprised can take swif in addition to other action, if surprised can take swif",
        "prerequisites": "",
        "source": "UR 22"
    },
    {
        "name": "Tripwire",
        "tree": "Master Scout",
        "class": "Scout",
        "description": "Set  a trap 3sq wide, DC20 Mechanics & Deception to conceal, targets make a DC10 Acrobatics to avoid, select 1 option: 1. target falls prone 1d6 dam, 2. auto hit w/mine & 1d20+10 v. adjacent, 3. +2 Deception & fall prone",
        "prerequisites": "",
        "source": "UR 22"
    },
    {
        "name": "Quicktrap",
        "tree": "Master Scout",
        "class": "Scout",
        "description": "use Tripwire as move not stan",
        "prerequisites": "",
        "source": "UR 22"
    },
    {
        "name": "Battle Mount",
        "tree": "Mobile Scout",
        "class": "Scout",
        "description": "1/enc each on mount: 1. if use mount as cover can make 1 atk, 2. if use mount as cover gain improved cover - if fail by 10 or more still get cover, 3. mount can make atk as swif not stan",
        "prerequisites": "",
        "source": "UR 22"
    },
    {
        "name": "Expert Rider",
        "tree": "Mobile Scout",
        "class": "Scout",
        "description": "reroll Ride",
        "prerequisites": "",
        "source": "UR 23"
    },
    {
        "name": "Mechanized Rider",
        "tree": "Mobile Scout",
        "class": "Scout",
        "description": "w/speeder can use Fast Mount or Dismount, Soft Fall, Stay in Saddle & Use Mount as Cover of Ride",
        "prerequisites": "",
        "source": "UR 23"
    },
    {
        "name": "Terrain Guidance",
        "tree": "Mobile Scout",
        "class": "Scout",
        "description": "DC20 Ride to negate difficult terrain",
        "prerequisites": "",
        "source": "UR 23"
    },
    {
        "name": "Get Into Position",
        "tree": "Reconnaissance",
        "class": "Scout",
        "description": "As a move action, you can cause one of your followers to move up to his or her speed +2 squares.",
        "prerequisites": "",
        "source": "CW 25"
    },
    {
        "name": "Reconnaissance Team Leader",
        "tree": "Reconnaissance",
        "class": "Scout",
        "description": "You gain a single follower. Choose either the aggressive, defensive, or uti lit Y follower template for your follower. This follower gains the Skill Training feat for the Perception and Stealth skills.",
        "prerequisites": "",
        "source": "CW 25"
    },
    {
        "name": "Close-Combat Assault",
        "tree": "Reconnaissance",
        "class": "Scout",
        "description": "Each of your followers gains the Point Blank Shot feat.",
        "prerequisites": "",
        "source": "CW 25"
    },
    {
        "name": "Reconnaissance Actions",
        "tree": "Reconnaissance",
        "class": "Scout",
        "description": "You can use any of the following actions on your turn. \r\n- Forward Scouting \r\n- Group Sniping \r\n- Sweep the Area",
        "prerequisites": "",
        "source": "CW 25"
    },
    {
        "name": "Blend In",
        "tree": "Spy",
        "class": "Scout",
        "description": "You may use your Stealth modifier instead of Deception to create a deceptive appearance",
        "prerequisites": "",
        "source": "TFU 28"
    },
    {
        "name": "Incognito",
        "tree": "Spy",
        "class": "Scout",
        "description": "You may reroll Deception checks to create a deceptive appearance and keep the better result",
        "prerequisites": "",
        "source": "TFU 28"
    },
    {
        "name": "Surveillance",
        "tree": "Spy",
        "class": "Scout",
        "description": "Make a Perception check as a full-round action against DC 15 or a target's Stealth check to grant yourself and allies +2 to attack rolls until your next turn",
        "prerequisites": "",
        "source": "TFU 28"
    },
    {
        "name": "Improved Surveillance",
        "tree": "Spy",
        "class": "Scout",
        "description": "Gain +1 to all defenses against the target of Surveillance",
        "prerequisites": "",
        "source": "TFU 28"
    },
    {
        "name": "Intimate Knowledge",
        "tree": "Spy",
        "class": "Scout",
        "description": "Once per encounter, as a standard action, take 20 on a trained Knowledge check or 10 on an untrained check even if circumstances would not normally permit it",
        "prerequisites": "",
        "source": "TFU 28"
    },
    {
        "name": "Traceless Tampering",
        "tree": "Spy",
        "class": "Scout",
        "description": "You leave no trace when you disable a device with Mechanics, and may fail by up to 10 without repercussions",
        "prerequisites": "",
        "source": "TFU 28"
    },
    {
        "name": "Hidden Eyes",
        "tree": "Surveillance",
        "class": "Scout",
        "description": "If you have concealment from a target, you gain a +5 circumstance bonus on all Perception checks made against that target.",
        "prerequisites": "",
        "source": "CW 25"
    },
    {
        "name": "Seek and Destroy",
        "tree": "Surveillance",
        "class": "Scout",
        "description": "If you make a charge attack against a target that is unaware of you, that target cannot make a Perception check to notice you until af ter the attack is resolved, even if you move away from cover or concealment.",
        "prerequisites": "",
        "source": "CW 25"
    },
    {
        "name": "Hunt the Hunter",
        "tree": "Surveillance",
        "class": "Scout",
        "description": "When you use a standard action to actively look for hidden enemies you can make a single melee or ranged attack against any one enemy you notice with your Perception check.",
        "prerequisites": "",
        "source": "CW 25"
    },
    {
        "name": "Spotter",
        "tree": "Surveillance",
        "class": "Scout",
        "description": "As a move action, you can make a Perception check with a DC equal to 10 + the CL of a enemy in your line of sight. If you succeed you and all your allies gain a + 1 insight bonus on attack rolls against that target until end of your next turn.",
        "prerequisites": "",
        "source": "CW 25"
    },
    {
        "name": "Advanced Intel",
        "tree": "Surveillance",
        "class": "Scout",
        "description": "If you are not surprised at the beginning of combat, you can use the Spotter talent as a free action on your first turn, including during the surprise round.",
        "prerequisites": "",
        "source": "CW 25"
    },
    {
        "name": "Evasion",
        "tree": "Survivor",
        "class": "Scout",
        "description": "You takes half damage from area attacks that hit, no damage from area attacks that miss",
        "prerequisites": "",
        "source": "50"
    },
    {
        "name": "Extreme Effort",
        "tree": "Survivor",
        "class": "Scout",
        "description": "Gain +5 to a Strength check or Strength-based skill check as two swift actions",
        "prerequisites": "",
        "source": "50"
    },
    {
        "name": "Sprint",
        "tree": "Survivor",
        "class": "Scout",
        "description": "You can run at five times your speed",
        "prerequisites": "",
        "source": "50"
    },
    {
        "name": "Surefooted",
        "tree": "Survivor",
        "class": "Scout",
        "description": "Your speed is not reduced by difficult terrain",
        "prerequisites": "",
        "source": "50"
    },
    {
        "name": "Aggressive Surge",
        "tree": "Unpredictable",
        "class": "Scout",
        "description": "Once per encounter when you catch a second wind, you can make a charge attack as a free action, provided that you can make a charge attack against a legal target at the time you catch a second wind.",
        "prerequisites": "",
        "source": "RE 26"
    },
    {
        "name": "Blast Back",
        "tree": "Unpredictable",
        "class": "Scout",
        "description": "Once per round when you are damaged by an enemy's area attack, as a reaction you can make an immediate melee or ranged attack against the source of the area attack, provided that you have line of sight to the attacker and the target is with in your melee or ranged reach.",
        "prerequisites": "",
        "source": "RE 26"
    },
    {
        "name": "Second Strike",
        "tree": "Unpredictable",
        "class": "Scout",
        "description": "Once per encounter when you miss a target with a single melee or ranged attack, as a free action you can move up to half your speed and make a second attack of the same type against a different target. This movement does not provoke attacks of opportunity. If you have the Combat Reflexes feat, you can use this talent a number of times per encounter equal to your Dexterity bonus (minimum 1). You may still only use this talent once per round.\r\nPrerequisite: Blast Back.",
        "prerequisites": "Blast Back",
        "source": "RE 26"
    },
    {
        "name": "Fade Away",
        "tree": "Unpredictable",
        "class": "Scout",
        "description": "Once per tum when you are damaged by an enemy's attack, as a reac¬tion you can move up to half your speed. This movement does not provoke attacks of opportunity.",
        "prerequisites": "",
        "source": "RE 26"
    },
    {
        "name": "Swerve",
        "tree": "Unpredictable",
        "class": "Scout",
        "description": "Once per encounter when an enemy makes an attack of opportunity against you, as a reaction you can automatically negate the attack and immediately move up to half your speed. This movement does not provoke attacks of opportunity. If you have the Combat Reflexes feat,  you can use this talent a number of times per encounter equal to your Dexterity bonus (minimum 1). You may still only use this talent once per round.\r\nPrerequisite: Fade Away.",
        "prerequisites": "Fade Away",
        "source": "RE 26"
    },
    {
        "name": "Adapt and Survive",
        "tree": "Versatility",
        "class": "Scout",
        "description": "When any enemy within 24 squares recieves an insight or morale bonus, you gain the same benefits",
        "prerequisites": "",
        "source": "LE 30"
    },
    {
        "name": "Unbalancing Adaptation",
        "tree": "Versatility",
        "class": "Scout",
        "description": "When you useAdapt and Survive, you can deny one of the enemies the bonus",
        "prerequisites": "",
        "source": "LE 30"
    },
    {
        "name": "Defensive Protection",
        "tree": "Versatility",
        "class": "Scout",
        "description": "Spend a Force Point to add to a Defense of you or an ally until your next turn",
        "prerequisites": "",
        "source": "LE 30"
    },
    {
        "name": "Quick on Your Feet",
        "tree": "Versatility",
        "class": "Scout",
        "description": "Once per encounter move up to your speed as a reaction",
        "prerequisites": "",
        "source": "LE 30"
    },
    {
        "name": "Ready and Willing",
        "tree": "Versatility",
        "class": "Scout",
        "description": "Take a readied action at any time up until the end of the current round",
        "prerequisites": "",
        "source": "LE 30"
    },
    {
        "name": "Armored Defense",
        "tree": "Armor Specialist",
        "class": "Soldier",
        "description": "Apply the higher of heroic level or armor bonus to your Reflex Defense",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Armor Mastery",
        "tree": "Armor Specialist",
        "class": "Soldier",
        "description": "Treat proficient armor as if had a maximum Dexterity 1 higher",
        "prerequisites": "",
        "source": "51"
    },
    {
        "name": "Improved Armor Defense",
        "tree": "Armor Specialist",
        "class": "Soldier",
        "description": "Apply the higher of heroic level plus half armor bonus or armor bonus to your Reflex Defense",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Juggernaut",
        "tree": "Armor Specialist",
        "class": "Soldier",
        "description": "Armor doesn't affect your run speed.",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Second Skin",
        "tree": "Armor Specialist",
        "class": "Soldier",
        "description": "Increase your armor bonus to Reflex Defense and your equipment bonus to Fortitude Defense by 1",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Shield Expert",
        "tree": "Armor Specialist",
        "class": "Soldier",
        "description": "Once per encounter, as a swift action, gain SR 10 on an active personal shield (up to maximum)",
        "prerequisites": "",
        "source": "KotOR 29"
    },
    {
        "name": "Ambush Specialist",
        "tree": "Ambusher",
        "class": "Soldier",
        "description": "If you are not surprised on the first round of combat in an encounter, you can treat the first round of combat as if it were the surprise round for the purposes of talents and feats that trigger only during the surprise round. Additionally, during the surprise round as a free action you can designate that target as your prime target. You gain a +2 morale bonus to attack rolls against your prime target until the end of the encounter.",
        "prerequisites": "",
        "source": "RE 28"
    },
    {
        "name": "Destructive Ambusher",
        "tree": "Ambusher",
        "class": "Soldier",
        "description": "After you designate a prime target, you deal + 1 die of damage on attacks against the prime target until the end of the encounter. \r\nPrerequisite: Ambush Specialist.",
        "prerequisites": "Ambush Specialist",
        "source": "RE 28"
    },
    {
        "name": "Keep It Going",
        "tree": "Ambusher",
        "class": "Soldier",
        "description": "If you reduce your prime target to 0 hit points, as a free action you can designate another target within your line of sight as your new prime target. This new target remains your prime target until the end of the encounter.\r\nPrerequisite: Ambush Specialist.",
        "prerequisites": "Ambush Specialist",
        "source": "RE 28"
    },
    {
        "name": "Keep Them Reeling",
        "tree": "Ambusher",
        "class": "Soldier",
        "description": "nce per tum as a swift action, you can make an Initiative check, opposed by the Initiative check of your prime target. If your check result equals or exceeds your prime target's check result, your target is flat-footed against all attacks you make before the end of your turn.\r\nPrerequisite: Ambush Specialist.",
        "prerequisites": "Ambush Specialist",
        "source": "RE 28"
    },
    {
        "name": "Perceptive Ambusher",
        "tree": "Ambusher",
        "class": "Soldier",
        "description": "You gain a +5 circumstance bonus to Perception\r\nchecks against your prime target until the end of the encounter. \r\nPrerequisite: Ambush Specialist.",
        "prerequisites": "Ambush Specialist",
        "source": "RE 28"
    },
    {
        "name": "Spring the Trap",
        "tree": "Ambusher",
        "class": "Soldier",
        "description": "If you and all your allies roll higher Initiative checks to start combat than do all your opponents, you automatically gain a surprise round, even if the opponents are aware of you when combat begins.",
        "prerequisites": "",
        "source": "RE 28"
    },
    {
        "name": "Cantina Brawler",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "While flanked you gain a +2 bonus on unarmed attack and damage rolls.",
        "prerequisites": "",
        "source": "SaV 17"
    },
    {
        "name": "Pick a Fight",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "During the surprise round you and all allies within 6 squares gain a +1 morale bonus to attack, and retain it for the encounter on every opponent damaged in the surprise round.",
        "prerequisites": "",
        "source": "SaV 18"
    },
    {
        "name": "Counterpunch",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "When you fight defensively, any adjacent creature that attacks you provokes an attack of opportunity from you.",
        "prerequisites": "",
        "source": "SaV 18"
    },
    {
        "name": "Disarm and Engage",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "When successfully disarm, make immediate free -5 atk w/ disarmed weapon or -10 if not proficient",
        "prerequisites": "",
        "source": "GoI 23"
    },
    {
        "name": "Entangler",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "When grabbing, you take -2 to attacks not -5, target takes -5 to all attacks",
        "prerequisites": "",
        "source": "GoI 23"
    },
    {
        "name": "Crowd Control",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "Grab 2 adjacent targets at once",
        "prerequisites": "",
        "source": "GoI 23"
    },
    {
        "name": "Expert Grappler",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "+2 to grapple attacks",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Unbalance Opponent",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "Choose an opponent each round to deny their Strength bonus to their attack rolls against you",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Grabber",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "Take no penalty when using the grab action",
        "prerequisites": "",
        "source": "LE 31"
    },
    {
        "name": "Gun Club",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "Ranged weapons can be treated as a club, or as a double weapon if mounted with a bayonet",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Bayonet Master",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "When you take a full attack action, you can treat a ranged weapon with a bayonet as a double melee weapon. You can attack with the bayonet and club a target with your ranged weapon, ignoring the normal penalties.",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Hammerblow",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "If you are Unarmed and holding no items, you double your Strength bonus to Unarmed attack rolls.",
        "prerequisites": "",
        "source": "LE 31"
    },
    {
        "name": "Make Do",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "You take no penalty when using improvised weapons.",
        "prerequisites": "",
        "source": "SaV 18"
    },
    {
        "name": "Man Down",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "Whenever an ally within 6 squares is reduced to 0 hit points or less you can move up to your speed toward that ally as a reaction without provoking attacks of opportunity.",
        "prerequisites": "",
        "source": "SaV 18"
    },
    {
        "name": "Melee Smash",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "+1 damage to melee attacks",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Devastating Melee Smash",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "Once per encounter, add half your level to the damage instead of the +1 from Melee Smash",
        "prerequisites": "",
        "source": "KotOR 29"
    },
    {
        "name": "Stunning Strike",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "Upon damaging an opponent with a melee attack with an attack roll exceeding their damage threshold, they move an additional -1 step down the condition track",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Unrelenting Assault",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "Wheneveryou miss with a melee attack or the attack is negated, you still deal your Strength bonus in damage to the target (minimum 1) or 2× your Strength bonus if you attack with a weapon you are weilding two-handed.",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Reverse Strength",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "successful grapple deals target's strength modifier as damage (min 1)",
        "prerequisites": "",
        "source": "GoI 23"
    },
    {
        "name": "Strong Grab",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "When you grab, enemy must use a full-round action to escape",
        "prerequisites": "",
        "source": "LE 31"
    },
    {
        "name": "Sucker Punch",
        "tree": "Brawler",
        "class": "Soldier",
        "description": "When you damage an enemy denied its Dexterity bonus to Reflex Defense with a melee weapon, they cannot make attacks of opportunity until the end of its next turn.",
        "prerequisites": "",
        "source": "SaV 18"
    },
    {
        "name": "Gang Leader",
        "tree": "Brute Squad",
        "class": "Soldier",
        "description": "1/encounter gain a +1 bonus to Persuasion to intimidate per ally",
        "prerequisites": "",
        "source": "LE 30"
    },
    {
        "name": "Melee Assault",
        "tree": "Brute Squad",
        "class": "Soldier",
        "description": "Beat a target adjacent to ally's Reflex and Fortitude Defense and deal +1 die of damage and knock prone",
        "prerequisites": "",
        "source": "LE 31"
    },
    {
        "name": "Melee Brute",
        "tree": "Brute Squad",
        "class": "Soldier",
        "description": "Beat a target adjacent to ally's Reflex and Fortitude Defense and reduce speed and Reflex Defense by 2",
        "prerequisites": "",
        "source": "LE 31"
    },
    {
        "name": "Melee Opportunist",
        "tree": "Brute Squad",
        "class": "Soldier",
        "description": "1/encounter when an ally hits adjacent target make attack as a reaction with +2 bonus",
        "prerequisites": "",
        "source": "LE 31"
    },
    {
        "name": "Squad Brutality",
        "tree": "Brute Squad",
        "class": "Soldier",
        "description": "When you hit an enemy with two adjacent allies, reroll damage and take the better of the results",
        "prerequisites": "",
        "source": "LE 31"
    },
    {
        "name": "Squad Superiority",
        "tree": "Brute Squad",
        "class": "Soldier",
        "description": "Whenever you and two allies are adjacted to target, target is flat-footed against you",
        "prerequisites": "",
        "source": "LE 31"
    },
    {
        "name": "Battle Analysis",
        "tree": "Commando",
        "class": "Soldier",
        "description": "Make a DC 15 Knowledge (tactics) check to ascertain whether characters within line of sight are at or below half their hit points",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Cover Fire",
        "tree": "Commando",
        "class": "Soldier",
        "description": "Allies within six squares gain +1 Reflex Defense until the start of your next turn whenever you make a ranged attack with a rifle or pistol",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Defensive Position",
        "tree": "Commando",
        "class": "Soldier",
        "description": "Whenever you have the benefit of cover (see pages 157-158 of the Saga Edition core Rulebook), you can spend two swift actions to treat it as improved cover until the start of your next turn. Prerequisite: Battle Analysis.",
        "prerequisites": "Battle Analysis",
        "source": "GAW 21"
    },
    {
        "name": "Demolitionist",
        "tree": "Commando",
        "class": "Soldier",
        "description": "Explosives set by the Mechanics skill deal +2 dice of damage\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Draw Fire",
        "tree": "Commando",
        "class": "Soldier",
        "description": "Make a Persuasion check against the Will Defense of all opponents within line of sight to become the only targetable character within six squares until the start of your next turn",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Harm's Way",
        "tree": "Commando",
        "class": "Soldier",
        "description": "Attacks against an adjacent ally deal damage to you instead until your next turn, activated as a swift action",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Dedicated Protector",
        "tree": "Commando",
        "class": "Soldier",
        "description": "1/enc designate ally within 6 sq ally & ally gains +1 Ref Def while adjacent",
        "prerequisites": "",
        "source": "GoI 24"
    },
    {
        "name": "Out of Harm's Way",
        "tree": "Commando",
        "class": "Soldier",
        "description": "w/Harm's Way can move into sq of ally & move ally to any legal adjacent sq w/out Atk of Opp",
        "prerequisites": "",
        "source": "UR 23"
    },
    {
        "name": "Indomitable",
        "tree": "Commando",
        "class": "Soldier",
        "description": "Move +5 steps along the condition track once per day as a swift action\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "52"
    },
    {
        "name": "Keep Them at Bay",
        "tree": "Commando",
        "class": "Soldier",
        "description": "When you use the aid another action to suppress an enemy, that enemy takes a -5 penaity on its next attack instead of the normal -2 penalty. Only 1 character may gain the benefits of this talent against a given target at a time.",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Tough as Nails",
        "tree": "Commando",
        "class": "Soldier",
        "description": "You can catch your second wind an extra time per day",
        "prerequisites": "",
        "source": "53"
    },
    {
        "name": "Hard Target",
        "tree": "Commando",
        "class": "Soldier",
        "description": "Catch a second wind as a reaction instead of a swift action",
        "prerequisites": "",
        "source": "TotG 95"
    },
    {
        "name": "Combined Fire",
        "tree": "Mercenary",
        "class": "Soldier",
        "description": "+2 damage to targets damaged by an ally since your last turn",
        "prerequisites": "",
        "source": "TotG 57"
    },
    {
        "name": "Mercenary's Teamwork",
        "tree": "Mercenary",
        "class": "Soldier",
        "description": "+2 damage per ally that has damaged your target since your last turn",
        "prerequisites": "",
        "source": "TotG 57"
    },
    {
        "name": "Commanding Presence",
        "tree": "Mercenary",
        "class": "Soldier",
        "description": "Once per encounter, as a swift action, inflict a -2 penalty to the Will Defense of all enemies within 6 squares.\r\n\r\nPersuasion is a class skill.",
        "prerequisites": "",
        "source": "TFU 28"
    },
    {
        "name": "Feared Warrior",
        "tree": "Mercenary",
        "class": "Soldier",
        "description": "Upon reducing an enemy to 0 hit points with an attack, make a Persuasion check as a free action against the Will Defense of all targets within 6 squares to inflict a -2 penalty to their attack rolls for the rest of the encounter",
        "prerequisites": "",
        "source": "TFU 29"
    },
    {
        "name": "Dirty Fighting",
        "tree": "Mercenary",
        "class": "Soldier",
        "description": "Once per encounter, upon dealing damage to an opponent with a melee or ranged attack, their damage threshold is reduced by 2 for the rest of the encounter",
        "prerequisites": "",
        "source": "TFU 28"
    },
    {
        "name": "Ruthless",
        "tree": "Mercenary",
        "class": "Soldier",
        "description": "Upon dealing damage with a melee or ranged attack roll which exceeds the target's damage threshold, you gain a +2 bonus to damage against that target for the rest of the encounter",
        "prerequisites": "",
        "source": "TFU 29"
    },
    {
        "name": "Focused Warrior",
        "tree": "Mercenary",
        "class": "Soldier",
        "description": "Upon dealing damage to an opponent in combat, you gain +5 to Will Defense until your next turn",
        "prerequisites": "",
        "source": "TFU 29"
    },
    {
        "name": "Mercenary's Grit",
        "tree": "Mercenary",
        "class": "Soldier",
        "description": "As a swift action convert a condition's penalty to a bonus, then move -1 step along the condition track at the end of your next turn",
        "prerequisites": "",
        "source": "TotG 57"
    },
    {
        "name": "Mercenary's Determination",
        "tree": "Mercenary",
        "class": "Soldier",
        "description": "Spend a Force Point as a free action on your turn to double your speed for a round, at least 5 rounds after your last use",
        "prerequisites": "",
        "source": "TotG 57"
    },
    {
        "name": "Jet Pack Training",
        "tree": "Rocket Jumper",
        "class": "Soldier",
        "description": "Activate a jet pack as a free action, and lang without a Pilot check",
        "prerequisites": "",
        "source": "KotOR 30"
    },
    {
        "name": "Burning Assault",
        "tree": "Rocket Jumper",
        "class": "Soldier",
        "description": "Use a jet pack charge as a flamethrower",
        "prerequisites": "",
        "source": "KotOR 30"
    },
    {
        "name": "Improved Trajectory",
        "tree": "Rocket Jumper",
        "class": "Soldier",
        "description": "Increase fly speed by 2 squares using jet packs",
        "prerequisites": "",
        "source": "KotOR 30"
    },
    {
        "name": "Jet Pack Withdraw",
        "tree": "Rocket Jumper",
        "class": "Soldier",
        "description": "Once per encounter, withdraw or move your speed as a reaction upon an enemy moving adjacent to you",
        "prerequisites": "",
        "source": "KotOR 30"
    },
    {
        "name": "Comrades in Arms",
        "tree": "Trooper",
        "class": "Soldier",
        "description": "Whenever you are within 3 squares of an ally, you gain a + 1 circumstance bonus on all melee and ranged attack rolls.",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Focused Targeting",
        "tree": "Trooper",
        "class": "Soldier",
        "description": "When you damage a target with a melee or ranged attack, all allies within 3 squares gain a +2 bonus on damage rolls against that target until the beginning of your next turn.",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Stick Together",
        "tree": "Trooper",
        "class": "Soldier",
        "description": "You can spend a move action to activate this talent. Until the beginning of your next turn, if an ally moves you can immediately move up to your speed as a move action, provided you end your movement within 3 squares of that ally.",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Watch Your Back",
        "tree": "Trooper",
        "class": "Soldier",
        "description": "If you are adjacent to at least one ally, enemies gain no benefit from flanking you or any adjacent allies.",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Phalanx",
        "tree": "Trooper",
        "class": "Soldier",
        "description": "Whenever you provide 50ft cover to an ally within 3 squares, you are considered to be providing improved cover.",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Retaliation Jab",
        "tree": "Shockboxer",
        "class": "Soldier",
        "description": "lf an enemy misses you with a melee attack, as a reaction you can automatically deal damage equal to your Strength modifier (minimum 1 point of damage) to your attacker, if the attacker is within your reach.",
        "prerequisites": "",
        "source": "GAW 21"
    },
    {
        "name": "Defensive Jab",
        "tree": "Shockboxer",
        "class": "Soldier",
        "description": "When you are unarmed and take the fight defensively action, you can make a single unarmed attack as a free action against an adjacent target. Prerequisite: Retaliation Jab.",
        "prerequisites": "Retaliation Jab",
        "source": "GAW 21"
    },
    {
        "name": "Nibble dodge",
        "tree": "Shockboxer",
        "class": "Soldier",
        "description": "lf an enemy misses you with a melee attack, as a reaction you can move up to 2 squares, but you must end your movement adjacent to your attacker.",
        "prerequisites": "",
        "source": "GAW 21"
    },
    {
        "name": "Stinging Jab",
        "tree": "Shockboxer",
        "class": "Soldier",
        "description": "When you hit a target with an unarmed attack you can choose to deal half damage with your attack. If you do so, your enemy also deals half damage on all melee attacks he or she makes until the end of your next turn.",
        "prerequisites": "",
        "source": "GAW 21"
    },
    {
        "name": "Stunning Shockboxer",
        "tree": "Shockboxer",
        "class": "Soldier",
        "description": "When you deal stun damage to a target with an unarmed attack, afterthe stun damage is halved, roll one extra die of damage and add that be the damage subtracted from the target's hit points. Prerequisite: Stinging Jab.",
        "prerequisites": "Stinging Jab",
        "source": "GAW 21"
    },
    {
        "name": "Commanding Officer",
        "tree": "Squad Leader",
        "class": "Soldier",
        "description": "You gain a single follower. Choose either the aggressive, defensive, or utilitu follower template. This follower gains one Armor Proficiency feat of your choice and Weapon Proficiency (rifles).",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Coordinated Tactics",
        "tree": "Squad Leader",
        "class": "Soldier",
        "description": "Each ofyourfollowers gains the Coordinated Attack feat, provided he meets the prerequisite. If your follower later meets the prerequisite for the feat, he gains the feat at that time.",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Fire at Will",
        "tree": "Squad Leader",
        "class": "Soldier",
        "description": "As a full-round action, you and one of your followers can make a ranged attack against one target (each) in line of sight. You each take a -5 penaity to your attack rolls.",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Squad Actions",
        "tree": "Squad Leader",
        "class": "Soldier",
        "description": "You can use any of the following actions on your turn. \r\n- Autofire Barrage \r\n- Open Fire \r\n- Painted Target",
        "prerequisites": "",
        "source": "CW 26"
    },
    {
        "name": "Battlefield Remedy",
        "tree": "Veteran",
        "class": "Soldier",
        "description": "You have learned a variety of different ways to treat combat injuries in the field. When you succeed en a Treat Injury cheek to administer First Aid, the tended creature also moves +1 step up the condition track. Prerequisite: Trained in Treat Injury.",
        "prerequisites": "Trained in Treat Injury",
        "source": "GAW 21"
    },
    {
        "name": "Seen It All",
        "tree": "Veteran",
        "class": "Soldier",
        "description": "You have seen more action in more places than most people know exist and little in the galaxy gets you rattled. Any character using a fear effect on you must roll twice, keeping the lower result on any skill checks and attack rolls. Prerequisites: Tested in Battle, trained in Initiative.",
        "prerequisites": "Tested in Battle, trained in Initiative",
        "source": "GAW 22"
    },
    {
        "name": "Tested in Battle",
        "tree": "Veteran",
        "class": "Soldier",
        "description": "When you catch a second win) (see page 154 of the saga Edition core rulebook), you move +2 steps on the condition track in addition to regaining hit points.",
        "prerequisites": "",
        "source": "GAW 22"
    },
    {
        "name": "Grizzled Warrlor",
        "tree": "Veteran",
        "class": "Soldier",
        "description": "You can draw upon your extensive battlefield experience to entourage your comrades and drive your enemies before you. You can use each (of the following actions once per encounter as a standard action: \r\n* Defy the Odds: Make a single melee or fanged attack. You immediately gain a number of bonus hit points equal to your Constitution score. \r\n* Double the Pain: When you use the Aid Another action to provide an ally within 6 squares of you a bonus to his or her attack roll, add one-half your character level to the ally's damage roll if the attack is successful. \r\n* Guarded Assault: Make a single melee or ranged attack. You gain a +2 damage bonus to your Reflex defense against all attacks until the start of your next turn. \r\nPrerequisites: Seen it All, Tested in Battle.",
        "prerequisites": "Seen it All, Tested in Battle",
        "source": "GAW 21"
    },
    {
        "name": "Reckless",
        "tree": "Veteran",
        "class": "Soldier",
        "description": "You know from first-hand experience that victory goes to those willing to take a chance. You can add your Wisdom bonus (minimum +1) to the damage roll when you make a successful charge attack. \r\nPrerequisite: Tested in Battle.",
        "prerequisites": "Tested in Battle",
        "source": "GAW 22"
    },
    {
        "name": "Autofire Assault",
        "tree": "Weapon Specialist",
        "class": "Soldier",
        "description": "When making an Autofire attack, you can brace with a weapon that is not Autofire only.",
        "prerequisites": "",
        "source": "GAW 22"
    },
    {
        "name": "Devastating Attack",
        "tree": "Weapon Specialist",
        "class": "Soldier",
        "description": "Treat your opponents damage threshold as if it were 5 points lower when you make a successful attack\r\n\r\n(Enter number of times taken, choose which weapon on the Talents 2 tab)",
        "prerequisites": "",
        "source": "53"
    },
    {
        "name": "Improved Suppression Fire",
        "tree": "Weapon Specialist",
        "class": "Soldier",
        "description": "When you successfully suppress, the target take -5 on attacks; -2 on autofire, even if it misses",
        "prerequisites": "",
        "source": "LE 31"
    },
    {
        "name": "Penetrating Attack",
        "tree": "Weapon Specialist",
        "class": "Soldier",
        "description": "Treat your opponents damage reduction as if it were 5 points lower when you make a successful attack\r\n\r\n(Enter number of times taken, choose which weapon on the Talents 2 tab)",
        "prerequisites": "",
        "source": "53"
    },
    {
        "name": "Weapon Specialization",
        "tree": "Weapon Specialist",
        "class": "Soldier",
        "description": "+2 bonus to damage\r\n\r\n(Enter number of times taken, choose which weapon on the Talents 2 tab)",
        "prerequisites": "",
        "source": "41"
    },
    {
        "name": "Crushing Assault",
        "tree": "Weapon Specialist",
        "class": "Soldier",
        "description": "When you successfully damage an enemy with a bludgeoning attack you have weapon specialization for, you gain +2 to attack and damage with your next attack.\r\n\r\n(Enter number of times taken, choose which weapon on the Talents 2 tab)",
        "prerequisites": "",
        "source": "SaV 18"
    },
    {
        "name": "Disarming Attack",
        "tree": "Weapon Specialist",
        "class": "Soldier",
        "description": "Ignore an opponent's armor bonus to defense when disarming, and once per encounter gain a +10 bonus on your attack roll to disarm\r\n\r\n(Enter number of times taken, choose which weapon on the Talents 2 tab)",
        "prerequisites": "",
        "source": "KotOR 29"
    },
    {
        "name": "Impailing Assault",
        "tree": "Weapon Specialist",
        "class": "Soldier",
        "description": "If you successfully hit an enemy with a piercing weapon for which you have the Weapon Specialization talent, your opponent's speed is reduced by 2 squares until the end of your next turn.\r\n\r\n(Enter number of times taken, choose which weapon on the Talents 2 tab)",
        "prerequisites": "",
        "source": "SaV 18"
    },
    {
        "name": "Stinging Assault",
        "tree": "Weapon Specialist",
        "class": "Soldier",
        "description": "When you damage an opponent using a slashing weapon for which you have the Weapon Specialization talent for your opponent takes a -2 penalty on melee attacks against you until your next turn\r\n\r\n(Enter number of times taken, choose which weapon on the Talents 2 tab)",
        "prerequisites": "",
        "source": "SaV 18"
    },
    {
        "name": "Simple Opportunity",
        "tree": "Warrior",
        "class": "Soldier",
        "description": "can make Atk of Opp when using ranged or thrown simple weapon (no area atk weapons)",
        "prerequisites": "",
        "source": "UR 23"
    },
    {
        "name": "Warrior's Awareness",
        "tree": "Warrior",
        "class": "Soldier",
        "description": "when enemy makes unarmed/melee atk for 2nd time in enc v. you make Perception as reac to gain +1 Ref & Fort Def v. for rest of enc, can switch targets by not using for 1 full rnd",
        "prerequisites": "",
        "source": "UR 23"
    },
    {
        "name": "Champion",
        "tree": "Warrior",
        "class": "Soldier",
        "description": "1/enc each: 1. w/2nd Wind +1 track & remove fear/mind effects & normal, 2. when hit & dam target over thresh can Disarm v. target as free, 3. w/successful unarmed or melee atk (not lightsaber) + dam = every 5 pts atk is over Ref Def",
        "prerequisites": "",
        "source": "UR 23"
    },
    {
        "name": "Quick Study",
        "tree": "Warrior",
        "class": "Soldier",
        "description": "1/enc if enemy uses non-Force talent you can use same talent next turn if have same weapon/item",
        "prerequisites": "",
        "source": "UR 23"
    },
    {
        "name": "Warrior's Determination",
        "tree": "Warrior",
        "class": "Soldier",
        "description": "1/enc ignore 1 non-Force effect, talent, skill or ability that exceeds Will Def, if spend FP ignore mind effect even if Force",
        "prerequisites": "",
        "source": "UR 23"
    },
    {
        "name": "Buried Presence",
        "tree": "Agent of Ossus",
        "class": "Force Traditions",
        "description": "Spend a Force Point as a standard action to avoid Force detection for one hour, or until you make a Use the Force check",
        "prerequisites": "",
        "source": "TFU 92"
    },
    {
        "name": "Conceal Other",
        "tree": "Agent of Ossus",
        "class": "Force Traditions",
        "description": "Conceal one willing adjacent target with Buried Presence or Vanish\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "TFU 92"
    },
    {
        "name": "Insightful Aim",
        "tree": "Agent of Ossus",
        "class": "Force Traditions",
        "description": "Spend a Force Point as a swift action to use your Use the Force modifier to make a ranged attack",
        "prerequisites": "",
        "source": "TFU 92"
    },
    {
        "name": "Vanish",
        "tree": "Agent of Ossus",
        "class": "Force Traditions",
        "description": "Make a Use the Force check as a swift action against the Will Defense of a target to gain total concealment against them",
        "prerequisites": "",
        "source": "TFU 92"
    },
    {
        "name": "Aura of Freedom",
        "tree": "Aing-Tii Monk",
        "class": "Force Traditions",
        "description": "+5 on skill or grapple checks to all allies w/in 6 sq, can spend FP to negate an ally moved against will",
        "prerequisites": "",
        "source": "JATM 73"
    },
    {
        "name": "Liberate",
        "tree": "Aing-Tii Monk",
        "class": "Force Traditions",
        "description": "One ally w/in 12 sq & LOS that is grabbed etc & release them & can move half spd as reac w/no AofO",
        "prerequisites": "",
        "source": "JATM 73"
    },
    {
        "name": "Folded Space Mastery",
        "tree": "Aing-Tii Monk",
        "class": "Force Traditions",
        "description": "One ally w/in 12 sq & LOS that is grabbed etc & release them & can move half spd as reac w/no AofO",
        "prerequisites": "",
        "source": "JATM 73"
    },
    {
        "name": "Many Shades of the Force",
        "tree": "Aing-Tii Monk",
        "class": "Force Traditions",
        "description": "One force power no longer has dark or light side descriptor",
        "prerequisites": "",
        "source": "JATM 73"
    },
    {
        "name": "Spatial Integrity",
        "tree": "Aing-Tii Monk",
        "class": "Force Traditions",
        "description": "Use the Force negates damage to vehicle you are aboard, occurs after DR & SR applied",
        "prerequisites": "",
        "source": "JATM 73"
    },
    {
        "name": "Bando Goro Surge",
        "tree": "Bando Goro Captain",
        "class": "Force Traditions",
        "description": "Whenever you move up the condition track, you gain 5 + your level bonus hit points",
        "prerequisites": "",
        "source": "CW 55"
    },
    {
        "name": "Force Fighter",
        "tree": "Bando Goro Captain",
        "class": "Force Traditions",
        "description": "Whenever you spend a Force point to increase an attack roll, heal the same number as the bonus if the attack hits",
        "prerequisites": "",
        "source": "CW 56"
    },
    {
        "name": "Resist Enervation",
        "tree": "Bando Goro Captain",
        "class": "Force Traditions",
        "description": "Spend a Force point to negate movement down the condition track",
        "prerequisites": "",
        "source": "CW 56"
    },
    {
        "name": "Victorious Force Mastery",
        "tree": "Bando Goro Captain",
        "class": "Force Traditions",
        "description": "Whenever an enemy you have damaged in this encounter is reduced to 0 hit points, you return a Force power to your stack",
        "prerequisites": "",
        "source": "CW 56"
    },
    {
        "name": "Enhanced Danger Sense",
        "tree": "Baran Do Sage",
        "class": "Force Traditions",
        "description": "+10 Perception to avoid being surprised, spend FP to act in surprise round even if surprised",
        "prerequisites": "",
        "source": "JATM 75"
    },
    {
        "name": "Knowledge and Defense",
        "tree": "Baran Do Sage",
        "class": "Force Traditions",
        "description": "add Wis bonus to Ref Def if denied Dex",
        "prerequisites": "",
        "source": "JATM 75"
    },
    {
        "name": "Expanded Horizon",
        "tree": "Baran Do Sage",
        "class": "Force Traditions",
        "description": "with Search Your Feelings can sense consequences 1 hour in future, spend FP for 8 hours, DP 24 hrs",
        "prerequisites": "",
        "source": "JATM 75"
    },
    {
        "name": "Planetary Attunement",
        "tree": "Baran Do Sage",
        "class": "Force Traditions",
        "description": "on new planet 10 min to acclimate & on planet +2 all Def against natural hazards, spd +1 sq, sense weather for 24 hours as full-round",
        "prerequisites": "",
        "source": "JATM 75"
    },
    {
        "name": "Precognitive Meditation",
        "tree": "Baran Do Sage",
        "class": "Force Traditions",
        "description": "1/day spend 10 min & once later in day negate an attack as long as not nat 20, if don't use regain FP",
        "prerequisites": "",
        "source": "JATM 75"
    },
    {
        "name": "Believer Intuition",
        "tree": "Believers Disciple",
        "class": "Force Traditions",
        "description": "When successfully attacked, make a Use the Force check, if it exceeds the attack roll, you add your Charisma modifier to your Reflex Defense",
        "prerequisites": "",
        "source": "CW 56"
    },
    {
        "name": "Defense Boost",
        "tree": "Believers Disciple",
        "class": "Force Traditions",
        "description": "As a swift action make a DC 15 Use the Force check to gain a +1 bonus to Fortitude Defense until the end of the encounter or DC 20 to gain a +1 bonus to all defenses",
        "prerequisites": "",
        "source": "CW 56"
    },
    {
        "name": "Hardiness",
        "tree": "Believers Disciple",
        "class": "Force Traditions",
        "description": "Spend a Force point to reduce the number of swift actions it takes you to move +1 step on the condition track by one",
        "prerequisites": "",
        "source": "CW 56"
    },
    {
        "name": "High Impact",
        "tree": "Believers Disciple",
        "class": "Force Traditions",
        "description": "As a swift action, make a DC 15 Use the Force check to add double your Strength bonus to melee damage before the end of your turn",
        "prerequisites": "",
        "source": "CW 56"
    },
    {
        "name": "Sith Reverence",
        "tree": "Believers Disciple",
        "class": "Force Traditions",
        "description": "You gain a +1 morale bonus to attacks when within 20 squares and line of sight of an ally with a Dark Side score equal to or greater than your own",
        "prerequisites": "",
        "source": "CW 56"
    },
    {
        "name": "Force Directed Shot",
        "tree": "Blazing Chain",
        "class": "Force Traditions",
        "description": "choose 1 sq w/in 12sq & LOS, treat as origin sq for next ranged energy atk, must have LOS to target",
        "prerequisites": "",
        "source": "UR 33"
    },
    {
        "name": "Negate and Redirect",
        "tree": "Blazing Chain",
        "class": "Force Traditions",
        "description": "when negate energy v. ranged redirect at enemy w/in 6sq, UtF v. Fort Def for half negated dam",
        "prerequisites": "",
        "source": "UR 33"
    },
    {
        "name": "Rising Anger",
        "tree": "Blazing Chain",
        "class": "Force Traditions",
        "description": "1/rnd as reac to ally taking dam or down track +1 atk next atk (up to max +5)",
        "prerequisites": "",
        "source": "UR 33"
    },
    {
        "name": "Rising Panic",
        "tree": "Blazing Chain",
        "class": "Force Traditions",
        "description": "1/rnd as reac to ally taking dam or down track UtF v. Will Def to move target -1 track, if enemy moved to bottom of track not unconscious but must flee for 1 min until moves up track",
        "prerequisites": "",
        "source": "UR 33"
    },
    {
        "name": "Adept Spellcaster",
        "tree": "Dathomiri Witch",
        "class": "Force Traditions",
        "description": "You may reroll Use the Force checks to activate Force powers if you spend a full-round action instead of the standard, move or swift action to activate it, but must accept the result of the reroll",
        "prerequisites": "",
        "source": "107"
    },
    {
        "name": "Flight",
        "tree": "Dathomiri Witch",
        "class": "Force Traditions",
        "description": "Spend a Force Point to fly at your normal speed, ascend at half speed or descend at double speed, activated as a swift action and lasting until the start of your next turn",
        "prerequisites": "",
        "source": "107"
    },
    {
        "name": "Charm Beast",
        "tree": "Dathomiri Witch",
        "class": "Force Traditions",
        "description": "You may use Use the Force instead of Persuasion to attempt to change the attitude of an undomesticated creature with an Intelligence of 2 or less, and take no penalty for the creature not understanding your language",
        "prerequisites": "",
        "source": "107"
    },
    {
        "name": "Command Beast",
        "tree": "Dathomiri Witch",
        "class": "Force Traditions",
        "description": "Upon shifting the attitude of a beast to indifferent or friendly, you may treat it as domesticated, and as a mount if it is larger than you and suitable for sitting upon",
        "prerequisites": "",
        "source": "107"
    },
    {
        "name": "Cloak of Shadow",
        "tree": "Disciples of Twilight",
        "class": "Force Traditions",
        "description": "Spend a Force point to gain Concealment whenever you move 3 squares",
        "prerequisites": "",
        "source": "LE 57"
    },
    {
        "name": "Shadow Armour",
        "tree": "Disciples of Twilight",
        "class": "Force Traditions",
        "description": "Grant yourself a +1 Force bonus to Reflex Defense",
        "prerequisites": "",
        "source": "LE 58"
    },
    {
        "name": "Phantasm",
        "tree": "Disciples of Twilight",
        "class": "Force Traditions",
        "description": "Spend a Force point to create illusionary shadows around a target",
        "prerequisites": "",
        "source": "LE 57"
    },
    {
        "name": "Revelation",
        "tree": "Disciples of Twilight",
        "class": "Force Traditions",
        "description": "Deny opponent concealment bonus to Reflex Defense",
        "prerequisites": "",
        "source": "LE 58"
    },
    {
        "name": "Shadow Vision",
        "tree": "Disciples of Twilight",
        "class": "Force Traditions",
        "description": "Gain low-light vision",
        "prerequisites": "",
        "source": "LE 58"
    },
    {
        "name": "Initiate of Vahl",
        "tree": "Ember of Vahl",
        "class": "Force Traditions",
        "description": "Take half damage from fire, or no damage on a miss",
        "prerequisites": "",
        "source": "LE 59"
    },
    {
        "name": "Reading the Flame",
        "tree": "Ember of Vahl",
        "class": "Force Traditions",
        "description": "Reroll Farseeing or Search Your Feelings Use the Force checks and take the better result",
        "prerequisites": "",
        "source": "LE 59"
    },
    {
        "name": "Sword of Vahl",
        "tree": "Ember of Vahl",
        "class": "Force Traditions",
        "description": "+1 Force bonus on attack rolls with simple weapons",
        "prerequisites": "",
        "source": "LE 59"
    },
    {
        "name": "Vahl's Flame",
        "tree": "Ember of Vahl",
        "class": "Force Traditions",
        "description": "Wreath weapon in flames that deal +1d6 fire damage",
        "prerequisites": "",
        "source": "LE 59"
    },
    {
        "name": "Vahl's Weapon",
        "tree": "Ember of Vahl",
        "class": "Force Traditions",
        "description": "The damage from Empower Weapon is considered fire damage",
        "prerequisites": "",
        "source": "LE 59"
    },
    {
        "name": "Detonate",
        "tree": "Felucian Shaman",
        "class": "Force Traditions",
        "description": "Spend a Force Point to turn your Force blast into an area effect attack with a 2-square radius",
        "prerequisites": "",
        "source": "TFU 93"
    },
    {
        "name": "Hive Mind",
        "tree": "Felucian Shaman",
        "class": "Force Traditions",
        "description": "Automatically succeed at telepathy with a willing target, and can use it as a swift action",
        "prerequisites": "",
        "source": "TFU 93"
    },
    {
        "name": "Infuse Weapon",
        "tree": "Felucian Shaman",
        "class": "Force Traditions",
        "description": "Spend a Force Point as a full-round action to double the DR of an unpowered melee weapon and make it resistant to lightsabers. You double the damage gained from spending a Force Point to add damage with the weapon",
        "prerequisites": "",
        "source": "TFU 93"
    },
    {
        "name": "Sickening Blast",
        "tree": "Felucian Shaman",
        "class": "Force Traditions",
        "description": "If your Use the Force check to use Force blast exceeds the target's Fortitude Defense, they move -1 step down the condition track if you accept an increase of 1 to your Dark Side Score",
        "prerequisites": "",
        "source": "TFU 93"
    },
    {
        "name": "Droid Duelist",
        "tree": "Iron Knight",
        "class": "Force Traditions",
        "description": "opponent is flat-footed against your next attack with a lightsaber before end of your next turn",
        "prerequisites": "",
        "source": "JATM 79"
    },
    {
        "name": "Force Repair",
        "tree": "Iron Knight",
        "class": "Force Traditions",
        "description": "can use Force Trance & receive vital transfer & gain additional hp = Cha mod (min 1)",
        "prerequisites": "",
        "source": "JATM 79"
    },
    {
        "name": "Heal Droid",
        "tree": "Iron Knight",
        "class": "Force Traditions",
        "description": "can heal droids with vital transfer",
        "prerequisites": "",
        "source": "JATM 79"
    },
    {
        "name": "Mask Presence",
        "tree": "Iron Knight",
        "class": "Force Traditions",
        "description": "become immune to Sense Force & appear to be normal droid until you use the Force",
        "prerequisites": "",
        "source": "JATM 79"
    },
    {
        "name": "Silicon Mind",
        "tree": "Iron Knight",
        "class": "Force Traditions",
        "description": "gain bonus to Will Def = Cha mod (min 1) against Use the Force until end of your next turn",
        "prerequisites": "",
        "source": "JATM 79"
    },
    {
        "name": "Force Delay",
        "tree": "Jal Shay",
        "class": "Force Traditions",
        "description": "Once per encounter, make a Persuasion check against a target's Will Defense to deny them their move action next round, or their standard action for a Force Point",
        "prerequisites": "",
        "source": "KotOR 57"
    },
    {
        "name": "Action Exchange",
        "tree": "Jal Shay",
        "class": "Force Traditions",
        "description": "Upon succeeding at Force Delay, grant an ally within six squares and line of sight another standard action for a move action",
        "prerequisites": "",
        "source": "KotOR 57"
    },
    {
        "name": "Imbue Item",
        "tree": "Jal Shay",
        "class": "Force Traditions",
        "description": "Transfer a Force Point into an item as a full-round action to be retrieved as a swift action at a later time",
        "prerequisites": "",
        "source": "KotOR 58"
    },
    {
        "name": "Knowledge of the Force",
        "tree": "Jal Shay",
        "class": "Force Traditions",
        "description": "Spend a Force Point to aid another ally within 6 squares on a Use the Force check as a reaction",
        "prerequisites": "",
        "source": "KotOR 58"
    },
    {
        "name": "Attune Armor",
        "tree": "Jensaarai Defender",
        "class": "Force Traditions",
        "description": "Spend a Force Point as a full round action to increase your armor's armor bonus by +2 and its maximum Dexerity by +1",
        "prerequisites": "",
        "source": "107"
    },
    {
        "name": "Force Cloak",
        "tree": "Jensaarai Defender",
        "class": "Force Traditions",
        "description": "Shield you and anything on your person from electronic surveillance, sensors and communications, activated as a swift action and maintained as a standard action",
        "prerequisites": "",
        "source": "107"
    },
    {
        "name": "Force Cloak Mastery",
        "tree": "Jensaarai Defender",
        "class": "Force Traditions",
        "description": "You can use Force Cloak on a number of creatures up to your character level (including you)",
        "prerequisites": "",
        "source": "107"
    },
    {
        "name": "Linked Defense",
        "tree": "Jensaarai Defender",
        "class": "Force Traditions",
        "description": "Take a penalty to your attack roll to add to the Reflex Defense of an ally within line of sight as a swift action (max penalty/bonus of -5/+5)",
        "prerequisites": "",
        "source": "107"
    },
    {
        "name": "Conceal Force Use",
        "tree": "Keetael",
        "class": "Force Traditions",
        "description": "Make a Deception check whenever using Use the Force to conceal the effects of the Force use",
        "prerequisites": "",
        "source": "KotOR 58"
    },
    {
        "name": "Force Direction",
        "tree": "Keetael",
        "class": "Force Traditions",
        "description": "Add +3 (or +4 if you roll d8s) when spending a Force Point on a ranged attack rather than rolling a die",
        "prerequisites": "",
        "source": "KotOR 58"
    },
    {
        "name": "Force Momentum",
        "tree": "Keetael",
        "class": "Force Traditions",
        "description": "Add your Force Point roll to a melee attack to melee damage as well",
        "prerequisites": "",
        "source": "KotOR 58"
    },
    {
        "name": "Past Visions",
        "tree": "Keetael",
        "class": "Force Traditions",
        "description": "Reduce DC numbers by half when using farseeing to look into the past, and see everything within six squares of your target without spending a Force Point",
        "prerequisites": "",
        "source": "KotOR 58"
    },
    {
        "name": "Shield Gauntlet Defense",
        "tree": "Kilian Ranger",
        "class": "Force Traditions",
        "description": "Once per turn as a reaction, you can gain a +2 deflection bonus to your Reflex Defense against any one ranged attack. To use this talent, you must be wearing an active shield gauntlet, you must be aware of the attack, and you must not be flat-footed.",
        "prerequisites": "",
        "source": "RE 37"
    },
    {
        "name": "Shield Gauntlet Deflect",
        "tree": "Kilian Ranger",
        "class": "Force Traditions",
        "description": "Once per round as a reaction, you can negate a ranged attack by making a successful Use the Force check. The DC of the skill check is equal to the result of the attack roll you wish to negate. To use this talent, you must be wearing an active shield gauntlet you must be aware of the attack, and you must not be flat-footed. You can spend a Force Point to use this talent to negate a ranged attack against an adjacent character.\r\nYou can use Shield Gauntlet Deflect to deflect some of the barrage of shots fired from a ranged weapon set on autofire. If your Use the Force check succeeds. you take half damage if the attack hits and no damage if the attack misses.\r\nPrerequisite: Shield Gauntlet Defense.",
        "prerequisites": "Shield Gauntlet Defense",
        "source": "RE 37"
    },
    {
        "name": "Siang Lance Mastery",
        "tree": "Kilian Ranger",
        "class": "Force Traditions",
        "description": "You treat a siang lance as a rifle instead of as an exotic weapon. Additionally, you gain a +1 bonus to attack rolls with a siang lance. This talent counts as the Weapon Focus (siang lance) feat for the purpose of satisfying prerequisites. If you also have the Weapon Focus (rifles) feat, the attack bonus provided by this talent does not stack with the attack bonus provided by Weapon Focus (rifles).",
        "prerequisites": "",
        "source": "RE 37"
    },
    {
        "name": "Empower Siang Lance",
        "tree": "Kilian Ranger",
        "class": "Force Traditions",
        "description": "You can spend a Force Point to empower a siang lance, which takes a full-round action. After the siang lance is empowered, it deals an additional die of damage when you wield it. Others who wield the weapon do not gain the bonus damage die.\r\nPrerequisite: Siang Lance Mastery, base attack bonus +7.",
        "prerequisites": "Siang Lance Mastery, base attack bonus +7",
        "source": "RE 37"
    },
    {
        "name": "Akk Dog Master",
        "tree": "Korunnai Adept",
        "class": "Force Traditions",
        "description": "You gain an Akk Dog follower",
        "prerequisites": "",
        "source": "CW 57"
    },
    {
        "name": "Akk Dog Trainer's Actions",
        "tree": "Korunnai Adept",
        "class": "Force Traditions",
        "description": "You can use the following actions on your turn\r\n- Attack in Concert\r\n- Fall on Prey\r\n- Paired Maul\r\nSee p.57 of the CWCS",
        "prerequisites": "",
        "source": "CW 57"
    },
    {
        "name": "Akk Dog Training",
        "tree": "Korunnai Adept",
        "class": "Force Traditions",
        "description": "Your Akk Dog gains the Powerful Charge feat",
        "prerequisites": "",
        "source": "CW 57"
    },
    {
        "name": "Protective Reaction",
        "tree": "Korunnai Adept",
        "class": "Force Traditions",
        "description": "Your Akk Dog gains attacks of opportunity against adjacent enemies attacking you",
        "prerequisites": "",
        "source": "CW 57"
    },
    {
        "name": "Dark Side Manipulation",
        "tree": "The Krath",
        "class": "Force Traditions",
        "description": "Once per encounter upon using a Force Point in a way which would give you a dark side point, you automatically gain the hightest possible result from the Force Point die roll",
        "prerequisites": "",
        "source": "KotOR 59"
    },
    {
        "name": "Krath Illusions",
        "tree": "The Krath",
        "class": "Force Traditions",
        "description": "Reduce the penalty for large illusions for half as a swift action",
        "prerequisites": "",
        "source": "KotOR 60"
    },
    {
        "name": "Krath Intuition",
        "tree": "The Krath",
        "class": "Force Traditions",
        "description": "Once per encounter, treat the damage from a Sith alchemical weapon as the maximum possible",
        "prerequisites": "",
        "source": "KotOR 60"
    },
    {
        "name": "Krath Surge",
        "tree": "The Krath",
        "class": "Force Traditions",
        "description": "Once per encounter, as a swift action, add 1 die of damage or extend the range of a power by 6 squares by making it a dark side power",
        "prerequisites": "",
        "source": "KotOR 60"
    },
    {
        "name": "Field Detection",
        "tree": "Luka Sene",
        "class": "Force Traditions",
        "description": "Make a DC 15 Use the Force check as a swift action to detect electromagnetic and energy fields within 12 squares of you, and treat SR as 5 points lower until your next turn",
        "prerequisites": "",
        "source": "KotOR 60"
    },
    {
        "name": "Luka Sene Master",
        "tree": "Luka Sene",
        "class": "Force Traditions",
        "description": "Once per encounter, gain a Force Point for use with the Sense or Luka Sene talent trees, farseeing, or Use the Force to Sense Force or Search your Feelings",
        "prerequisites": "",
        "source": "KotOR 60"
    },
    {
        "name": "Improved Force Sight",
        "tree": "Luka Sene",
        "class": "Force Traditions",
        "description": "You can Search as a swift action, and always succeed at Sense Surroundings",
        "prerequisites": "",
        "source": "KotOR 60"
    },
    {
        "name": "Quickseeing",
        "tree": "Luka Sene",
        "class": "Force Traditions",
        "description": "Make a Use the Force check as a free action against the Will Defense of a target within 12 squares to gain +2 to attack rolls against them, at the cost of a use of farseeing",
        "prerequisites": "",
        "source": "KotOR 60"
    },
    {
        "name": "Body Control",
        "tree": "Matuki Adept",
        "class": "Force Traditions",
        "description": "add Cha mod instead of Con mod to Fort Def, can spend FP to become immune to poison, radiation & disease until end of enc",
        "prerequisites": "",
        "source": "JATM 81"
    },
    {
        "name": "Physical Surge",
        "tree": "Matuki Adept",
        "class": "Force Traditions",
        "description": "when you roll an Initiative check at beginning of enc you can spend a swif immediately regardless",
        "prerequisites": "",
        "source": "JATM 81"
    },
    {
        "name": "Soft to Solid",
        "tree": "Matuki Adept",
        "class": "Force Traditions",
        "description": "when damaged gain DR 10 until end of your next turn",
        "prerequisites": "",
        "source": "JATM 81"
    },
    {
        "name": "Wan-Shen Defense",
        "tree": "Matuki Adept",
        "class": "Force Traditions",
        "description": "+1 Ref Def v. melee if have wan-shen in hand & not flat-footed",
        "prerequisites": "",
        "source": "JATM 81"
    },
    {
        "name": "Wan-Shen Kata",
        "tree": "Matuki Adept",
        "class": "Force Traditions",
        "description": "treat wan-shen as Med weapon not Large, can Pin & Trip with wan-shen if wan-shen in hand",
        "prerequisites": "",
        "source": "JATM 81"
    },
    {
        "name": "Wan-Shen Mastery",
        "tree": "Matuki Adept",
        "class": "Force Traditions",
        "description": "make 2 atk with wan-shen each against a different target if have wan-shen in hand",
        "prerequisites": "",
        "source": "JATM 81"
    },
    {
        "name": "Deception Awareness",
        "tree": "Order of Shasa",
        "class": "Force Traditions",
        "description": "+5 to Will Defense against Deception, and may Use the Force to make Persuasion checks to sense deception and sense influence",
        "prerequisites": "",
        "source": "KotOR 61"
    },
    {
        "name": "Greater Weapon Focus (fira)",
        "tree": "Order of Shasa",
        "class": "Force Traditions",
        "description": "+1 attack with fira",
        "prerequisites": "",
        "source": "KotOR 61"
    },
    {
        "name": "Progenitor's Call",
        "tree": "Order of Shasa",
        "class": "Force Traditions",
        "description": "Once per encounter, Use the Force against an opponent's Will Defense to move them -1 persistent step down the condition track and deny them their standard action next turn",
        "prerequisites": "",
        "source": "KotOR 61"
    },
    {
        "name": "Waveform",
        "tree": "Order of Shasa",
        "class": "Force Traditions",
        "description": "Add your Charisma modifier to any damage from a telekinetic power as a swift action",
        "prerequisites": "",
        "source": "KotOR 61"
    },
    {
        "name": "Seyugi Cyclone",
        "tree": "Seyugi Dervish",
        "class": "Force Traditions",
        "description": "if wielding no weapons (gloves or gauntlets) can use Whirlwind Attack until start of your next turn",
        "prerequisites": "",
        "source": "JATM 83"
    },
    {
        "name": "Mobile Whirlwind",
        "tree": "Seyugi Dervish",
        "class": "Force Traditions",
        "description": "can move speed after Whirlwind Attack",
        "prerequisites": "",
        "source": "JATM 83"
    },
    {
        "name": "Repelling Whirlwind",
        "tree": "Seyugi Dervish",
        "class": "Force Traditions",
        "description": "+2 Ref Def v. target hit by Whirlwind Attack until start of your next turn",
        "prerequisites": "",
        "source": "JATM 83"
    },
    {
        "name": "Sudden Storm",
        "tree": "Seyugi Dervish",
        "class": "Force Traditions",
        "description": "make Whirlwind Attack at end of charge not normal melee attack if using no weapons (gloves, etc)",
        "prerequisites": "",
        "source": "JATM 83"
    },
    {
        "name": "Tempest Tossed",
        "tree": "Seyugi Dervish",
        "class": "Force Traditions",
        "description": "can move target 1 sq if damaged by Whirlwind Attack, not if grabbed or grappled, no Atk of Opp",
        "prerequisites": "",
        "source": "JATM 83"
    },
    {
        "name": "Combustion",
        "tree": "Shaper of Kro Var",
        "class": "Force Traditions",
        "description": "+1d6 fire dam to any force power that affects a single target & catches it on fire",
        "prerequisites": "",
        "source": "JATM 85"
    },
    {
        "name": "Earth Buckle",
        "tree": "Shaper of Kro Var",
        "class": "Force Traditions",
        "description": "create 3x3 sq difficult terrain around you & you ignore difficult terrain you create",
        "prerequisites": "",
        "source": "JATM 85"
    },
    {
        "name": "Fluidity",
        "tree": "Shaper of Kro Var",
        "class": "Force Traditions",
        "description": "UtF for Acrobatics & can reroll UtF if can reroll Acrobatics, spend FP to be one size larger w/grapple",
        "prerequisites": "",
        "source": "JATM 85"
    },
    {
        "name": "Thunderclap",
        "tree": "Shaper of Kro Var",
        "class": "Force Traditions",
        "description": "if you use a Force Power that deals damage you can use Bantha Rush against target as if melee atk",
        "prerequisites": "",
        "source": "JATM 85"
    },
    {
        "name": "Wind Vortex",
        "tree": "Shaper of Kro Var",
        "class": "Force Traditions",
        "description": "gain concealment & +2 Ref Def v. thrown weapons until end of encounter",
        "prerequisites": "",
        "source": "JATM 85"
    },
    {
        "name": "Repel Discord",
        "tree": "Tyia Adept",
        "class": "Force Traditions",
        "description": "When targeted by dark side power, spend a Force point to give a penalty to their Use the Force check equal to their Dark Side score",
        "prerequisites": "",
        "source": "JATM 87"
    },
    {
        "name": "Stifle Conflict",
        "tree": "Tyia Adept",
        "class": "Force Traditions",
        "description": "Your Force powers can deal stun damage",
        "prerequisites": "",
        "source": "JATM 87"
    },
    {
        "name": "Tyia Adept",
        "tree": "Tyia Adept",
        "class": "Force Traditions",
        "description": "Spend a Force point as a Swift action to designate one ally in 12 squares and line of sight; until the end of your next turn, if the ally takes damage, you take half instead",
        "prerequisites": "",
        "source": "JATM 87"
    },
    {
        "name": "Cycle of Harmony",
        "tree": "Tyia Adept",
        "class": "Force Traditions",
        "description": "When an ally in 12 squares and line of sight takes damage or moves down the condition track, another ally within 12 squares and line of sight gains temporary hit points equal to 5 + your Charisma modifier",
        "prerequisites": "",
        "source": "JATM 87"
    },
    {
        "name": "Force Stabilize",
        "tree": "Tyia Adept",
        "class": "Force Traditions",
        "description": "1/turn ally within 12 squares and line of sight can take a Second Wind if they have not already",
        "prerequisites": "",
        "source": "JATM 87"
    },
    {
        "name": "Martial Resurgence",
        "tree": "Warden of the Sky",
        "class": "Force Traditions",
        "description": "Recover all Force powers on a natural 20 on an unarmed attack",
        "prerequisites": "",
        "source": "JATM 89"
    },
    {
        "name": "Rebound Leap",
        "tree": "Warden of the Sky",
        "class": "Force Traditions",
        "description": "Make Jump check as a free action when you have reduced an opponent to 0 hp",
        "prerequisites": "",
        "source": "JATM 89"
    },
    {
        "name": "Similatanous Strike",
        "tree": "Warden of the Sky",
        "class": "Force Traditions",
        "description": "Make two unarmed attacks each against different targets",
        "prerequisites": "",
        "source": "JATM 89"
    },
    {
        "name": "Telekinetic Strike",
        "tree": "Warden of the Sky",
        "class": "Force Traditions",
        "description": "Add Force Point roll to damage and attack if unarmed",
        "prerequisites": "",
        "source": "JATM 89"
    },
    {
        "name": "Brutal Unarmed Strike",
        "tree": "Warden of the Sky",
        "class": "Force Traditions",
        "description": "Reroll any unarmed damage dice that has a \"1\" as a result",
        "prerequisites": "",
        "source": "JATM 89"
    },
    {
        "name": "Telekinetic Throw",
        "tree": "Warden of the Sky",
        "class": "Force Traditions",
        "description": "With successful Throw opponent falls prone in any space you desire up to 3 squares beyond your reach",
        "prerequisites": "",
        "source": "JATM 89"
    },
    {
        "name": "Ride the Current",
        "tree": "White Current Adept",
        "class": "Force Traditions",
        "description": "reaction to damage gain total concealment until end of your next turn & may take 2nd Wind if didn't",
        "prerequisites": "",
        "source": "JATM 77"
    },
    {
        "name": "Surrender to the Current",
        "tree": "White Current Adept",
        "class": "Force Traditions",
        "description": "until end of encounter: can only use \"you\" Force Powers & 1/turn recover 1 spent power w/out FP",
        "prerequisites": "",
        "source": "JATM 77"
    },
    {
        "name": "White Current Adept",
        "tree": "White Current Adept",
        "class": "Force Traditions",
        "description": "Use the Force replaces Stealth, considered trained, if can reroll Stealth can reroll Use the Force",
        "prerequisites": "",
        "source": "JATM 77"
    },
    {
        "name": "Force Immersion",
        "tree": "White Current Adept",
        "class": "Force Traditions",
        "description": "sneak from Stealth from electronic devices, use same roll for Perception & Use Computer",
        "prerequisites": "",
        "source": "JATM 77"
    },
    {
        "name": "Immerse Another",
        "tree": "White Current Adept",
        "class": "Force Traditions",
        "description": "applies to ally also, spend Force Point to all adjacent allies",
        "prerequisites": "",
        "source": "JATM 77"
    },
    {
        "name": "Discblade Arc",
        "tree": "Zeison Sha Warrior",
        "class": "Force Traditions",
        "description": "make area atk with discblade v. 3 targets if all in PB range, make 1 attack roll",
        "prerequisites": "",
        "source": "JATM 91"
    },
    {
        "name": "Distant Discblade Throw",
        "tree": "Zeison Sha Warrior",
        "class": "Force Traditions",
        "description": "treat thrown discblade as pistol for range",
        "prerequisites": "",
        "source": "JATM 91"
    },
    {
        "name": "Recall Discblade",
        "tree": "Zeison Sha Warrior",
        "class": "Force Traditions",
        "description": "DC 15 Use the Force to recall discblade",
        "prerequisites": "",
        "source": "JATM 91"
    },
    {
        "name": "Telekinetic Vigilance",
        "tree": "Zeison Sha Warrior",
        "class": "Force Traditions",
        "description": "can return Intercept to suite without spending Force Point",
        "prerequisites": "",
        "source": "JATM 91"
    },
    {
        "name": "Weapon Specialization (discblade)",
        "tree": "Zeison Sha Warrior",
        "class": "Force Traditions",
        "description": "+2 melee dam with discblade",
        "prerequisites": "",
        "source": "JATM 91"
    },
    {
        "name": "Interrogator",
        "tree": "First-Degree Droid",
        "class": "Droid",
        "description": "You may use Treat Injury instead of Persuasion to intimidate or change attitudes",
        "prerequisites": "",
        "source": "TFU 102"
    },
    {
        "name": "Known Vulnerability",
        "tree": "First-Degree Droid",
        "class": "Droid",
        "description": "As a free action, you make a DC 15 Knowledge (life sciences) check (DC 25 for rare species, DC 35 for unknown species, both as determined by the Gamemaster). If the check is successful , until the end of the encounter, whenever you make a successful melee or unarmed attack that deals damage against a target of that species, your target takes a -2 penalties to attack rolls until the end of your next turn. \r\nPrerequisite: Trained in Knowledge (life sciences)",
        "prerequisites": "Trained in Knowledge (life sciences)",
        "source": "SGtD 26"
    },
    {
        "name": "Medical Analyzer",
        "tree": "First-Degree Droid",
        "class": "Droid",
        "description": "When making a Treat Injury check to Treat Disease, Treat Poison, or Treat Radiation, you can also add your Intelligence modifier to your roll.\r\nPrerequisites: Trained in Knowledge (life sciences), medical droid.",
        "prerequisites": "Trained in Knowledge (life sciences), medical droid",
        "source": "SGtD 26"
    },
    {
        "name": "Medical Droid",
        "tree": "First-Degree Droid",
        "class": "Droid",
        "description": "You grant a creature double hit points for every point above the DC when performing first aid with a medpac",
        "prerequisites": "",
        "source": "TFU 102"
    },
    {
        "name": "Dull the Pain",
        "tree": "First-Degree Droid",
        "class": "Droid",
        "description": "Make a DC 15 Treat Injury check as a full round action to move an adjacent creature +1 step along the condition track",
        "prerequisites": "",
        "source": "TFU 102"
    },
    {
        "name": "Science Analyzer",
        "tree": "First-Degree Droid",
        "class": "Droid",
        "description": "You can add double your Intelligence modifier to your Knowledge (life sciences) or Knowledge (physical sciences) skill check.\r\nPrerequisites: Trained in Knowledge (life sciences) and Knowledge (physical sciences).",
        "prerequisites": "Trained in Knowledge (life sciences) and Knowledge (physical sciences)",
        "source": "SGtD 26"
    },
    {
        "name": "Triage Scan",
        "tree": "First-Degree Droid",
        "class": "Droid",
        "description": "As a standard action, you can make a DC 20 Treat Injury check. If the check succeeds, you know if the organic cha racters within 6 squares and within your line of sight are below one half of their hit points and at what step they are along the condition track.\r\nPrerequisites: Trained in Treat Injury, medical droid.",
        "prerequisites": "Trained in Treat Injury, medical droid",
        "source": "SGtD 26"
    },
    {
        "name": "Adept Assistant",
        "tree": "Second-Degree Droid",
        "class": "Droid",
        "description": "When you aid another on Mechanics, Pilot or Use Computer, you add +5 rather than +2",
        "prerequisites": "",
        "source": "TFU 102"
    },
    {
        "name": "Burst Transfer",
        "tree": "Second-Degree Droid",
        "class": "Droid",
        "description": "You can double the amount of data transferred with the Binary language in a single round (see page 191 of the Saga Edition core rulebook) when communicating with other droids with Burst Transfer, and you cut Access Information time in half when making Use Computer checks to find general or specific in formation (see page 76 of the Saga Edition core rulebook)",
        "prerequisites": "",
        "source": "SGtD 26"
    },
    {
        "name": "Mechanics Mastery",
        "tree": "Second-Degree Droid",
        "class": "Droid",
        "description": "You may always take ten on Mechanics checks",
        "prerequisites": "",
        "source": "TFU 102"
    },
    {
        "name": "On-Board System Link",
        "tree": "Second-Degree Droid",
        "class": "Droid",
        "description": "While aboard a starship or vehicle and plugged into the ship's systems by scomp link, droid socket, or basic data port, you can reroute power or recharge shields as two swift actions instead of three.",
        "prerequisites": "",
        "source": "SGtD 26"
    },
    {
        "name": "Quick Astrogation",
        "tree": "Second-Degree Droid",
        "class": "Droid",
        "description": "Your speedy electronic astrogation-calculation routines allow you to cut calculation time in half. Additionally, when attempting a Use Computer check to Astrogate, you can make the calculation as a standard action instead of a full-round action.\r\nPrerequisite:Trained in Use Computer.",
        "prerequisites": "Trained in Use Computer",
        "source": "SGtD 26"
    },
    {
        "name": "Scomp Link Slicer",
        "tree": "Second-Degree Droid",
        "class": "Droid",
        "description": "You can use each of the fo llowing actions once per encounter: \r\n• Eradicate: You can use Disable or Erase Prog ram on a computer that is friend ly or helpful toward you. With th is talent, disabl ing or erasing a program takes 5 minutes and requires a DC 15 Use Computer check (see page 76 of the Saga Edition core rulebook).\r\n• Lockout: If you succeed on an opposed Use Computer check when you Issue a Routine Command to counteract another programmer's actions, you automatically lock the other programmer out of the system. He or she must succeed in an opposed Use Computer check against you to regain access to t he system (see page 76 of the Saga Edition core rulebook). You resist the attempt as a reaction. \r\n• Untraceable: As a reaction, you automatica lly keep a hosti le computer from t raci ng your location if you f ai l a Use Computer check (see page 76 of the Saga Edition core rulebook) by 10 or less. \r\nPrerequisites: Any two ta lents from the Slicer Talent Tree (see page 47 of the Saga Ed ition core rulebook). Burst Transfer can be one of these talents.",
        "prerequisites": "Any two ta lents from the Slicer Talent Tree (see page 47 of the Saga Ed ition core rulebook)",
        "source": "SGtD 26"
    },
    {
        "name": "Vehicle Mechanic",
        "tree": "Second-Degree Droid",
        "class": "Droid",
        "description": "Once per day, you can make a DC 20 Mechanics check as three swift actions in successive rounds to grant a vehicle 1d8 hit points plus 1 for every point you exceed the DC, and move it +1 step along the condition track",
        "prerequisites": "",
        "source": "TFU 102"
    },
    {
        "name": "Etiquette",
        "tree": "Third-Degree Droid",
        "class": "Droid",
        "description": "When you use Persuasion to change attitude, you adjust it by one additional step",
        "prerequisites": "",
        "source": "TFU 103"
    },
    {
        "name": "Helpful",
        "tree": "Third-Degree Droid",
        "class": "Droid",
        "description": "You may use aid another for an adjacent ally as a swift action once per turn",
        "prerequisites": "",
        "source": "TFU 103"
    },
    {
        "name": "Nuanced",
        "tree": "Third-Degree Droid",
        "class": "Droid",
        "description": "Once per encounter, you can add your Wisdom bonus to a Persuasion check in addition to your Charisma bonus.",
        "prerequisites": "",
        "source": "SGtD 26"
    },
    {
        "name": "Observant",
        "tree": "Third-Degree Droid",
        "class": "Droid",
        "description": "You enhance your persuasiveness by applying data obtained through observation. Whenever you would fail a Persuasion check, you can roll a Perception check as a free action, with a DC equal to the DC of the Persuasion check. If you succeed, add +5 to the original Persuasion check result.",
        "prerequisites": "",
        "source": "SGtD 26"
    },
    {
        "name": "Protocol",
        "tree": "Third-Degree Droid",
        "class": "Droid",
        "description": "You automatically succeed on aid another for Deception, Knowledge and Persuasion checks",
        "prerequisites": "",
        "source": "TFU 103"
    },
    {
        "name": "Supervising Droid",
        "tree": "Third-Degree Droid",
        "class": "Droid",
        "description": "You can use each of the following actions once per encounter:\r\n• Combat Support: As a standard action, you automatically aid another on an al lied droid's attack roll, provided you are capable of using the aid another action to assist that ally. If you also have Weapon Focus with this weapon, you increase the bonus provided by the aid another action from +2 to +3.\r\n• Director: As a standard action, you automatica lly aid another droid with a skill you are traine d in. If you also have Skill Focus in the skill, you increase the aid another bonus from +2 to +5.\r\n• Instant Action: As a swift action, you grant one ally a swift action that it can use immediately as a free action. \r\nPrerequisites: Observant, any talent from the Influence, Inspiration, or Leadership Talent Trees (see pages 43 - 44 of the Saga Edition core rulebook).",
        "prerequisites": "Observant, any talent from the Influence, Inspiration, or Leadership Talent Trees (see pages 43 - 44 of the Saga Edition core rulebook)",
        "source": "SGtD 26"
    },
    {
        "name": "Talkdroid",
        "tree": "Third-Degree Droid",
        "class": "Droid",
        "description": "When one of your allies is attempting to use the Persuasion skill to change the attitude of a creature that does not understand your ally, you add +2 to the ally's Persuasion check results if you perform the translation.\r\nPrerequisite: Trained in Persuasion.",
        "prerequisites": "Trained in Persuasion",
        "source": "SGtD 26"
    },
    {
        "name": "Combat Repairs",
        "tree": "Fourth-Degree Droid",
        "class": "Droid",
        "description": "Once per day, you may repair yourself as a full-round action rather than over an hour",
        "prerequisites": "",
        "source": "TFU 103"
    },
    {
        "name": "Droid Smash",
        "tree": "Fourth-Degree Droid",
        "class": "Droid",
        "description": "You add double your Strength bonus to melee damage rolls when wielding a weapon one-handed",
        "prerequisites": "",
        "source": "TFU 103"
    },
    {
        "name": "Just a Scratch",
        "tree": "Fourth-Degree Droid",
        "class": "Droid",
        "description": "Once per encounter, as a reaction, you can reduce the damage from a single attack that targets your Reflex Defense by an amount equal to your Fortitude Defense.\r\nPrerequisites: Equipped with medium or better armor, proficient with that armor.",
        "prerequisites": "Equipped with medium or better armor, proficient with that armor",
        "source": "SGtD 27"
    },
    {
        "name": "Target Acquisition",
        "tree": "Fourth-Degree Droid",
        "class": "Droid",
        "description": "Once per encounter, as a swift action, designate an enemy target within line of sight as an acquired target. You gain a +1 circumstance bonus to attack rolls and damage rolls for all attacks against that target until the end of the encounter, as long as the target remains within your line of sight.",
        "prerequisites": "",
        "source": "SGtD 27"
    },
    {
        "name": "Target Lock",
        "tree": "Fourth-Degree Droid",
        "class": "Droid",
        "description": "You lock onto the target designated by the Target Acquisition talent. If the target leaves your line of sight, you automatically reacquire the target lock as a reaction if the target comes back with in your line of sight. You also gain a +5 bonus to your Perception skill when opposing the target's Stealth checks. \r\nPrerequisite: Target Acquisition.",
        "prerequisites": "Target Acquisition",
        "source": "SGtD 27"
    },
    {
        "name": "Targeting Package",
        "tree": "Fourth-Degree Droid",
        "class": "Droid",
        "description": "You may take two consecutive swift actions to grant yourself +2 to attack and damage rolls on targets in line of sight within point blank range",
        "prerequisites": "",
        "source": "TFU 103"
    },
    {
        "name": "Weapons Power Surge",
        "tree": "Fourth-Degree Droid",
        "class": "Droid",
        "description": "Once per encounter, as a free action, you can increase the damage dealt by one of your weapons by 1 or 2 damage dice in exchange for moving -1 step on the condition track for each die increased. The weapon must be permanently mounted to your chassis, and it must use your internal power supply. Handheld weapons, such as blaster rifles, do not qualify for this talent.",
        "prerequisites": "",
        "source": "SGtD 27"
    },
    {
        "name": "Cargo Hauler",
        "tree": "Fifth-Degree Droid",
        "class": "Droid",
        "description": "+5 bonus to Strength-based skill checks, and double your carrying capacity",
        "prerequisites": "",
        "source": "TFU 103"
    },
    {
        "name": "Durable",
        "tree": "Fifth-Degree Droid",
        "class": "Droid",
        "description": "The first time during an encounter that you would be moved to the bottom of the condition track by any effect, you instead stop at the -10 step. Additionally, if a single attack causes you to move multiple steps down the condition track, you can spend a Force Point as a reaction to only move -1 step down the condition track.",
        "prerequisites": "",
        "source": "SGtD 27"
    },
    {
        "name": "Environmentally Shielded",
        "tree": "Fifth-Degree Droid",
        "class": "Droid",
        "description": "+5 bonus to Fortitude Defense against environmental hazards",
        "prerequisites": "",
        "source": "TFU 103"
    },
    {
        "name": "Heavy-Duty Actuators",
        "tree": "Fifth-Degree Droid",
        "class": "Droid",
        "description": "You can double your Strength bonus to your melee and unarmed damage rolls. \r\nPrerequisite: Medium or larger size.",
        "prerequisites": "Medium or larger size",
        "source": "SGtD 27"
    },
    {
        "name": "Load Launcher",
        "tree": "Fifth-Degree Droid",
        "class": "Droid",
        "description": "You are considered proficient with improvised thrown weapons (see page 150 of the Saga Edition core rulebook) when making a ranged attack by throwing an object. Objects up to one size category larger than you can be thrown up to a number of squares equal to 2× your Strength bonus (minimum 1 square). Additionally, you add your Strength bonus to any damage dealt.",
        "prerequisites": "",
        "source": "SGtD 27"
    },
    {
        "name": "Power Supply",
        "tree": "Fifth-Degree Droid",
        "class": "Droid",
        "description": "You may act as a power generator, and may recharge shields or reroute power on a vehicle or starship as only two swift actions",
        "prerequisites": "",
        "source": "TFU 103"
    },
    {
        "name": "Task Optimization",
        "tree": "Fifth-Degree Droid",
        "class": "Droid",
        "description": "Select a skill you are trained in. Once per encounter, you can perform any application of that skill as one action quicker than normal but as at least a swift action (for example, a full-round action becomes a standard action , a standard action becomes a move action, a move action becomes a swift action). Tasks requiring more than one round cannot be optimized with this talent.",
        "prerequisites": "",
        "source": "SGtD 28"
    },
    {
        "name": "Outrun",
        "tree": "Blockade Runner",
        "class": "Ace Pilot",
        "description": "Whenever you use all-out movement in your vehicle, you gain a +2 bonus to the ship's Reflex Defense.",
        "prerequisites": "",
        "source": "SaV 25"
    },
    {
        "name": "Punch Through",
        "tree": "Blockade Runner",
        "class": "Ace Pilot",
        "description": "If you are the pilot of a vehicle, smaller vehicles take a -10 penalty on their Pilot checks to engage you in a dogfight.",
        "prerequisites": "",
        "source": "SaV 25"
    },
    {
        "name": "Small Target",
        "tree": "Blockade Runner",
        "class": "Ace Pilot",
        "description": "When you are the pilot of a Colossal or smaller vehicle, capital ship weapons that take a -20 penalty on attack rolls critical on a natural 20 only if the hit would normally have hit your vehicle.",
        "prerequisites": "",
        "source": "SaV 25"
    },
    {
        "name": "Watch This",
        "tree": "Blockade Runner",
        "class": "Ace Pilot",
        "description": "You can move into or through a space occupied by a Colossal (Frigate) or larger ship without causing a collision, and can occupy the same space if your ship is Colossal or smaller.",
        "prerequisites": "",
        "source": "SaV 26"
    },
    {
        "name": "Close Cover",
        "tree": "Blockade Runner",
        "class": "Ace Pilot",
        "description": "If you occupy the same space as a vehicle larger than yours, you gain a +5 cover bonus from it.",
        "prerequisites": "",
        "source": "SaV 25"
    },
    {
        "name": "Blind Spot",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "Make an opposed Pilot check as a swift action to stay in a target's blind spot to gain +2 bonus to attack and inflict a -2 penalty to attacks against you",
        "prerequisites": "",
        "source": "SotG 17"
    },
    {
        "name": "Clip",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "when ramming take damage as though your ship is 2 sizes smaller, rammed ship is normal damage",
        "prerequisites": "",
        "source": "GoI 24"
    },
    {
        "name": "Close Scrape",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "Make a Pilot check against the attack roll total of a critical hit scored against you to avoid taking double damage",
        "prerequisites": "",
        "source": "SotG 17"
    },
    {
        "name": "Elusive Dogfighter",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "Enemy pilots in a dogfight with you take a -10 penalty to attack rolls against you when you succeed in the opposed Pilot check",
        "prerequisites": "",
        "source": "207"
    },
    {
        "name": "Roll Out",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "reroll Pilot to disengage from dogfight, if fail gunners do not take penalties to atk",
        "prerequisites": "",
        "source": "UR 29"
    },
    {
        "name": "Full Throttle",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "You can take 10 on Pilot checks to increase your vehicle's speed, and all-out movement moves you five times your vehicle's speed",
        "prerequisites": "",
        "source": "207"
    },
    {
        "name": "Improved Attack Run",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "You do not have to move in a straight line on an attack run",
        "prerequisites": "",
        "source": "SotG 17"
    },
    {
        "name": "Keep it Together",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "You may ignore moving down the condition track from taking damage above your damage threshold once per encounter",
        "prerequisites": "",
        "source": "207"
    },
    {
        "name": "Master Defender",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "fight defensively = +5 Ref Def & -2 atk or +10 Ref Def & -5 atk",
        "prerequisites": "",
        "source": "GoI 24"
    },
    {
        "name": "Relentless Pursuit",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "You may reroll opposed Pilot checks to initiate a dogfight and keep the better result",
        "prerequisites": "",
        "source": "207"
    },
    {
        "name": "Renowned Pilot",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "All allies within 6 squares of a vehicle you pilot can reroll one Pilot check, keeping the better result.",
        "prerequisites": "",
        "source": "CW 39"
    },
    {
        "name": "Shunt Damage",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "1/enc when your ship takes damage, Pilot vs adjacent ally ship Ref Def to shift damage to ally",
        "prerequisites": "",
        "source": "GoI 24"
    },
    {
        "name": "Vehicle Focus",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "May always take 10 on Pilot checks and gain a +2 to attack rolls with a type of vehicle\r\n\r\n(Enter number of times taken, choose which vehicle to the right)",
        "prerequisites": "",
        "source": "SotG 17"
    },
    {
        "name": "Vehicular Evasion",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "You're vehicle takes half damage from area attacks that hit, no damage from area attacks that miss",
        "prerequisites": "",
        "source": "207"
    },
    {
        "name": "Juke",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "When fighting defensively as the pilot of a vehicle, you can use Vehicular Combat to negate an additional hit per round",
        "prerequisites": "",
        "source": "207"
    },
    {
        "name": "Wingman",
        "tree": "Expert Pilot",
        "class": "Ace Pilot",
        "description": "Make a DC 15 Pilot check as a swift action to give an allied starfighter or airspeeder within 2 squares a +5 bonus to Pilot checks related to dogfighting",
        "prerequisites": "",
        "source": "SotG 17"
    },
    {
        "name": "Expert Gunner",
        "tree": "Gunner",
        "class": "Ace Pilot",
        "description": "+1 bonus on attack rolls made using vehicle weapons",
        "prerequisites": "",
        "source": "207"
    },
    {
        "name": "Dogfight Gunner",
        "tree": "Gunner",
        "class": "Ace Pilot",
        "description": "Take no penalty to attack rolls in dogfights even if you are not the pilot",
        "prerequisites": "",
        "source": "207"
    },
    {
        "name": "Overcharged Shot",
        "tree": "Gunner",
        "class": "Ace Pilot",
        "description": "+1 die dam on next atk in same turn, weapon loses 1 die dam until full round passes",
        "prerequisites": "",
        "source": "UR 29"
    },
    {
        "name": "Quick Trigger",
        "tree": "Gunner",
        "class": "Ace Pilot",
        "description": "Upon an enemy vehicle leaving your square or an adjacent square, you make make a single attack against that vehicle as an attack of opportunity",
        "prerequisites": "",
        "source": "207"
    },
    {
        "name": "Synchronized Fire",
        "tree": "Gunner",
        "class": "Ace Pilot",
        "description": "Once per encounter attack simultaneously with an ally to treat the attack as one hit for determining damage before SR and DR are applied",
        "prerequisites": "",
        "source": "SotG 17"
    },
    {
        "name": "System Hit",
        "tree": "Gunner",
        "class": "Ace Pilot",
        "description": "Upon dealing damage to a vehicle that exceeds its damage threshold, the vehicle moves an additional -1 step down the condition track",
        "prerequisites": "",
        "source": "207"
    },
    {
        "name": "Great Shot",
        "tree": "Gunner",
        "class": "Ace Pilot",
        "description": "Reduce the range category to a target by one when using vehicle weapons",
        "prerequisites": "",
        "source": "SotG 17"
    },
    {
        "name": "Begin Attack Run",
        "tree": "Squadron Leader",
        "class": "Ace Pilot",
        "description": "Designate a target as a swift action to provide a +5 bonus to attack rolls to members in your squadron on an attack run",
        "prerequisites": "",
        "source": "SotG 17"
    },
    {
        "name": "Regroup",
        "tree": "Squadron Leader",
        "class": "Ace Pilot",
        "description": "Once per encounter move all vehicles in your squadron +1 step along the condition track as a standard action",
        "prerequisites": "",
        "source": "SotG 18"
    },
    {
        "name": "Squadron Maneuvers",
        "tree": "Squadron Leader",
        "class": "Ace Pilot",
        "description": "Impart the benefits of an Expert Pilot or Gunner talent you possess to all members of your squadron once per encounter as a standard action",
        "prerequisites": "",
        "source": "SotG 18"
    },
    {
        "name": "Squadron Tactics",
        "tree": "Squadron Leader",
        "class": "Ace Pilot",
        "description": "Once per encounter, upon using a starship maneuver, you grant all members of your squadron the ability to use the same maneuver on their next turn",
        "prerequisites": "",
        "source": "SotG 18"
    },
    {
        "name": "Concentrate All Fire",
        "tree": "Wingman",
        "class": "Ace Pilot",
        "description": "When you use the aid another action to aid an ally's attack roll with a vehicle weapon, if the attack hits, it deals +1 die of damage. Any ally can only benefit from this talent once per attack roll, regardless of how many allies with this talent aid on the attack.",
        "prerequisites": "",
        "source": "RE 40"
    },
    {
        "name": "Escort Pilot",
        "tree": "Wingman",
        "class": "Ace Pilot",
        "description": "As a reaction, you can use the Vehicular Combat feat to negate an attack against an adjacent vehicle of Colossal size or smaller that is piloted by an ally. If you can use Vehicular Combat more than once per round. each use to negate an attack counts toward your limit of uses per round.\r\nPrerequisite: Escort Pilot.",
        "prerequisites": "Escort Pilot",
        "source": "RE 40"
    },
    {
        "name": "Run lnterference",
        "tree": "Wingman",
        "class": "Ace Pilot",
        "description": "When a vehicle that you are piloting is adjacent to a vehicle of Colossal size or smaller that is piloted by an ally, both you and your ally gain a +5 circumstance bonus to Pilot checks to avoid being pulled into a dogfight as an attack of opportunity.",
        "prerequisites": "",
        "source": "RE 40"
    },
    {
        "name": "Wingman Retribution",
        "tree": "Wingman",
        "class": "Ace Pilot",
        "description": "When a vehicle of Colossal size or smaller that is piloted by an ally is damaged by an attack, once per round as a reaction you can make a vehicle weapon attack with a -5 penalty against your ally's attacker.\r\nPrerequisite: Escort Pilot.",
        "prerequisites": "Escort Pilot",
        "source": "RE 40"
    },
    {
        "name": "Lose Pursuit",
        "tree": "Wingman",
        "class": "Ace Pilot",
        "description": "When a vehicle that you are piloting is adjacent to a vehicle of Colossal size or smaller that is piloted by an ally, both vehicles gain a +10 bonus to their damage thresholds.",
        "prerequisites": "",
        "source": "RE 40"
    },
    {
        "name": "Murderous Arts I",
        "tree": "Assassin",
        "class": "Assassin",
        "description": "When a successful attack causes an opponent to move -1 step along the condition track, that opponent immediately takes an additional +1d6 damage.",
        "prerequisites": "",
        "source": "SaV 29"
    },
    {
        "name": "Murderous Arts II",
        "tree": "Assassin",
        "class": "Assassin",
        "description": "Whenever you successfully hit an opponent that you have marked, your melee and ranged attacks deal an additional +1d6 damage.",
        "prerequisites": "",
        "source": "SaV 29"
    },
    {
        "name": "Ruthless",
        "tree": "Assassin",
        "class": "Assassin",
        "description": "Once per encounter, when you drop a foe to 0 hit points or push them to the bottom of the condition track, you can immediately take a bonus standard action.",
        "prerequisites": "",
        "source": "SaV 29"
    },
    {
        "name": "Shift",
        "tree": "Assassin",
        "class": "Assassin",
        "description": "As a move action, you can move 1 square without provoking an attack of opportunity.",
        "prerequisites": "",
        "source": "SaV 29"
    },
    {
        "name": "Advantageous Positioning",
        "tree": "Assassin",
        "class": "Assassin",
        "description": "Any opponent that you are flanking is considered flat-footed and is denied its Dexterity bonus to Reflex Defense against you.",
        "prerequisites": "",
        "source": "SaV 29"
    },
    {
        "name": "Sniping Assassin",
        "tree": "Assassin",
        "class": "Assassin",
        "description": "When you make a ranged attack against a target that is not at point  blank range, you add half your class level to your damage roll.",
        "prerequisites": "",
        "source": "SaV 29"
    },
    {
        "name": "Sniping Marksman",
        "tree": "Assassin",
        "class": "Assassin",
        "description": "Once per encounter, when you make a ranged attack against a target that is not at point blank range, you can ignore your target's armor bonus to Reflex Defense.",
        "prerequisites": "",
        "source": "SaV 29"
    },
    {
        "name": "Deadly Repercussions",
        "tree": "GenoHaradan",
        "class": "Assassin",
        "description": "When you reduce a target to 0 hit points or to the bottom of the condition track, all opponents within line of sight of both you and the target take a -2 on attack rolls until the beginning of your next turn.",
        "prerequisites": "",
        "source": "SaV 29"
    },
    {
        "name": "Manipulating Strike",
        "tree": "GenoHaradan",
        "class": "Assassin",
        "description": "Once per turn when you successfully damage a target with a non-area attack, make an immediate Persuasion check against the target's Will Defense. If successful, you determine what the target does with its swift action on its next turn.",
        "prerequisites": "",
        "source": "SaV 30"
    },
    {
        "name": "Improved Manipulating Strike",
        "tree": "GenoHaradan",
        "class": "Assassin",
        "description": "Whenever you successfully use the Manipulating Strike talent, you determine what the target does with its move action on its next turn.",
        "prerequisites": "",
        "source": "SaV 30"
    },
    {
        "name": "Pulling the Strings",
        "tree": "GenoHaradan",
        "class": "Assassin",
        "description": "As a standard action you can make a Persuasion check against the Will Defense of a target within 12 squares. If successful, you move the target up to half its speed toward you through the safest route and you can make an immediate ranged or melee attack.",
        "prerequisites": "",
        "source": "SaV 30"
    },
    {
        "name": "Detective",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "DC to locate specific person with Gather Info is -10 & bribe amount & time are half",
        "prerequisites": "",
        "source": "GoI 24"
    },
    {
        "name": "Revealing Secrets",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "DC to learn secret info from Gather Info is -10 and bribe cost is one-fifth",
        "prerequisites": "",
        "source": "GoI 25"
    },
    {
        "name": "Familiar Enemies",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "apply familiar foe to 2nd target, spend single full-rnd observing if can see both",
        "prerequisites": "",
        "source": "UR 29"
    },
    {
        "name": "Familiar Situation",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "apply familiar foe to your Fort & Will Def",
        "prerequisites": "",
        "source": "UR 29"
    },
    {
        "name": "Hunter's Mark",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "",
        "prerequisites": "",
        "source": "208"
    },
    {
        "name": "Hunter's Target",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "You gain a bonus to damage rolls against an opponent designated once per encounter as a free action",
        "prerequisites": "",
        "source": "208"
    },
    {
        "name": "Jedi Hunter",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "+1 to Fortitude and Will Defense against Force Sensitive characters, and deal +1 die of damage against them",
        "prerequisites": "",
        "source": "TFU 42"
    },
    {
        "name": "Notorious",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "You can reroll Persuasion checks made to intimidate and keep the better result",
        "prerequisites": "",
        "source": "208"
    },
    {
        "name": "Fearsome",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "Opponents within 6 squares of an equal or lower level take a -1 penalty on attacks against you",
        "prerequisites": "",
        "source": "TFU 42"
    },
    {
        "name": "Ruthless Negotiator",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "You can reroll Persuasion checks made to haggle the price of a bounty and keep the better result",
        "prerequisites": "",
        "source": "208"
    },
    {
        "name": "Nowhere to Hide",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "You can reroll and Gather Information checks to locate a specific individual, but must keep the result of the reroll",
        "prerequisites": "",
        "source": "208"
    },
    {
        "name": "Electronic Trail",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "once you've found a target w/Gather Info, 1/day gain info on target if have network or HoloNet",
        "prerequisites": "",
        "source": "GoI 24"
    },
    {
        "name": "Quick Cuffs",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "w/successful grab can bind target to you or adjacent object, you & target -2 Ref Def while together",
        "prerequisites": "",
        "source": "UR 29"
    },
    {
        "name": "Signature Item",
        "tree": "Bounty Hunter",
        "class": "Bounty Hunter",
        "description": "Gain a +2 morale bonus on opposed skill checks whilst in possession of a signature weapon, suit of armor, vehicle, starship or other item. This bonus increases by 1 for each additional signature item.\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "TFU 42"
    },
    {
        "name": "Force Blank",
        "tree": "Force Hunter",
        "class": "Bounty Hunter",
        "description": "You are especially hard to detect in the Force",
        "prerequisites": "",
        "source": "LE 40"
    },
    {
        "name": "Lightsaber Evasion",
        "tree": "Force Hunter",
        "class": "Bounty Hunter",
        "description": "When an enemy misses you with a lightsaber, move 2 squares as a reaction",
        "prerequisites": "",
        "source": "LE 40"
    },
    {
        "name": "Precision Fire",
        "tree": "Force Hunter",
        "class": "Bounty Hunter",
        "description": "Increase the difficulty of Deflect attempts against your shots by +5",
        "prerequisites": "",
        "source": "LE 40"
    },
    {
        "name": "Steel Mind",
        "tree": "Force Hunter",
        "class": "Bounty Hunter",
        "description": "If you successfully resist a Mind-affecting Force power, you are immune to it for the remainder of the encounter",
        "prerequisites": "",
        "source": "LE 40"
    },
    {
        "name": "Strong-Willed",
        "tree": "Force Hunter",
        "class": "Bounty Hunter",
        "description": "You add your class level to your Will Defense against Mind Trick",
        "prerequisites": "",
        "source": "LE 40"
    },
    {
        "name": "Telekenetic Resistance",
        "tree": "Force Hunter",
        "class": "Bounty Hunter",
        "description": "Whenever you are targeted by a Force power that moves you you only move half the distance",
        "prerequisites": "",
        "source": "LE 40"
    },
    {
        "name": "Findsman Ceremonies",
        "tree": "Gand Findsman",
        "class": "Bounty Hunter",
        "description": "Once per day, you spend 10 minutes performing rituals to enhance your connection to the Force. Spend as many Force points as you want. During the day, you can reroll Perception, Stealth and attack rolls, but take the new result up to Force points spent.",
        "prerequisites": "",
        "source": "SaV 26"
    },
    {
        "name": "Findsman's Foresight",
        "tree": "Gand Findsman",
        "class": "Bounty Hunter",
        "description": "When you make a Perception check to avoid surprise, roll two dice and keep the better result.",
        "prerequisites": "",
        "source": "SaV 26"
    },
    {
        "name": "Omen",
        "tree": "Gand Findsman",
        "class": "Bounty Hunter",
        "description": "Whenever an ally within 10 squares rolls a natural 1 or 20, until the end of your next turn, you gain a +2 insight bonus to either your next attack roll or your Reflex Defense.",
        "prerequisites": "",
        "source": "SaV 26"
    },
    {
        "name": "Target Visions",
        "tree": "Gand Findsman",
        "class": "Bounty Hunter",
        "description": "Once per encounter, when an enemy creature moves within 6 squares of you, you may make a melee or ranged attack against the target as a reaction to their movement.",
        "prerequisites": "",
        "source": "SaV 26"
    },
    {
        "name": "Temporal Awareness",
        "tree": "Gand Findsman",
        "class": "Bounty Hunter",
        "description": "Once per encounter, as a reaction to an enemy's attack, you can move up to your speed.",
        "prerequisites": "",
        "source": "SaV 26"
    },
    {
        "name": "Cunning Distraction",
        "tree": "Trickery",
        "class": "Charlatan",
        "description": "When you successfully feint in combat, you can immediately move up to one-half your speed",
        "prerequisites": "",
        "source": "SaV 31"
    },
    {
        "name": "Damaging Deception",
        "tree": "Trickery",
        "class": "Charlatan",
        "description": "As a standard action, you can make a Deception check against Will Defense of any target within line of sight that can hear, see and understand you. If successful, the next attack made by one of your allies against that target deals 2 extra damage dice",
        "prerequisites": "",
        "source": "SaV 31"
    },
    {
        "name": "Distracting Shout",
        "tree": "Trickery",
        "class": "Charlatan",
        "description": "Once per encounter as a reaction you can make a Deception check to replace the Defense score of your ally with your check",
        "prerequisites": "",
        "source": "SaV 31"
    },
    {
        "name": "Innocuous",
        "tree": "Trickery",
        "class": "Charlatan",
        "description": "As a swift action, you can make a Deception check against an enemy within 6 squares and line of sight against its Will defense to give it a -5 penalty to all attacks made against you until the start of your next turn",
        "prerequisites": "",
        "source": "SaV 31"
    },
    {
        "name": "Improved Soft Cover",
        "tree": "Trickery",
        "class": "Charlatan",
        "description": "While you occupy a sqare adjacent to another creature, you can use a swift action to gain a +2 cover bonus to Reflex Defense until the start of your next turn or until you are no longer adjacent, whichever comes first",
        "prerequisites": "",
        "source": "SaV 31"
    },
    {
        "name": "Competitive Drive",
        "tree": "Corporate Power",
        "class": "Corporate Agent",
        "description": "Reroll any Wisdom-, Intelligence- or Charisma-based skill (except Use the Force) once per encounter",
        "prerequisites": "",
        "source": "KotOR 42"
    },
    {
        "name": "Competitive Edge",
        "tree": "Corporate Power",
        "class": "Corporate Agent",
        "description": "You and a number of allies equal to your Charisma modifier gain Quick Draw for the encounter if you are not surprised",
        "prerequisites": "",
        "source": "KotOR 42"
    },
    {
        "name": "Impose Hesitation",
        "tree": "Corporate Power",
        "class": "Corporate Agent",
        "description": "As a standard action, make a Persuasion check against the Will Defense of all targets in a 6-square cone to deny them a swift action or any full-round actions",
        "prerequisites": "",
        "source": "KotOR 43"
    },
    {
        "name": "Impose Confusion",
        "tree": "Corporate Power",
        "class": "Corporate Agent",
        "description": "Impose Hesitation covers a 12-square cone, and once per encounter the targets are denied their standard action",
        "prerequisites": "",
        "source": "KotOR 43"
    },
    {
        "name": "Willful Resolve",
        "tree": "Corporate Power",
        "class": "Corporate Agent",
        "description": "Once per encounter, negate an attack roll or skill check against you which targets your Will Defense",
        "prerequisites": "",
        "source": "KotOR 43"
    },
    {
        "name": "Wrong Decision",
        "tree": "Corporate Power",
        "class": "Corporate Agent",
        "description": "Enemies who attack you take a -2 penalty to Will Defense until your next turn",
        "prerequisites": "",
        "source": "KotOR 43"
    },
    {
        "name": "Inspire Fear I",
        "tree": "Infamy",
        "class": "Crime Lord",
        "description": "Opponents of equal or inferior level to you take -1 to attack rolls, opposed skill checks and Use the Force checks to activate Force powers against you",
        "prerequisites": "",
        "source": "210"
    },
    {
        "name": "Frighten",
        "tree": "Infamy",
        "class": "Crime Lord",
        "description": "Once per encounter, designate a minion as a free action to spread fear among your enemies. At any point before the end of the encounter, you can activate this ability to force all enemies adjacent to the minion to move 1 square away (does not povoke).",
        "prerequisites": "",
        "source": "SaV 26"
    },
    {
        "name": "Inspire Fear II",
        "tree": "Infamy",
        "class": "Crime Lord",
        "description": "Opponents of equal or inferior level to you take -2 to attack rolls, opposed skill checks and Use the Force checks to activate Force powers against you",
        "prerequisites": "",
        "source": "210"
    },
    {
        "name": "Notorious",
        "tree": "Infamy",
        "class": "Crime Lord",
        "description": "You can reroll Persuasion checks made to intimidate and keep the better result",
        "prerequisites": "",
        "source": "208"
    },
    {
        "name": "Master Manipulator",
        "tree": "Infamy",
        "class": "Crime Lord",
        "description": "w/successful persuasion check make  2nd Persuasion of any type",
        "prerequisites": "",
        "source": "UR 29"
    },
    {
        "name": "Shared Notoriety",
        "tree": "Infamy",
        "class": "Crime Lord",
        "description": "Your minions can reroll Persuasion checks made to intimidate, but must keep the result of the reroll",
        "prerequisites": "",
        "source": "210"
    },
    {
        "name": "Small Favor",
        "tree": "Infamy",
        "class": "Crime Lord",
        "description": "1/day DC25 Persuasion for informant info for +10 1 Gather Info or Knowledge w/in next 24 hours",
        "prerequisites": "",
        "source": "UR 29"
    },
    {
        "name": "Unsavory Reputation",
        "tree": "Infamy",
        "class": "Crime Lord",
        "description": "Any opponent that is reduced to half hit points or less within 6 squares of you takes a -2 penalty on all attack rolls and skill checks for the duration of the encounter.",
        "prerequisites": "",
        "source": "SaV 27"
    },
    {
        "name": "Attract Minion",
        "tree": "Mastermind",
        "class": "Crime Lord",
        "description": "You gain a nonheroic minion of three-quarters your character level, rounded down.\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "210"
    },
    {
        "name": "Shelter",
        "tree": "Mastermind",
        "class": "Crime Lord",
        "description": "Whenever you are adjacent to a minion, you gain a +2 cover bonus to your Reflex Defense",
        "prerequisites": "",
        "source": "SaV 27"
    },
    {
        "name": "Wealth of Allies",
        "tree": "Mastermind",
        "class": "Crime Lord",
        "description": "Whenever one of your minions is killed, he or she is replaced by another minion of the same level. This replacement occurs 24 hours later.",
        "prerequisites": "",
        "source": "SaV 27"
    },
    {
        "name": "Bodyguard I",
        "tree": "Mastermind",
        "class": "Crime Lord",
        "description": "Whenever you are adjacent to a minion gained with the Attract Minion talent, once per turn as a reaction to being attacked, you can redirect the attack against the minion.",
        "prerequisites": "",
        "source": "SaV 27"
    },
    {
        "name": "Bodyguard II",
        "tree": "Mastermind",
        "class": "Crime Lord",
        "description": "When you redirect an attack to a minion using the Bodyguard I talent, that minion's relevant defense score gains a bonus equal to half your class level.",
        "prerequisites": "",
        "source": "SaV 27"
    },
    {
        "name": "Contingency Plan",
        "tree": "Mastermind",
        "class": "Crime Lord",
        "description": "1/enc move your speed when you fail an attack, skill, or opposed check",
        "prerequisites": "",
        "source": "GoI 25"
    },
    {
        "name": "Impel Ally I",
        "tree": "Mastermind",
        "class": "Crime Lord",
        "description": "Grant an ally the chance to move its normal speed immediately, activated as a swift action",
        "prerequisites": "",
        "source": "210"
    },
    {
        "name": "Impel Ally II",
        "tree": "Mastermind",
        "class": "Crime Lord",
        "description": "Grant an ally the chance to take a move or standard action immediately, activated as a swift action",
        "prerequisites": "",
        "source": "210"
    },
    {
        "name": "Inspire Wrath",
        "tree": "Mastermind",
        "class": "Crime Lord",
        "description": "As a standard action, designate a target to be the object of your allies' wrath. While your allies have line of sight and you are conscious, they gain a +2 morale bonus on attack rolls and skill checks made against the target.",
        "prerequisites": "",
        "source": "SaV 27"
    },
    {
        "name": "Tactical Superiority",
        "tree": "Mastermind",
        "class": "Crime Lord",
        "description": "Spend two swift actions to select two allies. Each ally can move 2 squares as a reaction without provoking attacks of opportunity.",
        "prerequisites": "",
        "source": "SaV 27"
    },
    {
        "name": "Tactical Withdraw",
        "tree": "Mastermind",
        "class": "Crime Lord",
        "description": "Spend two swift actions to grant all allies in line of sight and 6 squares of you to use the withdraw action as a swift action. This  lasts until the start of your next turn",
        "prerequisites": "",
        "source": "SaV 27"
    },
    {
        "name": "Automated Strike",
        "tree": "Droid Commander",
        "class": "Droid Commander",
        "description": "As a swift action, you can make a DC 15 Knowledge (tactics) check. If successful, all droid allies able to hear and understand you gain the benefits of the Double Attack feat for one weapon group until the end of your next turn.",
        "prerequisites": "",
        "source": "CW 43"
    },
    {
        "name": "Droid Defense",
        "tree": "Droid Commander",
        "class": "Droid Commander",
        "description": "As a standard action, you can transmit tactical information to all droid allies that can hear and understand you, granting them a bonus equal to your Intelligence modifier to one of their defenses (your choice) until the beginning of your next turn.",
        "prerequisites": "",
        "source": "CW 43"
    },
    {
        "name": "Droid Mettle",
        "tree": "Droid Commander",
        "class": "Droid Commander",
        "description": "As a swift action once per turn, you can designate a single droid ally within your line of sight. That droid ally gains bonus hit points equal to 10 + your class level.",
        "prerequisites": "",
        "source": "CW 43"
    },
    {
        "name": "Overclocked Troops",
        "tree": "Droid Commander",
        "class": "Droid Commander",
        "description": "You push the limits of the droids under your command. You can spend a swift action once per turn to allow each of your net¬worked allies (see the Networked Mind class feature below) to immediately move up to their speed.",
        "prerequisites": "",
        "source": "CW 44"
    },
    {
        "name": "Reinforced Commands",
        "tree": "Droid Commander",
        "class": "Droid Commander",
        "description": "When you use an ability that grants a droid ally a morale or insight bonus, increase the value of that bonus by 1.",
        "prerequisites": "",
        "source": "CW 44"
    },
    {
        "name": "Expanded Sensors",
        "tree": "Droid Commander",
        "class": "Droid Commander",
        "description": "If you or any of your droid allies has line of sight to and is aware of a target, all droid allies that can hear and understand you are also considered to have line of sight (but not necessarily line of effect) to that target.",
        "prerequisites": "",
        "source": "CW 43"
    },
    {
        "name": "Inspire Competence",
        "tree": "Droid Commander",
        "class": "Droid Commander",
        "description": "As a swift action once per turn, you can grant one droid ally within your line of sight a competence bonus on its next attack roll made before the start of your next turn equal to half your class level.",
        "prerequisites": "",
        "source": "CW 44"
    },
    {
        "name": "Maintain Focus",
        "tree": "Droid Commander",
        "class": "Droid Commander",
        "description": "As a swift action once per turn, you can grant all droid allies within your line of sight the ability to take the Recover action as two swift actions (instead of as three swift actions) until the start of your next turn.",
        "prerequisites": "",
        "source": "CW 44"
    },
    {
        "name": "Directed Action",
        "tree": "Override",
        "class": "Droid Commander",
        "description": "As a standard action, you allow one droid that can hear and understand you to make a Deception, Mechanics, Persuasion, Pilot, Ride, Treat Injury, or Use Computer check immediately as a free action. The droid can replace its relevant ability score modifier for that check with your Intelligence modifier.",
        "prerequisites": "",
        "source": "SGtD 28"
    },
    {
        "name": "Full Control",
        "tree": "Override",
        "class": "Droid Commander",
        "description": "As a full-round action, you allow one droid that can hear and understand you to take the full attack action. The droid can replace its relevant ability score modifier to any attack rolls it makes with your Intelligence modifier. Prerequisites: Directed Action, Directed Movement, and Remote Attack.",
        "prerequisites": "Directed Action, Directed Movement, and Remote Attack",
        "source": "SGtD 28"
    },
    {
        "name": "Directed Movement",
        "tree": "Override",
        "class": "Droid Commander",
        "description": "As a move action, you allow one droid that can hear and understand you to move up to its speed. The droid can make Acrobatics, Climb, Jump, Stealth, or Swim checks during this movement, and can replace its own relevant ability score modifier for that check with your Intelligence modifier.",
        "prerequisites": "",
        "source": "SGtD 28"
    },
    {
        "name": "Remote Attack",
        "tree": "Override",
        "class": "Droid Commander",
        "description": "As a standard action, you allow one droid that can hear and understand you to make a melee or ranged attack. The droid can replace its relevant ability score modifier to its attack roll with your Intelligence modifier.",
        "prerequisites": "",
        "source": "SGtD 28"
    },
    {
        "name": "Extended Critical Range (heavy weapons)",
        "tree": "Critical Master",
        "class": "Elite Trooper",
        "description": "Increase the critical range of heavy weapons by 1",
        "prerequisites": "",
        "source": "TFU 42"
    },
    {
        "name": "Extended Critical Range (rifles)",
        "tree": "Critical Master",
        "class": "Elite Trooper",
        "description": "Increase the critical range of rifles by 1",
        "prerequisites": "",
        "source": "TFU 42"
    },
    {
        "name": "Extended Critical Range (simple weapons)",
        "tree": "Critical Master",
        "class": "Elite Trooper",
        "description": "weapon's crit range extended by 1",
        "prerequisites": "",
        "source": "UR 30"
    },
    {
        "name": "Flurry Attack",
        "tree": "Critical Master",
        "class": "Elite Trooper",
        "description": "Upon scoring a critical hit, make an extra attack against a single target within range\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "TFU 42"
    },
    {
        "name": "Knockback",
        "tree": "Critical Master",
        "class": "Elite Trooper",
        "description": "Upon scoring a critical hit against a target up to two sizes larger than you, you may move them one square in any direction",
        "prerequisites": "",
        "source": "TFU 42"
    },
    {
        "name": "Reduce Defense",
        "tree": "Critical Master",
        "class": "Elite Trooper",
        "description": "Upon scoring a critical hit with a melee or ranged attack, you inflict a -2 penalty to the target's Reflex Defense until they regain full hit points",
        "prerequisites": "",
        "source": "TFU 42"
    },
    {
        "name": "Reduce Mobility",
        "tree": "Critical Master",
        "class": "Elite Trooper",
        "description": "Upon scoring a critical hit with a melee or ranged attack, you halve your target's speed until they regain full hit points",
        "prerequisites": "",
        "source": "TFU 42"
    },
    {
        "name": "Deny Move",
        "tree": "Critical Master",
        "class": "Elite Trooper",
        "description": "Upon scoring a critical hit with a melee or ranged attack, you immobilise your target for their next turn",
        "prerequisites": "",
        "source": "TFU 42"
    },
    {
        "name": "Mandalorian Advance",
        "tree": "Mandalorian Warrior",
        "class": "Elite Trooper",
        "description": "Once per encounter, move your speed as a free action before any other action on your turn",
        "prerequisites": "",
        "source": "KotOR 38"
    },
    {
        "name": "Mandalorian Ferocity",
        "tree": "Mandalorian Warrior",
        "class": "Elite Trooper",
        "description": "Once per encounter, when making more than one attack in a round, add one damage die to each successful hit\r\n\r\n(Enter number of times taken, select weapon to the right)",
        "prerequisites": "",
        "source": "KotOR 38"
    },
    {
        "name": "Mandalorian Glory",
        "tree": "Mandalorian Warrior",
        "class": "Elite Trooper",
        "description": "Once per encounter, upon reducing an opponent's hit points to 0, gain +5 to your next attack during the same encounter",
        "prerequisites": "",
        "source": "KotOR 38"
    },
    {
        "name": "Armored Mandalorian",
        "tree": "Mandalorian Warrior",
        "class": "Elite Trooper",
        "description": "Add your Fortitude Defense bonus from armor to your Elite Trooper DR, which is not ignored by lightsabers given that you are wearing lightsaber-resistant materials",
        "prerequisites": "",
        "source": "KotOR 38"
    },
    {
        "name": "Teräs Käsi Basics",
        "tree": "Master of Teräs Käsi",
        "class": "Elite Trooper",
        "description": "Deal an extra die of damage with unarmed attacks",
        "prerequisites": "",
        "source": "TotG 53"
    },
    {
        "name": "Ignore Damage Reduction",
        "tree": "Master of Teräs Käsi",
        "class": "Elite Trooper",
        "description": "Ignore DR completely if your unarmed attack exceeds the DR",
        "prerequisites": "",
        "source": "TotG 53"
    },
    {
        "name": "Teräs Käsi Mastery",
        "tree": "Master of Teräs Käsi",
        "class": "Elite Trooper",
        "description": "Take an unarmed full attack action as a standard action",
        "prerequisites": "",
        "source": "TotG 53"
    },
    {
        "name": "Unarmed Parry",
        "tree": "Master of Teräs Käsi",
        "class": "Elite Trooper",
        "description": "As a reaction whilst fighting defensively, negate incoming melee attacks with an opposed unarmed attack roll, with a cumulative -2 to all attack rolls made since the beginning of your last turn",
        "prerequisites": "",
        "source": "TotG 53"
    },
    {
        "name": "Acurate Blow",
        "tree": "Melee Specialist",
        "class": "Elite Trooper",
        "description": "When you make a melee attack with a weapon from the chosen group and the attack roll exceeds the target's Reflex Defense by 5 or more, you deal +1 die of damage with the attack.\r\n\r\n(Enter times taken)",
        "prerequisites": "",
        "source": "CW 39"
    },
    {
        "name": "Close-Quarters Fighter",
        "tree": "Melee Specialist",
        "class": "Elite Trooper",
        "description": "Whenever you occupy the same square as your target or are adjacent to your target, you gain a +1 circumstance bonus to your melee attack rolls against that target.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Ignore Armor",
        "tree": "Melee Specialist",
        "class": "Elite Trooper",
        "description": "Once per encounter, when you make a melee attack, you can ignore any armor or equipment bonuses granted by your target's armor.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Improved Stunning Strike",
        "tree": "Melee Specialist",
        "class": "Elite Trooper",
        "description": "When you damage an opponent with a melee attack that moves the target down the condition track, the target cannot take any action requiring a standard or full-round action on its next turn.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Whirling Death",
        "tree": "Melee Specialist",
        "class": "Elite Trooper",
        "description": "You twirl your weapon around you in a blur, creating a circle of death around you. Any enemy target that begins its turn adjacent to you takes damage equal to your Strength bonus. You must be wielding a melee weapon to use this talent.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Bodyguard's Sacrifice",
        "tree": "Protection",
        "class": "Elite Trooper",
        "description": "Once per turn take some or all of the damage against an adjacent ally",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Lifesaver",
        "tree": "Protection",
        "class": "Elite Trooper",
        "description": "1/encounter as a reaction move up to your speed and take damage instead of an ally",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Out of Harm's Way",
        "tree": "Protection",
        "class": "Elite Trooper",
        "description": "Allow ally within 6 squares to move to your side as a move action",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Take the Hit",
        "tree": "Protection",
        "class": "Elite Trooper",
        "description": "Whenever you take damage for an ally, your Damage Threshold is 5 higher",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Ward",
        "tree": "Protection",
        "class": "Elite Trooper",
        "description": "Designated ally treats your proximity as soft cover",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Armored Guard",
        "tree": "Protection",
        "class": "Elite Trooper",
        "description": "Ward's cover bonus to Reflex Defense is increased by half your armour bonus",
        "prerequisites": "",
        "source": "LE 40"
    },
    {
        "name": "Guard's Entrance",
        "tree": "Protection",
        "class": "Elite Trooper",
        "description": "Every round you begin adjacent to your ward you gain your character level in bonus hit points",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Ambush",
        "tree": "Republican Commando",
        "class": "Elite Trooper",
        "description": "When you successfully hit an opponent that has not yet acted in combat, you deal +2 dice of damage with the attack.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Higher Yield",
        "tree": "Republican Commando",
        "class": "Elite Trooper",
        "description": "Once per encounter, you can choose to deal +1 die of damage with a single grenade or other explosive.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Rapid Reload",
        "tree": "Republican Commando",
        "class": "Elite Trooper",
        "description": "You can retrieve a stored energy cell and reload your weapon as a single swift action.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Shoulder to Shoulder",
        "tree": "Republican Commando",
        "class": "Elite Trooper",
        "description": "Whenever you begin your turn adjacent to an ally, you gain a number of bonus hit points equal to your heroic level.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Strength in Numbers",
        "tree": "Republican Commando",
        "class": "Elite Trooper",
        "description": "If you are within 10 squares of an ally, you can add +2 to your DR.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Weapon Shift",
        "tree": "Republican Commando",
        "class": "Elite Trooper",
        "description": "If you use a ranged weapon as amelee weapon (as with the Gun Club talent), you gain a +2 bonus to melee attack rolls with that weapon.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Fall Back",
        "tree": "Squad Leader",
        "class": "Elite Trooper",
        "description": "As a move action, you can enable each member of your squad to immediately move two squares. This movement does not provoke an attack of opportunity. Prerequisite: Charisma 13.",
        "prerequisites": "Charisma 13",
        "source": "GAW 31"
    },
    {
        "name": "Form Up",
        "tree": "Squad Leader",
        "class": "Elite Trooper",
        "description": "As a move action, you give all squad members a +2 morale bonus to their Reflex Defense until the end of your next turn, as long as they are within 6 squares of another squad member. Prerequisites: Charisma 13.",
        "prerequisites": "Charisma 13",
        "source": "GAW 31"
    },
    {
        "name": "Full Advance",
        "tree": "Squad Leader",
        "class": "Elite Trooper",
        "description": "As a move action, you give all squad membered +2 morale bonus to damage rolls until the end of your next turn. Prerequisite: Charisma 13.",
        "prerequisites": "Charisma 13",
        "source": "GAW 31"
    },
    {
        "name": "Hold Steady",
        "tree": "Squad Leader",
        "class": "Elite Trooper",
        "description": "Once per encounter, as a standard action. you move all members of your squad +1 step on the condition track. Prerequisite: Charisma 13.",
        "prerequisites": "Charisma 13",
        "source": "GAW 31"
    },
    {
        "name": "Search and Destroy",
        "tree": "Squad Leader",
        "class": "Elite Trooper",
        "description": "As a move action. you give all squad members a +2 morale bonus to Perception checks until the end of your next turn. Prerequisite: Charisma 13.",
        "prerequisites": "Charisma 13",
        "source": "GAW 31"
    },
    {
        "name": "Controlled Burst",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "Autofire and Burst Fire attack penalties are reduced to -2, and braced autofire has no penalty to your attack roll",
        "prerequisites": "",
        "source": "212"
    },
    {
        "name": "Ferocious Assault",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "Once per encounter. when making an autogiro attack, you can treat the attack as a 6 square cone. Making this attack consumes 20 shots from the weapon's power pack. Prerequisites: Base attack bonus +12, Controlled Burst.",
        "prerequisites": "Base attack bonus +12, Controlled Burst",
        "source": "GAW 30"
    },
    {
        "name": "Exotic Weapon Mastery",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "You are proficient with any exotic weapon",
        "prerequisites": "",
        "source": "212"
    },
    {
        "name": "Extended Threat",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "threaten all squares w/in 2sq radius w/ranged weapon eligible for Atk of Opp",
        "prerequisites": "",
        "source": "UR 30"
    },
    {
        "name": "Greater Weapon Focus",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "+1 bonus to attack rolls\r\n\r\n(Enter number of times taken, choose which weapon on the Talents 2 tab)",
        "prerequisites": "",
        "source": "212"
    },
    {
        "name": "Greater Devastating Attack",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "Treat your opponents damage threshold as if it were 10 points lower when you make a successful attack\r\n\r\n(Enter number of times taken, choose which weapon on the Talents 2 tab)",
        "prerequisites": "",
        "source": "212"
    },
    {
        "name": "Greater Penetrating Attack",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "Treat your opponents damage reduction as if it were 10 points lower when you make a successful attack\r\n\r\n(Enter number of times taken, choose which weapon on the Talents 2 tab)",
        "prerequisites": "",
        "source": "212"
    },
    {
        "name": "Greater Weapon Specialization",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "+2 bonus to damage\r\n\r\n(Enter number of times taken, choose which weapon on the Talents 2 tab)",
        "prerequisites": "",
        "source": "212"
    },
    {
        "name": "Multiattack Proficiency (heavy weapons)",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "Reduce penalty to attack rolls when making multiple attacks with heavy weapons by 2\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "212"
    },
    {
        "name": "Multiattack Proficiency (rifles)",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "Reduce penalty to attack rolls when making multiple attacks with rifles by 2\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "212"
    },
    {
        "name": "Multiattack Proficiency (simple weapons)",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "reduce Atk penalty by 2",
        "prerequisites": "",
        "source": "UR 30"
    },
    {
        "name": "Two-For-One Throw",
        "tree": "Weapon Master",
        "class": "Elite Trooper",
        "description": "throw 2 weapons at same enemy or target sq w/one hand, separate atks -10 & weapons must be similar, range = 8sq",
        "prerequisites": "",
        "source": "UR 30"
    },
    {
        "name": "Cover Bracing",
        "tree": "Enforcement",
        "class": "Enforcer",
        "description": "Brace an autofire weapon with a single swift action",
        "prerequisites": "",
        "source": "TFU 45"
    },
    {
        "name": "Intentional Crash",
        "tree": "Enforcement",
        "class": "Enforcer",
        "description": "Your vehicle takes half damage when you successfully ram another vehicle, and that vehicle is immobilized for one round",
        "prerequisites": "",
        "source": "TFU 45"
    },
    {
        "name": "Nonlethal Tactics",
        "tree": "Enforcement",
        "class": "Enforcer",
        "description": "Gain +1 to attack and deal +1 die of damage with stun weapons",
        "prerequisites": "",
        "source": "TFU 45"
    },
    {
        "name": "Pursuit",
        "tree": "Enforcement",
        "class": "Enforcer",
        "description": "You can reroll Endurance checks and keep the better result when running, and may run not in a straight line",
        "prerequisites": "",
        "source": "TFU 45"
    },
    {
        "name": "Respected Officer",
        "tree": "Enforcement",
        "class": "Enforcer",
        "description": "Indifferent characters are friendly to you with no check required",
        "prerequisites": "",
        "source": "TFU 45"
    },
    {
        "name": "Slowing Stun",
        "tree": "Enforcement",
        "class": "Enforcer",
        "description": "When you move a target down the condtion track with an attack, its speed is halved until it has removed all conditions",
        "prerequisites": "",
        "source": "TFU 45"
    },
    {
        "name": "Takedown",
        "tree": "Enforcement",
        "class": "Enforcer",
        "description": "Upon dealing damage at the end of a charge, your target is knocked prone",
        "prerequisites": "",
        "source": "TFU 45"
    },
    {
        "name": "Charm Beast",
        "tree": "Beastwarden",
        "class": "Force Adept",
        "description": "UseForce replaces Persuasion w/animal Int 2 or less, -5 if animal doesn't understand doesn't apply",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Bonded Mount",
        "tree": "Beastwarden",
        "class": "Force Adept",
        "description": "mount shares an empathic link, when you ride your mount has your Ref & Will Def, you gain senses",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Entreat Beast",
        "tree": "Beastwarden",
        "class": "Force Adept",
        "description": "Use the Force v. Will Def of indifferent or better beast to perform a minor task within 30 sq, see J18",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Soothing Presence",
        "tree": "Beastwarden",
        "class": "Force Adept",
        "description": "shift unfriendly beast to indifferent automatically",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Wild Sense",
        "tree": "Beastwarden",
        "class": "Force Adept",
        "description": "1/turn touch mind of indifferent or better beast w/in 12 sq & LOS, beast's Perception & LOS is yours",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Channel Aggression",
        "tree": "Dark Side Devotee",
        "class": "Force Adept",
        "description": "Spend a Force Point as a free action to deal 1d6 per class level extra damage to a target denied its Dexterity bonus to Reflex Defense or being flanked",
        "prerequisites": "",
        "source": "213"
    },
    {
        "name": "Channel Anger",
        "tree": "Dark Side Devotee",
        "class": "Force Adept",
        "description": "Spend a Force Point as a swift action to gain a +2 bonus to melee attack and damage rolls for a number of rounds equal to 5 + your Constitution modifer, then move -1 step along the condition track",
        "prerequisites": "",
        "source": "213"
    },
    {
        "name": "Crippling Strike",
        "tree": "Dark Side Devotee",
        "class": "Force Adept",
        "description": "Upon scoring a critical hit, you may spend a Force Point to halve the targets speed until fully healed",
        "prerequisites": "",
        "source": "213"
    },
    {
        "name": "Dark Side Talisman",
        "tree": "Dark Side Devotee",
        "class": "Force Adept",
        "description": "+2 on one Defense against light-side powers",
        "prerequisites": "",
        "source": "JATM 17"
    },
    {
        "name": "Greater Dark Side Talisman",
        "tree": "Dark Side Devotee",
        "class": "Force Adept",
        "description": "+2 on all Defenses against light-side powers",
        "prerequisites": "",
        "source": "JATM 17"
    },
    {
        "name": "Force Power Adept",
        "tree": "Force Adept",
        "class": "Force Adept",
        "description": "You may reroll Use the Force checks to activate a particular Force Power by spending a Force Point and keep the better result\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "214"
    },
    {
        "name": "Force Treatment",
        "tree": "Force Adept",
        "class": "Force Adept",
        "description": "Treat Injury checks can be made with Use the Force, and Treat Injury is considered a trained skill, and you can administer first aid, treat disease, treat poison and treat radiation without a medical kit or medpac",
        "prerequisites": "",
        "source": "214"
    },
    {
        "name": "Fortified Body",
        "tree": "Force Adept",
        "class": "Force Adept",
        "description": "You are immune to disease, poison and radiation",
        "prerequisites": "",
        "source": "214"
    },
    {
        "name": "Instrument of the Force",
        "tree": "Force Adept",
        "class": "Force Adept",
        "description": "when successfully Search Your Feelings gain FP & use before end of enc, if use w/unfavorable gain Dark Side Point, if use & gain Dark Side Point gain 2 points",
        "prerequisites": "",
        "source": "UR 30"
    },
    {
        "name": "Mystical Link",
        "tree": "Force Adept",
        "class": "Force Adept",
        "description": "DC30 UtF for 1 benefit as decided by GM: 1. Force power returned, 2. 1 FP for use before end of enc, 3. +1 use of Force-related talent or feat, 4. roll +1 die w/Force check & select highest die rolled",
        "prerequisites": "",
        "source": "UR 30"
    },
    {
        "name": "Long Call",
        "tree": "Force Adept",
        "class": "Force Adept",
        "description": "reduce DC for telepathy by half w/willing, reroll w/unwilling & keep better, FP = # of targets = Cha mod (min 2) w/single UtF check",
        "prerequisites": "",
        "source": "UR 30"
    },
    {
        "name": "Attune Weapon",
        "tree": "Force Item",
        "class": "Force Adept",
        "description": "Spend a Force Point to gain a +1 bonus to attack rolls with a melee weapon, activated as a full-round action",
        "prerequisites": "",
        "source": "214"
    },
    {
        "name": "Empower Weapon",
        "tree": "Force Item",
        "class": "Force Adept",
        "description": "Spend a Force Point to gain a +1 die of damage with a melee weapon, activated as a full-round action",
        "prerequisites": "",
        "source": "214"
    },
    {
        "name": "Force Throw",
        "tree": "Force Item",
        "class": "Force Adept",
        "description": "You can throw a simple or advanced melee weapon as a standard action, which can become embedded in the target if it deals piercing or slashing damage",
        "prerequisites": "",
        "source": "KotOR 38"
    },
    {
        "name": "Primitive Block",
        "tree": "Force Item",
        "class": "Force Adept",
        "description": "Make a Use the Force check as a reaction to negate a melee attack roll against you, or provide you with cover against Whirlwind Attack, with a cumulative penalty of -5 each time Primitive Block has been used since your last turn",
        "prerequisites": "",
        "source": "KotOR 38"
    },
    {
        "name": "Force Talisman",
        "tree": "Force Item",
        "class": "Force Adept",
        "description": "Spend a Force Point to gain a +1 bonus to one of your defenses whilst wearing or carrying a talisman, activated as a full-round action",
        "prerequisites": "",
        "source": "214"
    },
    {
        "name": "Focused Force Talisman",
        "tree": "Force Item",
        "class": "Force Adept",
        "description": "When you create a Force talisman, you can select a single Force power from your Force suite. Whenever you are wearing this talisman and activate the selected Force power, you can spend a Force Point to immediately regain that spent power.",
        "prerequisites": "",
        "source": "CW 40"
    },
    {
        "name": "Greater Force Talisman",
        "tree": "Force Item",
        "class": "Force Adept",
        "description": "Your Force Talisman provides a +1 bonus to all of your defenses",
        "prerequisites": "",
        "source": "214"
    },
    {
        "name": "Force Interrogation",
        "tree": "Imperial Inquisitor",
        "class": "Force Adept",
        "description": "Upon dealing damage to a target with a Force power, make a Persuasion check to intimidate as a free action",
        "prerequisites": "",
        "source": "TFU 43"
    },
    {
        "name": "Cower Enemies",
        "tree": "Imperial Inquisitor",
        "class": "Force Adept",
        "description": "Persuasion checks to intimidate can be made against all targets within a 6-square cone",
        "prerequisites": "",
        "source": "TFU 42"
    },
    {
        "name": "Unsettling Presence",
        "tree": "Imperial Inquisitor",
        "class": "Force Adept",
        "description": "Spend a Force Point to make a Use the Force check against the Will Defense of all creatures within 6 squares to inflict a -2 penalty to attack rolls and skill checks for the rest of the encounter",
        "prerequisites": "",
        "source": "TFU 43"
    },
    {
        "name": "Inquisition",
        "tree": "Imperial Inquisitor",
        "class": "Force Adept",
        "description": "Gain +1 to attack rolls and deal +1 die of damage against targets with Force Sensitivity",
        "prerequisites": "",
        "source": "TFU 43"
    },
    {
        "name": "Channel Vitality",
        "tree": "Mystic",
        "class": "Force Adept",
        "description": "Move -1 step down track to gain 1 Force Point until the end of your turn",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Closed Mind",
        "tree": "Mystic",
        "class": "Force Adept",
        "description": "Mind-affecting effects must be rolled twice against you taking the lower result",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Esoteric Technique",
        "tree": "Mystic",
        "class": "Force Adept",
        "description": "When you spend a Force Point to activate a technique or secret you gain hp equal to 10 + your class level",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Mystic Mastery",
        "tree": "Mystic",
        "class": "Force Adept",
        "description": "When you gain a level you get bonus Force Points equal to a number of Force Talents (6 max)",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Regimen Mastery",
        "tree": "Mystic",
        "class": "Force Adept",
        "description": "+5 bonus on skill checks made to perform a Force Regimen",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Mind Probe",
        "tree": "Telepath",
        "class": "Force Adept",
        "description": "Whilst touching a creature with an Intelligence of 3 or higher, you can make a Use the Force check versus its Will Defense to use Gather Information on an unwilling target",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Perfect Telepathy",
        "tree": "Telepath",
        "class": "Force Adept",
        "description": "You can communicate in full sentences and complete thoughts, subject no change",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Psychic Citadel",
        "tree": "Telepath",
        "class": "Force Adept",
        "description": "You gain a bonus to your Will Defefense equal to your class level",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Psychic Defenses",
        "tree": "Telepath",
        "class": "Force Adept",
        "description": "When you are targeted by mind-affecting powers, your opponent automatically takes 1d6 damage",
        "prerequisites": "",
        "source": "JATM 18"
    },
    {
        "name": "Telepathic Intruder",
        "tree": "Telepath",
        "class": "Force Adept",
        "description": "Whenever you use a Force Power with the [Mind-Affecting] descriptor successfully against a target, until the end of your next turn you gain a +2 Force bonus on Skill Checks made to activate [Mind-Affecting] Force Powers and Force Talents against that same target.",
        "prerequisites": "",
        "source": "JATM 19"
    },
    {
        "name": "Brutal Attack",
        "tree": "Gladiatorial Combat",
        "class": "Gladiator",
        "description": "Upon dealing damage that exceeds an opponent's damage threshold, deal an additional die of damage\r\n\r\n(Enter number of times taken, select weapon to the right)",
        "prerequisites": "",
        "source": "KotOR 44"
    },
    {
        "name": "Distracting Attack",
        "tree": "Gladiatorial Combat",
        "class": "Gladiator",
        "description": "If an attack which deals damage to a target also exceeds their Will Defense, they take a -2 penalty to Reflex Defense until your next turn",
        "prerequisites": "",
        "source": "KotOR 44"
    },
    {
        "name": "Exotic Weapons Master",
        "tree": "Gladiatorial Combat",
        "class": "Gladiator",
        "description": "Any feats or talents affecting any exotic weapon affect all exotic weapons",
        "prerequisites": "",
        "source": "KotOR 44"
    },
    {
        "name": "Multiattack Proficiency (exotic weapons)",
        "tree": "Gladiatorial Combat",
        "class": "Gladiator",
        "description": "Reduce penalty to attack rolls when making multiple attacks with exotic weapons by 2\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "KotOR 45"
    },
    {
        "name": "Lockdown Strike",
        "tree": "Gladiatorial Combat",
        "class": "Gladiator",
        "description": "If you hit with an attack of opportunity, the target's movement ends instantly",
        "prerequisites": "",
        "source": "KotOR 44"
    },
    {
        "name": "Personal Vendetta",
        "tree": "Gladiatorial Combat",
        "class": "Gladiator",
        "description": "As a swift action, taunt all enemies within line of sight and 12 squares to give them a -2 penalty to attack rolls against any target other than you",
        "prerequisites": "",
        "source": "KotOR 45"
    },
    {
        "name": "Call Out",
        "tree": "Gladiatorial Combat",
        "class": "Gladiator",
        "description": "One target of Personal Vendetta takes a -5 penalty when attacking targets other than you",
        "prerequisites": "",
        "source": "KotOR 44"
    },
    {
        "name": "Unstoppable",
        "tree": "Gladiatorial Combat",
        "class": "Gladiator",
        "description": "Once per encounter, reduce the number of steps you are knocked down the condition track by one",
        "prerequisites": "",
        "source": "KotOR 45"
    },
    {
        "name": "Blowback",
        "tree": "Carbineer",
        "class": "Gunslinger",
        "description": "When you exceed an enemy's threshold with rifle, push the target 1 square away",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Close Contact",
        "tree": "Carbineer",
        "class": "Gunslinger",
        "description": "Point blank of any rifle you use is 5 squares greater",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Keep Them Honest",
        "tree": "Carbineer",
        "class": "Gunslinger",
        "description": "When using the aid another action to suppress an enemy (see page 151 of the saga Edition core rulebook), the enemy instead takes a -5 penalty to aII attack rolls until the end of your next turn. Prerequisite: Careful Shot feat.",
        "prerequisites": "Careful Shot feat",
        "source": "GAW 31"
    },
    {
        "name": "Multiattack Proficiency (rifles)",
        "tree": "Carbineer",
        "class": "Gunslinger",
        "description": "Reduce multiattack penalty of rifles by 2",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Old Faithful",
        "tree": "Carbineer",
        "class": "Gunslinger",
        "description": "Trusty Sidearm class feature applies to rifles",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Opportunity Fire",
        "tree": "Carbineer",
        "class": "Gunslinger",
        "description": "+2 bonus on attacks of opportunity with rifles",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Rifle Master",
        "tree": "Carbineer",
        "class": "Gunslinger",
        "description": "Treat rifles as if accurate",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Shoot from the Hip",
        "tree": "Carbineer",
        "class": "Gunslinger",
        "description": "Always use a rifle to make attacks of opportunity",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Snap Shot",
        "tree": "Carbineer",
        "class": "Gunslinger",
        "description": "You do not provoke when aiming with a rifle",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Blind Shot",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "You ignore the penalties on your ranged attack rolls when a target has concealment or total concealment.",
        "prerequisites": "",
        "source": "CW 41"
    },
    {
        "name": "Debilitating Shot",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "Dealing damage after using aim for a ranged attack moves the target -1 step down the condition track",
        "prerequisites": "",
        "source": "216"
    },
    {
        "name": "Lingering Debilitation",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "1/enc target -1 down track & persistent condition",
        "prerequisites": "",
        "source": "UR 31"
    },
    {
        "name": "Slowing Shot",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "target's spd -2 until move to normal on track or until end of enc & loses Dex to Def & flat-footed, spend FP for -4sq or half whichever is greater",
        "prerequisites": "",
        "source": "UR 31"
    },
    {
        "name": "Deceptive Shot",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "Beating a target's Will Defense with a Deception check denies the target its Dexterity bonus to Reflex Defense against your attacks until your next turn, activated as two swift actions",
        "prerequisites": "",
        "source": "216"
    },
    {
        "name": "Improved Quick Draw",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "You can make a single attack in a surprise round even if surprised and your pistol is holstered",
        "prerequisites": "",
        "source": "216"
    },
    {
        "name": "Knockdown Shot",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "Hitting a target after using aim for a ranged attack knocks the target prone in addition to dealing damage",
        "prerequisites": "",
        "source": "216"
    },
    {
        "name": "Multiattack Proficiency (pistols)",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "Reduce penalty to attack rolls when making multiple attacks with pistols by 2\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "216"
    },
    {
        "name": "Mobile Attack (pistols)",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "Immediately after making a full attack where you attack with two pistols, move your speed as a free action",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Pistol Duelist",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "1/enc for each: 1. 1 atk target's thresh is half, 2. 1 atk as though aimed, 3. +4 Ref Def for 1 turn & make 1 atk",
        "prerequisites": "",
        "source": "GoI 25"
    },
    {
        "name": "Ranged Disarm",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "You can disarm using a ranged attack",
        "prerequisites": "",
        "source": "217"
    },
    {
        "name": "Damaging Disarm",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "When you disarm with a ranged attack, deal half damage",
        "prerequisites": "",
        "source": "GoI 25"
    },
    {
        "name": "Ranged Flank",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "If you are withing 6 squares of a target and armed with a pistol or rifle, you can act as through you occupied the nearest square adjacent to the target for the purposes of determining flanking.",
        "prerequisites": "",
        "source": "SaV 27"
    },
    {
        "name": "Retreating Fire",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "away from pursuing target run or use 2 swif & make single -5 atk as part of move, FP to avoid -5",
        "prerequisites": "",
        "source": "UR 31"
    },
    {
        "name": "Swift Shot",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "1/enc make single ranged atk w/handheld weapon as swif not stan, cannot use remaining for atk",
        "prerequisites": "",
        "source": "UR 31"
    },
    {
        "name": "Trigger Work",
        "tree": "Gunslinger",
        "class": "Gunslinger",
        "description": "You take no penalty on your attack roll when using Rapid Shot",
        "prerequisites": "",
        "source": "217"
    },
    {
        "name": "Dash and Blast",
        "tree": "Pistoleer",
        "class": "Gunslinger",
        "description": "Once per encounter as a full-round action when you are wielding two pistols, you may move up to twice your speed and make a ranged attack with each pistol.",
        "prerequisites": "",
        "source": "SaV 27"
    },
    {
        "name": "Flanking Fire",
        "tree": "Pistoleer",
        "class": "Gunslinger",
        "description": "Whenever you are flanked by two or more opponents and are wielding two pistols, you can amake a full attack action as a standard action. This is provided that you target opponents that flank you and attack at least two targets.",
        "prerequisites": "",
        "source": "SaV 28"
    },
    {
        "name": "Guaranteed Shot",
        "tree": "Pistoleer",
        "class": "Gunslinger",
        "description": "If wielding two pistols and only make a single ranged attack with one of them, even if you miss, you deal damage equal to half your heroic level to the target.",
        "prerequisites": "",
        "source": "SaV 28"
    },
    {
        "name": "Hailfire",
        "tree": "Pistoleer",
        "class": "Gunslinger",
        "description": "When wielding two pistols, as a standard action, you can make an autofire attack with one of the pistols as though the weapon was  set to autofire, even if it has no autofire mode.",
        "prerequisites": "",
        "source": "SaV 28"
    },
    {
        "name": "Twin Shot",
        "tree": "Pistoleer",
        "class": "Gunslinger",
        "description": "When wielding two pistols, you gain a +2 bonus to damage rolls when using the Rapid Shot feat.",
        "prerequisites": "",
        "source": "SaV 28"
    },
    {
        "name": "Precision Shot",
        "tree": "Sharpshooter Talent Tree",
        "class": "Gunslinger",
        "description": "When using the aim action, you gain the benefit of the Point Blank Shot feat against your target, regardless of range category. Prerequisite: Far Shot feat.",
        "prerequisites": "Far Shot feat",
        "source": "GAW 31"
    },
    {
        "name": "Draw a Bead",
        "tree": "Sharpshooter Talent Tree",
        "class": "Gunslinger",
        "description": "Once per round, you can spend a single swift action to designate a single enemy who is not within point-blank range. When you make a successful ranged attack roll that deals damage against the designated enemy, add your Dexterity bonus (minimum +1) to the damage roll. This effect lasts until the target is unconscious, dead, or leaves your line of sight. You can have only one enemy designated in this manner. Prerequisites: Precision Shot. base attack bonus +10.",
        "prerequisites": "Precision Shot",
        "source": "GAW 31"
    },
    {
        "name": "Pinning Shot",
        "tree": "Sharpshooter Talent Tree",
        "class": "Gunslinger",
        "description": "You can keep your target worrying about where the next shot is coming from instead of trying to flee. When you deal damage to an enemy that you have aimed at, the target's speed is reduced to 2 squares, and the target cannot take either a double move action or use the run action until the end of your next turn. This is a stunning effect. Prerequisite: Precision Shot.",
        "prerequisites": "Precision Shot",
        "source": "GAW 31"
    },
    {
        "name": "Armored Augmentation I",
        "tree": "Knight's Armor",
        "class": "Imperial Knight",
        "description": "1/encounter spend a Force point to add armour bonus to you damage threshold",
        "prerequisites": "",
        "source": "LE 45"
    },
    {
        "name": "Armored Augmentation II",
        "tree": "Knight's Armor",
        "class": "Imperial Knight",
        "description": "Whenever you use Armored Augmentation I gain DR = to 2× armor Fortitude bonus",
        "prerequisites": "",
        "source": "LE 45"
    },
    {
        "name": "Armor Mastery",
        "tree": "Knight's Armor",
        "class": "Imperial Knight",
        "description": "When wearing armour use heroic level + 1/2 your armor bonus or your armor bonus, whichever is higher",
        "prerequisites": "",
        "source": "LE 45"
    },
    {
        "name": "Cortosis Defense",
        "tree": "Knight's Armor",
        "class": "Imperial Knight",
        "description": "Gain +2 bonus when making an opposed unarmed melee attack roll against a lightsaber attack",
        "prerequisites": "",
        "source": "LE 45"
    },
    {
        "name": "Cortosis Retaliation",
        "tree": "Knight's Armor",
        "class": "Imperial Knight",
        "description": "Make an immediate attack of opportunity when you parry with your cortosis gauntlet",
        "prerequisites": "",
        "source": "LE 45"
    },
    {
        "name": "Knight's Morale",
        "tree": "Knight's Resolve",
        "class": "Imperial Knight",
        "description": "Whenever an ally within 12 squares hits with a lightsaber attack, gain a +1 morale bonus to all defenses until next turn",
        "prerequisites": "",
        "source": "LE 45"
    },
    {
        "name": "Strength of the Empire",
        "tree": "Knight's Resolve",
        "class": "Imperial Knight",
        "description": "When an ally within 12 squares succeeds with a lightsaber attack, gain +1 die of damage on your next lightsaber attack before the end of your next turn",
        "prerequisites": "",
        "source": "LE 45"
    },
    {
        "name": "Oath of Duty",
        "tree": "Knight's Resolve",
        "class": "Imperial Knight",
        "description": "When an ally within 12 squares hits with a lightsaber attack, you gain 3×class level in bonus hit points until the end of your next turn",
        "prerequisites": "",
        "source": "LE 45"
    },
    {
        "name": "Praetoria Ishu",
        "tree": "Knight's Resolve",
        "class": "Imperial Knight",
        "description": "You can use the Block or Deflect talent to negate an attack made against an adjacent ally",
        "prerequisites": "",
        "source": "LE 45"
    },
    {
        "name": "Praetoria Vonil",
        "tree": "Knight's Resolve",
        "class": "Imperial Knight",
        "description": "Deal +1 die of damage with a lightsaber in two hands if you move 1 square before",
        "prerequisites": "",
        "source": "LE 45"
    },
    {
        "name": "Black Market Buyer",
        "tree": "Procurement",
        "class": "Improviser",
        "description": "When seeking an item from the black market, you do not need to make a Gather Information check to locate a black market merchant; you automatically succeed.",
        "prerequisites": "",
        "source": "RE 43"
    },
    {
        "name": "Only the Finest",
        "tree": "Procurement",
        "class": "Improviser",
        "description": "Whenever you purchase goods through the black market, you can obtain items that have been modified with the Tech Specialist feat (see page 21 of Starships of the Galaxy) without increasing the base value of the items.\r\nPrerequisite: Black Market Buyer.",
        "prerequisites": "Black Market Buyer",
        "source": "RE 43"
    },
    {
        "name": "Excellent Kit",
        "tree": "Procurement",
        "class": "Improviser",
        "description": "You always make sure that your allies have the best gear available. Whenever you purchase weapons, armor, or other equipment (either legally or through the black market), all gear you purchase has 50% more hit points than normal and has 5 more DR than normal. In addition, whenever one of your allies makes a Mechanics check on an object that you purchased, that ally gains a +2 equipment bonus to the check.",
        "prerequisites": "",
        "source": "RE 43"
    },
    {
        "name": "Just What Is Needed",
        "tree": "Procurement",
        "class": "Improviser",
        "description": "You have a knack for finding the best quality replacement parts for broken equipment. Whenever you use the Repair application of the Mechanics skill, you restore an extra 1d8 hit points with a successful Mechanics check, in addition to what you would normally restore.\r\nIf you use the aid another action to assist an ally with repairs, that ally also repairs an extra add hit points with a successful Mechanics check. Any ally can only benefit from this talent once per Mechanics check, regardless of how many allies with this talent aid on the check.",
        "prerequisites": "",
        "source": "RE 43"
    },
    {
        "name": "Right Gear for the Job",
        "tree": "Procurement",
        "class": "Improviser",
        "description": "Once per day when an ally makes an untrained skill check. as a reaction you can grant that ally a +5 equipment bonus to the check, and the ally is considered trained in that skill for the purpose of using trained-only applications of the skill. You cannot use this talent to allow an ally to make an untrained Use the Force check.",
        "prerequisites": "",
        "source": "RE 43"
    },
    {
        "name": "Capture Droid",
        "tree": "Improviser",
        "class": "Improviser",
        "description": "Once per encounter, you can use this talent on an adjacent enemy droid that has been reduced to 0 hit points or moved to the bottom of the condition track but not destroyed. As a standard action, make a Mechanics check against the droid's Will Defense. If your result equals or exceeds the droid's Will Defense, the droid moves +2 steps on the condition track, regains 1d8 hit points, and becomes your ally, and its attitude toward you immediately shifts to friendly. The druid fights on your side until the end of the encounter, at which point it is destroyed.",
        "prerequisites": "",
        "source": "RE 43"
    },
    {
        "name": "Improved Jury-Rig",
        "tree": "Improviser",
        "class": "Improviser",
        "description": "You can use the Jury-Rig application of the Mechanics skill as a standard action instead of as a full-round action. Additionally, you are not required to make a skill check to successfully jury-rig a device or vehicle, and the device or vehicle moves +3 steps on the condition track instead of +2.",
        "prerequisites": "",
        "source": "RE 43"
    },
    {
        "name": "Improvised Device",
        "tree": "Improviser",
        "class": "Improviser",
        "description": "You can create a temporary piece of almost any type of equipment from the spare parts you have around. To do so, you must make a DC 25 Mechanics check and spend one hour building the device. The object can have a maximum value of 200 credits x your class level. it cannot have an availability of rare or illegal, and it cannot be unique. The device you create must be something that you would reasonably be familiar with, and after 24 hours the object is destroyed. You can use this talent once per day.",
        "prerequisites": "",
        "source": "RE 43"
    },
    {
        "name": "Bigger Bang",
        "tree": "Improviser",
        "class": "Improviser",
        "description": "Whenever you create a grenade with the Improvised Device talent, the grenade deals an additional die of damage when used.\r\nPrerequisite: Improvised Device.",
        "prerequisites": "Improvised Device",
        "source": "RE 43"
    },
    {
        "name": "Custom Model",
        "tree": "Improviser",
        "class": "Improviser",
        "description": "Whenever you create a device with the Improvised Device talent, you can apply one modification granted by the Tech Specialist feat (see page 21 of Starships of the Galaxy) to the device. This customization does not affect the value of the item being created.\r\nPrerequisites: Improvised Device, Tech Specialist feat.",
        "prerequisites": "Improvised Device, Tech Specialist feat",
        "source": "RE 43"
    },
    {
        "name": "Defensive Electronics",
        "tree": "Autonomy",
        "class": "Independent Droid",
        "description": "Add your class level to Will Defense when being reprogrammed",
        "prerequisites": "",
        "source": "TFU 47"
    },
    {
        "name": "Ion Resistance",
        "tree": "Autonomy",
        "class": "Independent Droid",
        "description": "DR 10 against ion damage",
        "prerequisites": "",
        "source": "TFU 47"
    },
    {
        "name": "Soft Reset",
        "tree": "Autonomy",
        "class": "Independent Droid",
        "description": "If you are moved to the bottom of the condition track by another way than taking damage greater than your damage threshold, move +1 step along the condition track after being disabled for 2 rounds",
        "prerequisites": "",
        "source": "TFU 47"
    },
    {
        "name": "Modification Specialist",
        "tree": "Autonomy",
        "class": "Independent Droid",
        "description": "You suffer no penalty to reprogram or modify yourself",
        "prerequisites": "",
        "source": "TFU 47"
    },
    {
        "name": "Power Boost",
        "tree": "Autonomy",
        "class": "Independent Droid",
        "description": "You channel your power surge into a boost for your locomotion system. When you initiate a power surge, you can use one of the following bonuses with your installed locomotion system: Jump +4 squares (walking or wheeled locomotion), or increase hovering height by 4 squares (hovering locomotion). You can use this talent for a number of rounds equal to one-half your level (rounded down). At the end of a power boost, you move -1 persistent step on the condition track. The penalties imposed by this condition persist until you receive repairs (using the Repair Droid application of the Mechanics skill). You can use both Power Surge and Power Boost at the same time, but you must move -2 persistent steps on the condition track. Prerequisite: Power Surge.",
        "prerequisites": "Power Surge",
        "source": "SGtD 28"
    },
    {
        "name": "Repair Self",
        "tree": "Autonomy",
        "class": "Independent Droid",
        "description": "Gain 1 additional hit point per point you exceed the DC to repair yourself",
        "prerequisites": "",
        "source": "TFU 47"
    },
    {
        "name": "Break Program",
        "tree": "Elite Droid",
        "class": "Independent Droid",
        "description": "You can use your ability to circumvent behavioral inhibitors to temporarily break the programming of a droid that you have a data link with. Make a Use Computer check opposed by the droid's Will Defense. Breaking the droid's programming overrides its behavioral inhibitors for a number of rounds equal to your Intelligence bonus. \r\nPrerequisite: Trained in Use Computer.",
        "prerequisites": "Trained in Use Computer",
        "source": "SGtD 29"
    },
    {
        "name": "Heuristic Mastery",
        "tree": "Elite Droid",
        "class": "Independent Droid",
        "description": "You understand the subtleties and limitations of your heuristic processor. You can reroll any untrained skill check (except Use the Force), keeping the second result, even if it is worse. Once per encounter, you can spend a Force Point to reroll any skill check (trained or untrained), taking the better result. \r\nPrerequisite: Wisdom 15.",
        "prerequisites": "Wisdom 15",
        "source": "SGtD 29"
    },
    {
        "name": "Scripted Routines",
        "tree": "Elite Droid",
        "class": "Independent Droid",
        "description": "Once per encounter you can use each of the following actions:\r\n• Attack Script: You can use a feat or a talent that modifies your attack roll as one action less (for example, a full-round action becomes a standard action, a standa rd action becomes a move action, a move action becomes a swift action, a swift action becomes a free action).\r\n• Defense Script: You can apply you r Independent Spirit bonus a second time during a single encounter.\r\n• Skill Script: While in combat, you can apply a bonus equal to one- half of your class level to any sing le skill that requires a standard action or less to use. You must be trained in the skill. \r\nPrerequisite: Base attack bonus +5.",
        "prerequisites": "Base attack bonus +5",
        "source": "SGtD 29"
    },
    {
        "name": "Ultra Resilient",
        "tree": "Elite Droid",
        "class": "Independent Droid",
        "description": "You have advanced subroutines that make you more resistant to the effect of damage. Once per encounter, as a reaction, you can increase your damage threshold with a bonus equal to your Independent Droid level.",
        "prerequisites": "",
        "source": "SGtD 29"
    },
    {
        "name": "Computer Language",
        "tree": "Specialized Droid",
        "class": "Independent Droid",
        "description": "You may use your Persuasion modifier instead of Use Computer for Use Computer skill checks",
        "prerequisites": "",
        "source": "TFU 47"
    },
    {
        "name": "Computer Master",
        "tree": "Specialized Droid",
        "class": "Independent Droid",
        "description": "You may reroll any opposed Use Computer check and keep the better result",
        "prerequisites": "",
        "source": "TFU 47"
    },
    {
        "name": "Enhanced Manipulation",
        "tree": "Specialized Droid",
        "class": "Independent Droid",
        "description": "You may take 10 on any Dexterity-based skill check, even when threatened or otherwise not permitted",
        "prerequisites": "",
        "source": "TFU 47"
    },
    {
        "name": "Hotwired Processor",
        "tree": "Specialized Droid",
        "class": "Independent Droid",
        "description": "As a swift action, you gain a +5 bonus to Intelligence and Wisdom based skill checks, and a +1 bonus to ranged attack rolls, for a number of rounds equal to half your level, at which point you drop -1 steps down the condition track",
        "prerequisites": "",
        "source": "TFU 47"
    },
    {
        "name": "Just a Droid",
        "tree": "Specialized Droid",
        "class": "Independent Droid",
        "description": "You can use each of the following actions once per encounter.\r\n• Just Another Droid: You are skilled at using Stealth to sneak past unwary enemies when moving in plain sight. You can use the Sneak application of the Stealth skill when in plain sight of an enemy, if the enemy has no reason to doubt that you are just another droid. You are considered trained in Stealth for this action.\r\n• Just a Normal Droid: You can reroll Deception checks for deceptive appearance to make observers believe that you are carrying out a standard function when attempting to do something atypical for your droid model or function. You may keep either result.",
        "prerequisites": "",
        "source": "SGtD 28"
    },
    {
        "name": "Power Surge",
        "tree": "Specialized Droid",
        "class": "Independent Droid",
        "description": "As a swift action, you gain a +1 bonus to melee attack rolls, deal +1 die of damage, and increase your speed by 2 squares, for a number of rounds equal to half your level, at which point you drop -1 steps down the condition track",
        "prerequisites": "",
        "source": "TFU 48"
    },
    {
        "name": "Skill Conversion",
        "tree": "Specialized Droid",
        "class": "Independent Droid",
        "description": "When you reprogram yourself, you may gain a bonus Skill Focus feat in exchange for a trained skill",
        "prerequisites": "",
        "source": "TFU 48"
    },
    {
        "name": "Swift Droid",
        "tree": "Specialized Droid",
        "class": "Independent Droid",
        "description": "You can make a swift action as a reaction after failing a Deception check or a Stealth check. \r\nPrerequisites: Any two talents from the Autonomy talent tree.",
        "prerequisites": "Any two talents from the Autonomy talent tree",
        "source": "SGtD 28"
    },
    {
        "name": "Always Ready",
        "tree": "Infiltration",
        "class": "Infiltrator",
        "description": "Your initiative count is not changed by triggering a readied action",
        "prerequisites": "",
        "source": "TFU 49"
    },
    {
        "name": "Concealed Weapon Expert",
        "tree": "Infiltration",
        "class": "Infiltrator",
        "description": "Once per round, you may reroll an attack using a concealable weapon as a swift action, but must take the second result",
        "prerequisites": "",
        "source": "TFU 49"
    },
    {
        "name": "Creeping Approach",
        "tree": "Infiltration",
        "class": "Infiltrator",
        "description": "As a swift action, you may designate an unaware target within 12 squares to deny them Perception checks to notice you until your next turn",
        "prerequisites": "",
        "source": "TFU 49"
    },
    {
        "name": "Set for Stun",
        "tree": "Infiltration",
        "class": "Infiltrator",
        "description": "Spend two consecutive swift actions upon dealing stun damage to a target to move them an extra step down the condition track",
        "prerequisites": "",
        "source": "TFU 49"
    },
    {
        "name": "Silent Takedown",
        "tree": "Infiltration",
        "class": "Infiltrator",
        "description": "If you damage an unaware opponent, he cannot speak or make any noises until your next turn",
        "prerequisites": "",
        "source": "TFU 49"
    },
    {
        "name": "Spynet Agent",
        "tree": "Bothan Spynet",
        "class": "Infiltrator",
        "description": "You may use your Gather Information modifier to make Knowledge (galactic lore) checks",
        "prerequisites": "",
        "source": "TFU 50"
    },
    {
        "name": "Bothan Resources",
        "tree": "Bothan Spynet",
        "class": "Infiltrator",
        "description": "Make a DC 20 Gather Information check to purchase standard weapons, equipment and transport at half price, or exotic and restricted variations for 75% of the price",
        "prerequisites": "",
        "source": "TFU 50"
    },
    {
        "name": "Knowledge is Life",
        "tree": "Bothan Spynet",
        "class": "Infiltrator",
        "description": "Make a Knowledge (galactic lore) check as a swift action against a DC of 15 + the CL of the target to gain a +2 bonus to a defense score",
        "prerequisites": "",
        "source": "TFU 50"
    },
    {
        "name": "Knowledge is Power",
        "tree": "Bothan Spynet",
        "class": "Infiltrator",
        "description": "Make a Knowledge (galactic lore) check as a swift action against a DC of 15 + the CL of the target to increase your critical hit range against that target by 1",
        "prerequisites": "",
        "source": "TFU 50"
    },
    {
        "name": "Knowledge is Strength",
        "tree": "Bothan Spynet",
        "class": "Infiltrator",
        "description": "Make a Knowledge (galactic lore) check as a swift action against a DC of 15 + the CL of the target to gain a +2 bonus to a attack rolls against them",
        "prerequisites": "",
        "source": "TFU 50"
    },
    {
        "name": "Six Questions",
        "tree": "Bothan Spynet",
        "class": "Infiltrator",
        "description": "Make a Knowledge (galactic lore) check as a swift action against a DC of 15 + the CL of the target to learn their level, classes, ability scores, as well as numbers of Force and Destiny Points",
        "prerequisites": "",
        "source": "TFU 50"
    },
    {
        "name": "Force Fortification",
        "tree": "Duelist",
        "class": "Jedi Knight",
        "description": "Spend a Force Point to relegate a critical hit against you to dealing normal damage instead",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Greater Weapon Focus (lightsabers)",
        "tree": "Duelist",
        "class": "Jedi Knight",
        "description": "+1 bonus to melee attack rolls",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Greater Weapon Specialization (lightsabers)",
        "tree": "Duelist",
        "class": "Jedi Knight",
        "description": "+2 bonus to melee damage rolls",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Improved Lightsaber Throw",
        "tree": "Duelist",
        "class": "Jedi Knight",
        "description": "Your lightsaber throw attack roll is compared to the Reflex Defense of all targets in a 6-square line",
        "prerequisites": "",
        "source": "TFU 43"
    },
    {
        "name": "Thrown Lightsaber Mastery",
        "tree": "Duelist",
        "class": "Jedi Knight",
        "description": "Targets damaged with your thrown lightsaber move at half speed until your next turn",
        "prerequisites": "",
        "source": "TFU 43"
    },
    {
        "name": "Improved Redirect",
        "tree": "Duelist",
        "class": "Jedi Knight",
        "description": "Once per turn, upon succeeding at a Redirect Shot, the Deflect which triggered it does not count towards the cumulative penalty from Deflect",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Improved Riposte",
        "tree": "Duelist",
        "class": "Jedi Knight",
        "description": "Upon succeeding at a Riposte, the Block which triggered it does not count towards the cumulative penalty from Block",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Lightsaber Form Savant",
        "tree": "Duelist",
        "class": "Jedi Knight",
        "description": "1/encounter as a swift action, return one Force power with the [lightsaber] descriptor back to your Force suite\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "JATM 19"
    },
    {
        "name": "Multiattack Proficiency (lightsabers)",
        "tree": "Duelist",
        "class": "Jedi Knight",
        "description": "Reduce penalty to attack rolls when making multiple attacks with lightsabers by 2\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Severing Strike",
        "tree": "Duelist",
        "class": "Jedi Knight",
        "description": "Dismember a target, dealing half damage and moving them -1 step down the condition track, when you would otherwise kill them",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Shoto Master",
        "tree": "Duelist",
        "class": "Jedi Knight",
        "description": "You can treat a one-handed lightsaber as a light weapon if you are also wielding a Shoto (short lightsaber), and additionally, if you have the Lightsaber Defense talent you can activate it as a free action instead of a swift",
        "prerequisites": "",
        "source": "JATM 19"
    },
    {
        "name": "Direct",
        "tree": "Jedi Archivist",
        "class": "Jedi Knight",
        "description": "As a standard action, you can return one spent Force power to the Force suite of any ally within 6 squares of you and in your line of sight. The Force power must have been spent by the ally you designate.",
        "prerequisites": "",
        "source": "CW 41"
    },
    {
        "name": "Impart Knowledge",
        "tree": "Jedi Archivist",
        "class": "Jedi Knight",
        "description": "You can aid another on the Knowledge checks of any ally within 6 squares of you as a reaction for Knowledge skilIs you are trained in.",
        "prerequisites": "",
        "source": "CW 41"
    },
    {
        "name": "Insight of the Force",
        "tree": "Jedi Archivist",
        "class": "Jedi Knight",
        "description": "You can make a Use the Force check in place of a Knowledge check for any Knowledge skill you are not trained in. You are considered trained in that Knowledge skill for the purposes of using this talent.",
        "prerequisites": "",
        "source": "CW 41"
    },
    {
        "name": "Master Advisor",
        "tree": "Jedi Archivist",
        "class": "Jedi Knight",
        "description": "When you use the Skilled Advisor talent, the ally you aid gains one temporary Force Point at the end of her next turn. If the Force Point is not spent before the end of the encounter, it is lost.",
        "prerequisites": "",
        "source": "CW 41"
    },
    {
        "name": "Scholarly Knowledge",
        "tree": "Jedi Archivist",
        "class": "Jedi Knight",
        "description": "As a swift action, you can rerall a Knowledge check and keep the better of the two results. This can be used with any Knowledge skill you are trained in.",
        "prerequisites": "",
        "source": "CW 41"
    },
    {
        "name": "Call Weapon",
        "tree": "Jedi Artisan",
        "class": "Jedi Knight",
        "description": "Call and ignite a lightsaber you built as a free action if in line of sight",
        "prerequisites": "",
        "source": "JATM 19"
    },
    {
        "name": "Masterwork Lightsaber",
        "tree": "Jedi Artisan",
        "class": "Jedi Knight",
        "description": "Add one extra accessory, reroll one die of damage if self-built, mentor another building (-5 their DC)",
        "prerequisites": "",
        "source": "JATM 19"
    },
    {
        "name": "Lightsaber Specialist",
        "tree": "Jedi Artisan",
        "class": "Jedi Knight",
        "description": "+2 Block and Deflect with a lightsaber you built",
        "prerequisites": "",
        "source": "JATM 19"
    },
    {
        "name": "Perfect Attunement",
        "tree": "Jedi Artisan",
        "class": "Jedi Knight",
        "description": "If you spend a Force Point on a lightsaber attack you built you can also add that amount to damage",
        "prerequisites": "",
        "source": "JATM 19"
    },
    {
        "name": "Quick Modification",
        "tree": "Jedi Artisan",
        "class": "Jedi Knight",
        "description": "Spend 1 minute removing an accessory and adding another on a lightsaber you built",
        "prerequisites": "",
        "source": "JATM 19"
    },
    {
        "name": "Jedi Battle Commander",
        "tree": "Jedi Battlemaster",
        "class": "Jedi Knight",
        "description": "Battle Meditation provides a +2 bonus instead of a +1",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Defensive Circle",
        "tree": "Jedi Battlemaster",
        "class": "Jedi Knight",
        "description": "As a swift action, you and allies affected by your Battle Meditation gain +2 to Reflex Defense, and you gain a +1 bonus to Block or Deflect for each adjacent lightsaber-wielding ally",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Force Revive",
        "tree": "Jedi Battlemaster",
        "class": "Jedi Knight",
        "description": "Allies reduced to 0 hit points while influenced by your Battle Meditation can take Second Wind immediately if you spend a Force Point",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Slashing Charge",
        "tree": "Jedi Battlemaster",
        "class": "Jedi Knight",
        "description": "Once per encounter, while making a charge, you take no cumulative penalty for Block attempts, and may add the charging bonus to Riposte",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Mobile Attack (lightsabers)",
        "tree": "Jedi Battlemaster",
        "class": "Jedi Knight",
        "description": "Immediately after making a full attack where you attack with two lightsabers or two ends of a double-bladed lightsaber, move your speed as a free action",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Force Treatment",
        "tree": "Jedi Healer",
        "class": "Jedi Knight",
        "description": "You can make a Use the Force check in the place of a Treat Injury check. You are considered trained in the Treat Injury skill. If you are entitled to a Treat Injury check reroll, you can reroll your Use the Force check instead.",
        "prerequisites": "",
        "source": "214"
    },
    {
        "name": "Healing Boost",
        "tree": "Jedi Healer",
        "class": "Jedi Knight",
        "description": "When healing somebody thraugh vital transfer, the amount of damage healed increases by 1 point per your class level.",
        "prerequisites": "",
        "source": "CW 41"
    },
    {
        "name": "Improved Healing Boost",
        "tree": "Jedi Healer",
        "class": "Jedi Knight",
        "description": "When healing somebody through vital transfer, the amount of damage healed increases by 2 points per your dass level.",
        "prerequisites": "",
        "source": "CW 41"
    },
    {
        "name": "Soothe",
        "tree": "Jedi Healer",
        "class": "Jedi Knight",
        "description": "When using vital transfer to heal somebody, you can move the target + 1 step on the condition track instead of healing damage. When doing so, you move -1 step on the condition track in exchange.",
        "prerequisites": "",
        "source": "CW 41"
    },
    {
        "name": "Apprentice Boon",
        "tree": "Jedi Instructor",
        "class": "Jedi Knight",
        "description": "Add your Force Point result to an ally w/in 12 sq with a Use the Force modifier lower than yours",
        "prerequisites": "",
        "source": "JATM 19"
    },
    {
        "name": "Share Force Secret",
        "tree": "Jedi Instructor",
        "class": "Jedi Knight",
        "description": "1/turn grant use of Force Secret to ally w/in 12 sq & trained in Use the Force",
        "prerequisites": "",
        "source": "JATM 19"
    },
    {
        "name": "Share Force Technique",
        "tree": "Jedi Instructor",
        "class": "Jedi Knight",
        "description": "1/turn grant use of Force Technique to ally w/in 12 sq & trained in Use the Force, not FP Recovery",
        "prerequisites": "",
        "source": "JATM 20"
    },
    {
        "name": "Share Talent",
        "tree": "Jedi Instructor",
        "class": "Jedi Knight",
        "description": "1/day grant use of Lightsaber Combat or Forms, Duelist until end of enc if w/in 12 sq to allies = 1/2 cl",
        "prerequisites": "",
        "source": "JATM 20"
    },
    {
        "name": "Transfer Power",
        "tree": "Jedi Instructor",
        "class": "Jedi Knight",
        "description": "Spend a power in suite and give to ally trained in Use the Force and within 12 squares and line of sight; lost if not used by end of encounter",
        "prerequisites": "",
        "source": "JATM 20"
    },
    {
        "name": "Echoes in the Force",
        "tree": "Jedi Investigator",
        "class": "Jedi Knight",
        "description": "You can use the farseeing power on a location instead of an individual creature, peering into the location’s past to view events that occurred there. Unlike the normal use of the farseeing power, you are actually looking into the location’s past (at a time you designate), and you must be standing in the location being viewed. The target DC for your Use the Force check is 20, +1 for each day into the past that you attempt to scry. When you look into the past, you need only specify a time in a number of days, as you can sense tremors in the Force that focus your visions on meaningful events that day",
        "prerequisites": "",
        "source": "JATM 20"
    },
    {
        "name": "Jedi Quarry",
        "tree": "Jedi Investigator",
        "class": "Jedi Knight",
        "description": "As a swift action, you designate a single target creature as the focus of your attentions. You gain a +2 bonus to your speed any time you spend a move action to move, provided that you end your movement adjacent to the target. You retain the bonus (and may not use this talent again) until your target surrenders, is reduced to 0 hit points, or moves to the bottom of the condition track, or until the encounter ends",
        "prerequisites": "",
        "source": "JATM 20"
    },
    {
        "name": "Prepared for Danger",
        "tree": "Jedi Investigator",
        "class": "Jedi Knight",
        "description": "Whenever you have at least one unspent farseeing power in your suite, you can spend that farseeing power to regain any one other Force power as a swift action",
        "prerequisites": "",
        "source": "JATM 20"
    },
    {
        "name": "Sense Deception",
        "tree": "Jedi Investigator",
        "class": "Jedi Knight",
        "description": "Whenever someone makes a Deception or Persuasion skill check against your Will Defense, you can make a Use the Force check, replacing your Will Defense with the result of your Use the Force check if it is higher",
        "prerequisites": "",
        "source": "JATM 20"
    },
    {
        "name": "Unclouded Judgement",
        "tree": "Jedi Investigator",
        "class": "Jedi Knight",
        "description": "Whenever you are the target of a mind-affecting Force power of talent, you can spend a Force Point as a reaction to negate the effects of that Force power or talent (no skill check required)",
        "prerequisites": "",
        "source": "JATM 20"
    },
    {
        "name": "Cover Your Tracks",
        "tree": "Jedi Refugee",
        "class": "Jedi Knight",
        "description": "-5 penalty to Gather Information checks to find you",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Difficult to Sense",
        "tree": "Jedi Refugee",
        "class": "Jedi Knight",
        "description": "Reroll any opposed Use the Force checks to conceal your presence",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Force Veil",
        "tree": "Jedi Refugee",
        "class": "Jedi Knight",
        "description": "You can only be detected from a range of 10 km",
        "prerequisites": "",
        "source": "LE 41"
    },
    {
        "name": "Jedi Network",
        "tree": "Jedi Refugee",
        "class": "Jedi Knight",
        "description": "Once per game session use; Acquire Equipment or Funds, Obtain Information, Receive Medical Attention or Secure Safe House.",
        "prerequisites": "",
        "source": "LE 42"
    },
    {
        "name": "Dark Deception",
        "tree": "Jedi Shadow",
        "class": "Jedi Knight",
        "description": "You may appear to have a Dark Side Score the same as your Wisdom score when sensed through the Force\r\n\r\nDeception is a class skill",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Taint of the Dark Side",
        "tree": "Jedi Shadow",
        "class": "Jedi Knight",
        "description": "You may use a Dark Side force power once per encounter without increasing your Dark Side Score",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Improved Sentinel Strike",
        "tree": "Jedi Shadow",
        "class": "Jedi Knight",
        "description": "Sentinel Strike deals d8 damage",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Improved Sentinel's Gambit",
        "tree": "Jedi Shadow",
        "class": "Jedi Knight",
        "description": "Sentinel's Gambit may be used again a number of times equal to half your class level",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Rebuke the Dark",
        "tree": "Jedi Shadow",
        "class": "Jedi Knight",
        "description": "You may choose the better of two rolls to rebuke dark side powers",
        "prerequisites": "",
        "source": "KotOR 39"
    },
    {
        "name": "Force Warning",
        "tree": "Jedi Watchman",
        "class": "Jedi Knight",
        "description": "Allies within 12 squares may reroll their Initiative checks at the start of combat, and a number equal to Wisdom Modifier are not surprised if you are not",
        "prerequisites": "",
        "source": "KotOR 40"
    },
    {
        "name": "Watchman's Advance",
        "tree": "Jedi Watchman",
        "class": "Jedi Knight",
        "description": "You and your allies may take an extra move action in the surprise round",
        "prerequisites": "",
        "source": "KotOR 40"
    },
    {
        "name": "Improved Quick Draw (lightsabers)",
        "tree": "Jedi Watchman",
        "class": "Jedi Knight",
        "description": "You may draw, ignite and attack with a lightsaber in the surprise round even if you are surprised, or draw and ignite a lightsaber as a free action on your turn",
        "prerequisites": "",
        "source": "KotOR 40"
    },
    {
        "name": "Vigilance",
        "tree": "Jedi Watchman",
        "class": "Jedi Knight",
        "description": "As a swift action, grant an ally a +1 bonus to Reflex Defense as long as you remain adjacent",
        "prerequisites": "",
        "source": "KotOR 40"
    },
    {
        "name": "Sheltering Stance",
        "tree": "Jedi Watchman",
        "class": "Jedi Knight",
        "description": "You may Block or Deflect attacks against an adjacent ally without spending a Force Point",
        "prerequisites": "",
        "source": "KotOR 40"
    },
    {
        "name": "Combat Trance",
        "tree": "Jedi Weapon Master",
        "class": "Jedi Knight",
        "description": "Whenever you use the battle strike power, you gain the power’s bonus on attack rolls on your first melee attack made each round until the end of the encounter. If you do not attack in a round, this effect ends",
        "prerequisites": "",
        "source": "JATM 21"
    },
    {
        "name": "Improvised Weapon Master",
        "tree": "Jedi Weapon Master",
        "class": "Jedi Knight",
        "description": "You take no penalty on attack rolls with improvised weapons",
        "prerequisites": "",
        "source": "JATM 21"
    },
    {
        "name": "Twin Weapon Style",
        "tree": "Jedi Weapon Master",
        "class": "Jedi Knight",
        "description": "As a standard action, whenever you are wielding two weapons (or a double weapon), you can make one attack with each weapon (or each end of a double-weapon). Each attack must be against a different target",
        "prerequisites": "",
        "source": "JATM 21"
    },
    {
        "name": "Twin Weapon Mastery",
        "tree": "Jedi Weapon Master",
        "class": "Jedi Knight",
        "description": "Whenever you use the Twin Weapon Style talent, you can move 2 squares between each attack. This movement does not provoke attack of opportunity",
        "prerequisites": "",
        "source": "JATM 21"
    },
    {
        "name": "Shoto Pin",
        "tree": "Jedi Weapon Master",
        "class": "Jedi Knight",
        "description": "Whenever you are wielding a shoto and successfully use the Block talent to negate a melee attack, the attacker can make no further melee attack until the start of its next turn or until you are no longer adjacent to it",
        "prerequisites": "",
        "source": "JATM 21"
    },
    {
        "name": "Ataru",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "Apply your Dexterity bonus to damage rolls with a lightsaber rather than your Strength bonus",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Djem So",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "Upon being his by a melee attack, spend a Force Point to make an immediate attack against that opponent",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Juyo",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "You may reroll the first attack roll of each round against an enemy, designated by spending a Force Point as a swift action, and keep the better result",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Vaapad",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "You score a critical hit with a lightsaber on a natural 19 or 20, provided that you hit.",
        "prerequisites": "",
        "source": "219"
    },
    {
        "name": "Makashi",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "Wielding a single lightsaber one-handed increases your Lightsaber Defense bonus by 2 (maximum +5)",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Niman",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "+1 bonus to Reflex Defense and Will Defense whilst wielding a lightsaber",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Jar'Kai",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "Double the bonus to your Reflex Defense from Lightsaber Defense whilst wielding two lightsabers",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Shien",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "+5 bonus to ranged attack roll for redirecting a deflected blaster bolt",
        "prerequisites": "",
        "source": "218"
    },
    {
        "name": "Shii-Cho",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "The cumulative penalty for successive Block or Deflect uses is reduced to -2",
        "prerequisites": "",
        "source": "219"
    },
    {
        "name": "Sokan",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "You may take 10 on Acrobatics checks to tumble even when distracted or threatened, and tumbling through a threatened or occupied square counts as 1 square",
        "prerequisites": "",
        "source": "219"
    },
    {
        "name": "Soresu",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "You can reroll Use the Force checks to Block or Deflect and keep the better result",
        "prerequisites": "",
        "source": "219"
    },
    {
        "name": "Trakata",
        "tree": "Lightsaber Forms",
        "class": "Jedi Knight",
        "description": "Make a Deception check to feint in combat as two swift actions",
        "prerequisites": "",
        "source": "219"
    },
    {
        "name": "Echani Expertise",
        "tree": "Martial Arts Forms",
        "class": "Martial Arts Master",
        "description": "When making an unarmed attack, you extend your critical threat range by 1 (for example. 19-20 instead of 20). However, anything other than a natural 20 is not considered an automatic hit; if you roll anything other than a natural 20 and still miss the target, you do not score a critical hit. Prerequisite: Base attack bonus +10.",
        "prerequisites": "Base attack bonus +10",
        "source": "GAW 32"
    },
    {
        "name": "Hijkata Expertise",
        "tree": "Martial Arts Forms",
        "class": "Martial Arts Master",
        "description": "When you damage a creature or droid with an unarmed attack, the target takes a penalty to its next attack roll equal to your Strength bonus.",
        "prerequisites": "",
        "source": "GAW 32"
    },
    {
        "name": "K'tara Expertise",
        "tree": "Martial Arts Forms",
        "class": "Martial Arts Master",
        "description": "Once per turn. when you damage a creature or droid with an unarmed attack, you can make an attack to disarm as a swift action. Also, you do not take the -5 penalty to your attack roll if the target is wielding a weapon with more than one hand.",
        "prerequisites": "",
        "source": "GAW 33"
    },
    {
        "name": "K'thri Expertise",
        "tree": "Martial Arts Forms",
        "class": "Martial Arts Master",
        "description": "Any enemy that begins its turn adjacent to you takes damage equal to your Strength modifier (minimum 1 point) if you are able to make an attack of opportunity against them. You can use this talent while wearing only light armor of no armor.",
        "prerequisites": "",
        "source": "GAW 33"
    },
    {
        "name": "Stava Expertise",
        "tree": "Martial Arts Forms",
        "class": "Martial Arts Master",
        "description": "When you successfully grab an enemy, he or she must make an opposed grapple check to break free of your grab. If you are initiating a grapple, you can reroll your grapple check. However. you must accept the second result, even if it is worse. You can use this talent only while wearing light armor or no armor.",
        "prerequisites": "",
        "source": "GAW 33"
    },
    {
        "name": "Tae-Jitsu Expertise",
        "tree": "Martial Arts Forms",
        "class": "Martial Arts Master",
        "description": "Once per turn, when you damage a creature or droid with an unarmed attack, compare your attack roll to the target's damage threshold. If your attack roll equals or exceeds the target's threshold, the target is moved -1 step on the condition track, regardless the damage result of your attack.",
        "prerequisites": "",
        "source": "GAW 33"
    },
    {
        "name": "Wrruushi Expertise",
        "tree": "Martial Arts Forms",
        "class": "Martial Arts Master",
        "description": "Once per turn, when you damage a creature or droid with an unarmed attack, you can make an attack against the target's Fortitude Defense as a free action. If that attack is successful, the target can take only a single swift action on their next turn. You can use this talent only while wearing light armor or no armor.",
        "prerequisites": "",
        "source": "GAW 33"
    },
    {
        "name": "Flurry of Blows",
        "tree": "Unarmed Mastery",
        "class": "Martial Arts Master",
        "description": "When you make multiple unarmed attacks as a full attack action (see page 154 of the Saga Edition core rulebook), you reduce the penalty to your attack roll by 2. You can take this talent multiple times. Each time you take this talent, you reduce the penalty to your attack rolls by an additional 2.",
        "prerequisites": "",
        "source": "GAW 33"
    },
    {
        "name": "Hardened Strike",
        "tree": "Unarmed Mastery",
        "class": "Martial Arts Master",
        "description": "If you damage with an unarmed attack a creature or droid that has Damage Reduction, you reduce the value of that Damage Reduction by one until the end of the encounter. Cumulative attacks against the same target do not stack.",
        "prerequisites": "",
        "source": "GAW 33"
    },
    {
        "name": "Punishing Strike",
        "tree": "Unarmed Mastery",
        "class": "Martial Arts Master",
        "description": "When you score a critical hit on an unarmed attack, you can make an immediate unarmed attack (in addition to other effects of a critical hit) against a single target within reach. You can use this talent only Once per turn and only while wearing light armor on no armor.",
        "prerequisites": "",
        "source": "GAW 33"
    },
    {
        "name": "Bloodthirsty",
        "tree": "Piracy",
        "class": "Master Privateer",
        "description": "You can perform a coup de grace as a move action, and when you succeed, all allies within line of sight gain a +2 morale bonus on attack rolls for the duration of the encounter.",
        "prerequisites": "",
        "source": "SaV 33"
    },
    {
        "name": "Fight to the Death",
        "tree": "Piracy",
        "class": "Master Privateer",
        "description": "Once per encounter, as a swift action, allies within 6 squares of you heal damage equal to your heroic level.",
        "prerequisites": "",
        "source": "SaV 33"
    },
    {
        "name": "Savage Reputation",
        "tree": "Piracy",
        "class": "Master Privateer",
        "description": "All opponents within 6 squares of you take -1 penalty on all attacks.",
        "prerequisites": "",
        "source": "SaV 33"
    },
    {
        "name": "Keep Them Reeling",
        "tree": "Piracy",
        "class": "Master Privateer",
        "description": "As a standard action, you can make a single melee attack against a target within reach; if it hits, you deal no damage, but your target amust move or withdraw away from you on its next turn.",
        "prerequisites": "",
        "source": "SaV 33"
    },
    {
        "name": "Raider's Frenzy",
        "tree": "Piracy",
        "class": "Master Privateer",
        "description": "Once per round, when one of your allies in 6 squares damages an enemy, you grant all allies within line of sight a bonus equal to half your class level to damage until the end of your next turn.",
        "prerequisites": "",
        "source": "SaV 33"
    },
    {
        "name": "Raider's Surge",
        "tree": "Piracy",
        "class": "Master Privateer",
        "description": "As a standard action, you can make a Deception or Persuasion check against each enemy within line of sight. If the check succeeds against Will Defense, that enemy must withdraw on its next action or take a -1 penalty to attack for the encounter.",
        "prerequisites": "",
        "source": "SaV 33"
    },
    {
        "name": "Take Them Alive",
        "tree": "Piracy",
        "class": "Master Privateer",
        "description": "Whenever you or any of your allies within 6 squares of you reduces a target to 0 hit points, you can choose to treat that opponent as though they had been reduced to 0 by stun damage.",
        "prerequisites": "",
        "source": "SaV 33"
    },
    {
        "name": "Armored Spacer",
        "tree": "Privateer",
        "class": "Master Privateer",
        "description": "You can use armored spacesuits as if you have Armor Proficiency (heavy)",
        "prerequisites": "",
        "source": "TFU 52"
    },
    {
        "name": "Attract Privateer",
        "tree": "Privateer",
        "class": "Master Privateer",
        "description": "You gain a nonheroic privateer of three quarters your class level to accompany you\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "TFU 52"
    },
    {
        "name": "Blaster and Blade I",
        "tree": "Privateer",
        "class": "Master Privateer",
        "description": "You may make a free attack with a pistol whenever you make a single attack with an advanced melee weapon",
        "prerequisites": "",
        "source": "TFU 52"
    },
    {
        "name": "Blaster and Blade II",
        "tree": "Privateer",
        "class": "Master Privateer",
        "description": "You may treat an advanced melee weapon as two-handed when wielding it with a blaster pistol",
        "prerequisites": "",
        "source": "TFU 52"
    },
    {
        "name": "Boarder",
        "tree": "Privateer",
        "class": "Master Privateer",
        "description": "You ignore cover, but not improved cover, when aboard a starship or space station",
        "prerequisites": "",
        "source": "TFU 52"
    },
    {
        "name": "Ion Mastery",
        "tree": "Privateer",
        "class": "Master Privateer",
        "description": "You gain +1 to attack rolls and deal +1 die damage when using ion weapons",
        "prerequisites": "",
        "source": "TFU 52"
    },
    {
        "name": "Multiattack Proficiency (advanced melee weapons)",
        "tree": "Privateer",
        "class": "Master Privateer",
        "description": "Reduce penalty to attack rolls when making multiple attacks with advanced melee weapons by 2\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "TFU 52"
    },
    {
        "name": "Preserving Shot",
        "tree": "Privateer",
        "class": "Master Privateer",
        "description": "Upon dealing enough damage to destroy a vehicle with vehicle weaponry, you can instead deal half damage, move it -1 step down the condition track and disable its sublight engines and hyperdrive",
        "prerequisites": "",
        "source": "TFU 52"
    },
    {
        "name": "Bring them Back",
        "tree": "Advanced Medicine",
        "class": "Medic",
        "description": "You may use Treat Injury to revivify on a target that has died within a number of rounds equal to half your heroic level",
        "prerequisites": "",
        "source": "TFU 54"
    },
    {
        "name": "Emergency Team",
        "tree": "Advanced Medicine",
        "class": "Medic",
        "description": "Allies automatically succeed on aid another attempts for you to Treat Injury",
        "prerequisites": "",
        "source": "TFU 54"
    },
    {
        "name": "Extra First Aid",
        "tree": "Advanced Medicine",
        "class": "Medic",
        "description": "You may use Treat Injury to perform first aid on a target once more per day",
        "prerequisites": "",
        "source": "TFU 54"
    },
    {
        "name": "Medical Miracle",
        "tree": "Advanced Medicine",
        "class": "Medic",
        "description": "Make a DC 20 Treat Injury check to give an adjacent target an immediate second wind",
        "prerequisites": "",
        "source": "TFU 54"
    },
    {
        "name": "Natural Healing",
        "tree": "Advanced Medicine",
        "class": "Medic",
        "description": "You may use Treat Injury to perform first aid, treat disease and treat poison without a medical kit, provided appropriate substitutes",
        "prerequisites": "",
        "source": "TFU 54"
    },
    {
        "name": "Steady Under Pressure",
        "tree": "Advanced Medicine",
        "class": "Medic",
        "description": "You may reroll any Treat Injury check and keep the better result",
        "prerequisites": "",
        "source": "TFU 54"
    },
    {
        "name": "Battlefield Medic",
        "tree": "Advanced Medicine",
        "class": "Medic",
        "description": "You may use Treat Injury to perform first aid as a standard action",
        "prerequisites": "",
        "source": "TFU 54"
    },
    {
        "name": "Second Chance",
        "tree": "Advanced Medicine",
        "class": "Medic",
        "description": "Your patient does not take damage, nor die, from you failing a Treat Injury check",
        "prerequisites": "",
        "source": "TFU 54"
    },
    {
        "name": "Advantageous Strike",
        "tree": "Melee Duelist",
        "class": "Melee Duelist",
        "description": "+5 to attacks of opportunity with proficient weapons",
        "prerequisites": "",
        "source": "KotOR 47"
    },
    {
        "name": "Dirty Tricks",
        "tree": "Melee Duelist",
        "class": "Melee Duelist",
        "description": "Feint as two swift actions against an opponent you threaten rather than a standard action",
        "prerequisites": "",
        "source": "KotOR 47"
    },
    {
        "name": "Dual Weapon Flourish I",
        "tree": "Melee Duelist",
        "class": "Melee Duelist",
        "description": "Make a free single attack with your second light weapon whenever making a single attack",
        "prerequisites": "",
        "source": "KotOR 47"
    },
    {
        "name": "Dual Weapon Flourish II",
        "tree": "Melee Duelist",
        "class": "Melee Duelist",
        "description": "Make a full attack with two light weapons as a standard action rather than a full-round action",
        "prerequisites": "",
        "source": "KotOR 47"
    },
    {
        "name": "Master of Elegance",
        "tree": "Melee Duelist",
        "class": "Melee Duelist",
        "description": "You may add your Dexterity bonus instead of your Strength bonus to damage rolls with a light weapon",
        "prerequisites": "",
        "source": "KotOR 47"
    },
    {
        "name": "Multiattack Proficiency (advanced melee weapons)",
        "tree": "Melee Duelist",
        "class": "Melee Duelist",
        "description": "Reduce penalty to attack rolls when making multiple attacks with advanced melee weapons by 2\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "KotOR 47"
    },
    {
        "name": "Out of Nowhere",
        "tree": "Melee Duelist",
        "class": "Melee Duelist",
        "description": "Once per encounter, as a free action, make an attack with a light weapon after a successful feint",
        "prerequisites": "",
        "source": "KotOR 47"
    },
    {
        "name": "Single Weapon Flourish I",
        "tree": "Melee Duelist",
        "class": "Melee Duelist",
        "description": "You may move your speed as a free action when making a full attack with a single light melee weapon",
        "prerequisites": "",
        "source": "KotOR 47"
    },
    {
        "name": "Single Weapon Flourish II",
        "tree": "Melee Duelist",
        "class": "Melee Duelist",
        "description": "Make a full attack with a single light weapon as a standard action rather than a full-round action",
        "prerequisites": "",
        "source": "KotOR 47"
    },
    {
        "name": "Breach Cover",
        "tree": "Military Engineer",
        "class": "Military Engineer",
        "description": "When you fire or throw a weapon with a burst or splash radius at a target with cover, you ignore that cover.",
        "prerequisites": "",
        "source": "CW 45"
    },
    {
        "name": "Breaching Explosive",
        "tree": "Military Engineer",
        "class": "Military Engineer",
        "description": "You ignore the damage threshold of doors and walls when using mines and fixed (non-grenade) explosives.",
        "prerequisites": "",
        "source": "CW 45"
    },
    {
        "name": "Prepared Explosive",
        "tree": "Military Engineer",
        "class": "Military Engineer",
        "description": "When you use a mine, you can choose to have the blast radius become difficult terrain after the explosive has detonated. Alternately, you can have the explosive deal no damage and instead turn difficult terrain into normal terrain.",
        "prerequisites": "",
        "source": "CW 45"
    },
    {
        "name": "Problem Solver",
        "tree": "Military Engineer",
        "class": "Military Engineer",
        "description": "As a swift action designate a vehicle within your line of sight whose pilot can hear and understand you; the pilot ignores difficult terrain and gains a +5 bonus on all Pilot checks made to avoid hazards and collisions until the start of your next turn.",
        "prerequisites": "",
        "source": "CW 45"
    },
    {
        "name": "Repairs on the Fly",
        "tree": "Military Engineer",
        "class": "Military Engineer",
        "description": "You can use the Repair application of the Mechanics skill to repair a droid or object as a standard action. You can gain the benefits of this talent only once per day per droid, object, or vehicle repaired.",
        "prerequisites": "",
        "source": "CW 45"
    },
    {
        "name": "Droid Expert",
        "tree": "Military Engineer",
        "class": "Military Engineer",
        "description": "When you repair a droid, you repair 1 additional hit point for each point by which your Mechanics check beats the base DC of 20.",
        "prerequisites": "",
        "source": "CW 45"
    },
    {
        "name": "Quick Modifications",
        "tree": "Military Engineer",
        "class": "Military Engineer",
        "description": "When you create a field-created weapon (as per the class feature], you can choose one weapon modification from the Tech Specialist feat (see page 21 of Starships of the Galaxy) to apply to the created weapon at the time of creation.",
        "prerequisites": "",
        "source": "CW 45"
    },
    {
        "name": "Sabotage Device",
        "tree": "Military Engineer",
        "class": "Military Engineer",
        "description": "As a swift action, you can sabotage any object or weapon powered by an energy cell so that it becomes a grenade.",
        "prerequisites": "",
        "source": "CW 46"
    },
    {
        "name": "Tech Savant",
        "tree": "Military Engineer",
        "class": "Military Engineer",
        "description": "As a standard action, you can increase the speed of one adjacent droid or vehide you occupy by 1 square (applied to any method of locomotion) until the end of your next turn.",
        "prerequisites": "",
        "source": "CW 46"
    },
    {
        "name": "Vehicular Boost",
        "tree": "Military Engineer",
        "class": "Military Engineer",
        "description": "As a standard action, you can make a DC 15 Mechanics check to grant one vehicle you occupy a number of bonus hit points equal to 5 × your class level.",
        "prerequisites": "",
        "source": "CW 46"
    },
    {
        "name": "Disciplined Trickery",
        "tree": "Fugitive Officer",
        "class": "Officer",
        "description": "Allow an ally in 12 squares to reroll a Deception or Stealth check, but keep the second result",
        "prerequisites": "",
        "source": "LE 42"
    },
    {
        "name": "Group Perception",
        "tree": "Fugitive Officer",
        "class": "Officer",
        "description": "Whenever you roll a Perception check, all allies in 6 squares do the same and you take the highest",
        "prerequisites": "",
        "source": "LE 42"
    },
    {
        "name": "Hasty Withdrawl",
        "tree": "Fugitive Officer",
        "class": "Officer",
        "description": "Target up to your Charisma modifier in allies and grant them a free Withdraw action",
        "prerequisites": "",
        "source": "LE 42"
    },
    {
        "name": "Stealthy Withdrawl",
        "tree": "Fugitive Officer",
        "class": "Officer",
        "description": "When making Hasty Withdrawl, an ally can make a free Stealth check",
        "prerequisites": "",
        "source": "LE 42"
    },
    {
        "name": "Stalwart Subordanates",
        "tree": "Fugitive Officer",
        "class": "Officer",
        "description": "Whenever an ally in 12 squares has its Will Defense targeted by a skill, the enemy must reroll and take the lower result",
        "prerequisites": "",
        "source": "LE 42"
    },
    {
        "name": "Stay in the Fight",
        "tree": "Fugitive Officer",
        "class": "Officer",
        "description": "Remove mind-affecting or fear effect from ally and grant 10+ class level bonus hit points",
        "prerequisites": "",
        "source": "LE 42"
    },
    {
        "name": "Assault Tactics",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "Make a DC 15 Knowledge (tactics) check as a move action to provide you and allies with +1d6 points of damage to a designated target with each successful melee or ranged attack until the start of your next turn",
        "prerequisites": "",
        "source": "221"
    },
    {
        "name": "Exploit Weakness",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "When you use the Assault Tactics talent on an enemy, the target takes a cumulative -1 penaity to Reflex Defense each time it is damaged by one of your allies (maximum -5). This penaity applies until the end of your next turn.",
        "prerequisites": "",
        "source": "CW 42"
    },
    {
        "name": "Commander's Prerogative",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "after surprise rnd take your turn before allies but must share talent (special quality, Commando, Leadership or Military Tactics), next rnd return to normal spot in Init order",
        "prerequisites": "",
        "source": "UR 31"
    },
    {
        "name": "Turn the Tide",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "1/enc after first round Knowledge (tactics) v. Will Def of enemies w/in 12sq & LOS for enemies to reroll Init at start of next round, allies in LOS can choose to reroll",
        "prerequisites": "",
        "source": "UR 31"
    },
    {
        "name": "Deployment Tactics",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "Make a DC 15 Knowledge (tactics) check as a move action to provide you and allies with a +1 bonus to attack rolls against flanked opponents or Reflex Defense against attacks of opportunity until the start of your next turne",
        "prerequisites": "",
        "source": "221"
    },
    {
        "name": "Field Tactics",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "Make a DC 15 Knowledge (tactics) check as a move action to provide you and allies with a +10 cover bonus to Reflex Defense from available cover until the start of your next turn",
        "prerequisites": "",
        "source": "221"
    },
    {
        "name": "One for the Team",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "You can take half or all of the damage dealt to an adjacent ally from a single attack, and vice versa",
        "prerequisites": "",
        "source": "221"
    },
    {
        "name": "Grand Leader",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "As a swift action, once per encounter, you can grant bonus hit points equal to 5 + one-half your character level to all allies within 20 squares of you and in your line of sight.",
        "prerequisites": "",
        "source": "CW 42"
    },
    {
        "name": "Irregular Tactics",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "after using share talent Knowledge (tactics) as free to replace DC of any talents from this tree",
        "prerequisites": "",
        "source": "UR 31"
    },
    {
        "name": "Lead by Example",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "any character that would benefit from shared talent: 1. DC -5, 2. +2 atk Def or dam, 3. reduce dam taken by 10",
        "prerequisites": "",
        "source": "UR 31"
    },
    {
        "name": "Shift Defense I",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "As a swift action, you can take a -2 penalty to one defense to gain a +1 bonus to another defense until the start of your next turn",
        "prerequisites": "",
        "source": "222"
    },
    {
        "name": "Shift Defense II",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "As a swift action, you can take a -5 penalty to one defense to gain a +2 bonus to another defense until the start of your next turn",
        "prerequisites": "",
        "source": "222"
    },
    {
        "name": "Tactical Edge",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "Assault Tactics, Deployment Tactics and Field Tactics can be used as swift actions",
        "prerequisites": "",
        "source": "222"
    },
    {
        "name": "Uncanny Defense",
        "tree": "Military Tactics",
        "class": "Officer",
        "description": "Once per day, you can add one-half your officer class level to all your defenses for one round. You must declare that you are using this talent at the beginning of your turn. The benefits last until the beginning of your next turn.",
        "prerequisites": "",
        "source": "CW 42"
    },
    {
        "name": "Combined Fire",
        "tree": "Naval Officer",
        "class": "Officer",
        "description": "Designate a target as a swift action for weapon batteries to gain an extra die of damage for every 2 points their attack exceeds the target's Reflex Defense, and also allow one weapon system to make a single attack during Tactical Fire",
        "prerequisites": "",
        "source": "SotG 18"
    },
    {
        "name": "Fleet Deployment",
        "tree": "Naval Officer",
        "class": "Officer",
        "description": "As a full-round action grant a number of vehicles equal to your class level within your line of sight the ability to move their speed immediately",
        "prerequisites": "",
        "source": "SotG 18"
    },
    {
        "name": "Fleet Tactics",
        "tree": "Naval Officer",
        "class": "Officer",
        "description": "Designate a single vehicle as a standard action and succeed at a DC 15 Knowledge (tactics) check to grant all allied gunners within line of sight an additional die of damage with ranged attacks",
        "prerequisites": "",
        "source": "SotG 18"
    },
    {
        "name": "It's a Trap!",
        "tree": "Naval Officer",
        "class": "Officer",
        "description": "Once per encounter as a swift action grant the pilot of any vehicle within line of sight an immediate move action",
        "prerequisites": "",
        "source": "SotG 18"
    },
    {
        "name": "Legendary Commander",
        "tree": "Naval Officer",
        "class": "Officer",
        "description": "Capital Ships under your command calculate Reflex Defense as if it had Improved Armor Defense, with gunners gaining either half their heroic level or your heroic level to damage and the quality level of generic crew increases by one",
        "prerequisites": "",
        "source": "SotG 18"
    },
    {
        "name": "Recruit Enemy",
        "tree": "Rebel Recruiter",
        "class": "Officer",
        "description": "Once per encounter make a Persuasion check against Will Defense to deal half damage to the target and move it -1 step on the condition track, and the target becomes your ally and friendly. If the target is of a higher level than you it gains a +5 bonus to its Will Defense.",
        "prerequisites": "",
        "source": "RE 41"
    },
    {
        "name": "Bolstered Numbers",
        "tree": "Rebel Recruiter",
        "class": "Officer",
        "description": "Whenever you successfully use Recruit Enemy on a target, you and all allies within line of sight gain a +2 morale bonus to attack rolls until the end of the encounter.\r\nPrerequisite: Recruit Enemy.",
        "prerequisites": "Recruit Enemy",
        "source": "RE 40"
    },
    {
        "name": "Noble Sacrifice",
        "tree": "Rebel Recruiter",
        "class": "Officer",
        "description": "Whenever you successfully use Recruit Enemy on a target, if that target is reduced to 0 hit points or moved to the bottom of the condition track, as a reaction you can grant yourself and all allies within line of sight a number of bonus hit points equal to 10 + your class level. Damage is subtracted from bonus hit points first, and any bonus hit points remaining at the end of the encounter are lost. Bonus hit points do not stack. No bonus hit points may be granted if you or an ally reduce the target to 0 hit points or move it to the bottom of the condition track.\r\nPrerequisite: Recruit Enemy.",
        "prerequisites": "Recruit Enemy",
        "source": "RE 40"
    },
    {
        "name": "Stay in the Fight",
        "tree": "Rebel Recruiter",
        "class": "Officer",
        "description": "lf you successfully use Recruit Enemy on a target and that target can catch a second wind, the target can to so immediately as a reaction.\r\nPrerequisite: Recruit Enemy.",
        "prerequisites": "Recruit Enemy",
        "source": "RE 41"
    },
    {
        "name": "Team Recruiting",
        "tree": "Rebel Recruiter",
        "class": "Officer",
        "description": "You can use your Recruit Enemy talent whenever you or an ally would deal enough damage to kill a target, instead of only when you do.\r\nPrerequisite: Recruit Enemy.",
        "prerequisites": "Recruit Enemy",
        "source": "RE 41"
    },
    {
        "name": "Preternatural Senses",
        "tree": "Outlaw",
        "class": "Outlaw",
        "description": "Once per encounter, as a reaction, you can add one half your class level to the defense score of your choice",
        "prerequisites": "",
        "source": "SaV 35"
    },
    {
        "name": "Seize the Moment",
        "tree": "Outlaw",
        "class": "Outlaw",
        "description": "Once per round, whenever an ally successfully damage an opponent, you can take a swift action as a reaction",
        "prerequisites": "",
        "source": "SaV 35"
    },
    {
        "name": "Find an Opening",
        "tree": "Outlaw",
        "class": "Outlaw",
        "description": "Whenever you would use Seize the Moment, you can forgo the swift action to be able to aim as a single swift action on your next turn",
        "prerequisites": "",
        "source": "SaV 35"
    },
    {
        "name": "Uncanny Instincts",
        "tree": "Outlaw",
        "class": "Outlaw",
        "description": "Once per encounter whenever an opponent successfully deals damage to you, you can move 1 square as a reaction without provoking",
        "prerequisites": "",
        "source": "SaV 35"
    },
    {
        "name": "Opportunistic Defense",
        "tree": "Outlaw",
        "class": "Outlaw",
        "description": "Once per encounter, whenever you would use Uncanny Instincts, you can forgo the extra movement and instead increase your Reflex Defense by 5 until the end of your next turn",
        "prerequisites": "",
        "source": "SaV 35"
    },
    {
        "name": "Tangle Up",
        "tree": "Outlaw",
        "class": "Outlaw",
        "description": "As a standard action, you can make a non-area attack against an opponent within range. If it hits, you deal half your normal damage, but your opponent loses its next move action",
        "prerequisites": "",
        "source": "SaV 35"
    },
    {
        "name": "Bunker Blaster",
        "tree": "Pathfinder",
        "class": "Pathfinder",
        "description": "If you are adjacent to an object that can provide you with cover from a target, you can aim at that target as a move action.",
        "prerequisites": "",
        "source": "RE 45"
    },
    {
        "name": "Enhance Cover",
        "tree": "Pathfinder",
        "class": "Pathfinder",
        "description": "As a swift action, you can designate a single ally within your line of sight who has cover from one or more enemies. That ally is considered instead to have improved cover against those enemies until the start of your next turn as long as the ally still has cover.",
        "prerequisites": "",
        "source": "RE 45"
    },
    {
        "name": "Escort Fighter",
        "tree": "Pathfinder",
        "class": "Pathfinder",
        "description": "You can spend a swift action to designate one adjacent ally. Until the start of your next turn. if you move. that ally can also move the same number of squares, provided that the ally ends its movement adjacent to you. You cannot move a distance greater than the ally's speed.",
        "prerequisites": "",
        "source": "RE 45"
    },
    {
        "name": "Safe Passage",
        "tree": "Pathfinder",
        "class": "Pathfinder",
        "description": "Once per turn, you can spend a move action to allow one ally within line of sight to move up to its speed as a reaction. If a target makes an attack of opportunity against the ally during its movement. you can make an attack of opportunity against that target.\r\nPrerequisite: Escort Fighter.",
        "prerequisites": "Escort Fighter",
        "source": "RE 45"
    },
    {
        "name": "Safe Zone",
        "tree": "Pathfinder",
        "class": "Pathfinder",
        "description": "As a standard action, you can identify a safe zone, within which your allies gain certain advantages. You designate a 4-by-4 square area of the combat area as a safe zone; at least 1 square of the safe zone must be the square that you currently occupy. Each ally who starts his or her turn within the safe zone gains a +2 circumstance bonus to his or her Fortitude Defense and Will Defense until the start of the alley's next turn. The safe zone lasts until the end of the encounter, and you can have only one safe zone in effect at a time. You can create a new safe zone as a standard action, dismissing the old safe zone and replacing it with the new one, but no square of the old safe zone can overlap with any square of the new safe zone. You cannot create a safe zone in a space that overlaps another pathfinder's safe zone.",
        "prerequisites": "",
        "source": "RE 45"
    },
    {
        "name": "Defensive Measures",
        "tree": "Pathfinder",
        "class": "Pathfinder",
        "description": "All enemies treat your safe zone as difficult terrain.\r\nPrerequisite: Safe Zone.",
        "prerequisites": "Safe Zone",
        "source": "RE 45"
    },
    {
        "name": "Launch Point",
        "tree": "Pathfinder",
        "class": "Pathfinder",
        "description": "Any ally who starts his or her turn within your safe zone and then exits the zone gains a +2 bonus to attack rolls before the end of that ally's turn, provided that the ally is not within your safe zone when the attack is made.\r\nPrerequisite: Safe Zone.",
        "prerequisites": "Safe Zone",
        "source": "RE 45"
    },
    {
        "name": "Obscuring Defenses",
        "tree": "Pathfinder",
        "class": "Pathfinder",
        "description": "Enemies that fire into your safe zone take a -2 penalty to attack rolls.\r\nPrerequisite: Safe Zone.",
        "prerequisites": "Safe Zone",
        "source": "RE 45"
    },
    {
        "name": "Relocate",
        "tree": "Pathfinder",
        "class": "Pathfinder",
        "description": "You can dismiss your safe zone as a swift action, ending its current effects. Any allies in the space your safe zone was occupying gain a +2 bonus to their speed until the start of your next turn. When you use this talent, you cannot create a new safe zone until the start of your next turn. \r\nPrerequisite: Safe Zone.",
        "prerequisites": "Safe Zone",
        "source": "RE 45"
    },
    {
        "name": "Zone of Recouperation",
        "tree": "Pathfinder",
        "class": "Pathfinder",
        "description": "Any ally who catches a second wind while within your safe zone regains a number of additional hit points equal to your class level.\r\nPrerequisite: Safe Zone.",
        "prerequisites": "Safe Zone",
        "source": "RE 45"
    },
    {
        "name": "Device Jammer",
        "tree": "Sabotage",
        "class": "Saboteur",
        "description": "Make a DC 20 Mechanics check as a full-round action to disable all electronic equipment of a particular type (except for droid, vehicle or weapon) within 12 squares for the rest of the encounter",
        "prerequisites": "",
        "source": "TFU 56"
    },
    {
        "name": "Droid Jammer",
        "tree": "Sabotage",
        "class": "Saboteur",
        "description": "Make a Mechanics check as a full-round action against the Will Defense of any droid that comes within 6 squares of you for the rest of the encounter to allow them to only take swift actions",
        "prerequisites": "",
        "source": "TFU 56"
    },
    {
        "name": "Mine Mastery",
        "tree": "Sabotage",
        "class": "Saboteur",
        "description": "You may place a mine as a standard action",
        "prerequisites": "",
        "source": "TFU 57"
    },
    {
        "name": "Skilled Demolitionist",
        "tree": "Sabotage",
        "class": "Saboteur",
        "description": "You can set a detonator as a swift action, and your explosives never detonate while you are setting them",
        "prerequisites": "",
        "source": "TFU 57"
    },
    {
        "name": "Shaped Explosion",
        "tree": "Sabotage",
        "class": "Saboteur",
        "description": "Choose to change an explosion into a line twice the radius or a cone three times the radius of the original explosion",
        "prerequisites": "",
        "source": "TFU 57"
    },
    {
        "name": "Blaster Turret I",
        "tree": "Turret",
        "class": "Saboteur",
        "description": "Create a turret once per encounter as a standard action, which fires at a target you designate once per round whilst adjacent",
        "prerequisites": "",
        "source": "TFU 57"
    },
    {
        "name": "Blaster Turret II",
        "tree": "Turret",
        "class": "Saboteur",
        "description": "Your turret is more powerful, and can be controlled at a range of 12 squares",
        "prerequisites": "",
        "source": "TFU 57"
    },
    {
        "name": "Ion Turret",
        "tree": "Turret",
        "class": "Saboteur",
        "description": "Your turret can deal ion damage",
        "prerequisites": "",
        "source": "TFU 57"
    },
    {
        "name": "Stun Turret",
        "tree": "Turret",
        "class": "Saboteur",
        "description": "Your turret can deal stun damage",
        "prerequisites": "",
        "source": "TFU 57"
    },
    {
        "name": "Turret Self-Destruct",
        "tree": "Turret",
        "class": "Saboteur",
        "description": "Your turret explodes in a 2-square radius when it reaches 0 hit points unless you disable it",
        "prerequisites": "",
        "source": "TFU 57"
    },
    {
        "name": "Adrenaline Implant",
        "tree": "Implant",
        "class": "Shaper",
        "description": "1/encounter give willing creature 10 bonus hit points per round",
        "prerequisites": "",
        "source": "LE 47"
    },
    {
        "name": "Precision Implant",
        "tree": "Implant",
        "class": "Shaper",
        "description": "1/encounter give willing creature +1 equipment bonus to attack rolls",
        "prerequisites": "",
        "source": "LE 47"
    },
    {
        "name": "Resilience Implant",
        "tree": "Implant",
        "class": "Shaper",
        "description": "1/encounter give +5 equipment bonus to damage threshold to willing creature",
        "prerequisites": "",
        "source": "LE 47"
    },
    {
        "name": "Speed Implant",
        "tree": "Implant",
        "class": "Shaper",
        "description": "1/encounter increase target's base speed by 2",
        "prerequisites": "",
        "source": "LE 47"
    },
    {
        "name": "Strength Implant",
        "tree": "Implant",
        "class": "Shaper",
        "description": "1/encounter grant +1 die of melee damage to willing creature",
        "prerequisites": "",
        "source": "LE 47"
    },
    {
        "name": "Biotech Mastery",
        "tree": "Shaper",
        "class": "Shaper",
        "description": "Take 10 when installing biotech and at half cost and time",
        "prerequisites": "",
        "source": "LE 47"
    },
    {
        "name": "Expert Shaper",
        "tree": "Shaper",
        "class": "Shaper",
        "description": "Reroll any Treat Injury check to repair or modify biotech",
        "prerequisites": "",
        "source": "LE 47"
    },
    {
        "name": "Expedient Mending",
        "tree": "Shaper",
        "class": "Shaper",
        "description": "You can temporarily mend a biotech item as a standard action",
        "prerequisites": "",
        "source": "LE 47"
    },
    {
        "name": "Master Mender",
        "tree": "Shaper",
        "class": "Shaper",
        "description": "When you temporarily mend a biotech device it moves up 4 steps and only 3 steps down at the end of the encounter",
        "prerequisites": "",
        "source": "LE 47"
    },
    {
        "name": "Skilled Implanter",
        "tree": "Shaper",
        "class": "Shaper",
        "description": "When you use Biotech Surgery, biotech attack against patient is halved",
        "prerequisites": "",
        "source": "LE 47"
    },
    {
        "name": "Affliction",
        "tree": "Sith",
        "class": "Sith Apprentice",
        "description": "A single opponent damaged by a Force power of yours takes 2d6 damage at the start of its next turn",
        "prerequisites": "",
        "source": "KotOR 40"
    },
    {
        "name": "Drain Force",
        "tree": "Sith",
        "class": "Sith Apprentice",
        "description": "Once per encounter, upon damaging a Force-sensitive opponent, you regain a spent Force power and they lose a Force Point",
        "prerequisites": "",
        "source": "KotOR 40"
    },
    {
        "name": "Dark Healing",
        "tree": "Sith",
        "class": "Sith Apprentice",
        "description": "Spend a Force Point as a standard action to make an attack roll against the Fortitude Defense or a target within 6 squares, dealing 1d6 points of damage per class level and healing yourself an equivalent amount on a hit",
        "prerequisites": "",
        "source": "223"
    },
    {
        "name": "Improved Dark Healing",
        "tree": "Sith",
        "class": "Sith Apprentice",
        "description": "Your Dark Healing target may be within 12 squares, and you do half damage and heal even on a failed attack",
        "prerequisites": "",
        "source": "224"
    },
    {
        "name": "Dark Scourge",
        "tree": "Sith",
        "class": "Sith Apprentice",
        "description": "+1 bonus to attack rolls against Jedi",
        "prerequisites": "",
        "source": "223"
    },
    {
        "name": "Dark Side Adept",
        "tree": "Sith",
        "class": "Sith Apprentice",
        "description": "You can reroll Use the Force checks to activate dark side Force powers, but must keep the result of the reroll",
        "prerequisites": "",
        "source": "223"
    },
    {
        "name": "Dark Side Master",
        "tree": "Sith",
        "class": "Sith Apprentice",
        "description": "You can reroll Use the Force checks to activate dark side Force powers and keep the better result by spending a Force Point",
        "prerequisites": "",
        "source": "223"
    },
    {
        "name": "Force Deception",
        "tree": "Sith",
        "class": "Sith Apprentice",
        "description": "Deception checks can be made with Use the Force, and Deception is considered a trained skill",
        "prerequisites": "",
        "source": "223"
    },
    {
        "name": "Stolen Form",
        "tree": "Sith",
        "class": "Sith Apprentice",
        "description": "Gain a lightsaber form from the Jedi Knight Lightsaber Forms talent tree\r\n\r\n(Enter number of times taken)",
        "prerequisites": "",
        "source": "TotG 81"
    },
    {
        "name": "Wicked Strike",
        "tree": "Sith",
        "class": "Sith Apprentice",
        "description": "Upon scoring a critical hit with a lightsaber, spend a Force Point to move the target -2 steps along the condition track",
        "prerequisites": "",
        "source": "224"
    },
    {
        "name": "Sith Alchemy",
        "tree": "Sith Alchemy",
        "class": "Sith Apprentice",
        "description": "Your knowledge of Sith Alchemy allows you to imbue certain objects with the power of the dark side. You can perform any of the following alchemical transformations, though each time you do so, increase your Dark Side Score by 1",
        "prerequisites": "",
        "source": "JATM 21"
    },
    {
        "name": "Cause Mutation",
        "tree": "Sith Alchemy",
        "class": "Sith Apprentice",
        "description": "You can use your mastery of Sith alchemy to create mutated abominations. You must have access to a willing (or unconscious) creature to which you will apply the Sith Abomination template or the Chrysalis Beast template. You also need a medical lab outfitted for the process, which requires a number of days equal to the creature’s modified CL. You must spend a Force Point at the completion of the process to complete the transformation. A creature you have mutated is considered to be a domesticated creature, but for you only (unless it was already a domesticated creature before its mutation)",
        "prerequisites": "",
        "source": "JATM 21"
    },
    {
        "name": "Sith Alchemy Specialist",
        "tree": "Sith Alchemy",
        "class": "Sith Apprentice",
        "description": "You can modify an object with Sith alchemy so that it gains a specific trait. You can only perform one modification at a time. Unless otherwise noted, you cannot grant more than one benefit to single object, and you cannot apply the same benefit more than once. You must spend a Force Point and devote 1 hour of uninterrupted work to apply a trait to the relevant object, and when you do so, you increase your Dark Side Score by 1",
        "prerequisites": "",
        "source": "JATM 21"
    },
    {
        "name": "Rapid Alchemy",
        "tree": "Sith Alchemy",
        "class": "Sith Apprentice",
        "description": "As a standard action, you can perform minor alchemical alterations to a melee weapon you wield. For the remainder of the encounter, you gain a +2 equipment bonus on attack rolls with that weapon. Additionally, once before the end of the encounter, you can sacrifice this bonus as a free action to gain a +5 equipment bonus on a single damage roll you make with that weapon",
        "prerequisites": "",
        "source": "JATM 21"
    },
    {
        "name": "Focus Terror",
        "tree": "Sith Commander",
        "class": "Sith Apprentice",
        "description": "1/encounter all allies move +2 steps up the condition track but suffer -2 to attacks and skills for character level rounds",
        "prerequisites": "",
        "source": "LE 43"
    },
    {
        "name": "Desperate Measures",
        "tree": "Sith Commander",
        "class": "Sith Apprentice",
        "description": "1/encounter grant all allies immediate attack at -5 penalty",
        "prerequisites": "",
        "source": "LE 43"
    },
    {
        "name": "Incite Rage",
        "tree": "Sith Commander",
        "class": "Sith Apprentice",
        "description": "1/encounter grant all allies +1 bonus on attack rolls but -2 on Reflex Defense",
        "prerequisites": "",
        "source": "LE 43"
    },
    {
        "name": "Power of Hatred",
        "tree": "Sith Commander",
        "class": "Sith Apprentice",
        "description": "1/encounter all allies at 1/2 hit points gain bonus hit points equal to your character level",
        "prerequisites": "",
        "source": "LE 43"
    },
    {
        "name": "Enhanced Vision",
        "tree": "Vanguard",
        "class": "Vanguard",
        "description": "When actively looking for hidden enemies, you can make a Perception check as a swift action instead of a standard action",
        "prerequisites": "",
        "source": "CW 47"
    },
    {
        "name": "Triangulate",
        "tree": "Vanguard",
        "class": "Vanguard",
        "description": "If you and at least one other ally have line of sight to and are aware of a target, you and allies that can hear and understand you can reroll one ranged attack roll against that target, accepting the second result even if it is worse. You and your allies can only gain the benefit of this talent once per encounter",
        "prerequisites": "",
        "source": "CW 47"
    },
    {
        "name": "Mark the Target",
        "tree": "Vanguard",
        "class": "Vanguard",
        "description": "Whenever you damage a target with a non-area ranged attack, you may designate one ally within your line of sight as a swift action. Your target is considered flat-footed against that ally's first attack made before the start of your next turn.",
        "prerequisites": "",
        "source": "CW 47"
    },
    {
        "name": "Maximize Cover",
        "tree": "Vanguard",
        "class": "Vanguard",
        "description": "When an opponent uses the aim action to negate your cover, you can make a Stealth check opposed by the attacker's Initiative check. If successful, you retain your cover bonus.",
        "prerequisites": "",
        "source": "CW 47"
    },
    {
        "name": "Impenetrable Cover",
        "tree": "Vanguard",
        "class": "Vanguard",
        "description": "Whenever you have cover against a target, you gain DR equal to your cIassievei against that target until the start of your next turn, provided you still have cover from the target at the time the attack is made.",
        "prerequisites": "",
        "source": "CW 47"
    },
    {
        "name": "Invisible Attacker",
        "tree": "Vanguard",
        "class": "Vanguard",
        "description": "If your target is unaware of you, your ranged attacks deal + 1 die of damage against that target.",
        "prerequisites": "",
        "source": "CW 47"
    },
    {
        "name": "Soften the Target",
        "tree": "Vanguard",
        "class": "Vanguard",
        "description": "Whenever you damage a target with a ranged attack, you may designate one ally within your line of sight as a swift action. The ally you designate ignores the target's damage reduction and SR (if any) until the start of your next turn.",
        "prerequisites": "",
        "source": "CW 47"
    },
    {
        "name": "Shellshock",
        "tree": "Vanguard",
        "class": "Vanguard",
        "description": "Whenever you damage a target that is unaware of you with an area attack, that target is considered flat-footed until the start of your next turn.",
        "prerequisites": "",
        "source": "CW 47"
    }
];
