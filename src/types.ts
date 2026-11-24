/** The six sections drawn on the blueprint, in navigation order. */
export const ZONE_KEYS = ['about', 'experience', 'projects', 'education', 'skills', 'contact'] as const;
export type ZoneKey = (typeof ZONE_KEYS)[number];

/** Rise height preset of a zone block (72, 52 or 96 px — see `RISE` in `three/BlueprintScene.ts`). */
export type ZoneHeight = 'a' | 'b' | 'c';

/** Position and size of a zone on the 900 × 600 blueprint plane, in px. */
export interface ZoneRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface ZoneMeta {
  key: ZoneKey;
  title: string;
  short: string;
  abbr: string;
  label: string;
  tipTitle: string;
  tipSub: string;
  rect: ZoneRect;
  height: ZoneHeight;
  introDelay: number;
}

export interface Role {
  role: string;
  company: string;
  dates: string;
  points: string[];
  tags: string[];
}

export interface Education {
  institution: string;
  qualification: string;
  period: string;
}

export interface Credential {
  title: string;
  kind: string;
}

export interface Project {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  repository: string;
  note?: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Fact {
  k: string;
  v: string;
}

export interface ContactLink {
  k: string;
  v: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  site: string;
  email: string;
  location: string;
  intro: string;
  bio: string;
  facts: Fact[];
  linkedin: string;
  github: string;
}
