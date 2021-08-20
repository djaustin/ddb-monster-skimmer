export interface AccessType {
  17105: number;
  744296: number;
  16773: number;
  274505: number;
  16784: number;
  297941: number;
  16798: number;
  16799: number;
  296867: number;
  16805: number;
  17272: number;
  16810: number;
  93813: number;
  16816: number;
  287878: number;
  275578: number;
  299961: number;
  300476: number;
  16829: number;
  266107: number;
  94218: number;
  16848: number;
  97316: number;
  280311: number;
  782417: number;
  280317: number;
  301293: number;
  273355: number;
  17258: number;
  280395: number;
  16867: number;
  324275: number;
  17253: number;
  95451: number;
  552227: number;
  16889: number;
  17259: number;
  17260: number;
  17261: number;
  288133: number;
  297816: number;
  16913: number;
  17265: number;
  17185: number;
  273173: number;
  265945: number;
  299155: number;
  285442: number;
  16932: number;
  301790: number;
  1123099: number;
  265856: number;
  299704: number;
  299996: number;
  16939: number;
  288128: number;
  744321: number;
  319295: number;
  1528970: number;
  260964: number;
  16950: number;
  16951: number;
  280325: number;
  311747: number;
  274148: number;
  296528: number;
  1123113: number;
  430686: number;
  96519: number;
  16969: number;
  744326: number;
  782427: number;
  16972: number;
  17188: number;
  17189: number;
  299121: number;
  16974: number;
  301296: number;
  16983: number;
  262614: number;
  294525: number;
  1123119: number;
  1123120: number;
  16995: number;
  17196: number;
  16998: number;
  17002: number;
  280428: number;
  17007: number;
  296856: number;
  17236: number;
  297564: number;
  274473: number;
  581731: number;
  17256: number;
  280309: number;
  95296: number;
  280432: number;
  744340: number;
  17038: number;
}

export interface Pagination {
  take: number;
  skip: number;
  currentPage: number;
  pages: number;
  total: number;
}

export interface Stats {
  elapsedMilliseconds: number;
}

export interface ItemScore {
  id: string;
  score: number;
}

export interface MetaData {
  maxScore: number;
  itemScores: ItemScore[];
}

export interface Stat {
  statId: number;
  name?: any;
  value: number;
}

export interface Sens {
  senseId: number;
  notes: string;
}

export interface SavingThrow {
  statId: number;
  bonusModifier?: any;
}

export interface Skill {
  skillId: number;
  value: number;
  additionalBonus?: any;
}

export interface Language {
  languageId: number;
  notes: string;
}

export interface HitPointDice {
  diceCount: number;
  diceValue: number;
  diceMultiplier: number;
  fixedValue: number;
  diceString: string;
}

export interface Swarm {
  name: string;
  sizeId: number;
  typeId: number;
}

export interface Movement {
  movementId: number;
  speed: number;
  notes?: any;
}

export interface Monster {
  collectionUserId: number;
  isReleased: boolean;
  url: string;
  conditionImmunitiesHtml: string;
  sensesHtml: string;
  skillsHtml: string;
  stats: Stat[];
  senses: Sens[];
  savingThrows: SavingThrow[];
  skills: Skill[];
  languages: Language[];
  hitPointDice: HitPointDice;
  swarm: Swarm;
  movements: Movement[];
  homebrewStatus: number;
  id: number;
  entityTypeId: number;
  name: string;
  alignmentId: number;
  sizeId: number;
  typeId: number;
  armorClass: number;
  armorClassDescription: string;
  averageHitPoints: number;
  passivePerception: number;
  isHomebrew: boolean;
  challengeRatingId: number;
  sourceId: number;
  sourcePageNumber?: number;
  isLegendary: boolean;
  isMythic: boolean;
  hasLair: boolean;
  avatarUrl: string;
  largeAvatarUrl: string;
  basicAvatarUrl: string;
  version: string;
  subTypes: number[];
  environments: number[];
  tags: string[];
  sources: any[];
  damageAdjustments: number[];
  conditionImmunities: number[];
  specialTraitsDescription: string;
  actionsDescription: string;
  reactionsDescription: string;
  legendaryActionsDescription: string;
  mythicActionsDescription: string;
  bonusActionsDescription: string;
  characteristicsDescription: string;
  lairDescription: string;
  languageDescription: string;
  languageNote: string;
}

export interface MonsterApiResponse {
  accessType: AccessType;
  pagination: Pagination;
  stats: Stats;
  metaData: MetaData;
  data: Monster[];
}

export type ParsedMonster = Omit<
  Monster,
  "environments" | "challengeRatingId" | "entityTypeId"
> & {
  environments: string[];
  challengeRating: number;
  monsterType: string;
};
