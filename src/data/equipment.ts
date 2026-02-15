import type { Weapon, Armor, Item } from '../types';

export const WEAPONS: Weapon[] = [
    {
        "name": "Electropole",
        "group": "Simple",
        "size": "m",
        "type": "Bludgeoning and Energy ",
        "damage": "2d8",
        "stun": true,
        "rateOfFire": "",
        "range": "M",
        "cost": 1500,
        "weight": 1.3,
        "description": "Damage: 2d8, Type: Bludgeoning and Energy , Stun: Yes"
    },
    {
        "name": "Electrostaff",
        "group": "advanced melee",
        "size": "l",
        "type": "Bludgeoning and Energy",
        "damage": "2d6 / 2d6",
        "stun": true,
        "rateOfFire": "",
        "range": "M",
        "cost": 3000,
        "weight": 2,
        "description": "Damage: 2d6 / 2d6, Type: Bludgeoning and Energy, Stun: Yes"
    },
    {
        "name": "Energy lance",
        "group": "advanced melee",
        "size": "l",
        "type": "Piercing and Energy",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 3500,
        "weight": 5,
        "description": "Damage: 2d8, Type: Piercing and Energy, Stun: No"
    },
    {
        "name": "Force pike",
        "group": "advanced melee",
        "size": "m",
        "type": "Piercing and Energy",
        "damage": "2d8",
        "stun": true,
        "rateOfFire": "",
        "range": "M",
        "cost": 500,
        "weight": 2,
        "description": "Damage: 2d8, Type: Piercing and Energy, Stun: Yes"
    },
    {
        "name": "Power hammer",
        "group": "advanced melee",
        "size": "l",
        "type": "Bludgeoning",
        "damage": "2d12",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 1500,
        "weight": 10,
        "description": "Damage: 2d12, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Power lance",
        "group": "advanced melee",
        "size": "l",
        "type": "Bludgeoning and Energy",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 2500,
        "weight": 5,
        "description": "Damage: None, Type: Bludgeoning and Energy, Stun: No"
    },
    {
        "name": "San-ni staff",
        "group": "advanced melee",
        "size": "l",
        "type": "Energy and bludgeoning",
        "damage": "2d6 / 2d6",
        "stun": true,
        "rateOfFire": "",
        "range": "M",
        "cost": 4500,
        "weight": 2.2,
        "description": "Damage: 2d6 / 2d6, Type: Energy and bludgeoning, Stun: Yes"
    },
    {
        "name": "Shock stick",
        "group": "advanced melee",
        "size": "l",
        "type": "Energy",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 450,
        "weight": 1.4,
        "description": "Damage: None, Type: Energy, Stun: No"
    },
    {
        "name": "Shock whip",
        "group": "advanced melee",
        "size": "s",
        "type": "Bludgeoning",
        "damage": "1d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 1200,
        "weight": 2.3,
        "description": "Damage: 1d6, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Shockstaff",
        "group": "advanced melee",
        "size": "l",
        "type": "Bludgeoning and Energy",
        "damage": "2d6 / 2d6",
        "stun": true,
        "rateOfFire": "",
        "range": "M",
        "cost": 3500,
        "weight": 3,
        "description": "Damage: 2d6 / 2d6, Type: Bludgeoning and Energy, Stun: Yes"
    },
    {
        "name": "Static pike",
        "group": "advanced melee",
        "size": "l",
        "type": "Energy and piercing",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 300,
        "weight": 1.8,
        "description": "Damage: 2d6, Type: Energy and piercing, Stun: No"
    },
    {
        "name": "Vibro-ax",
        "group": "advanced melee",
        "size": "l",
        "type": "Slashing",
        "damage": "2d10",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 500,
        "weight": 6,
        "description": "Damage: 2d10, Type: Slashing, Stun: No"
    },
    {
        "name": "Vibrobayonet",
        "group": "advanced melee",
        "size": "m",
        "type": "Piercing",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 350,
        "weight": 1,
        "description": "Damage: 2d6, Type: Piercing, Stun: No"
    },
    {
        "name": "Vibroblade",
        "group": "advanced melee",
        "size": "s",
        "type": "Slashing or Piercing",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 250,
        "weight": 1.8,
        "description": "Damage: 2d6, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Vibroblade, dire",
        "group": "advanced melee",
        "size": "m",
        "type": "Slashing or Piercing",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 60,
        "weight": 2,
        "description": "Damage: 2d6, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Vibroblade, double",
        "group": "advanced melee",
        "size": "l",
        "type": "Slashing",
        "damage": "2d6 / 2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 550,
        "weight": 4,
        "description": "Damage: 2d6 / 2d6, Type: Slashing, Stun: No"
    },
    {
        "name": "Vibrodagger",
        "group": "advanced melee",
        "size": "t",
        "type": "Slashing or Piercing",
        "damage": "2d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 200,
        "weight": 1,
        "description": "Damage: 2d4, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Vibroknucklers",
        "group": "advanced melee",
        "size": "t",
        "type": "Slashing",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 200,
        "weight": 0.5,
        "description": "Damage: None, Type: Slashing, Stun: No"
    },
    {
        "name": "Vibrolance",
        "group": "advanced melee",
        "size": "l",
        "type": "Piercing",
        "damage": "2d10",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 500,
        "weight": 2,
        "description": "Damage: 2d10, Type: Piercing, Stun: No"
    },
    {
        "name": "Vibrorapier",
        "group": "advanced melee",
        "size": "m",
        "type": "Slashing",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 500,
        "weight": 1.4,
        "description": "Damage: 2d6, Type: Slashing, Stun: No"
    },
    {
        "name": "Vibrosword",
        "group": "advanced melee",
        "size": "l",
        "type": "Slashing or Piercing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 450,
        "weight": 3,
        "description": "Damage: 2d8, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Guard Shoto",
        "group": "lightsabers",
        "size": "s",
        "type": "Energy and Slashing",
        "damage": "2d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 7000,
        "weight": 1,
        "description": "Damage: 2d4, Type: Energy and Slashing, Stun: No"
    },
    {
        "name": "Lightfoil",
        "group": "lightsabers",
        "size": "s",
        "type": "Energy and Slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 4500,
        "weight": 0.5,
        "description": "Damage: 2d8, Type: Energy and Slashing, Stun: No"
    },
    {
        "name": "Lightfoil, archaic",
        "group": "lightsabers",
        "size": "m",
        "type": "Energy and slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 4500,
        "weight": 0.5,
        "description": "Damage: 2d8, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Lightsaber",
        "group": "lightsabers",
        "size": "m",
        "type": "Energy and Slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 3000,
        "weight": 1,
        "description": "Damage: 2d8, Type: Energy and Slashing, Stun: No"
    },
    {
        "name": "Lightsaber pike",
        "group": "lightsabers",
        "size": "l",
        "type": "Energy and Slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 4000,
        "weight": 2,
        "description": "Damage: 2d8, Type: Energy and Slashing, Stun: No"
    },
    {
        "name": "Lightsaber pike (haft)",
        "group": "lightsabers",
        "size": "l",
        "type": "Energy and Slashing",
        "damage": "1d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 4000,
        "weight": 2,
        "description": "Damage: 1d6, Type: Energy and Slashing, Stun: No"
    },
    {
        "name": "Lightsaber, archaic",
        "group": "lightsabers",
        "size": "m",
        "type": "Energy and slashing",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 2000,
        "weight": 1,
        "description": "Damage: 2d6, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Lightsaber, crossguard",
        "group": "lightsabers",
        "size": "m",
        "type": "Energy and slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 4000,
        "weight": 0.7,
        "description": "Damage: 2d8, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Lightsaber, double",
        "group": "lightsabers",
        "size": "l",
        "type": "Energy and Slashing",
        "damage": "2d8 / 2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 7000,
        "weight": 2,
        "description": "Damage: 2d8 / 2d8, Type: Energy and Slashing, Stun: No"
    },
    {
        "name": "Lightsaber, dual-phase",
        "group": "lightsabers",
        "size": "m",
        "type": "Energy and slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 6000,
        "weight": 0.5,
        "description": "Damage: 2d8, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Lightsaber, dual-phase variant",
        "group": "lightsabers",
        "size": "m",
        "type": "Energy and slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 6000,
        "weight": 0.5,
        "description": "Damage: 2d8, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Lightsaber, dueling",
        "group": "lightsabers",
        "size": "m",
        "type": "Energy and slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 3000,
        "weight": 0.3,
        "description": "Damage: 2d8, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Lightsaber, great",
        "group": "lightsabers",
        "size": "l",
        "type": "Energy and slashing",
        "damage": "2d10",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 5000,
        "weight": 5,
        "description": "Damage: 2d10, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Lightsaber, short",
        "group": "lightsabers",
        "size": "s",
        "type": "Energy and Slashing",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 2500,
        "weight": 0.5,
        "description": "Damage: 2d6, Type: Energy and Slashing, Stun: No"
    },
    {
        "name": "Lightwhip",
        "group": "lightsabers",
        "size": "m",
        "type": "Energy and Slashing",
        "damage": "2d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 5000,
        "weight": 1,
        "description": "Damage: 2d4, Type: Energy and Slashing, Stun: No"
    },
    {
        "name": "Long-handle lightsaber",
        "group": "lightsabers",
        "size": "l",
        "type": "Energy and slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 4500,
        "weight": 2,
        "description": "Damage: 2d8, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Long-handle lightsaber (d10)",
        "group": "lightsabers",
        "size": "l",
        "type": "Energy and slashing",
        "damage": "2d10",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 4500,
        "weight": 2,
        "description": "Damage: 2d10, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Long-handle lightsaber (haft)",
        "group": "lightsabers",
        "size": "l",
        "type": "Energy and slashing",
        "damage": "1d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 4500,
        "weight": 2,
        "description": "Damage: 1d6, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Retrosaber",
        "group": "lightsabers",
        "size": "m",
        "type": "Energy and slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 2000,
        "weight": 1,
        "description": "Damage: 2d8, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Axe",
        "group": "simple",
        "size": "m",
        "type": "Slashing",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 35,
        "weight": 2,
        "description": "Damage: 1d8, Type: Slashing, Stun: No"
    },
    {
        "name": "Bayonet",
        "group": "simple",
        "size": "m",
        "type": "Piercing",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 50,
        "weight": 1,
        "description": "Damage: 1d8, Type: Piercing, Stun: No"
    },
    {
        "name": "Club/baton",
        "group": "simple",
        "size": "s",
        "type": "Bludgeoning",
        "damage": "1d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 15,
        "weight": 0.5,
        "description": "Damage: 1d6, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Contact stunner",
        "group": "simple",
        "size": "s",
        "type": "Bludgeoning or Energy",
        "damage": "1d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 700,
        "weight": 1.1,
        "description": "Damage: 1d4, Type: Bludgeoning or Energy, Stun: No"
    },
    {
        "name": "Datadagger",
        "group": "simple",
        "size": "t",
        "type": "Piercing",
        "damage": "1d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 500,
        "weight": 0.1,
        "description": "Damage: 1d4, Type: Piercing, Stun: No"
    },
    {
        "name": "Entrenching tool",
        "group": "simple",
        "size": "s",
        "type": "Slashing or piercing",
        "damage": "1d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 50,
        "weight": 1,
        "description": "Damage: 1d6, Type: Slashing or piercing, Stun: No"
    },
    {
        "name": "Fire blade",
        "group": "simple",
        "size": "s",
        "type": "Energy and slashing",
        "damage": "2d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 200,
        "weight": 1,
        "description": "Damage: 2d4, Type: Energy and slashing, Stun: No"
    },
    {
        "name": "Gaderffii",
        "group": "simple",
        "size": "l",
        "type": "Bludgeoning and Slashing",
        "damage": "2d4 / 2d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 60,
        "weight": 5,
        "description": "Damage: 2d4 / 2d4, Type: Bludgeoning and Slashing, Stun: No"
    },
    {
        "name": "Knife",
        "group": "simple",
        "size": "t",
        "type": "Slashing or Piercing",
        "damage": "1d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 25,
        "weight": 1,
        "description": "Damage: 1d4, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Mace",
        "group": "simple",
        "size": "m",
        "type": "Bludgeoning",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 50,
        "weight": 2.5,
        "description": "Damage: 1d8, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Mythosaur Axe",
        "group": "simple",
        "size": "l",
        "type": "Slashing",
        "damage": "1d12",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 1000,
        "weight": 10,
        "description": "Damage: 1d12, Type: Slashing, Stun: No"
    },
    {
        "name": "Quarterstaff",
        "group": "simple",
        "size": "l",
        "type": "Bludgeoning",
        "damage": "1d6 / 1d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 65,
        "weight": 1.8,
        "description": "Damage: 1d6 / 1d6, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Riot Shield",
        "group": "simple",
        "size": "m",
        "type": "Bludgeoning",
        "damage": "2d6",
        "stun": true,
        "rateOfFire": "",
        "range": "M",
        "cost": 500,
        "weight": 6,
        "description": "Damage: 2d6, Type: Bludgeoning, Stun: Yes"
    },
    {
        "name": "Sith sword",
        "group": "simple",
        "size": "m",
        "type": "Slashing or Piercing",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 3000,
        "weight": 3,
        "description": "Damage: 1d8, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Snap baton",
        "group": "simple",
        "size": "s",
        "type": "Bludgeoning",
        "damage": "2d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 100,
        "weight": 1,
        "description": "Damage: 2d4, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Spear",
        "group": "simple",
        "size": "m",
        "type": "Piercing",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 60,
        "weight": 1.5,
        "description": "Damage: 1d8, Type: Piercing, Stun: No"
    },
    {
        "name": "Squib battering ram",
        "group": "simple",
        "size": "l",
        "type": "Energy",
        "damage": "5d10",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 3500,
        "weight": 10,
        "description": "Damage: 5d10, Type: Energy, Stun: No"
    },
    {
        "name": "Stun baton",
        "group": "simple",
        "size": "s",
        "type": "Bludgeoning",
        "damage": "2d6",
        "stun": true,
        "rateOfFire": "",
        "range": "M",
        "cost": 15,
        "weight": 0.5,
        "description": "Damage: 2d6, Type: Bludgeoning, Stun: Yes"
    },
    {
        "name": "Stunning gauntlet",
        "group": "simple",
        "size": "u",
        "type": "Energy",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 300,
        "weight": 0.5,
        "description": "Damage: None, Type: Energy, Stun: No"
    },
    {
        "name": "Survival knife",
        "group": "simple",
        "size": "s",
        "type": "Slashing",
        "damage": "1d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 100,
        "weight": 1.2,
        "description": "Damage: 1d6, Type: Slashing, Stun: No"
    },
    {
        "name": "Sword, dire",
        "group": "simple",
        "size": "l",
        "type": "Slashing or Piercing",
        "damage": "1d10",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 100,
        "weight": 4,
        "description": "Damage: 1d10, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Sword, double-bladed",
        "group": "simple",
        "size": "l",
        "type": "Slashing or Piercing",
        "damage": "1d6 / 1d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 120,
        "weight": 2,
        "description": "Damage: 1d6 / 1d6, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Sword, short",
        "group": "simple",
        "size": "s",
        "type": "Slashing or Piercing",
        "damage": "1d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 40,
        "weight": 1.5,
        "description": "Damage: 1d6, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Sword, war",
        "group": "simple",
        "size": "m",
        "type": "Slashing or Piercing",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 50,
        "weight": 2,
        "description": "Damage: 1d8, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Combat gloves",
        "group": "simple",
        "size": "t",
        "type": "Bludgeoning",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 250,
        "weight": 0.5,
        "description": "Damage: None, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Shockboxing gloves",
        "group": "simple",
        "size": "s",
        "type": "Bludgeoning and energy",
        "damage": "None",
        "stun": true,
        "rateOfFire": "",
        "range": "M",
        "cost": 500,
        "weight": 0.4,
        "description": "Damage: None, Type: Bludgeoning and energy, Stun: Yes"
    },
    {
        "name": "Shockboxing gloves",
        "group": "simple",
        "size": "m",
        "type": "Bludgeoning and energy",
        "damage": "None",
        "stun": true,
        "rateOfFire": "",
        "range": "M",
        "cost": 600,
        "weight": 0.5,
        "description": "Damage: None, Type: Bludgeoning and energy, Stun: Yes"
    },
    {
        "name": "Unarmed",
        "group": "simple",
        "size": "u",
        "type": "Bludgeoning",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 0,
        "weight": 0,
        "description": "Damage: None, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Electroshock probe",
        "group": "improvised",
        "size": "s",
        "type": "Energy (ion)",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 50,
        "weight": 0.2,
        "description": "Damage: 1d8, Type: Energy (ion), Stun: No"
    },
    {
        "name": "Fusion cutter",
        "group": "improvised",
        "size": "s",
        "type": "Energy",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 50,
        "weight": 0.2,
        "description": "Damage: 2d6, Type: Energy, Stun: No"
    },
    {
        "name": "Laser welder",
        "group": "improvised",
        "size": "s",
        "type": "Energy",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 50,
        "weight": 0.2,
        "description": "Damage: 1d8, Type: Energy, Stun: No"
    },
    {
        "name": "Power prybar",
        "group": "improvised",
        "size": "s",
        "type": "Bludgeoning",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 50,
        "weight": 0.2,
        "description": "Damage: 1d8, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Sonic welder",
        "group": "improvised",
        "size": "s",
        "type": "Energy (sonic)",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 50,
        "weight": 0.2,
        "description": "Damage: 1d8, Type: Energy (sonic), Stun: No"
    },
    {
        "name": "Amphistaff",
        "group": "Amphistaff",
        "size": "Medium",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 0,
        "weight": 2,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Amphistaff (quarterstaff form)",
        "group": "Amphistaff",
        "size": "l",
        "type": "Bludgeoning",
        "damage": "1d6 / 1d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 0,
        "weight": 2,
        "description": "Damage: 1d6 / 1d6, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Amphistaff (spear form)",
        "group": "Amphistaff",
        "size": "l",
        "type": "Piercing",
        "damage": "1d8 / 1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 0,
        "weight": 2,
        "description": "Damage: 1d8 / 1d8, Type: Piercing, Stun: No"
    },
    {
        "name": "Amphistaff (whip form)",
        "group": "Amphistaff",
        "size": "l",
        "type": "Piercing",
        "damage": "1d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 0,
        "weight": 2,
        "description": "Damage: 1d4, Type: Piercing, Stun: No"
    },
    {
        "name": "Arg'garok",
        "group": "Arg'garok",
        "size": "l",
        "type": "Slashing",
        "damage": "2d12",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 150,
        "weight": 2,
        "description": "Damage: 2d12, Type: Slashing, Stun: No"
    },
    {
        "name": "Atlatl",
        "group": "Atlatl",
        "size": "m",
        "type": "Bludgeoning",
        "damage": "2d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 50,
        "weight": 1.5,
        "description": "Damage: 2d4, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Blastsword",
        "group": "blastsword",
        "size": "m",
        "type": "Energy",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 600,
        "weight": 2.1,
        "description": "Damage: 3d6, Type: Energy, Stun: No"
    },
    {
        "name": "Cesta",
        "group": "Cesta",
        "size": "l",
        "type": "Bludgeoning",
        "damage": "2d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 100,
        "weight": 1.8,
        "description": "Damage: 2d4, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Darkstick",
        "group": "Darkstick",
        "size": "s",
        "type": "Slashing",
        "damage": "1d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 1000,
        "weight": 1.5,
        "description": "Damage: 1d6, Type: Slashing, Stun: No"
    },
    {
        "name": "Felucian skullblade",
        "group": "Felucian skullblade",
        "size": "s",
        "type": "Slashing",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 1500,
        "weight": 0.5,
        "description": "Damage: 2d6, Type: Slashing, Stun: No"
    },
    {
        "name": "Fira",
        "group": "Fira",
        "size": "m",
        "type": "Slashing or Piercing",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 100,
        "weight": 2,
        "description": "Damage: 1d8, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Garrote",
        "group": "Garrote",
        "size": "s",
        "type": "Slashing",
        "damage": "1d6",
        "stun": true,
        "rateOfFire": "",
        "range": "M",
        "cost": 50,
        "weight": 0.5,
        "description": "Damage: 1d6, Type: Slashing, Stun: Yes"
    },
    {
        "name": "Lanvarok, Massassi (melee)",
        "group": "Lanvarok, Massassi",
        "size": "l",
        "type": "Slashing",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 250,
        "weight": 9.8,
        "description": "Damage: 1d8, Type: Slashing, Stun: No"
    },
    {
        "name": "Neuronic whip",
        "group": "Neuronic whip",
        "size": "m",
        "type": "Bludgeoning and Energy",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 500,
        "weight": 0.5,
        "description": "Damage: 2d8, Type: Bludgeoning and Energy, Stun: No"
    },
    {
        "name": "Ryyk blade",
        "group": "Ryyk blade",
        "size": "m",
        "type": "Slashing",
        "damage": "2d10",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 500,
        "weight": 1.5,
        "description": "Damage: 2d10, Type: Slashing, Stun: No"
    },
    {
        "name": "Shyarn",
        "group": "Shyarn",
        "size": "t",
        "type": "Slashing or Piercing",
        "damage": "3d4",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 40,
        "weight": 1,
        "description": "Damage: 3d4, Type: Slashing or Piercing, Stun: No"
    },
    {
        "name": "Tehk'la blade",
        "group": "Tehk'la blade",
        "size": "t",
        "type": "Piercing and slashing",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 8500,
        "weight": 0.5,
        "description": "Damage: 2d6, Type: Piercing and slashing, Stun: No"
    },
    {
        "name": "Vibro-saw",
        "group": "vibro-saw",
        "size": "l",
        "type": "Slashing",
        "damage": "2d10",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 400,
        "weight": 10,
        "description": "Damage: 2d10, Type: Slashing, Stun: No"
    },
    {
        "name": "Wan-shen",
        "group": "Wan-shen",
        "size": "l",
        "type": "Slashing and Bludgeoning",
        "damage": "2d6 / 2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 1000,
        "weight": 2,
        "description": "Damage: 2d6 / 2d6, Type: Slashing and Bludgeoning, Stun: No"
    },
    {
        "name": "Zhaboka",
        "group": "Zhaboka",
        "size": "l",
        "type": "Slashing",
        "damage": "2d6 / 2d6",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 165,
        "weight": 2,
        "description": "Damage: 2d6 / 2d6, Type: Slashing, Stun: No"
    },
    {
        "name": "Blaster cannon",
        "group": "heavy",
        "size": "l",
        "type": "Energy",
        "damage": "3d12",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 3000,
        "weight": 18,
        "description": "Damage: 3d12, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster cannon, rotary",
        "group": "heavy",
        "size": "l",
        "type": "Energy",
        "damage": "3d10",
        "stun": false,
        "rateOfFire": "A",
        "range": "R",
        "cost": 5500,
        "weight": 16,
        "description": "Damage: 3d10, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster, E-web repeating",
        "group": "heavy",
        "size": "h",
        "type": "Energy",
        "damage": "3d12",
        "stun": false,
        "rateOfFire": "A",
        "range": "R",
        "cost": 8000,
        "weight": 38,
        "description": "Damage: 3d12, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster, heavy repeating",
        "group": "heavy",
        "size": "l",
        "type": "Energy",
        "damage": "3d10",
        "stun": false,
        "rateOfFire": "A",
        "range": "R",
        "cost": 4000,
        "weight": 12,
        "description": "Damage: 3d10, Type: Energy, Stun: No"
    },
    {
        "name": "Carbonite rifle",
        "group": "heavy",
        "size": "l",
        "type": "Energy",
        "damage": "3d10",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1200,
        "weight": 6,
        "description": "Damage: 3d10, Type: Energy, Stun: No"
    },
    {
        "name": "Electronet",
        "group": "heavy",
        "size": "m",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2000,
        "weight": 5,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Flame Cannon",
        "group": "heavy",
        "size": "l",
        "type": "Fire",
        "damage": "5d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 3000,
        "weight": 15,
        "description": "Damage: 5d6, Type: Fire, Stun: No"
    },
    {
        "name": "Grenade launcher",
        "group": "heavy",
        "size": "m",
        "type": "Slashing",
        "damage": "4d6",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 500,
        "weight": 5,
        "description": "Damage: 4d6, Type: Slashing, Stun: No"
    },
    {
        "name": "HH-15 projectile launcher",
        "group": "heavy",
        "size": "l",
        "type": "Energy",
        "damage": "6d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2000,
        "weight": 12,
        "description": "Damage: 6d6, Type: Energy, Stun: No"
    },
    {
        "name": "Light concussion missile launcher",
        "group": "heavy",
        "size": "l",
        "type": "Slashing",
        "damage": "4d10",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 4000,
        "weight": 18,
        "description": "Damage: 4d10, Type: Slashing, Stun: No"
    },
    {
        "name": "Merr-Sonn PLX-2M",
        "group": "heavy",
        "size": "l",
        "type": "Energy",
        "damage": "8d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2250,
        "weight": 0,
        "description": "Damage: 8d6, Type: Energy, Stun: No"
    },
    {
        "name": "Mini-proton torpedo launcher",
        "group": "heavy",
        "size": "l",
        "type": "Energy",
        "damage": "6d10",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1500,
        "weight": 8,
        "description": "Damage: 6d10, Type: Energy, Stun: No"
    },
    {
        "name": "Missile launcher",
        "group": "heavy",
        "size": "l",
        "type": "bludgeoning",
        "damage": "6d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1500,
        "weight": 10,
        "description": "Damage: 6d6, Type: bludgeoning, Stun: No"
    },
    {
        "name": "Missile launcher, E-web",
        "group": "heavy",
        "size": "h",
        "type": "bludgeoning",
        "damage": "6d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 9500,
        "weight": 42,
        "description": "Damage: 6d6, Type: bludgeoning, Stun: No"
    },
    {
        "name": "Mortar launcher",
        "group": "heavy",
        "size": "l",
        "type": "Slashing",
        "damage": "4d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2500,
        "weight": 20,
        "description": "Damage: 4d6, Type: Slashing, Stun: No"
    },
    {
        "name": "Tactical tractor beam",
        "group": "heavy",
        "size": "l",
        "type": "Energy",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 8000,
        "weight": 25,
        "description": "Damage: 3d6, Type: Energy, Stun: No"
    },
    {
        "name": "Ascension gun",
        "group": "pistols",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1200,
        "weight": 2,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "Black-powder pistol",
        "group": "pistols",
        "size": "s",
        "type": "Piercing",
        "damage": "2d4",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 200,
        "weight": 1.4,
        "description": "Damage: 2d4, Type: Piercing, Stun: No"
    },
    {
        "name": "BlasTech DH-23",
        "group": "pistols",
        "size": "s",
        "type": "Energy",
        "damage": "3d6",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 500,
        "weight": 1,
        "description": "Damage: 3d6, Type: Energy, Stun: Yes"
    },
    {
        "name": "BlasTech DT-12",
        "group": "pistols",
        "size": "m",
        "type": "Energy",
        "damage": "4d6",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 900,
        "weight": 2,
        "description": "Damage: 4d6, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster pistol",
        "group": "pistols",
        "size": "s",
        "type": "Energy",
        "damage": "3d6",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 500,
        "weight": 1,
        "description": "Damage: 3d6, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster pistol, bluebolt",
        "group": "pistols",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 850,
        "weight": 1.6,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster pistol, heavy",
        "group": "pistols",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 750,
        "weight": 1.3,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster pistol, hold-out",
        "group": "pistols",
        "size": "t",
        "type": "Energy",
        "damage": "3d4",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 300,
        "weight": 0.5,
        "description": "Damage: 3d4, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster pistol, sidearm",
        "group": "pistols",
        "size": "s",
        "type": "Energy",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 400,
        "weight": 1,
        "description": "Damage: 3d6, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster pistol, snap shot",
        "group": "pistols",
        "size": "t",
        "type": "Energy",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 250,
        "weight": 1,
        "description": "Damage: 3d6, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster pistol, sporting",
        "group": "pistols",
        "size": "s",
        "type": "Energy",
        "damage": "3d4",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 300,
        "weight": 1,
        "description": "Damage: 3d4, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster pistol, Theed Arms S-5",
        "group": "pistols",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1000,
        "weight": 1.5,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster, subrepeating",
        "group": "pistols",
        "size": "m",
        "type": "Energy",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "A",
        "range": "R",
        "cost": 750,
        "weight": 2,
        "description": "Damage: 3d6, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster, wrist",
        "group": "pistols",
        "size": "t",
        "type": "Energy",
        "damage": "3d4",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 800,
        "weight": 0.5,
        "description": "Damage: 3d4, Type: Energy, Stun: No"
    },
    {
        "name": "Bryar pistol",
        "group": "pistols",
        "size": "m",
        "type": "Energy",
        "damage": "3d4",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1350,
        "weight": 3,
        "description": "Damage: 3d4, Type: Energy, Stun: No"
    },
    {
        "name": "Crossbow, repeating",
        "group": "simple",
        "size": "m",
        "type": "Piercing",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 400,
        "weight": 1.2,
        "description": "Damage: 1d8, Type: Piercing, Stun: No"
    },
    {
        "name": "Czerka Adjudicator",
        "group": "pistols",
        "size": "t",
        "type": "Piercing",
        "damage": "2d4",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 325,
        "weight": 0.5,
        "description": "Damage: 2d4, Type: Piercing, Stun: No"
    },
    {
        "name": "Darter",
        "group": "pistols",
        "size": "m",
        "type": "Piercing",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 150,
        "weight": 3,
        "description": "Damage: None, Type: Piercing, Stun: No"
    },
    {
        "name": "DX-2 Disruptor pistol",
        "group": "pistols",
        "size": "m",
        "type": "Energy",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 3000,
        "weight": 3,
        "description": "Damage: 3d6, Type: Energy, Stun: No"
    },
    {
        "name": "Gee-Tech 12 Defender",
        "group": "pistols",
        "size": "t",
        "type": "Energy",
        "damage": "3d4",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 400,
        "weight": 0.25,
        "description": "Damage: 3d4, Type: Energy, Stun: No"
    },
    {
        "name": "Heavy slugthrower pistol",
        "group": "pistols",
        "size": "m",
        "type": "Piercing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 400,
        "weight": 2.1,
        "description": "Damage: 2d8, Type: Piercing, Stun: No"
    },
    {
        "name": "Ion pistol",
        "group": "pistols",
        "size": "s",
        "type": "Energy (ion)",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 250,
        "weight": 1,
        "description": "Damage: 3d6, Type: Energy (ion), Stun: No"
    },
    {
        "name": "Merr-Sonn Model 434",
        "group": "pistols",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 650,
        "weight": 1.2,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Needler",
        "group": "pistols",
        "size": "s",
        "type": "Piercing",
        "damage": "2d4",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 650,
        "weight": 1,
        "description": "Damage: 2d4, Type: Piercing, Stun: No"
    },
    {
        "name": "Pulse-wave pistol",
        "group": "pistols",
        "size": "s",
        "type": "Energy",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 200,
        "weight": 1,
        "description": "Damage: 2d6, Type: Energy, Stun: No"
    },
    {
        "name": "Ripper",
        "group": "pistols",
        "size": "s",
        "type": "Slashing",
        "damage": "2d4",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 750,
        "weight": 1,
        "description": "Damage: 2d4, Type: Slashing, Stun: No"
    },
    {
        "name": "Slugthrower pistol",
        "group": "pistols",
        "size": "s",
        "type": "Piercing",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 250,
        "weight": 1.4,
        "description": "Damage: 2d6, Type: Piercing, Stun: No"
    },
    {
        "name": "Snare pistol",
        "group": "pistols",
        "size": "m",
        "type": "Bludgeoning",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 600,
        "weight": 2,
        "description": "Damage: None, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Sonic disruptor",
        "group": "pistols",
        "size": "s",
        "type": "Energy (sonic)",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1000,
        "weight": 1,
        "description": "Damage: 2d6, Type: Energy (sonic), Stun: No"
    },
    {
        "name": "Sonic pistol",
        "group": "pistols",
        "size": "s",
        "type": "Energy (sonic)",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 900,
        "weight": 1,
        "description": "Damage: 2d6, Type: Energy (sonic), Stun: No"
    },
    {
        "name": "Sonic pistol, heavy",
        "group": "pistols",
        "size": "m",
        "type": "Energy (sonic)",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1250,
        "weight": 1,
        "description": "Damage: 2d8, Type: Energy (sonic), Stun: No"
    },
    {
        "name": "Sonic stunner",
        "group": "pistols",
        "size": "t",
        "type": "Energy (sonic)",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 450,
        "weight": 1,
        "description": "Damage: 3d6, Type: Energy (sonic), Stun: No"
    },
    {
        "name": "Stun pistol",
        "group": "pistols",
        "size": "s",
        "type": "Energy",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 550,
        "weight": 1,
        "description": "Damage: None, Type: Energy, Stun: No"
    },
    {
        "name": "BlasTech 500 \"ESPO\"",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 100,
        "weight": 4.5,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blastech 500 riot gun",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 1200,
        "weight": 2.2,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "BlasTech DLT-20A",
        "group": "rifles",
        "size": "l",
        "type": "Energy",
        "damage": "3d10",
        "stun": false,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 1300,
        "weight": 6.7,
        "description": "Damage: 3d10, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster carbine",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 900,
        "weight": 2.2,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster carbine (no stock)",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 850,
        "weight": 2.2,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster carbine, double-barreled",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1200,
        "weight": 1.9,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster carbine, hunting",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1000,
        "weight": 2.1,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster carbine, repeating",
        "group": "rifles",
        "size": "l",
        "type": "Energy",
        "damage": "3d10",
        "stun": true,
        "rateOfFire": "A",
        "range": "R",
        "cost": 2000,
        "weight": 6,
        "description": "Damage: 3d10, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster carbine, sporting",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1000,
        "weight": 2.6,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster rifle",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 1000,
        "weight": 4.5,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster rifle (no stock)",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 900,
        "weight": 4.5,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster rifle, assault",
        "group": "rifles",
        "size": "l",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 1750,
        "weight": 5,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster rifle, commando special",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d10",
        "stun": false,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 1250,
        "weight": 3.3,
        "description": "Damage: 3d10, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster rifle, heavy",
        "group": "rifles",
        "size": "l",
        "type": "Energy",
        "damage": "3d10",
        "stun": true,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 2000,
        "weight": 6,
        "description": "Damage: 3d10, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster rifle, heavy assault",
        "group": "rifles",
        "size": "l",
        "type": "Energy",
        "damage": "3d10",
        "stun": false,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 3000,
        "weight": 7,
        "description": "Damage: 3d10, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster rifle, heavy variable",
        "group": "rifles",
        "size": "l",
        "type": "Energy",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2250,
        "weight": 6.5,
        "description": "Damage: 3d6, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster rifle, sniper",
        "group": "rifles",
        "size": "l",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1200,
        "weight": 5.5,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster rifle, sniper (SaV)",
        "group": "rifles",
        "size": "l",
        "type": "Energy",
        "damage": "3d10",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2000,
        "weight": 8,
        "description": "Damage: 3d10, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster rifle, sporting",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d6",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 800,
        "weight": 4,
        "description": "Damage: 3d6, Type: Energy, Stun: Yes"
    },
    {
        "name": "Blaster rifle, variable",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d4",
        "stun": false,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 1300,
        "weight": 5,
        "description": "Damage: 3d4, Type: Energy, Stun: No"
    },
    {
        "name": "Blaster, light repeating",
        "group": "rifles",
        "size": "l",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "A",
        "range": "R",
        "cost": 1200,
        "weight": 6,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "Bryar rifle",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1350,
        "weight": 3,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "Concussion rifle",
        "group": "rifles",
        "size": "l",
        "type": "Energy (sonic)",
        "damage": "2d10",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1800,
        "weight": 2.1,
        "description": "Damage: 2d10, Type: Energy (sonic), Stun: No"
    },
    {
        "name": "Czerka Adventurer",
        "group": "rifles",
        "size": "m",
        "type": "Piercing",
        "damage": "2d10",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 360,
        "weight": 4,
        "description": "Damage: 2d10, Type: Piercing, Stun: No"
    },
    {
        "name": "DC-19 \"Stealth\" Carbine",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 3500,
        "weight": 5,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "DXR-6 Disruptor rifle",
        "group": "rifles",
        "size": "l",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 3500,
        "weight": 6,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "Energy lance (plasma bolt)",
        "group": "rifles",
        "size": "l",
        "type": "Piercing and Energy",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 3500,
        "weight": 5,
        "description": "Damage: 2d8, Type: Piercing and Energy, Stun: No"
    },
    {
        "name": "Flechette launcher",
        "group": "rifles",
        "size": "l",
        "type": "Piercing",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1100,
        "weight": 5,
        "description": "Damage: 3d8, Type: Piercing, Stun: No"
    },
    {
        "name": "Incinerator rifle",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 3500,
        "weight": 5,
        "description": "Damage: 3d6, Type: Energy, Stun: No"
    },
    {
        "name": "Interchangeable Weapon System",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 4500,
        "weight": 5,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "Interchangeable Weapon System, Anti-armor",
        "group": "rifles",
        "size": "m",
        "type": "Slashing",
        "damage": "4d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 4500,
        "weight": 5,
        "description": "Damage: 4d6, Type: Slashing, Stun: No"
    },
    {
        "name": "Interchangeable Weapon System, Sniper",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d10",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 4500,
        "weight": 5,
        "description": "Damage: 3d10, Type: Energy, Stun: No"
    },
    {
        "name": "Ion carbine",
        "group": "rifles",
        "size": "m",
        "type": "Energy (ion)",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 800,
        "weight": 3,
        "description": "Damage: 3d8, Type: Energy (ion), Stun: No"
    },
    {
        "name": "Ion rifle",
        "group": "rifles",
        "size": "m",
        "type": "Energy (ion)",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 800,
        "weight": 3.1,
        "description": "Damage: 3d8, Type: Energy (ion), Stun: No"
    },
    {
        "name": "Micro grenade launcher",
        "group": "rifles",
        "size": "m",
        "type": "Unknown",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2500,
        "weight": 3,
        "description": "Damage: 2d6, Type: -, Stun: No"
    },
    {
        "name": "Pulse-wave rifle",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 550,
        "weight": 4,
        "description": "Damage: 2d8, Type: Energy, Stun: No"
    },
    {
        "name": "Rail detonator gun",
        "group": "rifles",
        "size": "l",
        "type": "Piercing",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1900,
        "weight": 5,
        "description": "Damage: 3d8, Type: Piercing, Stun: No"
    },
    {
        "name": "Scatter gun",
        "group": "rifles",
        "size": "m",
        "type": "Piercing",
        "damage": "3d8 / 2d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 275,
        "weight": 4,
        "description": "Damage: 3d8 / 2d8, Type: Piercing, Stun: No"
    },
    {
        "name": "SG-4 blaster rifle",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 400,
        "weight": 5,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "SG-4 blaster rifle (underwater)",
        "group": "rifles",
        "size": "m",
        "type": "Piercing",
        "damage": "2d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 400,
        "weight": 5,
        "description": "Damage: 2d6, Type: Piercing, Stun: No"
    },
    {
        "name": "Slugthrower rifle",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 300,
        "weight": 4,
        "description": "Damage: 2d8, Type: Energy, Stun: No"
    },
    {
        "name": "Snare rifle",
        "group": "rifles",
        "size": "m",
        "type": "Bludgeoning",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1200,
        "weight": 5,
        "description": "Damage: None, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Sonic rifle",
        "group": "rifles",
        "size": "m",
        "type": "Energy (sonic)",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 900,
        "weight": 5,
        "description": "Damage: 2d8, Type: Energy (sonic), Stun: No"
    },
    {
        "name": "SoroSuub Firelance",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S/A",
        "range": "R",
        "cost": 1200,
        "weight": 2.5,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "Stokhli spray stick",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 14000,
        "weight": 4,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "Subrepeating blaster",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "A",
        "range": "R",
        "cost": 1000,
        "weight": 1.7,
        "description": "Damage: 3d6, Type: Energy, Stun: No"
    },
    {
        "name": "Targeting blaster rifle",
        "group": "rifles",
        "size": "m",
        "type": "Energy",
        "damage": "3d6",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1000,
        "weight": 4,
        "description": "Damage: 3d6, Type: Energy, Stun: Yes"
    },
    {
        "name": "Bow",
        "group": "simple",
        "size": "m",
        "type": "Piercing",
        "damage": "1d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 300,
        "weight": 1.4,
        "description": "Damage: 1d6, Type: Piercing, Stun: No"
    },
    {
        "name": "Crossbow",
        "group": "simple",
        "size": "m",
        "type": "Piercing",
        "damage": "1d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 300,
        "weight": 1.8,
        "description": "Damage: 1d8, Type: Piercing, Stun: No"
    },
    {
        "name": "Energy ball",
        "group": "simple",
        "size": "t",
        "type": "Energy",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 20,
        "weight": 0.25,
        "description": "Damage: 2d8, Type: Energy, Stun: No"
    },
    {
        "name": "Grenade, adhesive",
        "group": "simple",
        "size": "t",
        "type": "Energy",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 200,
        "weight": 0.5,
        "description": "Damage: None, Type: Energy, Stun: No"
    },
    {
        "name": "Grenade, concussion",
        "group": "simple",
        "size": "t",
        "type": "Bludgeoning",
        "damage": "8d6",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 400,
        "weight": 0.5,
        "description": "Damage: 8d6, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Grenade, Cryoban",
        "group": "simple",
        "size": "t",
        "type": "Energy",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 500,
        "weight": 0.5,
        "description": "Damage: 3d6, Type: Energy, Stun: No"
    },
    {
        "name": "Grenade, EMP",
        "group": "simple",
        "size": "s",
        "type": "Energy (ion)",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 500,
        "weight": 0.5,
        "description": "Damage: 3d6, Type: Energy (ion), Stun: No"
    },
    {
        "name": "Grenade, frag",
        "group": "simple",
        "size": "t",
        "type": "Slashing",
        "damage": "4d6",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 200,
        "weight": 0.5,
        "description": "Damage: 4d6, Type: Slashing, Stun: No"
    },
    {
        "name": "Grenade, gas",
        "group": "simple",
        "size": "t",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 250,
        "weight": 0.5,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Grenade, ion",
        "group": "simple",
        "size": "t",
        "type": "Energy (ion)",
        "damage": "4d6",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 250,
        "weight": 0.5,
        "description": "Damage: 4d6, Type: Energy (ion), Stun: No"
    },
    {
        "name": "Grenade, radiation",
        "group": "simple",
        "size": "t",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 500,
        "weight": 0.5,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "Grenade, remote",
        "group": "simple",
        "size": "t",
        "type": "Energy",
        "damage": "4d6",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 300,
        "weight": 1,
        "description": "Damage: 4d6, Type: Energy, Stun: No"
    },
    {
        "name": "Grenade, smoke",
        "group": "simple",
        "size": "t",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 100,
        "weight": 0.5,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Grenade, stun",
        "group": "simple",
        "size": "t",
        "type": "Energy",
        "damage": "4d6",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 250,
        "weight": 0.5,
        "description": "Damage: 4d6, Type: Energy, Stun: No"
    },
    {
        "name": "Net",
        "group": "simple",
        "size": "l",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 25,
        "weight": 4.5,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "R-9 flash canister",
        "group": "simple",
        "size": "t",
        "type": "Energy",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 100,
        "weight": 0.5,
        "description": "Damage: None, Type: Energy, Stun: No"
    },
    {
        "name": "Razor bug",
        "group": "simple",
        "size": "s",
        "type": "Slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 800,
        "weight": 0.5,
        "description": "Damage: 2d8, Type: Slashing, Stun: No"
    },
    {
        "name": "Sling",
        "group": "simple",
        "size": "s",
        "type": "Bludgeoning",
        "damage": "1d4",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 35,
        "weight": 0.3,
        "description": "Damage: 1d4, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Targeting laser",
        "group": "simple",
        "size": "t",
        "type": "Energy",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 50,
        "weight": 0.1,
        "description": "Damage: None, Type: Energy, Stun: No"
    },
    {
        "name": "Thermal detonator",
        "group": "simple",
        "size": "t",
        "type": "Energy",
        "damage": "8d6",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 2000,
        "weight": 1,
        "description": "Damage: 8d6, Type: Energy, Stun: No"
    },
    {
        "name": "Thud bug",
        "group": "simple",
        "size": "s",
        "type": "Bludgeoning",
        "damage": "2d8",
        "stun": true,
        "rateOfFire": "",
        "range": "R",
        "cost": 800,
        "weight": 0.5,
        "description": "Damage: 2d8, Type: Bludgeoning, Stun: Yes"
    },
    {
        "name": "Amphistaff (spit)",
        "group": "Amphistaff",
        "size": "l",
        "type": "Special",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 0,
        "weight": 2,
        "description": "Damage: None, Type: Special, Stun: No"
    },
    {
        "name": "Aurial blaster",
        "group": "Aurial blaster",
        "size": "m",
        "type": "Energy (sonic)",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2500,
        "weight": 1,
        "description": "Damage: 3d6, Type: Energy (sonic), Stun: No"
    },
    {
        "name": "Blast cannon",
        "group": "blast cannon",
        "size": "l",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2000,
        "weight": 6,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "Bowcaster",
        "group": "bowcaster",
        "size": "l",
        "type": "Energy and Piercing",
        "damage": "3d10",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1500,
        "weight": 8,
        "description": "Damage: 3d10, Type: Energy and Piercing, Stun: No"
    },
    {
        "name": "Concealed dart launcher",
        "group": "concealed dart launcher",
        "size": "s",
        "type": "Piercing",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1900,
        "weight": 0.5,
        "description": "Damage: None, Type: Piercing, Stun: No"
    },
    {
        "name": "Deck sweeper",
        "group": "Deck sweeper",
        "size": "l",
        "type": "Energy",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 5000,
        "weight": 4.5,
        "description": "Damage: None, Type: Energy, Stun: No"
    },
    {
        "name": "Discblade",
        "group": "Discblade",
        "size": "s",
        "type": "Slashing",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "",
        "range": "R",
        "cost": 2000,
        "weight": 1.25,
        "description": "Damage: 2d8, Type: Slashing, Stun: No"
    },
    {
        "name": "Flamethrower",
        "group": "Flamethrower",
        "size": "m",
        "type": "Fire",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1000,
        "weight": 7,
        "description": "Damage: 3d6, Type: Fire, Stun: No"
    },
    {
        "name": "Lanvarok, Massassi (disc)",
        "group": "Lanvarok, Massassi",
        "size": "l",
        "type": "Bludgeoning",
        "damage": "3d4",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 250,
        "weight": 9.8,
        "description": "Damage: 3d4, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Lanvarok, Sith",
        "group": "Lanvarok, Sith",
        "size": "m",
        "type": "Bludgeoning",
        "damage": "3d4",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 4000,
        "weight": 5.8,
        "description": "Damage: 3d4, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Magna caster",
        "group": "Magna caster",
        "size": "m",
        "type": "Piercing",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2000,
        "weight": 4,
        "description": "Damage: 3d8, Type: Piercing, Stun: No"
    },
    {
        "name": "Neural inhibitor",
        "group": "Neural inhibitor",
        "size": "m",
        "type": "Piercing",
        "damage": "1d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 4200,
        "weight": 1,
        "description": "Damage: 1d6, Type: Piercing, Stun: No"
    },
    {
        "name": "Pulse rifle",
        "group": "Pulse rifle",
        "size": "m",
        "type": "Energy",
        "damage": "2d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 5000,
        "weight": 25,
        "description": "Damage: 2d8, Type: Energy, Stun: No"
    },
    {
        "name": "Siang lance",
        "group": "Siang lance",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": true,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2000,
        "weight": 4,
        "description": "Damage: 3d8, Type: Energy, Stun: Yes"
    },
    {
        "name": "Squib tensor rifle",
        "group": "Squib tensor rifle",
        "size": "m",
        "type": "Energy",
        "damage": "3d8",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 10000,
        "weight": 7.2,
        "description": "Damage: 3d8, Type: Energy, Stun: No"
    },
    {
        "name": "Verpine shatter gun",
        "group": "Verpine shatter gun",
        "size": "m",
        "type": "Energy",
        "damage": "3d10",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 15000,
        "weight": 1,
        "description": "Damage: 3d10, Type: Energy, Stun: No"
    },
    {
        "name": "Wrist rocket launcher",
        "group": "Wrist rocket launcher",
        "size": "s",
        "type": "Bludgeoning",
        "damage": "None",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 2500,
        "weight": 1,
        "description": "Damage: None, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Xerrol nightstinger",
        "group": "Xerrol nightstinger",
        "size": "m",
        "type": "Energy",
        "damage": "3d6",
        "stun": false,
        "rateOfFire": "S",
        "range": "R",
        "cost": 1500,
        "weight": 4.5,
        "description": "Damage: 3d6, Type: Energy, Stun: No"
    },
    {
        "name": "Mine, antivehicle",
        "group": "Simple",
        "size": "Medium",
        "type": "Unknown",
        "damage": "10d6",
        "stun": false,
        "rateOfFire": "",
        "cost": 1500,
        "weight": 0.5,
        "description": "Damage: 10d6, Type: -, Stun: No"
    },
    {
        "name": "Mine, antivehicle proton",
        "group": "Simple",
        "size": "Medium",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "cost": 2000,
        "weight": 1.5,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Mine, flechette",
        "group": "Simple",
        "size": "Medium",
        "type": "Unknown",
        "damage": "8d6",
        "stun": false,
        "rateOfFire": "",
        "cost": 1200,
        "weight": 0.5,
        "description": "Damage: 8d6, Type: -, Stun: No"
    },
    {
        "name": "Mine, HX2 antipersonnel",
        "group": "Simple",
        "size": "Medium",
        "type": "Unknown",
        "damage": "6d6",
        "stun": false,
        "rateOfFire": "",
        "cost": 750,
        "weight": 1,
        "description": "Damage: 6d6, Type: -, Stun: No"
    },
    {
        "name": "Mine, land",
        "group": "Simple",
        "size": "Medium",
        "type": "Unknown",
        "damage": "8d6",
        "stun": false,
        "rateOfFire": "",
        "cost": 500,
        "weight": 0.5,
        "description": "Damage: 8d6, Type: -, Stun: No"
    },
    {
        "name": "Mine, laser trip",
        "group": "Simple",
        "size": "Medium",
        "type": "Bludgeoning",
        "damage": "8d6",
        "stun": false,
        "rateOfFire": "",
        "cost": 700,
        "weight": 0.5,
        "description": "Damage: 8d6, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Mine, proximity",
        "group": "Simple",
        "size": "Medium",
        "type": "Bludgeoning",
        "damage": "6d6",
        "stun": false,
        "rateOfFire": "",
        "cost": 1500,
        "weight": 0.5,
        "description": "Damage: 6d6, Type: Bludgeoning, Stun: No"
    },
    {
        "name": "Explosive Charge",
        "group": "Simple",
        "size": "d",
        "type": "Energy",
        "damage": "10d6",
        "stun": false,
        "rateOfFire": "",
        "cost": 1500,
        "weight": 0.5,
        "description": "Damage: 10d6, Type: Energy, Stun: No"
    },
    {
        "name": "Detonite",
        "group": "Simple",
        "size": "f",
        "type": "Energy",
        "damage": "5d6",
        "stun": false,
        "rateOfFire": "",
        "cost": 500,
        "weight": 0.1,
        "description": "Damage: 5d6, Type: Energy, Stun: No"
    },
    {
        "name": "Timer",
        "group": "Simple",
        "size": "f",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "cost": 250,
        "weight": 0.1,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Manual Trigger",
        "group": "Simple",
        "size": "f",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "cost": 100,
        "weight": 0.1,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Detonite Cord",
        "group": "Simple",
        "size": "t",
        "type": "Energy",
        "damage": "4d6",
        "stun": false,
        "rateOfFire": "",
        "cost": 1000,
        "weight": 1,
        "description": "Damage: 4d6, Type: Energy, Stun: No"
    },
    {
        "name": "Custom 1",
        "group": "simple",
        "size": "Medium",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 0,
        "weight": 0,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Custom 2",
        "group": "simple",
        "size": "Medium",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 0,
        "weight": 0,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Custom 3",
        "group": "simple",
        "size": "Medium",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 0,
        "weight": 0,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Custom 4",
        "group": "simple",
        "size": "Medium",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 0,
        "weight": 0,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Custom 5",
        "group": "simple",
        "size": "Medium",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 0,
        "weight": 0,
        "description": "Damage: None, Type: -, Stun: No"
    },
    {
        "name": "Custom 6",
        "group": "simple",
        "size": "Medium",
        "type": "Unknown",
        "damage": "None",
        "stun": false,
        "rateOfFire": "",
        "range": "M",
        "cost": 0,
        "weight": 0,
        "description": "Damage: None, Type: -, Stun: No"
    }
];
export const ARMOR: Armor[] = [
    {
        "name": "Custom armor",
        "type": "Light",
        "armorBonus": 0,
        "fortitudeBonus": 0,
        "maxDex": 0,
        "cost": 0,
        "weight": 0,
        "description": "Reflex +0, Fort +0, Max Dex +0"
    },
    {
        "name": "Flight suit",
        "type": "Light",
        "armorBonus": 0,
        "fortitudeBonus": 1,
        "maxDex": 0,
        "cost": 0,
        "weight": 1,
        "description": "Reflex +0, Fort +1, Max Dex +0"
    },
    {
        "name": "Space Suit",
        "type": "Light",
        "armorBonus": 0,
        "fortitudeBonus": 2,
        "maxDex": 0,
        "cost": 0,
        "weight": 5,
        "description": "Reflex +0, Fort +2, Max Dex +0"
    },
    {
        "name": "-- Light armor --",
        "type": "L",
        "armorBonus": 0,
        "fortitudeBonus": 0,
        "maxDex": 0,
        "cost": 0,
        "weight": 0,
        "description": "Reflex +0, Fort +0, Max Dex +0"
    },
    {
        "name": "ARC Trooper armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Barabel microbe armor",
        "type": "L",
        "armorBonus": 2,
        "fortitudeBonus": 0,
        "maxDex": 3,
        "cost": 0,
        "weight": 6,
        "description": "Reflex +2, Fort +0, Max Dex +3"
    },
    {
        "name": "Battle armor, light",
        "type": "L",
        "armorBonus": 5,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 10,
        "description": "Reflex +5, Fort +2, Max Dex +3"
    },
    {
        "name": "Battle armor, light powered",
        "type": "L",
        "armorBonus": 4,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 12,
        "description": "Reflex +4, Fort +2, Max Dex +3"
    },
    {
        "name": "Beskar'gam, light",
        "type": "L",
        "armorBonus": 5,
        "fortitudeBonus": 1,
        "maxDex": 3,
        "cost": 0,
        "weight": 6.9,
        "description": "Reflex +5, Fort +1, Max Dex +3"
    },
    {
        "name": "Blast helmet and vest",
        "type": "L",
        "armorBonus": 2,
        "fortitudeBonus": 0,
        "maxDex": 5,
        "cost": 0,
        "weight": 3,
        "description": "Reflex +2, Fort +0, Max Dex +5"
    },
    {
        "name": "Blast jacket",
        "type": "L",
        "armorBonus": 2,
        "fortitudeBonus": 1,
        "maxDex": 4,
        "cost": 0,
        "weight": 0,
        "description": "Reflex +2, Fort +1, Max Dex +4"
    },
    {
        "name": "Clone Trooper armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Combat jumpsuit",
        "type": "L",
        "armorBonus": 4,
        "fortitudeBonus": 0,
        "maxDex": 4,
        "cost": 0,
        "weight": 8,
        "description": "Reflex +4, Fort +0, Max Dex +4"
    },
    {
        "name": "Commando armor",
        "type": "L",
        "armorBonus": 5,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8,
        "description": "Reflex +5, Fort +2, Max Dex +3"
    },
    {
        "name": "Coruscant Guard armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Dark armor, light",
        "type": "L",
        "armorBonus": 4,
        "fortitudeBonus": 3,
        "maxDex": 3,
        "cost": 0,
        "weight": 10,
        "description": "Reflex +4, Fort +3, Max Dex +3"
    },
    {
        "name": "EVO trooper armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Fiber armor",
        "type": "L",
        "armorBonus": 4,
        "fortitudeBonus": 1,
        "maxDex": 2,
        "cost": 0,
        "weight": 10,
        "description": "Reflex +4, Fort +1, Max Dex +2"
    },
    {
        "name": "Flight suit, armored",
        "type": "L",
        "armorBonus": 5,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8,
        "description": "Reflex +5, Fort +2, Max Dex +3"
    },
    {
        "name": "Flight suit, padded",
        "type": "L",
        "armorBonus": 3,
        "fortitudeBonus": 1,
        "maxDex": 4,
        "cost": 0,
        "weight": 3,
        "description": "Reflex +3, Fort +1, Max Dex +4"
    },
    {
        "name": "Galactic Alliance armor",
        "type": "L",
        "armorBonus": 4,
        "fortitudeBonus": 1,
        "maxDex": 3,
        "cost": 0,
        "weight": 9,
        "description": "Reflex +4, Fort +1, Max Dex +3"
    },
    {
        "name": "Galactic Alliance armor variant",
        "type": "L",
        "armorBonus": 2,
        "fortitudeBonus": 0,
        "maxDex": 5,
        "cost": 0,
        "weight": 3,
        "description": "Reflex +2, Fort +0, Max Dex +5"
    },
    {
        "name": "Geonosian warrior tunic",
        "type": "L",
        "armorBonus": 4,
        "fortitudeBonus": 0,
        "maxDex": 4,
        "cost": 0,
        "weight": 8,
        "description": "Reflex +4, Fort +0, Max Dex +4"
    },
    {
        "name": "Half-vest",
        "type": "L",
        "armorBonus": 1,
        "fortitudeBonus": 0,
        "maxDex": 5,
        "cost": 0,
        "weight": 2,
        "description": "Reflex +1, Fort +0, Max Dex +5"
    },
    {
        "name": "Heavy dungeoneer armor",
        "type": "L",
        "armorBonus": 10,
        "fortitudeBonus": 2,
        "maxDex": 1,
        "cost": 0,
        "weight": 28.9,
        "description": "Reflex +10, Fort +2, Max Dex +1"
    },
    {
        "name": "Jedi battle armor, light",
        "type": "L",
        "armorBonus": 3,
        "fortitudeBonus": 3,
        "maxDex": 4,
        "cost": 0,
        "weight": 6,
        "description": "Reflex +3, Fort +3, Max Dex +4"
    },
    {
        "name": "Jumptrooper armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Krath armor",
        "type": "L",
        "armorBonus": 5,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 10,
        "description": "Reflex +5, Fort +2, Max Dex +3"
    },
    {
        "name": "Krath battle armor",
        "type": "L",
        "armorBonus": 5,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 10,
        "description": "Reflex +5, Fort +2, Max Dex +3"
    },
    {
        "name": "Light combat armor",
        "type": "L",
        "armorBonus": 5,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8,
        "description": "Reflex +5, Fort +2, Max Dex +3"
    },
    {
        "name": "Mandalorian combat suit",
        "type": "L",
        "armorBonus": 4,
        "fortitudeBonus": 1,
        "maxDex": 5,
        "cost": 0,
        "weight": 4.9,
        "description": "Reflex +4, Fort +1, Max Dex +5"
    },
    {
        "name": "Mandalorian Neo-Crusader light armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Marine armor",
        "type": "L",
        "armorBonus": 5,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 2,
        "description": "Reflex +5, Fort +2, Max Dex +3"
    },
    {
        "name": "Merr-Sonn KZZ riot armor",
        "type": "L",
        "armorBonus": 2,
        "fortitudeBonus": 2,
        "maxDex": 5,
        "cost": 0,
        "weight": 6,
        "description": "Reflex +2, Fort +2, Max Dex +5"
    },
    {
        "name": "Phase Zero Dark Trooper armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Radtrooper armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 4,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +4, Max Dex +3"
    },
    {
        "name": "Republic light armor",
        "type": "L",
        "armorBonus": 4,
        "fortitudeBonus": 1,
        "maxDex": 3,
        "cost": 0,
        "weight": 6.9,
        "description": "Reflex +4, Fort +1, Max Dex +3"
    },
    {
        "name": "Sandtrooper armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Scout Trooper armor",
        "type": "L",
        "armorBonus": 4,
        "fortitudeBonus": 0,
        "maxDex": 4,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +4, Fort +0, Max Dex +4"
    },
    {
        "name": "Seatrooper armor",
        "type": "L",
        "armorBonus": 4,
        "fortitudeBonus": 2,
        "maxDex": 2,
        "cost": 0,
        "weight": 2.9,
        "description": "Reflex +4, Fort +2, Max Dex +2"
    },
    {
        "name": "Shadow trooper armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 10,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Shadowsuit",
        "type": "L",
        "armorBonus": 1,
        "fortitudeBonus": 1,
        "maxDex": 5,
        "cost": 0,
        "weight": 2,
        "description": "Reflex +1, Fort +1, Max Dex +5"
    },
    {
        "name": "Shadowsuit (CWCS)",
        "type": "L",
        "armorBonus": 1,
        "fortitudeBonus": 1,
        "maxDex": 5,
        "cost": 0,
        "weight": 2,
        "description": "Reflex +1, Fort +1, Max Dex +5"
    },
    {
        "name": "Sith trooper armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Skakoan light pressure suit",
        "type": "L",
        "armorBonus": 5,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8,
        "description": "Reflex +5, Fort +2, Max Dex +3"
    },
    {
        "name": "Snowtrooper armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "SpecForce armor",
        "type": "L",
        "armorBonus": 5,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8,
        "description": "Reflex +5, Fort +2, Max Dex +3"
    },
    {
        "name": "Stormtrooper armor",
        "type": "L",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Stun cloak",
        "type": "L",
        "armorBonus": 1,
        "fortitudeBonus": 0,
        "maxDex": 5,
        "cost": 0,
        "weight": 2,
        "description": "Reflex +1, Fort +0, Max Dex +5"
    },
    {
        "name": "Thinsuit",
        "type": "L",
        "armorBonus": 0,
        "fortitudeBonus": 0,
        "maxDex": 6,
        "cost": 0,
        "weight": 1,
        "description": "Reflex +0, Fort +0, Max Dex +6"
    },
    {
        "name": "Tracker utility vest",
        "type": "L",
        "armorBonus": 1,
        "fortitudeBonus": 0,
        "maxDex": 5,
        "cost": 0,
        "weight": 0.5,
        "description": "Reflex +1, Fort +0, Max Dex +5"
    },
    {
        "name": "Ubese environmental suit",
        "type": "L",
        "armorBonus": 4,
        "fortitudeBonus": 2,
        "maxDex": 4,
        "cost": 0,
        "weight": 1,
        "description": "Reflex +4, Fort +2, Max Dex +4"
    },
    {
        "name": "Vonduun crabshell",
        "type": "L",
        "armorBonus": 5,
        "fortitudeBonus": 5,
        "maxDex": 4,
        "cost": 0,
        "weight": 5,
        "description": "Reflex +5, Fort +5, Max Dex +4"
    },
    {
        "name": "WJ-880 blinding helmet",
        "type": "L",
        "armorBonus": 0,
        "fortitudeBonus": 0,
        "maxDex": 0,
        "cost": 0,
        "weight": 2,
        "description": "Reflex +0, Fort +0, Max Dex +0"
    },
    {
        "name": "-- Medium armor --",
        "type": "M",
        "armorBonus": 0,
        "fortitudeBonus": 0,
        "maxDex": 0,
        "cost": 0,
        "weight": 0,
        "description": "Reflex +0, Fort +0, Max Dex +0"
    },
    {
        "name": "Battle armor",
        "type": "M",
        "armorBonus": 8,
        "fortitudeBonus": 2,
        "maxDex": 2,
        "cost": 0,
        "weight": 16,
        "description": "Reflex +8, Fort +2, Max Dex +2"
    },
    {
        "name": "Battle armor, powered",
        "type": "M",
        "armorBonus": 7,
        "fortitudeBonus": 2,
        "maxDex": 2,
        "cost": 0,
        "weight": 16,
        "description": "Reflex +7, Fort +2, Max Dex +2"
    },
    {
        "name": "Beskar'gam, medium",
        "type": "M",
        "armorBonus": 8,
        "fortitudeBonus": 1,
        "maxDex": 2,
        "cost": 0,
        "weight": 13.9,
        "description": "Reflex +8, Fort +1, Max Dex +2"
    },
    {
        "name": "Biohazard suit",
        "type": "M",
        "armorBonus": 0,
        "fortitudeBonus": 3,
        "maxDex": 0,
        "cost": 0,
        "weight": 9,
        "description": "Reflex +0, Fort +3, Max Dex +0"
    },
    {
        "name": "Camo armor",
        "type": "M",
        "armorBonus": 5,
        "fortitudeBonus": 0,
        "maxDex": 3,
        "cost": 0,
        "weight": 6,
        "description": "Reflex +5, Fort +0, Max Dex +3"
    },
    {
        "name": "Camo scout armor",
        "type": "M",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 13,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "Ceremonial armor",
        "type": "M",
        "armorBonus": 7,
        "fortitudeBonus": 0,
        "maxDex": 2,
        "cost": 0,
        "weight": 13,
        "description": "Reflex +7, Fort +0, Max Dex +2"
    },
    {
        "name": "Corellian powersuit",
        "type": "M",
        "armorBonus": 7,
        "fortitudeBonus": 0,
        "maxDex": 3,
        "cost": 0,
        "weight": 20,
        "description": "Reflex +7, Fort +0, Max Dex +3"
    },
    {
        "name": "Dark armor, medium",
        "type": "M",
        "armorBonus": 7,
        "fortitudeBonus": 4,
        "maxDex": 2,
        "cost": 0,
        "weight": 16,
        "description": "Reflex +7, Fort +4, Max Dex +2"
    },
    {
        "name": "GTU AV-1S scout armor",
        "type": "M",
        "armorBonus": 7,
        "fortitudeBonus": 2,
        "maxDex": 2,
        "cost": 0,
        "weight": 15,
        "description": "Reflex +7, Fort +2, Max Dex +2"
    },
    {
        "name": "Imperial Knight armor",
        "type": "M",
        "armorBonus": 8,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 16,
        "description": "Reflex +8, Fort +2, Max Dex +3"
    },
    {
        "name": "Jedi battle armor, medium",
        "type": "M",
        "armorBonus": 5,
        "fortitudeBonus": 5,
        "maxDex": 3,
        "cost": 0,
        "weight": 12,
        "description": "Reflex +5, Fort +5, Max Dex +3"
    },
    {
        "name": "Katarn-class commando armor",
        "type": "M",
        "armorBonus": 9,
        "fortitudeBonus": 4,
        "maxDex": 1,
        "cost": 0,
        "weight": 8.9,
        "description": "Reflex +9, Fort +4, Max Dex +1"
    },
    {
        "name": "Knighthunter armor",
        "type": "M",
        "armorBonus": 7,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 12,
        "description": "Reflex +7, Fort +2, Max Dex +3"
    },
    {
        "name": "Krail 210 personal armor",
        "type": "M",
        "armorBonus": 7,
        "fortitudeBonus": 1,
        "maxDex": 3,
        "cost": 0,
        "weight": 14.8,
        "description": "Reflex +7, Fort +1, Max Dex +3"
    },
    {
        "name": "Mandalorian Neo-Crusader battle armor",
        "type": "M",
        "armorBonus": 8,
        "fortitudeBonus": 2,
        "maxDex": 2,
        "cost": 0,
        "weight": 14.9,
        "description": "Reflex +8, Fort +2, Max Dex +2"
    },
    {
        "name": "Mesh armor",
        "type": "M",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 2,
        "cost": 0,
        "weight": 13,
        "description": "Reflex +6, Fort +2, Max Dex +2"
    },
    {
        "name": "Republic combat armor",
        "type": "M",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 2,
        "cost": 0,
        "weight": 13.9,
        "description": "Reflex +6, Fort +2, Max Dex +2"
    },
    {
        "name": "Royal Guard armor",
        "type": "M",
        "armorBonus": 7,
        "fortitudeBonus": 0,
        "maxDex": 2,
        "cost": 0,
        "weight": 12,
        "description": "Reflex +7, Fort +0, Max Dex +2"
    },
    {
        "name": "Shadow Guard armor",
        "type": "M",
        "armorBonus": 7,
        "fortitudeBonus": 0,
        "maxDex": 2,
        "cost": 0,
        "weight": 12,
        "description": "Reflex +7, Fort +0, Max Dex +2"
    },
    {
        "name": "Sith battle suit",
        "type": "M",
        "armorBonus": 7,
        "fortitudeBonus": 2,
        "maxDex": 2,
        "cost": 0,
        "weight": 0,
        "description": "Reflex +7, Fort +2, Max Dex +2"
    },
    {
        "name": "Skakoan medium pressure suit",
        "type": "M",
        "armorBonus": 8,
        "fortitudeBonus": 2,
        "maxDex": 2,
        "cost": 0,
        "weight": 16,
        "description": "Reflex +8, Fort +2, Max Dex +2"
    },
    {
        "name": "Stalker armor",
        "type": "M",
        "armorBonus": 7,
        "fortitudeBonus": 0,
        "maxDex": 3,
        "cost": 0,
        "weight": 10,
        "description": "Reflex +7, Fort +0, Max Dex +3"
    },
    {
        "name": "Weave armor",
        "type": "M",
        "armorBonus": 6,
        "fortitudeBonus": 2,
        "maxDex": 3,
        "cost": 0,
        "weight": 15,
        "description": "Reflex +6, Fort +2, Max Dex +3"
    },
    {
        "name": "-- Heavy armor --",
        "type": "H",
        "armorBonus": 0,
        "fortitudeBonus": 0,
        "maxDex": 0,
        "cost": 0,
        "weight": 0,
        "description": "Reflex +0, Fort +0, Max Dex +0"
    },
    {
        "name": "Battle armor, heavy",
        "type": "H",
        "armorBonus": 10,
        "fortitudeBonus": 4,
        "maxDex": 1,
        "cost": 0,
        "weight": 30,
        "description": "Reflex +10, Fort +4, Max Dex +1"
    },
    {
        "name": "Battle armor, heavy powered",
        "type": "H",
        "armorBonus": 9,
        "fortitudeBonus": 4,
        "maxDex": 1,
        "cost": 0,
        "weight": 31,
        "description": "Reflex +9, Fort +4, Max Dex +1"
    },
    {
        "name": "Beskar'gam, heavy",
        "type": "H",
        "armorBonus": 10,
        "fortitudeBonus": 3,
        "maxDex": 1,
        "cost": 0,
        "weight": 20.9,
        "description": "Reflex +10, Fort +3, Max Dex +1"
    },
    {
        "name": "Dark armor, heavy",
        "type": "H",
        "armorBonus": 8,
        "fortitudeBonus": 5,
        "maxDex": 1,
        "cost": 0,
        "weight": 30,
        "description": "Reflex +8, Fort +5, Max Dex +1"
    },
    {
        "name": "GTU AV-1C combat armor",
        "type": "H",
        "armorBonus": 9,
        "fortitudeBonus": 4,
        "maxDex": 1,
        "cost": 0,
        "weight": 21.9,
        "description": "Reflex +9, Fort +4, Max Dex +1"
    },
    {
        "name": "Mandalorian Neo-Crusader assault armor",
        "type": "H",
        "armorBonus": 10,
        "fortitudeBonus": 4,
        "maxDex": 1,
        "cost": 0,
        "weight": 23.9,
        "description": "Reflex +10, Fort +4, Max Dex +1"
    },
    {
        "name": "Matrix armor",
        "type": "H",
        "armorBonus": 9,
        "fortitudeBonus": 3,
        "maxDex": 1,
        "cost": 0,
        "weight": 25,
        "description": "Reflex +9, Fort +3, Max Dex +1"
    },
    {
        "name": "Orbalisk armor",
        "type": "H",
        "armorBonus": 10,
        "fortitudeBonus": 2,
        "maxDex": 1,
        "cost": 0,
        "weight": 26,
        "description": "Reflex +10, Fort +2, Max Dex +1"
    },
    {
        "name": "Phase II dark trooper armor",
        "type": "H",
        "armorBonus": 10,
        "fortitudeBonus": 0,
        "maxDex": 0,
        "cost": 0,
        "weight": 0,
        "description": "Reflex +10, Fort +0, Max Dex +0"
    },
    {
        "name": "Phase III dark trooper armor",
        "type": "H",
        "armorBonus": 12,
        "fortitudeBonus": 0,
        "maxDex": 0,
        "cost": 0,
        "weight": 0,
        "description": "Reflex +12, Fort +0, Max Dex +0"
    },
    {
        "name": "Republic heavy armor",
        "type": "H",
        "armorBonus": 8,
        "fortitudeBonus": 3,
        "maxDex": 1,
        "cost": 0,
        "weight": 15.9,
        "description": "Reflex +8, Fort +3, Max Dex +1"
    },
    {
        "name": "Skakoan heavy pressure suit",
        "type": "H",
        "armorBonus": 9,
        "fortitudeBonus": 3,
        "maxDex": 1,
        "cost": 0,
        "weight": 25,
        "description": "Reflex +9, Fort +3, Max Dex +1"
    },
    {
        "name": "Spacesuit, armored",
        "type": "H",
        "armorBonus": 9,
        "fortitudeBonus": 3,
        "maxDex": 1,
        "cost": 0,
        "weight": 25,
        "description": "Reflex +9, Fort +3, Max Dex +1"
    },
    {
        "name": "Vacuum pod",
        "type": "H",
        "armorBonus": 4,
        "fortitudeBonus": 0,
        "maxDex": 0,
        "cost": 0,
        "weight": 35,
        "description": "Reflex +4, Fort +0, Max Dex +0"
    },
    {
        "name": "Venom assault armor",
        "type": "H",
        "armorBonus": 10,
        "fortitudeBonus": 4,
        "maxDex": 1,
        "cost": 0,
        "weight": 28,
        "description": "Reflex +10, Fort +4, Max Dex +1"
    },
    {
        "name": "Zero-g stormtrooper armor",
        "type": "H",
        "armorBonus": 9,
        "fortitudeBonus": 3,
        "maxDex": 0,
        "cost": 0,
        "weight": 26.9,
        "description": "Reflex +9, Fort +3, Max Dex +0"
    }
];
export const EQUIPMENT: Item[] = [
    {
        "name": "All-temperature cloak",
        "cost": 100,
        "weight": 1.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Ambient aural amplifier",
        "cost": 3000,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Ancient Jedi robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Ancient Sith robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Antidote synthesizer",
        "cost": 2500,
        "weight": 0.8,
        "description": "",
        "group": "General"
    },
    {
        "name": "Antiox breath mask",
        "cost": 2000,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Anti-rad dose",
        "cost": 50,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Anti-security blades",
        "cost": 750,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Antitoxin patch",
        "cost": 25,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Aquata breather",
        "cost": 350,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Audiorecorder",
        "cost": 25,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Aural amplifier",
        "cost": 2000,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Bacta tank (empty)",
        "cost": 100000,
        "weight": 500,
        "description": "",
        "group": "General"
    },
    {
        "name": "Bacta, 1 liter",
        "cost": 100,
        "weight": 2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Bandolier",
        "cost": 100,
        "weight": 2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Binder cuffs",
        "cost": 50,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Bioscanner",
        "cost": 3500,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Bio-stabilizer implant",
        "cost": 1750,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Biotech tool kit",
        "cost": 450,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Black robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Bracer computer",
        "cost": 1300,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Breath mask",
        "cost": 200,
        "weight": 2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Breath mask atmosphere canister/filter",
        "cost": 25,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Camoflage netting",
        "cost": 2000,
        "weight": 5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Camoflage poncho",
        "cost": 125,
        "weight": 1.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Camouflage netting",
        "cost": 6000,
        "weight": 40,
        "description": "",
        "group": "General"
    },
    {
        "name": "Cardio implant",
        "cost": 4000,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Ceremonial Hendanyn death mask",
        "cost": 0,
        "weight": 2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Chain (3 meters)",
        "cost": 25,
        "weight": 2.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Climbing harness",
        "cost": 45,
        "weight": 0.7,
        "description": "",
        "group": "General"
    },
    {
        "name": "Code cylinder",
        "cost": 500,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Com scrambler",
        "cost": 6000,
        "weight": 10,
        "description": "",
        "group": "General"
    },
    {
        "name": "Combat implant",
        "cost": 5000,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, earbud",
        "cost": 200,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, encrypted long-range",
        "cost": 2500,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, encrypted long-range holo",
        "cost": 3750,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, encrypted long-range video",
        "cost": 3000,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, encrypted miniaturized long-range",
        "cost": 5000,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, encrypted miniaturized long-range holo",
        "cost": 7500,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, encrypted miniaturized long-range video",
        "cost": 6000,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, encrypted short-range",
        "cost": 250,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, encrypted short-range holo",
        "cost": 375,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, encrypted short-range video",
        "cost": 300,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, hands-free",
        "cost": 150,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, long-range",
        "cost": 250,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, long-range holo",
        "cost": 1250,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, long-range video",
        "cost": 500,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, miniaturized long-range",
        "cost": 500,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, miniaturized long-range holo",
        "cost": 2500,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, miniaturized long-range video",
        "cost": 1000,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, short-range",
        "cost": 25,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, short-range holo",
        "cost": 125,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, short-range video",
        "cost": 50,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comlink, tightbeam",
        "cost": 300,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Computer interface visor",
        "cost": 1200,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Computer spike",
        "cost": 1500,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Comunication scanner",
        "cost": 1000,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Cortosis Gauntlet",
        "cost": 1500,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Credit chip",
        "cost": 100,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Cryogenic pouch",
        "cost": 600,
        "weight": 1.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Cybernetic prosthesis",
        "cost": 1500,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Dark robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Dark-colored Jedi robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Datacards, blank [10]",
        "cost": 10,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Datapad",
        "cost": 1000,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Datapad, basic",
        "cost": 100,
        "weight": 0.3,
        "description": "",
        "group": "General"
    },
    {
        "name": "Demolitions sensor",
        "cost": 1000,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Droid caller",
        "cost": 10,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Droid diagnostic",
        "cost": 400,
        "weight": 2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Electrobinoculars",
        "cost": 1000,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Emergency vacuum seal",
        "cost": 750,
        "weight": 0.9,
        "description": "",
        "group": "General"
    },
    {
        "name": "Energy cell",
        "cost": 10,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "FastFlesh medpac",
        "cost": 600,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Field food processor",
        "cost": 1500,
        "weight": 4,
        "description": "",
        "group": "General"
    },
    {
        "name": "Field kit",
        "cost": 480,
        "weight": 2.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Fire extinguisher",
        "cost": 50,
        "weight": 3,
        "description": "",
        "group": "General"
    },
    {
        "name": "Fire paste",
        "cost": 15,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Fire rod",
        "cost": 25,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Flash suppressor/silencer",
        "cost": 400,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Force cage",
        "cost": 7000,
        "weight": 25,
        "description": "",
        "group": "General"
    },
    {
        "name": "Force detector",
        "cost": 2000,
        "weight": 9,
        "description": "",
        "group": "General"
    },
    {
        "name": "Force training aid",
        "cost": 25,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Fuel Cell",
        "cost": 100,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Fusion lantern",
        "cost": 25,
        "weight": 2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Gand breathing apparatus",
        "cost": 2000,
        "weight": 2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Gand breathing filter (year's supply)",
        "cost": 200,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Glow rod",
        "cost": 10,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Glow rod, decoy",
        "cost": 1000,
        "weight": 4,
        "description": "",
        "group": "General"
    },
    {
        "name": "Halo lamp",
        "cost": 30,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Heat sensor",
        "cost": 250,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Helmet package",
        "cost": 4000,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "HiBaka 2000 Mem-Stik",
        "cost": 50,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Holo converter",
        "cost": 3000,
        "weight": 2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Holoprojector, personal",
        "cost": 1000,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Holorecorder",
        "cost": 100,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Holoshroud",
        "cost": 25000,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Holster, concealed",
        "cost": 50,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Holster, hip",
        "cost": 25,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Hypoinjector wristband",
        "cost": 350,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Jedi master's robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Jedi padawan's robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Jedi robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Jet pack",
        "cost": 300,
        "weight": 30,
        "description": "",
        "group": "General"
    },
    {
        "name": "Jet pack, Arakyd Hush-About",
        "cost": 3750,
        "weight": 30,
        "description": "",
        "group": "General"
    },
    {
        "name": "Jet pack, Arakyd Hush-About, miniaturized",
        "cost": 4250,
        "weight": 15,
        "description": "",
        "group": "General"
    },
    {
        "name": "Jet pack, Mandalorian",
        "cost": 5000,
        "weight": 40,
        "description": "",
        "group": "General"
    },
    {
        "name": "Jet pack, miniaturized",
        "cost": 800,
        "weight": 15,
        "description": "",
        "group": "General"
    },
    {
        "name": "Kel Dor antiox filters (year's supply)",
        "cost": 200,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Lectroticker",
        "cost": 1500,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Liquid cable dispenser (15 meters)",
        "cost": 10,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Lock breaking kit",
        "cost": 8000,
        "weight": 4,
        "description": "",
        "group": "General"
    },
    {
        "name": "Man trap",
        "cost": 8000,
        "weight": 19,
        "description": "",
        "group": "General"
    },
    {
        "name": "Manual trigger",
        "cost": 100,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "MDS-50 medisensor",
        "cost": 75,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Mechanical interface visor",
        "cost": 1250,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Medical interface visor",
        "cost": 1500,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Medical kit",
        "cost": 600,
        "weight": 20,
        "description": "",
        "group": "General"
    },
    {
        "name": "Medical kit, miniaturized",
        "cost": 1100,
        "weight": 10,
        "description": "",
        "group": "General"
    },
    {
        "name": "Medpac",
        "cost": 100,
        "weight": 1,
        "description": "Heals 1d6 damage (DC 15 Treat Injury) or 2d6+LVL (DC 20).",
        "group": "General"
    },
    {
        "name": "Medpac, fastflesh",
        "cost": 600,
        "weight": 1,
        "description": "Heals as Medpac, but faster application.",
        "group": "General"
    },
    {
        "name": "Medical kit",
        "cost": 25,
        "weight": 1,
        "description": "Required for Treat Injury checks. No healing bonus.",
        "group": "General"
    },
    {
        "name": "Memory implant",
        "cost": 2000,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Mesh tape",
        "cost": 5,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Microlab",
        "cost": 1800,
        "weight": 0.8,
        "description": "",
        "group": "General"
    },
    {
        "name": "Motion sensing visor",
        "cost": 2500,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Nerve reinforcement implant",
        "cost": 5000,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Neural band",
        "cost": 3500,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Nightsister robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Ooglith Masquer",
        "cost": 0,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Panic ring",
        "cost": 300,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Personal field shelter",
        "cost": 500,
        "weight": 1.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Personal multitool",
        "cost": 100,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Personal translator",
        "cost": 2000,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Plasma bridge",
        "cost": 12500,
        "weight": 700,
        "description": "",
        "group": "General"
    },
    {
        "name": "Plastent",
        "cost": 300,
        "weight": 2.7,
        "description": "",
        "group": "General"
    },
    {
        "name": "Pocket scrambler",
        "cost": 400,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Portable beacon",
        "cost": 1500,
        "weight": 6.8,
        "description": "",
        "group": "General"
    },
    {
        "name": "Portable computer",
        "cost": 5000,
        "weight": 2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Power generator",
        "cost": 750,
        "weight": 15,
        "description": "",
        "group": "General"
    },
    {
        "name": "Power generator, miniaturized",
        "cost": 1250,
        "weight": 7.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Power pack",
        "cost": 25,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Power recharger",
        "cost": 100,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Propulsion Pack",
        "cost": 200,
        "weight": 10,
        "description": "",
        "group": "General"
    },
    {
        "name": "Proximity flare",
        "cost": 50,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Radiation detector",
        "cost": 20,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Ration pack",
        "cost": 5,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Redirection crystal",
        "cost": 500,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Regenerative implant",
        "cost": 4250,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Repulsor boots",
        "cost": 200,
        "weight": 2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Repulsor hitch",
        "cost": 100,
        "weight": 3,
        "description": "",
        "group": "General"
    },
    {
        "name": "Repulsor pad",
        "cost": 200,
        "weight": 6,
        "description": "",
        "group": "General"
    },
    {
        "name": "Restraining bolt",
        "cost": 5,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Riot shield",
        "cost": 500,
        "weight": 6,
        "description": "",
        "group": "General"
    },
    {
        "name": "Saddle, riding",
        "cost": 125,
        "weight": 4,
        "description": "",
        "group": "General"
    },
    {
        "name": "Saddle, war",
        "cost": 250,
        "weight": 6,
        "description": "",
        "group": "General"
    },
    {
        "name": "Security kit",
        "cost": 750,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Sensor pack",
        "cost": 1500,
        "weight": 9,
        "description": "",
        "group": "General"
    },
    {
        "name": "Sensor pack, miniaturized",
        "cost": 2000,
        "weight": 4.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Sensory implant",
        "cost": 2500,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Shield cage",
        "cost": 10000,
        "weight": 20,
        "description": "",
        "group": "General"
    },
    {
        "name": "Shipsuit",
        "cost": 200,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Signal wand",
        "cost": 300,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Silver robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Sith apprentice's robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Sith battle harness",
        "cost": 5000,
        "weight": 90,
        "description": "",
        "group": "General"
    },
    {
        "name": "Sith lord's robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Sith master's robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Sith robes",
        "cost": 0,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Sonar mapper",
        "cost": 400,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Sound sponge",
        "cost": 3500,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Spacer's chest",
        "cost": 200,
        "weight": 10,
        "description": "",
        "group": "General"
    },
    {
        "name": "Spy bug",
        "cost": 1300,
        "weight": 0.3,
        "description": "",
        "group": "General"
    },
    {
        "name": "Stealth field generator",
        "cost": 5000,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Subelectronic converter",
        "cost": 23000,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Subsonic field emitter",
        "cost": 120,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Surgery kit",
        "cost": 1000,
        "weight": 10,
        "description": "",
        "group": "General"
    },
    {
        "name": "Surveillance detector",
        "cost": 450,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Surveillance tagger",
        "cost": 450,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Syntherope (45 meters)",
        "cost": 20,
        "weight": 2.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Targeting beacon",
        "cost": 300,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Targeting scope, enhanced low light",
        "cost": 1000,
        "weight": 1.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Targeting scope, standard",
        "cost": 100,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Tool kit",
        "cost": 250,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Toxin detector",
        "cost": 700,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Transliterator",
        "cost": 100,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Triangulation visor",
        "cost": 1400,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Ubese breathing filter (year's supply)",
        "cost": 200,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Universal energy cage",
        "cost": 20000,
        "weight": 3000,
        "description": "",
        "group": "General"
    },
    {
        "name": "Utility belt",
        "cost": 70,
        "weight": 0.6,
        "description": "",
        "group": "General"
    },
    {
        "name": "Utility belt, miniaturized",
        "cost": 140,
        "weight": 0.3,
        "description": "",
        "group": "General"
    },
    {
        "name": "Vacuum mask",
        "cost": 650,
        "weight": 0.3,
        "description": "",
        "group": "General"
    },
    {
        "name": "Vacuum survival pouch",
        "cost": 800,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Veridicator",
        "cost": 4000,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Videorecorder",
        "cost": 50,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Vid-vox scrambler",
        "cost": 3400,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Visual wrist comm",
        "cost": 1300,
        "weight": 0.25,
        "description": "",
        "group": "General"
    },
    {
        "name": "Vox Box",
        "cost": 200,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Water extractor",
        "cost": 400,
        "weight": 3.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Ammo Clip",
        "cost": 15,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Ammunition Clip",
        "cost": 20,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Antiarmor Missile",
        "cost": 100,
        "weight": 2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Black-Powder Pistol Shot",
        "cost": 5,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Bowcaster Quiver",
        "cost": 50,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Carbonite Cartridge",
        "cost": 50,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Chemical Cartridge",
        "cost": 200,
        "weight": 4,
        "description": "",
        "group": "General"
    },
    {
        "name": "Crossbow Bolt",
        "cost": 20,
        "weight": 0.6,
        "description": "",
        "group": "General"
    },
    {
        "name": "Energy Cell",
        "cost": 10,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Flechette Cluster",
        "cost": 50,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Grenade, frag",
        "cost": 200,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Grenade, ion",
        "cost": 250,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Grenade, stun",
        "cost": 250,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Light Concussion Missile",
        "cost": 800,
        "weight": 10,
        "description": "",
        "group": "General"
    },
    {
        "name": "Magazine",
        "cost": 200,
        "weight": 5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Magna Caster Bolt",
        "cost": 10,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Missile",
        "cost": 75,
        "weight": 1.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Pistol Clip",
        "cost": 20,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Power Generator",
        "cost": 750,
        "weight": 15,
        "description": "",
        "group": "General"
    },
    {
        "name": "Power Pack",
        "cost": 25,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Quiver",
        "cost": 20,
        "weight": 0.8,
        "description": "",
        "group": "General"
    },
    {
        "name": "Rifle Clip",
        "cost": 40,
        "weight": 0.2,
        "description": "",
        "group": "General"
    },
    {
        "name": "Snare Pistol Cartridge",
        "cost": 25,
        "weight": 1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Special Energy Cell",
        "cost": 100,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Special Explosive Canister",
        "cost": 50,
        "weight": 0.5,
        "description": "",
        "group": "General"
    },
    {
        "name": "Spraymist Canister",
        "cost": 100,
        "weight": 0.1,
        "description": "",
        "group": "General"
    },
    {
        "name": "Verpine Shatter Gun Clip",
        "cost": 1000,
        "weight": 0,
        "description": "",
        "group": "General"
    },
    {
        "name": "Xerrol Nightstinger Gas Canister",
        "cost": 1000,
        "weight": 0,
        "description": "",
        "group": "General"
    }
];
