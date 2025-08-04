export const RoleSkills = {
  Rockerboy: "Charismtatic Impact",
  Solo: "Combat Awareness",
  Netrunner: "Interface",
  Tech: "Maker",
  Medtech: "Medicine",
  Media: "Credibility",
  Exec: "Teamwork",
  Lawman: "Backup",
  Fixer: "Operator",
  Nomad: "Moto",
} as const;

export type RoleSkill = (typeof RoleSkills)[keyof typeof RoleSkills];
