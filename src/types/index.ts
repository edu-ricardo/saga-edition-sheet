export interface Character {
  id?: string;
  name: string;
  species: string;
  classes: ClassLevel[];
  level: number;
  abilities: AbilityScores;
  defenses: Defenses;
  hp: number;
  credits: number;
  inventory: Item[];
  skills: string[]; // Trained skills
  feats: string[];
  talents: string[];
  forcePoints: number;
  destinyPoints: number;
  darkSideScore: number;
  condition: number; // 0=Normal, 1=-1, 2=-2, 3=-5, 4=-10, 5=Helpless
  userId: string;
  abilityBoosts?: Record<number, (keyof AbilityScores)[]>; // Level -> ['str', 'dex']
}

export interface ClassLevel {
  className: string;
  level: number;
}

export interface AbilityScores {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

export interface Defenses {
  fortitude: number;
  reflex: number;
  will: number;
}

export interface Species {
  name: string;
  abilityMods: Partial<AbilityScores>;
  size: string;
  speed: number;
  feats: string[]; // Conditional bonus feats
  languages: string[];
  traits: string[];
}

export interface Class {
  name: string;
  hpPerLevel: number;
  startHp: number; // 1st level HP (often max + con)
  startSkills: number; // Number of starting trained skills + Int mod
  classSkills: string[];
  startFeats: string[];
  defenseBonuses: Partial<Defenses>;
  talentTrees: string[];
  isPrestige?: boolean;
  prerequisites?: {
    level?: number;
    bab?: number;
    skills?: string[];
    feats?: string[];
    talents?: string[];
    darkSide?: boolean;
    classes?: string[];
  };
  babProgression: number;
}

export interface Skill {
  name: string;
  ability: keyof AbilityScores;
  useUntrained: boolean;
  armorCheckPenalty: boolean;
}

export interface Talent {
  name: string;
  tree: string;
  class: string;
  description: string;
  prerequisites?: string;
  source: string;
}

export interface Feat {
  name: string;
  description: string;
  prerequisites?: string;
  bonus?: boolean; // If it's a bonus feat for some class
}

export interface Item {
  name: string;
  weight: number;
  cost: number;
  quantity?: number;
  type?: string;
  description?: string;
  group?: string;
  damage?: string;
}

export interface Weapon extends Item {
  damage: string;
  stun?: boolean;
  rateOfFire?: string;
  type: string;
  size: string;
  range?: string;
  group: string;
}

export interface Armor extends Item {
  armorBonus: number;
  fortitudeBonus: number;
  maxDex: number;
  type: string;
  speed?: number;
}
